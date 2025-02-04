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
  strings: ["Artificial Intelligence" , "Internet Of Things"  , "Web Development","App Development","Lens Development","API","And More.."],
  smartBackspace: true,
  startDelay: 1000,
  typeSpeed: 130,
  backDelay: 1000,
  backSpeed: 60,
  loop: true,
 
});


document.addEventListener("DOMContentLoaded", function () {
    const likeButton = document.getElementById('like-button');
    const heartIcon = document.querySelector('.button_icon');
    const likeCount = document.getElementById('like-count');

    const startDate = new Date("2025-02-04T09:00:00+05:30").getTime(); // Start counting from today
    const dailyIncrement = 173; // Daily increase at 9:00 AM IST

    // Retrieve stored like count and last update date
    let storedLikeCount = localStorage.getItem('likeCount');
    let lastUpdatedDate = localStorage.getItem('lastUpdatedDate');

    // Convert stored like count to an integer, default to 22 if not set
    let currentLikeCount = storedLikeCount ? parseInt(storedLikeCount) : 22;

    function updateLikeCount() {
        const now = new Date();
        const nowIST = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));

        // Get today's date in YYYY-MM-DD format
        const todayDate = nowIST.toISOString().split('T')[0];

        // If today is a new day and it is after 9:00 AM IST, update the count
        if (todayDate !== lastUpdatedDate && nowIST.getHours() >= 9) {
            currentLikeCount += dailyIncrement; // Increase likes by 173
            localStorage.setItem('likeCount', currentLikeCount); // Save new count
            localStorage.setItem('lastUpdatedDate', todayDate); // Mark update date
        }

        // Update the like count on the page
        likeCount.textContent = currentLikeCount;
    }

    // Run update function immediately on page load
    updateLikeCount();

    // Like button functionality
    likeButton.addEventListener("click", function (event) {
        if (!localStorage.getItem('liked')) {
            const fillColor = "#FF00FF"; // Heart color when liked

            heartIcon.style.fill = fillColor;
            heartIcon.style.color = fillColor;
            localStorage.setItem('iconColor', fillColor); // Store color

            heartIcon.classList.add("bounce-heart");
            setTimeout(() => heartIcon.classList.remove("bounce-heart"), 600);

            triggerConfetti();
            createRippleEffect(event);
            showFloatingLike(event.clientX, event.clientY);

            // Mark as liked in local storage
            localStorage.setItem('liked', 'true');

            // 🔹 Send background request when liked
            sendBackgroundRequest();
        } else {
            // Show alert for "Already Liked"
            alert("Thank you 😊 - You have already liked ❤️‍🔥");

            // Add shake effect
            likeButton.classList.add("shake");
            setTimeout(() => likeButton.classList.remove("shake"), 500);
        }
    });

    // Function to send a background request without opening a new tab
    function sendBackgroundRequest() {
        fetch("https://api.callmebot.com/text.php?source=web&user=@samartha_gs&text=Samarth")
            .then(response => console.log("Background request sent!"))
            .catch(error => console.error("Error sending request:", error));
    }

    // Function to trigger confetti effect
    function triggerConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    // Function to create ripple effect
    function createRippleEffect(event) {
        const ripple = document.createElement("div");
        ripple.classList.add("ripple");

        const rect = likeButton.getBoundingClientRect();
        ripple.style.left = `${event.clientX - rect.left - 50}px`;
        ripple.style.top = `${event.clientY - rect.top - 50}px`;

        likeButton.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Function to show floating like effect
    function showFloatingLike(x, y) {
        const like = document.createElement("span");
        like.innerHTML = "+1 ❤️‍🔥";
        like.classList.add("small-like");
        like.style.left = `${x}px`;
        like.style.top = `${y}px`;
        document.body.appendChild(like);

        setTimeout(() => like.remove(), 1500);
    }
});