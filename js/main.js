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


// Animate on scroll 

const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
  threshold: 0.25,
  rootMargin: "0px" 
 };

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {

    entries.forEach(entry=> {

      if (!entry.isIntersecting) {
        
        return;

      } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      }

    });

  }, appearOptions);

sliders.forEach(slider=> {
  appearOnScroll.observe(slider);
});

//root: null, // viewport

// threshold: 0.25, // okida animaciju kada je 25% polja ucitano

// rootMargin: "0px 0px -200px 0px" - visina od vrha ekrana/viewport-a do mesta gde zelis da okine animacija - rootMargin vrednost mora biti u pikselima  





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

