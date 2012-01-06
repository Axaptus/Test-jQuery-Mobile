$(document).ready(function() {

    $("#slLists").click(function() {
        $.mobile.changePage("#slListsPage", {changeHash:true, transition:"slide"});
        return false;
    });

    // Initialize the list view
    //$("#listHome").listview();
    $("#slAddListItem").click(function() {

            var idText = Math.random();
            // Initialize the list view
            //$("#listHome").listview();

            $("#listHome").append("<li><a href='#' id='slExit'" + idText + ">Salir " + idText + "</a></li>").listview("refresh");
    });


});