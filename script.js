
document.addEventListener('DOMContentLoaded', function() {
  var slides = document.querySelectorAll('.slide');
  var currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  showSlide(currentSlide);

  setInterval(function() {
    showSlide(currentSlide + 1);
  }, 3000);
});


var bar =document.getElementById('bar');
var close =document.getElementById('close');
var nav =document.getElementById('navbar');
if(bar){
  bar.addEventListener('click',()=>{
    nav.classList.add('active')
  })
}
if(close){
  close.addEventListener('click',()=>{
    nav.classList.remove('active')
  })
}

var MainImg =document.getElementById("MainImg");
var smallimg =document.getElementsByClassName("small-img")
smallimg[0].onclick=function(){
  MainImg[0].src=smallimg[0].src;
}
smallimg[1].onclick=function(){
  MainImg.src=smallimg[1].src;
}
smallimg[2].onclick=function(){
  MainImg.src=smallimg[2].src;
}
smallimg[3].onclick=function(){
  MainImg.src=smallimg[3].src;
}

