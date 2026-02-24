
// When the user scrolls down 300px from the top of the document, change navbar color
let nav = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    nav.style.backgroundColor = "#6a6d8d";
  } else {
    nav.style.backgroundColor = "#8082a6";
  }
});

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* Scroll Reveal Animation  for cards*/
const cards = document.querySelectorAll(".card");

function revealCards() {
  const trigger = window.innerHeight * 0.85;
  cards.forEach((card) => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealCards);
revealCards();
