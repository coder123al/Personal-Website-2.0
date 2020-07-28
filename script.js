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