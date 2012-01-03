
$(document).ready(function() {
	
	/*Pre Requisites*/
	
	// Initialising the window.IndexedDB Object
	window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB;
	window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;
	window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction;
	var DAO = {};
	
	DAO.newTransactionObjectStore = function(){
	    try {
	      var transaction = DAO.db.transaction(["BookList2"], IDBTransaction.READ_WRITE);
	      
	      transaction.oncomplete = function(e){
	        //delete DAO.objectStore;
	        console.log("===== Transaction Complete");
	      };
	      
	      transaction.onabort = function(e){
	        console.log("===== Transaction Aborted");
	      };
	      
	      DAO.objectStore = transaction.objectStore("BookList2");
	      console.log("==== New Transaction", DAO.objectStore);
	    }
	    catch (e) {
	      write("Could not open objectStore. You may have to create it first");
	      writeError(e);
	    }
	};	
	

	/*Open Database*/

	console.log("Trying to open database ...");
	var request = window.indexedDB.open("BookShop2");

	request.onsuccess = function(event) {
		DAO.db = request.result;
		console.log("Database Opened ", DAO.db);

		DAO.db.onversionchange = function() {
			console.log("Version change request, so closing the database");
			DAO.db.close();
			delete DAO.db;
		};
	};
	
	request.onerror = function(e){
	  writeError(e);
	};
	
	/*Create Object store*/
	$('#createOS').click(function () { 	
	  
	  var request = DAO.db.setVersion(parseInt(Math.random() * 100));
	  
	  request.onsuccess = function(e){
	    console.log("Version changed to ", DAO.db.version, ", so trying to create a database now.");
	    DAO.objectStore = DAO.db.createObjectStore("BookList2", {
	      "keyPath": "id",
	      "autoIncrement": true
	    }, true);
	    console.log("Object store created: ", DAO.objectStore);
	  };
	  
	  request.onerror = function(e){
	    console.log("Could not set the version, so cannot create database", e);
	  };
	  
	  request.onblocked = function(e){
	    console.log("The database is open in another tab. Please close that tab");
	  };
  	});
  	
	$('#savedata').click(function () { 	
		
		/*Save Data*/
		
		var data = {
		  "bookName": "Book-" + Math.random(),
		  "author": "asdasd",
		  "price": parseInt(Math.random() * 1000),
		  "rating": (Math.random() > 0.5 ? "good" : "bad"),
		  "id": new Date().getTime()
		};
		
 		DAO.newTransactionObjectStore();
  
  		console.log("Trying to save...", data);
  		var request = DAO.objectStore.add(data);
  
  		request.onsuccess = function(event){
		    console.log("Saved id ", request.result);
		    DAO.objectId = request.result;
		};
  
  		request.onerror = function(e){
    		writeError(e);
    		DAO.transaction.abort();
  		};
	
	});
	
	$('#getdata').click(function () {	
		
		DAO.newTransactionObjectStore();
		
		console.log("Trying to get the last saved object using saved example with id ", DAO.objectId);
		var request = DAO.objectStore.get(1324080993609);
		 
		request.onsuccess = function(event){
			console.log("Got data ", request.result);
			DAO.objectId = request.result.id;
		};
		 
		request.onerror = function(e){
		    console.log("Could not get object");
		    writeError(e);
		};
	});
	
});
							 

						