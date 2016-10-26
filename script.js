var leftButton = document.getElementsByClassName("left-button")[0];
var rightButton = document.getElementsByClassName("right-button")[0];

var blue = document.getElementsByClassName("group1")[0];
var red = document.getElementsByClassName("group2")[0];
var green = document.getElementsByClassName("group3")[0];

var leftCount = 1;
var rightCount = 1;

function left() {
  
  if (leftCount === 1) {
    blue.style.display = "none";
    red.style.display = "none";
    green.style.display = "inline-block";
    rightCount += 2;
    return leftCount++;
  }
    
  if (leftCount === 2) {
    green.style.display = "none";
    blue.style.display = "none";
    red.style.display = "inline-block";
    rightCount--;
    return leftCount++;
  }

  if (leftCount === 3) {
    red.style.display = "none";
    green.style.display = "none";
    blue.style.display = "inline-block";
    rightCount--;
    return leftCount -= 2;
  }
};

leftButton.addEventListener("click", left);

function right() {
  
  if (rightCount === 1) {
    blue.style.display = "none";
    green.style.display = "none";
    red.style.display = "inline-block";
    leftCount += 2;
    return rightCount++;
  }
    
  if (rightCount === 2) {
    red.style.display = "none";
    blue.style.display = "none";
    green.style.display = "inline-block";
    leftCount--;
    return rightCount++;
  }

  if (rightCount === 3) {
    green.style.display = "none";
    red.style.display = "none";
    blue.style.display = "inline-block";
    leftCount--;
    return rightCount -= 2;
  }
};

rightButton.addEventListener("click", right);