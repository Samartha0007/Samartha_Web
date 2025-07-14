const container = document.querySelector(".container");
const chatsContainer = document.querySelector(".chats-container");
const promptForm = document.querySelector(".prompt-form");
const promptInput = promptForm.querySelector(".prompt-input");

// ✅ Always dark theme
document.body.classList.remove("light-theme");
localStorage.setItem("themeColor", "dark_mode");

// Create chat message div
const createMessageElement = (content, ...classes) => {
  const div = document.createElement("div");
  div.classList.add("message", ...classes);
  div.innerHTML = content;
  return div;
};

// Scroll to bottom
const scrollToBottom = () => container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });

// Typing effect
const typingEffect = (text, textElement, botMsgDiv) => {
  textElement.textContent = "";
  const words = text.split(" ");
  let wordIndex = 0;

  const typingInterval = setInterval(() => {
    if (wordIndex < words.length) {
      textElement.textContent += (wordIndex === 0 ? "" : " ") + words[wordIndex++];
      scrollToBottom();
    } else {
      clearInterval(typingInterval);
      botMsgDiv.classList.remove("loading");
      document.body.classList.remove("bot-responding");
    }
  }, 40);
};

// Fixed bot response
const generateResponse = (botMsgDiv) => {
  const textElement = botMsgDiv.querySelector(".message-text");
  const responseText = "🚫 This AI is only available for Samartha GS. Public access coming soon!";
  typingEffect(responseText, textElement, botMsgDiv);
};

// Handle form submit
const handleFormSubmit = (e) => {
  e.preventDefault();
  const userMessage = promptInput.value.trim();
  if (!userMessage || document.body.classList.contains("bot-responding")) return;

  promptInput.value = "";
  document.body.classList.add("chats-active", "bot-responding");

  const userMsgHTML = `<p class="message-text">${userMessage}</p>`;
  const userMsgDiv = createMessageElement(userMsgHTML, "user-message");
  chatsContainer.appendChild(userMsgDiv);
  scrollToBottom();

  setTimeout(() => {
    const botMsgHTML = `<p class="message-text">Sam is thinking...</p>`;
    const botMsgDiv = createMessageElement(botMsgHTML, "bot-message", "loading");
    chatsContainer.appendChild(botMsgDiv);
    scrollToBottom();
    generateResponse(botMsgDiv);
  }, 600);
};

// Submit listener
promptForm.addEventListener("submit", handleFormSubmit);