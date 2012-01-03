var dbName          = "BookShop";
var objectStoreName = "BookList";

book1 = {
    //"id":1,
    "title":"Real World Haskell",
    "price":49.95,
    "price_can":49.95,
    /*"authors":[
        "Bryan O'Sullivan",
        "John Goerzen",
        "Don Stewart"
    ],*/
    "cover_animal":"Rhinocerus Beetle",
    "cover_url":"http://...."//,
    //"topics":["Haskell"]
};

var write = function(db) {

	//$("#lista").add("<li><h3>" + db.id + "</h3></li>");
	//$("#lista").listview('refresh');
	console.log("Database Opened ", db);
};

var err = function(db) {
	console.log("An error ocurred..", db);

};

$(document).ready(function() {

	/*Create\Open Database*/
	$('#openDB').click(function () {

		console.log("Trying to open/create database ...");
		$.indexeddb(dbName)
            .objectStore(objectStoreName)
            .then(write, err);
	});


    $('#createOS').click(function () {

        console.log("Trying to open/create Object Store ...");
        $.indexeddb(dbName)
            .objectStore(objectStoreName/*, false*/)/* {
                                                    "keyPath": "id",
                                                    "autoIncrement": true
                                                    })*/
            .then(write, err);
    });

    $("#deleteOS").click(function () {

        console.log("Trying to delete Object Store ...");
        $.indexeddb(dbName)
            .deleteObjectStore(objectStoreName, false)
            .then(write, err);
    });

    $("#savedata").click(function () {

        console.log("Trying to save data ...");
        $.indexeddb(dbName)
            .objectStore(objectStoreName)
            .add(book1)
            .then(write, err);
    });

    $("#getdata").click(function () {

        console.log("Trying to get data ...");
       $.indexeddb(dbName)
         .objectStore(objectStoreName)
         .index("id")
         .openCursor()
         .each(write, err);
    });
});


