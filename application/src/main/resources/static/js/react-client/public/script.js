const square = document.createElement('div');
const box = document.querySelector('#box');
const reset = document.querySelector('#reset');
const redColor = document.querySelector('#red');
const orangeColor = document.querySelector('#orange');
const yellowColor = document.querySelector('#yellow');
const greenColor = document.querySelector('#green');
const blueColor = document.querySelector('#blue');
const purpleColor = document.querySelector('#purple');
const blackColor = document.querySelector('#black');
const whiteColor = document.querySelector('#white');
const brownColor = document.querySelector('#brown');
const grayColor = document.querySelector('#gray');

square.style.background = '#fff';

window.addEventListener('load', function() {
  loadBox();
});

box.addEventListener('click', function(e) {
  e.target.style.background = 'black';
});

reset.addEventListener('click', function() {
  while (box.firstChild) {
    box.removeChild(box.firstChild);
  }
  loadBox();
});

function loadBox() {
  for (i = 0; i < 625; i++) {
    box.appendChild(square.cloneNode(true));
  }
}

function changeColor(color) {
  box.addEventListener('click', function(e) {
    e.target.style.background = color;
  });
}

redColor.addEventListener('click', function(e) {
  changeColor('red');
});

orangeColor.addEventListener('click', function(e) {
  changeColor('orange');
});

yellowColor.addEventListener('click', function(e) {
  changeColor('yellow');
});

greenColor.addEventListener('click', function(e) {
  changeColor('green');
});

blueColor.addEventListener('click', function(e) {
  changeColor('blue');
});

purpleColor.addEventListener('click', function(e) {
  changeColor('purple');
});

blackColor.addEventListener('click', function(e) {
  changeColor('black');
});

whiteColor.addEventListener('click', function(e) {
  changeColor('white');
});

brownColor.addEventListener('click', function(e) {
  changeColor('brown');
});

grayColor.addEventListener('click', function(e) {
  changeColor('gray');
});