var name = prompt('What is your name?', 'Testo');	

var mylist = [];

mylist.push('Daniel', 'Osvaldo', name);

name = "";

mylist.unshift("Hola ");

$(document).ready(function() {
								while (mylist.length) {
									name += " " + mylist.pop();	
								}
								
								$('#hola').text(name);
								
								$('#hola').text($('#hola').text() + "\r" + mylist.length)
								
								var today = new Date().toDateString();
								
								$('textarea').text($('#hola').text() + "\r" + today);
								
								$('#hola1').fadeOut(1000).text("");
								
								$('ul a').hover(function() {  
																			$('#hola1').text($(this).text());
																			$('#hola1').fadeIn(500); 
																		 },
															  function() { 	$('#hola1').fadeOut(1000); }
														     );
								$('ul a').attr('target','_blank');															 
																			 
								
							 });
							 

						