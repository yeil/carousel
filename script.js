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

var count = 1;
var hiddenCount = 0;

function resize() {
  
  var widthDiff = originalWidth - window.innerWidth;
  
  if (widthDiff > 102 * count) {
    var threshold = window.innerWidth;
    slides[num - count].classList.remove('visible');
    hiddenCount++;
    count++;
  }

  if (window.innerWidth > threshold) {
    console.log('a');
    for (var j = 0; j < hiddenCount; i++) {
      slides[num - j].classList.add('visible');
    }
  }
  
}