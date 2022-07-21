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

////////////////////////     end-navbar      ////////////////////////

// arrar short()
let elements = ['bananna', 'apple', 'cat', 'mouse', 'cannon'];
elements.sort();
document.getElementById('array-2').innerHTML = elements;

// JavaScript Math

let value = 5.5;

document.getElementById('round_vlaue').innerHTML = Math.round(value);
document.getElementById('floor_vlaue').innerHTML = Math.floor(value);
document.getElementById('ceil_value').innerHTML = Math.ceil(value);


////////////////////////     button-1        ////////////////////////