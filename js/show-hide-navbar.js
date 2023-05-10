//src:https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
//src:https://developer.mozilla.org/es/docs/Web/API/Element/animate

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  const header = document.querySelector("header");
  if (prevScrollpos > currentScrollPos) {
    header.style.position = "sticky";
    header.style.display = "inherited";
    header.style.top = "0";
    header.animate([
        {transform: 'translateY(-90px)'},
        {transform: 'translateY(0px)' }
    ], {
        duration: 250,
    });
  } else {
    header.style.position = "relative";
  }
  prevScrollpos = currentScrollPos;
}