let btnOption = document.querySelector("#option");
let navSlide = document.querySelector("#slide");

window.onload = function () {
  return removeClass();
};

var count = false;

btnOption.onclick = () => {
  if (!count) {
    navSlide.classList.add("nav-slide");
    count = true;
  } else {
    count = false;
    removeClass();
  }
};

var outsideBar = true;
function effectSlide(e) {
  var btn = btnOption.contains(e.target);
  var nav = navSlide.contains(e.target);

  if (!btn) {
    outsideBar = true;
    if (outsideBar && !nav) {
      removeClass();
      count = false;
      outsideBar = false;
    } else {
      count = true;
      outsideBar = true;
    }
  }
}

function removeClass() {
  return navSlide.classList.remove("nav-slide");
}

const base = "home?option=";
const quantityBase = "&&quantity=";

const pagebase = "&&page=1";

var dropdown = document.querySelectorAll(".dropdown-content a");
var quantity = document.querySelector(".txt-quantity");

function mntLink(e) {
  if (e.value == "") {
    quantity.style.background = "rgb(243, 61, 61)";
    for (var n = 0; n < dropdown.length; n++) {
      dropdown[n].classList.add("isDisabled");
    }
  } else {
    quantity.style.background = "rgb(163, 163, 163)";
    for (var n = 0; n < dropdown.length; n++) {
      dropdown[n].classList.remove("isDisabled");
      dropdown[n].href = base + dropdown[n].innerHTML;
      dropdown[n].href += quantityBase + e.value + pagebase;
    }
  }
}

btnOption.onmouseover = () => {
  mntLink(quantity);
};
quantity.onchange = () => {
  mntLink(quantity);
};
