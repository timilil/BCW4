'use strict';
// select buttons
const addButton = document.querySelector('#add')
const changeButton = document.querySelector('#change');
const toggleButton = document.querySelector('#toggle');

//select p elements
const firstp = document.querySelector('p');

const secondp = document.querySelector('p:nth-child(2)');

const thirdp = document.querySelector('p:nth-child(3)');
//create evenListeners

addButton.addEventListener('click', (evt) => {
  firstp.classList.add('red')
});

changeButton.addEventListener('click', (evt) => {
  //if secondP contains class red
  if (secondp.classList.contains('red')){
    //replace it with 'blue'
    secondp.classList.replace('red','blue')
  }
  //else
  else {
    //replace with 'red'
    secondp.classList.replace('blue','red')
  }
});

toggleButton.addEventListener('click', (evt) => {
  thirdp.classList.toggle('green')
});