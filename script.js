var leftButton = document.getElementsByClassName("left-button")[0];
var rightButton = document.getElementsByClassName("right-button")[0];

var parentSlide = document.getElementsByClassName("carousel-slides")[0];
var slides = document.getElementsByClassName("carousel-slide");

var originalWidth = window.innerWidth;
var num = Math.floor((window.innerWidth - 200)/102);

for (var i = 0; i < num; i++) {
  parentSlide.insertAdjacentHTML('beforeend', '<div class="carousel-slide visible" style="background-image: url(https://placeholdit.imgix.net/~text?txtsize=33&txt=' + i + '&w=100&h=200)"></div>')
}

function move(left) {

  if(left) {
    parentSlide.insertBefore(parentSlide.lastElementChild, parentSlide.firstElementChild);
  } else {
    parentSlide.appendChild(parentSlide.firstElementChild);
  }

};

leftButton.addEventListener("click", function(){move(true)});
rightButton.addEventListener("click", function(){move(false)});


window.onresize = resize;

function resize() {
  
  for (var j = 0; j < num; j++) {
    slides[0].parentNode.removeChild(slides[0]);
  }

  num = Math.floor((window.innerWidth - 200)/102);

  for (var k = 0; k < num; k++) {
    parentSlide.insertAdjacentHTML('beforeend', '<div class="carousel-slide visible" style="background-image: url(https://placeholdit.imgix.net/~text?txtsize=33&txt=' + k + '&w=100&h=200)"></div>')
  }
  
}