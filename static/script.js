window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//back to top
var btt=document.getElementById("name"),
    body=document.body,
    docElem=document.documentElement;
btt.addEventListener("click", function(event){
    event.preventDefault();
    docElem.scrollTop=0;
});

//fade in's

var height=screen.height;
    $(function(){
      var element = $('#fade-in-picture1');
      element.hide();
      $(window).scroll(function () {
        if ($(this).scrollTop() > .5*height) {
          element.fadeIn(1000);
        }
        else {
          element.fadeOut();
        }
       });
    })

    $(function(){
      var element = $('#fade-in-text1');
      element.hide();
      $(window).scroll(function () {
        if ($(this).scrollTop() > .5*height) {
          element.fadeIn(700);
        }
        else {
          element.fadeOut();
        }
       });
    })
    

    $(function(){
        var element=$('#fade-in-picture2');
        element.hide();
        $(window).scroll(function(){
            if ($(this).scrollTop()>1.2*height){
                element.fadeIn(1000);
            }
            else{
                element.fadeOut();
            }
        });
    })
    
    $(function(){
        var element=$('#fade-in-text2');
        element.hide();
        $(window).scroll(function(){
            if ($(this).scrollTop()>1.2*height){
                element.fadeIn(700);
            }
            else{
                element.fadeOut();
            }
        });
    })