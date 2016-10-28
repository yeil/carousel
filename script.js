var leftButton = document.getElementsByClassName("left-button")[0];
var rightButton = document.getElementsByClassName("right-button")[0];

var parentSlide = document.getElementsByClassName("carousel-slides")[0];
var slides = document.getElementsByClassName("carousel-slide");

function move(left) {

  if(left) {
    parentSlide.insertBefore(parentSlide.lastElementChild, parentSlide.firstElementChild);
    parentSlide.firstElementChild.classList.add('visible');
    slides[8].classList.remove('visible');
  } else {
    slides[8].classList.add('visible');
    parentSlide.firstElementChild.classList.remove('visible');
    parentSlide.appendChild(parentSlide.firstElementChild);
  }

};

leftButton.addEventListener("click", function(){move(true)});
rightButton.addEventListener("click", function(){move(false)});