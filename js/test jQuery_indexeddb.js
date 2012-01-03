book1 = {
	"title": "Real World Haskell",
	"price": 49.95,
	"price_can": 49.95,
	"authors": [
		"Bryan O'Sullivan",
		"John Goerzen",
		"Don Stewart"
		],
	"cover_animal": "Rhinocerus Beetle",
	"cover_url": "http://....",
	"topics": ["Haskell"]
}

var write = function(db) {
	
	$("#lista").add("<li><h3>" + db.id + "</h3></li>");
	$("#lista").listview('refresh');
	console.log("Database Opened ", db);
};

var err = function(db) {
	console.log("An error ocurred..", db);

};	

$(document).ready(function() {
	
	/*Create\Open Database*/
	$('#openDB').click(function () {
		
		/*
		console.log("Trying to open database ...");
		var request = $.indexeddb("BookShop2")
							.objectStore("BookList2")
							.get(1324080993609)
							.then(write, err);
		*/
		
		console.log("Trying to open database ...");
		var request = $.indexeddb("BookShop2")
							.objectStore("BookList2")
							.index("id")
							.openCursor()
							.each(write, err);
							
									
	
	});
	
});
							 

						