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





window.likePost = function (event) {
    const button = document.getElementById("likeButton");
    const likeCount = document.getElementById("likeCount");

    // Disable button while updating
    button.disabled = true;

    // Add bounce effect to like count
    likeCount.classList.add("bounce");
    setTimeout(() => {
        likeCount.classList.remove("bounce");
    }, 300);

    // Get click position for animations
    const x = event.clientX;
    const y = event.clientY;

    // Show floating like effect
    showFloatingLike(x, y);

    // Show spark effect
    showSparkAnimation(x, y);

    // Apply ripple effect on button
    createRipple(button);

    // Apply shake effect
    button.classList.add("shake");
    setTimeout(() => {
        button.classList.remove("shake");
    }, 500);

    // Run Firebase transaction
    runTransaction(ref(db, "likes"), (currentLikes) => {
        return (currentLikes || 0) + 1;
    }).then(() => {
        button.disabled = false;
    }).catch((error) => {
        console.error("Error updating likes:", error);
        button.disabled = false;
    });
};

// Function to show floating like effect
function showFloatingLike(x, y) {
    const like = document.createElement("span");
    like.innerHTML = "+1 ❤️‍🔥";
    like.classList.add("small-like");

    like.style.left = `${x}px`;
    like.style.top = `${y}px`;

    document.body.appendChild(like);

    setTimeout(() => {
        like.remove();
    }, 1500);
}

// Function to show spark animation
function showSparkAnimation(x, y) {
    for (let i = 0; i < 8; i++) {
        const spark = document.createElement("span");
        spark.classList.add("spark");

        // Randomize spark position and rotation
        const angle = Math.random() * 360;
        const distance = Math.random() * 20 + 10;
        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;
        spark.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) rotate(${angle}deg)`;

        document.body.appendChild(spark);

        setTimeout(() => {
            spark.remove();
        }, 800);
    }
}

// Function to create ripple effect on button
function createRipple(button) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    button.appendChild(ripple);
    setTimeout(() => {
        ripple.remove();
    }, 600);
}