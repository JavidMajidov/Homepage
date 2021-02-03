let myNavbar = document.querySelector("#navbar");

window.addEventListener("scroll", function () {
  if ( window.pageYOffset > 600 ) {
    myNavbar.classList.add("active");
   };
   
});