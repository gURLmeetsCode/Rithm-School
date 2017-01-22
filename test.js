$(document).ready(function(){
    console.log("Lets get ready to party with jQuery!")
//Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).

$('article img').addClass("image-center");

//Remove the last paragraph in the article.

$("article p").last().remove();

//Set the font size of the title to be a random pixel size from 0 to 100.
$("#title").css({"fontSize": Math.random()*100});

//Add an item to the list; it can say whatever you want.

$("ol").append('<li><a href="www.somelink.com"></a></li>')

//Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list's existence.

$('aside').empty().append('<p>Sorry for the last list</p>')

//When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.

$('.form-control').on('keypress', function(){
var red = $('.form-control').eq(0).val()
var blue = $('.form-control').eq(1).val()
var green = $('.form-control').eq(2).val()

$('body').css('background-color', `rgb(${red}, ${blue}, ${green})`

})

//Add an event listener so that when you click on the image, it is removed from the DOM.
$('img').('click', function(event){
	$(event.target).remove()
})

  });
  
 
