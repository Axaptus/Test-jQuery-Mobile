var name = prompt('What is your name?', 'Testo');	

var mylist = [];

mylist.push('Daniel', 'Osvaldo', name);

name = "";

mylist.unshift("Hola ");

$(document).ready(function() {
								$('a').click( function() { 	var url = $(this).attr('href');
																$('#photos').load(url);
																return false;
														    }
											);
											
								var URL = "http://api.flickr.com/services/feeds/photos_public.gne";
								var ID = "25053835@N03";
								var jsonFormat = "&format=json&jsoncallback=?";
								var ajaxURL = URL + "?id=" + ID + jsonFormat;
								
								$.getJSON(ajaxURL, function(data) {
									
									$('h1').text(data.title);
									
									$.each(data.items,function(i,photo) {
										var photoHTML = '<span class="image">';
										photoHTML += '<a href="' + photo.link + '">';
										photoHTML += 	'<img src="' + 
														photo.media.m.replace('_m','_s') 
														+ '" title="' +
														photo.title
														+'"></a>';
										$('#photos').append(photoHTML);

									}); // end each
								}); // end get JSON
								
								
							 });
							 

						