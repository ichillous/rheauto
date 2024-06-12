'use strict';



/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});



/**
 * SCROLL TO COLUMN
 */
function scrollToColumn(columnId) {
  const column = document.getElementById(columnId);
  if (column) {
    column.scrollIntoView({ behavior: "smooth" });
  }
}

// Example usage:
// Assuming you have navbar items with data-column attributes
const navbarItems = document.querySelectorAll("[data-column]");
navbarItems.forEach(function (item) {
  item.addEventListener("click", function () {
    const columnId = this.getAttribute("data-column");
    scrollToColumn(columnId);
  });
});