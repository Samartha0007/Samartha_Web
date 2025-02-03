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
  strings: ["Artificial Intelligence ❤️‍🔥" , "Internet Of Things"  , "Web Development","App Development","Lens Development","API","And More.."],
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

    // Set a fixed start time (e.g., 1st Feb 2025, 12:00 AM IST)
    const startTime = new Date("2025-02-01T00:00:00+05:30").getTime(); 

    // Retrieve like status, color, and count from local storage
    let liked = localStorage.getItem('liked') === 'true';
    let storedColor = localStorage.getItem('iconColor');
    let storedLikeCount = localStorage.getItem('likeCount');

    // Update heart color if it was already liked
    if (storedColor) {
        heartIcon.style.fill = storedColor;  // Set the fill color for the heart
        heartIcon.style.color = storedColor; // Set the color property for icon's outer color
    }

    function updateLikeCount() {
        const now = new Date();
        const nowIST = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })); // Convert to IST
        const elapsedMinutes = Math.floor((nowIST.getTime() - startTime) / 60000); // Minutes since start time

        // Calculate likes for before 3:00 PM
        let newLikeCount = 0 + (elapsedMinutes * 100); // Start from 0 and add 100 per minute

        // If the time is after 3:00 PM, apply a new count rule
        if (nowIST.getHours() >= 15) {
            // Get the time since 3:00 PM
            const timeSince3PM = (nowIST.getHours() - 15) * 60 + nowIST.getMinutes();
            // Add 35 likes per hour after 3:00 PM, reset after each hour
            newLikeCount = Math.floor(timeSince3PM / 60) * 35;
        }

        // Use stored like count if available and higher
        if (storedLikeCount && parseInt(storedLikeCount) > newLikeCount) {
            newLikeCount = parseInt(storedLikeCount);
        }

        likeCount.textContent = newLikeCount;
        localStorage.setItem('likeCount', newLikeCount); // Store updated count
    }

    // Update count immediately and every minute
    updateLikeCount();
    setInterval(() => {
        updateLikeCount(); // Update the like count
    }, 60000); // Update every minute

    // Like button functionality with local storage check
    likeButton.addEventListener("click", function (event) {
        if (!liked) {
            const fillColor = "#40E0D0"; // Set color for the heart icon to fill fully

            heartIcon.style.fill = fillColor;  // Fill the heart icon
            heartIcon.style.color = fillColor;  // Ensure the color also applies to the surrounding areas
            localStorage.setItem('iconColor', fillColor);  // Store the color in local storage

            heartIcon.classList.add("bounce-heart");
            setTimeout(() => heartIcon.classList.remove("bounce-heart"), 600);

            triggerConfetti();
            createRippleEffect(event);
            showFloatingLike(event.clientX, event.clientY);

            // Mark as liked in local storage
            localStorage.setItem('liked', 'true');
            liked = true;

            // 🔹 Trigger background request on first click
            sendBackgroundRequest();
        } else {
            // Show browser alert for "Already Liked"
            alert("Thank you!,You have already liked ❤️‍🔥");

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

    function triggerConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

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

    function showFloatingLike(x, y) {
        const like = document.createElement("span");
        like.innerHTML = "❤️";
        like.classList.add("small-like");
        like.style.left = `${x}px`;
        like.style.top = `${y}px`;
        document.body.appendChild(like);

        setTimeout(() => like.remove(), 1500);
    }
});