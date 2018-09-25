////slider code
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var list = document.getElementById("slidMenu").getElementsByTagName("li");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < list.length; i++) {
    list[i].className = list[i].className.replace("active_setting", "");
  }



  list[slideIndex - 1].className = "active_setting";

  slides[slideIndex - 1].style.display = "block";
}






















