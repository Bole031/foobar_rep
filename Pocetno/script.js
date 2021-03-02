var ul = document.querySelector("ul");
ul.style.listStyleType = "decimal";

var info = document.querySelector(".info");
ul.classList.add("hide");

var computedStyles = window.getComputedStyle(document.body);
var margin = computedStyles.getPropertyValue("margin-left");
console.log(margin);

var marginValue = parseInt(margin);
var limit = 30;
var reverse = false;
setInterval(animate, 100);
function animate() {
  if (reverse) {
    marginValue--;
  } else {
    marginValue++;
  }

  marginValue++;

  if (marginValue >= limit) {
    reverse = true;
  } else if (marginValue <= 0) {
    reverse = false;
  }
  console.log(marginValue);
  document.body.style.margin = margin + "px";
}
