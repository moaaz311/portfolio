/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SCROLL REVEAL ANIMATION ====================*/
const revealElements = document.querySelectorAll(".reveal");

const revealOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, revealOptions);

revealElements.forEach(el => {
  revealOnScroll.observe(el);
});

/*==================== TYPING ANIMATION ====================*/
const typingText = document.querySelector(".typing-text");
const textArray = ["Business Intelligence Developer", "Data Analyst"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeDelay = 100;

function type() {
  if (!typingText) return;

  const currentText = textArray[textIndex];
  
  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typeDelay = 50;
  } else {
    typingText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typeDelay = 100;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    typeDelay = 2000; // Pause at end of text
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length;
    typeDelay = 500; // Pause before typing new text
  }

  setTimeout(type, typeDelay);
}

document.addEventListener("DOMContentLoaded", () => {
  if (typingText) {
    setTimeout(type, 1000);
  }
  startCounters();
});

/*==================== COUNTER ANIMATION ====================*/
const counters = document.querySelectorAll('.counter');
let hasCounted = false;

function startCounters() {
  if(hasCounted || !counters.length) return;
  
  const statsSection = document.querySelector('.about__stats');
  if(!statsSection) return;

  const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting && !hasCounted) {
      hasCounted = true;
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;
          const inc = target / 50; // speed

          if(count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 40);
          } else {
            counter.innerText = target + "+";
          }
        };
        updateCount();
      });
    }
  }, { threshold: 0.5 });

  observer.observe(statsSection);
}
