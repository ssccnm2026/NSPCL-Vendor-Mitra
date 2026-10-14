
/* ==========================================================
   NSPCL VENDOR MITRA
   Connected FAQ Chatbot
   FAQ data is maintained in faq.js
   ========================================================== */

"use strict";

const CHAT_STORAGE_KEY = "nspclVendorMitraChat_v2";

let chatMessages;
let chatForm;
let chatInput;
let sendButton;
let clearChatButton;
let quickQuestionsContainer;
let faqListContainer;
let isReplying = false;

/* -------------------- FAQ DATA -------------------- */

function getFAQs() {
  if (
    window.NSPCL_FAQS &&
    typeof window.NSPCL_FAQS.getAll === "function"
  ) {
    return window.NSPCL_FAQS.getAll();
  }

  console.error(
    "FAQ database not found. Ensure faq.js loads before script.js."
  );

  return [];
}

/* -------------------- INITIALISE -------------------- */

document.addEventListener("DOMContentLoaded", function () {
  chatMessages = document.getElementById("chatMessages");
  chatForm = document.getElementById("chatForm");
  chatInput = document.getElementById("chatInput");
  sendButton = document.getElementById("sendButton");
  clearChatButton = document.getElementById("clearChat");
  quickQuestionsContainer = document.getElementById("quickQuestions");
  faqListContainer = document.getElementById("faqList");

  if (!chatMessages) {
    console.error(
      "Chatbot could not start: #chatMessages is missing from index.html."
    );
    return;
  }

  if (chatForm) {
    chatForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (chatInput) {
        sendMessage(chatInput.value);
      }
    });
  }

  if (clearChatButton) {
    clearChatButton.addEventListener("click", clearChat);
  }

  renderQuickQuestions();
  renderFAQs();
  restoreChatHistory();
  scrollChatToBottom();
});

/* -------------------- SEND MESSAGE -------------------- */

function sendMessage(message) {
  const question = String(message || "").trim();

  if (!question || isReplying) {
    return;
  }

  if (!chatMessages) {
    chatMessages = document.getElementById("chatMessages");
  }

  if (!chatMessages) {
    return;
  }

  if (chatInput) {
    chatInput.value = "";
  }

  addMessage(question, "user");
  saveMessage(question, "user");

  isReplying = true;

  if (sendButton) {
    sendButton.disabled = true;
  }

  showTypingIndicator();

  window.setTimeout(function () {
    removeTypingIndicator();

    const answer = getBotResponse(question);

    addMessage(answer, "bot");
    saveMessage(answer, "bot");

    isReplying = false;

    if (sendButton) {
      sendButton.disabled = false;
    }

    if (chatInput) {
      chatInput.focus();
    }
  }, 400);
}

/* Make functions available to HTML buttons if needed. */
window.sendMessage = sendMessage;
window.vmAsk = function (question) {
  sendMessage(question);
};
window.vmClearChat = clearChat;

/* -------------------- FIND ANSWERS -------------------- */

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getBotResponse(question) {
  const query = normalizeText(question);

  if (!query) {
    return "Please enter a question so I can help.";
  }

  if (/^(hi|hello|hey|namaste)$/.test(query)) {
    return (
      "Hello! Welcome to NSPCL Vendor Mitra. 👋\n\n" +
      "I can help with vendor registration, tenders, EMD, GeM, " +
      "purchase orders, invoices, payment enquiries, and delivery requirements.\n\n" +
      "What would you like to know?"
    );
  }

  if (
    query.includes("thank you") ||
    query === "thanks" ||
    query === "thank"
  ) {
    return "You're welcome! Feel free to ask another vendor-related question.";
  }

  if (
    query.includes("who are you") ||
    query.includes("what can you do") ||
    query.includes("your name")
  ) {
    return (
      "I am NSPCL Vendor Mitra, a rule-based vendor-support FAQ chatbot. " +
      "I answer common questions using the FAQ database maintained in faq.js."
    );
  }

  if (
    query.includes("human") ||
    query.includes("real person") ||
    query.includes("speak to someone")
  ) {
    return (
      "For assistance from an NSPCL representative, please use the " +
      "official contact details in the applicable tender, purchase order, " +
      "or official NSPCL website."
    );
  }

  const faqs = getFAQs();
  let bestMatch = null;
  let bestScore = 0;

  const queryWords = query.split(" ").filter(function (word) {
    return word.length > 2;
  });

  faqs.forEach(function (faq) {
    let score = 0;

    const faqQuestion = normalizeText(faq.question);
    const faqCategory = normalizeText(faq.category);
    const keywords = Array.isArray(faq.keywords) ? faq.keywords : [];

    if (query === faqQuestion) {
      score += 100;
    }

    if (faqQuestion && query.includes(faqQuestion)) {
      score += 20;
    }

    if (faqCategory && query.includes(faqCategory)) {
      score += 3;
    }

    keywords.forEach(function (keyword) {
      const normalizedKeyword = normalizeText(keyword);

      if (!normalizedKeyword) {
        return;
      }

      if (query.includes(normalizedKeyword)) {
        score += normalizedKeyword.includes(" ") ? 10 : 4;
      }
    });

    const faqWords = faqQuestion.split(" ");

    queryWords.forEach(function (word) {
      if (faqWords.includes(word)) {
        score += 2;
      }
    });

    if (score > bestScore) {
      bestScore = score;
      bestMatch = faq;
    }
  });

  if (bestMatch && bestScore >= 3) {
    return bestMatch.answer;
  }

  return (
    "I couldn't find a sufficiently relevant answer in my FAQ database.\n\n" +
    "Try asking about:\n" +
    "• Vendor registration\n" +
    "• Tenders and bid submission\n" +
    "• EMD or performance security\n" +
    "• GeM or MSME\n" +
    "• Purchase orders and delivery\n" +
    "• Invoices and payment enquiries\n\n" +
    "For an official decision or live status, please contact the " +
    "authorised NSPCL representative or relevant portal helpdesk."
  );
}

window.vmGetBotResponse = getBotResponse;

/* -------------------- DISPLAY MESSAGES -------------------- */

function addMessage(text, sender) {
  if (!chatMessages) {
    return;
  }

  const wrapper = document.createElement("div");

  wrapper.className =
    sender === "user"
      ? "message user-message user"
      : "message bot-message bot";

  const bubble = document.createElement("div");
  bubble.className = "message-bubble";
  bubble.textContent = String(text || "");

  const timestamp = document.createElement("div");
  timestamp.className = "message-time";
  timestamp.textContent = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  wrapper.appendChild(bubble);
  wrapper.appendChild(timestamp);
  chatMessages.appendChild(wrapper);

  scrollChatToBottom();
}

function scrollChatToBottom() {
  if (chatMessages) {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

/* -------------------- TYPING INDICATOR -------------------- */

function showTypingIndicator() {
  if (!chatMessages || document.getElementById("vmTypingIndicator")) {
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.id = "vmTypingIndicator";
  wrapper.className = "message bot-message typing-message";

  const bubble = document.createElement("div");
  bubble.className = "message-bubble typing-bubble";
  bubble.textContent = "Vendor Mitra is typing...";

  wrapper.appendChild(bubble);
  chatMessages.appendChild(wrapper);

  scrollChatToBottom();
}

function removeTypingIndicator() {
  const indicator = document.getElementById("vmTypingIndicator");

  if (indicator) {
    indicator.remove();
  }
}

/* -------------------- SAVE AND RESTORE CHAT -------------------- */

function saveMessage(text, sender) {
  try {
    const history = JSON.parse(
      sessionStorage.getItem(CHAT_STORAGE_KEY) || "[]"
    );

    history.push({
      text: String(text),
      sender: sender,
      time: Date.now()
    });

    sessionStorage.setItem(
      CHAT_STORAGE_KEY,
      JSON.stringify(history.slice(-100))
    );
  } catch (error) {
    console.warn("Unable to save chat history.", error);
  }
}

function restoreChatHistory() {
  if (!chatMessages) {
    return;
  }

  try {
    const history = JSON.parse(
      sessionStorage.getItem(CHAT_STORAGE_KEY) || "[]"
    );

    if (!Array.isArray(history) || history.length === 0) {
      return;
    }

    chatMessages.replaceChildren();

    history.forEach(function (item) {
      if (
        item &&
        typeof item.text === "string" &&
        (item.sender === "user" || item.sender === "bot")
      ) {
        addMessage(item.text, item.sender);
      }
    });
  } catch (error) {
    console.warn("Unable to restore chat history.", error);
  }
}

function clearChat() {
  if (!chatMessages) {
    chatMessages = document.getElementById("chatMessages");
  }

  if (chatMessages) {
    chatMessages.replaceChildren();

    addMessage(
      "Hello! 👋 Welcome to NSPCL Vendor Mitra.\n\n" +
      "Ask me about vendor registration, tenders, EMD, GeM, " +
      "purchase orders, invoices, or delivery requirements.",
      "bot"
    );
  }

  try {
    sessionStorage.removeItem(CHAT_STORAGE_KEY);
  } catch (error) {
    console.warn("Unable to clear chat history.", error);
  }

  isReplying = false;

  if (sendButton) {
    sendButton.disabled = false;
  }

  if (chatInput) {
    chatInput.value = "";
    chatInput.focus();
  }
}

/* -------------------- QUICK QUESTIONS -------------------- */

function renderQuickQuestions() {
  if (!quickQuestionsContainer) {
    return;
  }

  quickQuestionsContainer.replaceChildren();

  const faqs = getFAQs();
  const selectedFAQs = faqs.slice(0, 6);

  const list = document.createElement("div");
  list.className = "quick-question-list";

  selectedFAQs.forEach(function (faq) {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "quick-question";
    button.textContent = faq.question;

    button.addEventListener("click", function () {
      sendMessage(faq.question);
    });

    list.appendChild(button);
  });

  quickQuestionsContainer.appendChild(list);
}

/* -------------------- FAQ ACCORDION -------------------- */

function renderFAQs() {
  if (!faqListContainer) {
    return;
  }

  faqListContainer.replaceChildren();

  const faqs = getFAQs();

  if (faqs.length === 0) {
    const notice = document.createElement("p");
    notice.textContent =
      "FAQs could not be loaded. Please check faq.js and refresh the page.";

    faqListContainer.appendChild(notice);
    return;
  }

  faqs.forEach(function (faq, index) {
    const item = document.createElement("div");
    item.className = "faq-item";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "faq-question";
    button.textContent = faq.question;
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", "vmFaqAnswer" + index);

    const answer = document.createElement("div");
    answer.id = "vmFaqAnswer" + index;
    answer.className = "faq-answer";
    answer.textContent = faq.answer;
    answer.hidden = true;

    button.addEventListener("click", function () {
      const currentlyOpen =
        button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", String(!currentlyOpen));
      answer.hidden = currentlyOpen;
    });

    item.appendChild(button);
    item.appendChild(answer);

    faqListContainer.appendChild(item);
  });
}
