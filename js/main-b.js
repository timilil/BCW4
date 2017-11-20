'use strict';
// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array:
/*
 <li>
 <figure>
 <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
 <figcaption>
 <h3>Title</h3>
 </figcaption>
 </figure>
 </li>
 */
// After the loop print the HTML into <ul> element using innerHTML.
const showImages = () => {
  const ul = document.querySelector('ul');

  fetch('images.json').then((response) => {
    return response.json();
  }).then((json) => {
    let html = '';
    json.forEach((image) => {
      html +=
          `<li>
          <figure>
            <a href="img/original/${image.mediaUrl}"><img src="img/thumbs/${image.mediaThumb}"></a>
            <figcaption>
                <h3>${image.mediaTitle}</h3>
            </figcaption>
          </figure>
        </li>`;
    });
    ul.innerHTML = html;
    //now links can be selected
    linkActions();

  });
};

showImages();

const linkActions = () => {
  //select all a elements inside ul
  const a = document.querySelectorAll('ul a');
  //loop links
  a.forEach((evt) => {
    //when link is clicked
    evt.addEventListener('click', (event) => {
      //prevent default action
      event.preventDefault();

      //get href value of link
      //set modal image src to href value
      const modal = document.getElementById('modal');
      const image = modal.querySelector('img');
      image.setAttribute('src', event.target.parentElement.getAttribute('href'));
      //display modal (use lightbox class)
      //replace
      modal.classList.replace('hidden', 'lightbox');
    });
  });
};
//select close button of modal
const close = document.querySelector('#close')
//when close button is clicked hide modal
close.addEventListener('click', (evt) => {
  //replace to hidden
  modal.classList.replace('lightbox', 'hidden');
});





