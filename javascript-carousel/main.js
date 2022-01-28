var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var counter = 0;

var leftButton = document.querySelector('.left-nav');
var rightButton = document.querySelector('.right-nav');
var image = document.querySelector('#image');

var button1 = document.querySelector('#button0');
var button2 = document.querySelector('#button1');
var button3 = document.querySelector('#button2');
var button4 = document.querySelector('#button3');
var button5 = document.querySelector('#button4');

leftButton.addEventListener('click', leftNavigation, false);
rightButton.addEventListener('click', rightNavigation, false);
button1.addEventListener('click', circleNavigation, false);
button2.addEventListener('click', circleNavigation, false);
button3.addEventListener('click', circleNavigation, false);
button4.addEventListener('click', circleNavigation, false);
button5.addEventListener('click', circleNavigation, false);

function circleNavigation(event) {
  var clicked = event.target;
  var previousCounter = counter;
  var previousId = 'button' + previousCounter;
  counter = parseInt(clicked.id.slice(-1));
  image.src = images[counter];
  clicked.setAttribute('class', 'fas fa-circle circle');
  var previousButton = document.getElementById(previousId);
  previousButton.setAttribute('class', 'far fa-circle circle');

  clearInterval(myInterval);
  myInterval = setInterval(update, 3000);

}

function leftNavigation() {
  var previousCounter = counter;
  var previousId = 'button' + previousCounter;
  if (counter === 0) {
    counter = 4;
  } else {
    counter -= 1;
  }
  var currentId = 'button' + counter;

  image.src = images[counter];
  var currentButton = document.getElementById(currentId);
  currentButton.setAttribute('class', 'fas fa-circle circle');
  var previousButton = document.getElementById(previousId);
  previousButton.setAttribute('class', 'far fa-circle circle');

  clearInterval(myInterval);
  myInterval = setInterval(update, 3000);

}

function rightNavigation() {
  var previousCounter = counter;
  var previousId = 'button' + previousCounter;
  if (counter === 4) {
    counter = 0;
  } else {
    counter += 1;
  }
  var currentId = 'button' + counter;

  image.src = images[counter];
  var currentButton = document.getElementById(currentId);
  currentButton.setAttribute('class', 'fas fa-circle circle');
  var previousButton = document.getElementById(previousId);
  previousButton.setAttribute('class', 'far fa-circle circle');

  clearInterval(myInterval);
  myInterval = setInterval(update, 3000);

}

function update() {
  var previousCounter = counter;
  var previousId = 'button' + previousCounter;
  if (counter === 4) {
    counter = 0;
  } else {
    counter += 1;
  }

  var currentId = 'button' + counter;

  image.src = images[counter];
  var currentButton = document.getElementById(currentId);
  currentButton.setAttribute('class', 'fas fa-circle circle');
  var previousButton = document.getElementById(previousId);
  previousButton.setAttribute('class', 'far fa-circle circle');

}

var myInterval = setInterval(update, 3000);
