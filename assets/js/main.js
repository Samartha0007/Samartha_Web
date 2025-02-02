// Formspree code
const form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("alert");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Your message has been sent.";
      document.querySelector(".alert_style").style.display = "block";

      // hide alert after 3 seconds
      setTimeout(function () {
        document.querySelector(".alert_style").style.display = "none";
      }, 4000);
      form.reset();
    })
    .catch((error) => {
      status.innerHTML =
        "Oops! There was a problem delivering your message, please contact via other means.";
      document.querySelector(".alert_style").style.display = "block";

      // hide alert after 3 seconds
      setTimeout(function () {
        document.querySelector(".alert_style").style.display = "none";
      }, 4000);
    });
}
form.addEventListener("submit", handleSubmit);

// FORM BORDERS 
$("#contact-form input,#contact-form textarea").on("input focusin",(e)=>{
  $(e.target).parent().addClass("focusIn");
  if ($(e.target).val().trim().length > 0) {
    $(e.target).parent().addClass("valid");
    $(e.target).parent().removeClass("invalid");
  } else {
    $(e.target).parent().addClass("invalid");
    $(e.target).parent().removeClass("valid");
  }
});

$("#contact-form input,#contact-form textarea").on("focusout",(e)=>{
    $(e.target).parent().removeClass("focusIn");
});

// NAVIGATION PANEL
let navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// MENU SHOW
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// MENU HIDDEN
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// SKILLS
const skillContent = document.querySelectorAll(".skill");
const skillHeader = document.querySelectorAll(".skills_header");
const skillContentArr = Array.from(skillContent);
const skillHeaderArr = Array.from(skillHeader);

skillHeaderArr.forEach((element, idx) => {
  element.addEventListener("click", function () {
    skillContentArr[idx].classList.toggle("skills_open");
  });
});

// QUALIFICATION TABS
let education = document.getElementById("education");
let work = document.getElementById("work");
let educationheader = document.getElementById("educationheader");
let workheader = document.getElementById("workheader");
workheader.style.color = "var(--text-color)";
educationheader.style.color = "var(--first-color)";

educationheader.addEventListener("click", () => {
  let condition1 = work.classList.contains("qualification-inactive");
  if (!condition1) {
    education.classList.remove("qualification-inactive");
    work.classList.add("qualification-inactive");
    workheader.style.color = "var(--text-color)";
    educationheader.style.color = "var(--first-color)";
  }
});
workheader.addEventListener("click", () => {
  let condition2 = education.classList.contains("qualification-inactive");
  if (!condition2) {
    work.classList.remove("qualification-inactive");
    education.classList.add("qualification-inactive");
    educationheader.style.color = "var(--text-color)";
    workheader.style.color = "var(--first-color)";
  }
});

// PORTFOLIO SWIPER
let swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// HEADER SHADOW
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// SHOW SCROLL UP BUTTON
function scrollUpfunc() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUpfunc);

// DARK/LIGHT THEME
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");

// Function to set the theme based on user choice
const setTheme = (theme) => {
  document.body.classList.toggle(darkTheme, theme === "dark");
  themeButton.classList.toggle(iconTheme, theme === "dark");
  localStorage.setItem("selected-theme", theme);
};

// Function to get the current theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";

// Set the theme based on previous selection or default to dark
setTheme(selectedTheme || "dark");

// Activate/Deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  const currentTheme = getCurrentTheme();
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
});
// Typing Animation using Typed JS
var typed = new Typed(".type", {
  strings: ["IoT" , "AI" , "AI Animations" , "Web Development","Lens Development","API","And More.."],
  smartBackspace: true,
  startDelay: 1000,
  typeSpeed: 130,
  backDelay: 1000,
  backSpeed: 60,
  loop: true,
 
});
document.addEventListener("DOMContentLoaded", function () {
    const likeButton = document.getElementById('like-button');
    const likeCountElement = document.getElementById('like-count');
    const message = document.getElementById('message');
    const heartIcon = document.querySelector('.button_icon');

    // Initialize like count to 463 if not stored in localStorage
    let likeCount = localStorage.getItem("likeCount") ? parseInt(localStorage.getItem("likeCount")) : 863;
    let liked = localStorage.getItem("liked") === "true"; // Check if the user has liked

    // Set the initial like count on page load
    likeCountElement.textContent = likeCount;

    likeButton.addEventListener("click", function (event) {
        if (!liked) {
            // Increment like count and save it to localStorage
            likeCount++;
            likeCountElement.textContent = likeCount;
            localStorage.setItem("likeCount", likeCount);  // Save the updated like count to localStorage
            localStorage.setItem("liked", "true");  // Mark the user as liked

            // Change background and icon color on first click
            likeButton.style.background = "#00b894";
            heartIcon.style.color = "#d4f1f4";
            heartIcon.classList.add("pulse-heart"); // Add pulsing effect to the heart icon

            setTimeout(() => heartIcon.classList.remove("pulse-heart"), 600); // Remove pulsing effect after animation

            showFloatingLike(event.clientX, event.clientY);
            triggerConfetti();
            showMessage("❤️ Thank you!", "green");

            liked = true;

            // Trigger the background URL request
            sendLikeRequest();
        } else {
            likeButton.classList.add("no-no");
            showMessage("🚫 No No!", "red");

            setTimeout(() => {
                likeButton.classList.remove("no-no");
            }, 500);
        }
    });

    function showFloatingLike(x, y) {
        const like = document.createElement("span");
        like.innerHTML = "❤️";
        like.classList.add("small-like");
        like.style.left = `${x}px`;
        like.style.top = `${y}px`;
        document.body.appendChild(like);

        setTimeout(() => like.remove(), 1000);
    }

    function triggerConfetti() {
        // Ensure confetti function is triggered properly
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        } else {
            console.error("Confetti library not loaded or initialized correctly.");
        }
    }

    function showMessage(text, color) {
        message.textContent = text;
        message.style.color = color;
        message.classList.add("show-message");

        setTimeout(() => {
            message.classList.remove("show-message");
        }, 2000);
    }

    // Function to send a like notification to the background URL
    function sendLikeRequest() {
        const url = `http://api.callmebot.com/text.php?source=web&user=@samartha_gs&text=Someone%20Liked`;

        // Using fetch() to trigger the URL in the background
        fetch(url, { method: 'GET' })
            .then(response => response.text())
            .then(data => {
                console.log("Request sent successfully", data);
            })
            .catch(error => {
                console.error("Error sending request:", error);
            });
    }
});

