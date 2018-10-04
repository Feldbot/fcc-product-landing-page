const submitEmail = ( () => {
  console.log('shimpdip');
  // window.open("https://www.freecodecamp.com/email-submit");
});

// Shrink navbar handler - see Notes 1, 2, 3
window.onscroll = ( () => { resizeHeader() });

// Shrink navbar on scroll
const logo = document.getElementById('header-img');
const navbar = document.getElementById('nav-bar');
const ul = document.querySelector('#nav-bar ul');
const navbarBottom = 200;
let size = 0;

const resizeHeader = ( () => {
  let scroll = window.pageYOffset ||
               document.documentElement.scrollTop ||
               document.body.scrollTop ||
               0;

  // If scroll has happened
  if (size === 0 && scroll > navbarBottom) {
    logo.className = 'logo-sm';
    navbar.style.height = '140px';
    ul.style.marginTop = '85px';
    size = 1;

  // If no scroll has happened 
  } else if (size === 1 && scroll <= navbarBottom) {
    logo.className = 'logo-lg';
    navbar.style.height = '225px';
    ul.style.marginTop = '170px';
    size = 0;
  }
});

// FAQ accordion - see Notes 4)
const accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/***** Notes *****
1) Shrinking navbar code modified from:
   https://stackoverflow.com/questions/42460930/how-to-resize-navbar-logo-on-scroll-down
   https://jsfiddle.net/yxq1rgzo/7/
2) If scrolling goes beyond N px of top it applies
   Boolean flag and element class for size (lg or sm) and scales accordingly. The flag prevents the css from being called until it reaches the border.
3) For transition animation to be smooth, values must
   be a consistent type (i.e., can't use auto and px for image size)
4) Accordion code modified from:
   https://www.w3schools.com/howto/howto_js_accordion.asp
   - this = button element
   - this.classList = a collection of class attributes of element
   - this.nextElementSibling = panel  // child of button
   - if their is a maxHeight attribute on the panel, set it to 0
   - else assign panel.scrollHeight + "px" to the panel
   - The maxHeight attribute is added and removed on click
*/
