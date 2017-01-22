$(document).ready(function(){
	$('form').on('submit', function(event){
		event.preventDefault();

	var clickVal = $('#userText').val();
	$.getJSON('https://www.omdbapi.com?t=' + clickVal).then(function(data){
		$('#Title').append("Title: " +data.Title)
		$('#Year').append("Year: " +data.Year)
		$('#Plot').append("Plot: " +data.Plot)
      	$("#img-location").append('<img src= " ' + data.Poster + '">');
});
	});
	
});
$( "button" ).click(function() {
  	$( "#userText, #img-location ,#Title, #Year, #Plot" ).empty();
	})
	
