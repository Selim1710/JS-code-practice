////////////////////////     navbar      ////////////////////////
let marker = document.querySelector(".marker");
let item = document.querySelectorAll("nav a");

function indicator(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

item.forEach((link) => {
  link.addEventListener("click", (e) => {
    indicator(e.target);
  });
});

////////////////////////     Animated Smoke Test      ////////////////////////
window.onload = function () {
  // split text into letters
  var text = document.querySelector('.smokeText');
  text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

  // now active class on hovered <span> tag
  const letters = document.querySelectorAll('span');

  for (let i=0; i<letters.length; i++) {
    letters[i].addEventListener("mouseover",function(){
      letters[i].classList.add('active')
    })
  }
}