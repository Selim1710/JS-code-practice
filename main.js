////////////////////////     nav-1      ////////////////////////
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

////////////////////////     notice-2      ////////////////////////
var p = $('.par');
var animator = $('<span class="anim"></span>');
var hidden = $('<span class="hid"></span>')
var textLength = p.text().length;
var offset = 0;

function animate(letter_position) {
  var text = p.text();
  p.text('');
  var textBefore = text.substring(0, letter_position - 1);
  var textAfter = text.substring(letter_position, textLength);
  var letter = text.substr(letter_position - 1, 1);
  animator.text(letter);
  hidden.text(textAfter);
  p.append(textBefore);
  p.append(animator);
  p.append(hidden);
}

var interval = setInterval(function () {
  if (p.hasClass('hid')) p.removeClass('hid');
  if (offset - 2 === textLength) {
    clearInterval(interval);
    p.children('.anim').remove();
    p.children('.hid').remove();
    return;
  }
  animate(offset);
  offset++;
}, 100);


////////////////////////     Animated Smoke Test      ////////////////////////
window.onload = function () {
  // split text into letters
  var text = document.querySelector('.smokeText');
  text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

  // now active class on hovered <span> tag
  const letters = document.querySelectorAll('span');

  for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener("mouseover", function () {
      letters[i].classList.add('active')
    })
  }
}