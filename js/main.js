// show list (in hamburger) Menu

const hamburger = document.getElementById('hamburger');
const navigation = document.getElementById('navigation');
const link = document.querySelectorAll('.nav__link');

hamburger.addEventListener('click', () => {
  navigation.classList.toggle('show');
});

// hide list (in hamburger) Menu

link.forEach((a) => {
  a.addEventListener('click', () => {
    navigation.classList.toggle('show');
  });
});



// Click Outside - Close One Popup Box

// window.addEventListener('mouseup', function(event) {

//   let box = document.getElementById('navigation');

//   if (event.target != box) {
//     box.style.display = 'none';
//   } 

// });


// Click Outside - Closes Many Popup Boxes

// let boxArray = ['popup', 'navi-toggle'];

// window.addEventListener('mouseup', function(event) {

//   for(let i=0; i < boxArray.length; i++) {

//     let box = document.getElementById(boxArray[i]);

//     if (event.target != box && event.target.parentNode != box) {
//       box.style.display = 'none';
//     } 
//   }

// });


// animate on scroll

