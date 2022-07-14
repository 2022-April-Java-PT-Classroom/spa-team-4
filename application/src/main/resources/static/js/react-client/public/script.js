const square = document.createElement('div');
const box = document.querySelector('#box');

square.style.background = '#fff';

window.addEventListener('load', function() {
  for (i = 0; i < 625; i++) {
    cloneSquare();
  }
});

box.addEventListener('click', function(e) {
  e.target.style.background = 'black';
});

function cloneSquare() {
  box.appendChild(square.cloneNode(true));
}