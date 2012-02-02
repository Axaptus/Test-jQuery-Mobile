$(document).ready(function() {

   	var toggle = true;
       	
    // $("#slLists").click(function() {
        // $.mobile.changePage("#slABM", {changeHash:true, transition:"slide"});
        // return false;
    // });

    $("#slAddListItem1").click(function() {

            //var idText = Math.random();
            // Initialize the list view
            //$("#listHome").listview();

            //$("#listHome").append("<li><a href='#' id='slExit'" + idText + ">Salir " + idText + "</a></li>").listview("refresh");
            
       	//var mySlider = $("#slider-music");

		// Disable a slider
		//mySlider.slider('disable');
		// Enable a slider
		//mySlider.slider("enable");
		// Manually flip a slider and update its UI state
		// (just flipping it will not automatically update the UI)
		//mySlider[0].selectedIndex = !mySlider[0].selectedIndex;
		//toggle = !toggle;
		//mySlider.slider("refresh");
		
		$.mobile.silentScroll(500);
    });
    
 

});