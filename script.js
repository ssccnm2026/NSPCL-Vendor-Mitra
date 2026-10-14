
/* =========================================================
   NSPCL VENDOR MITRA
   Standalone Vendor Support FAQ Chatbot
   Works with index.html and style.css
   No API key or paid service required
   ========================================================= */

"use strict";

/* -------------------- FAQ KNOWLEDGE BASE -------------------- */

const vendorFAQs = [
  {
    question: "What is NSPCL Vendor Mitra?",
    keywords: ["about", "vendor mitra", "what is nspcl", "nspcl", "company"],
    answer:
      "NSPCL Vendor Mitra is a vendor-support chatbot prototype designed to help suppliers understand common procurement procedures, tendering, GeM, purchase orders, invoices, and vendor-related processes. NSPCL (NTPC-SAIL Power Company Limited) is a joint venture of NTPC Limited and SAIL."
  },
  {
    question: "How can I register as an NSPCL vendor?",
    keywords: ["vendor registration", "register", "new vendor", "enrol", "enroll", "empanelment"],
    answer:
      "For vendor registration, first check the applicable vendor-registration instructions or tender documents issued by NSPCL. Keep your business details, PAN, GSTIN (where applicable), bank details, and relevant certificates ready. Submit documents only through the official channel specified by NSPCL. This chatbot cannot register vendors or verify registration status."
  },
  {
    question: "How can I find NSPCL tenders?",
    keywords: ["tender", "tenders", "nit", "enquiry", "enquiry number", "bid invitation", "open tender"],
    answer:
      "Check the official NSPCL website and the e-procurement portal specified in the relevant tender notice. Search using the tender number, title, location, or closing date. Always rely on the official tender notice for the latest details, amendments, and submission deadlines."
  },
  {
    question: "How do I participate in a tender?",
    keywords: ["participate", "participation", "submit bid", "bid submission", "how to bid", "tender process"],
    answer:
      "A typical tender participation process is:\n1. Read the complete tender document and eligibility criteria.\n2. Check the submission deadline and required documents.\n3. Complete portal registration if required.\n4. Prepare technical and commercial submissions as instructed.\n5. Submit EMD or other applicable securities, if required.\n6. Upload and submit the bid before the deadline.\n7. Save the submission acknowledgement.\n\nThe specific tender document always takes precedence."
  },
  {
    question: "Which documents are required for a tender?",
    keywords: ["documents", "document required", "tender documents", "checklist", "paperwork", "certificate"],
    answer:
      "Requirements vary by tender. Commonly requested documents may include:\n• PAN and GST registration, where applicable\n• Business registration documents\n• Relevant experience and performance certificates\n• Technical compliance documents\n• Financial statements or turnover certificates, if required\n• Signed tender forms and declarations\n• EMD or exemption documents, where applicable\n• Bank details and other documents specified in the tender\n\nUse the tender's checklist as the final authority."
  },
  {
    question: "What is EMD?",
    keywords: ["emd", "earnest money", "bid security", "exemption from emd"],
    answer:
      "EMD means Earnest Money Deposit. It may be required as bid security, subject to the tender conditions. The amount, permitted payment method, exemptions, validity, and refund conditions must be checked in the specific tender document."
  },
  {
    question: "What is performance security?",
    keywords: ["performance security", "performance bank guarantee", "pbg", "security deposit", "bank guarantee"],
    answer:
      "Performance security is a security that may be required from a successful bidder to ensure contractual performance. Its amount, format, validity, submission deadline, and release conditions depend on the purchase order and applicable tender conditions."
  },
  {
    question: "What is GeM?",
    keywords: ["gem", "government e marketplace", "government e-marketplace", "gem portal", "seller registration"],
    answer:
      "GeM stands for Government e-Marketplace, an online platform for public procurement. Vendors should use the official GeM portal at https://gem.gov.in for registration, catalogue management, bids, orders, and platform-specific instructions. NSPCL procurement requirements must also be followed wherever applicable."
  },
  {
    question: "How can I submit a quotation?",
    keywords: ["quotation", "quote", "price bid", "financial bid", "commercial offer", "offer submission"],
    answer:
      "Submit your quotation through the method specified in the enquiry or tender. Check the item description, specifications, quantity, delivery terms, taxes, freight, validity, and required supporting documents. Do not submit confidential commercial information through this chatbot."
  },
  {
    question: "What is a technical bid?",
    keywords: ["technical bid", "technical offer", "technical evaluation", "technical compliance", "deviation"],
    answer:
      "A technical bid explains how your offered goods or services meet the tender's technical and qualification requirements. Include the requested specifications, compliance statements, experience records, drawings, certificates, and deviation statements where required. Follow the tender's instructions on whether price information is permitted in the technical bid."
  },
  {
    question: "What is a price bid?",
    keywords: ["price bid", "financial bid", "commercial bid", "price schedule", "boq", "bill of quantities"],
    answer:
      "A price bid contains the commercial offer in the prescribed format. Carefully check units, quantities, taxes, freight, duties, discounts, delivery terms, and arithmetic. Enter prices only in the designated section of the tender or procurement portal."
  },
  {
    question: "How do I check a purchase order?",
    keywords: ["purchase order", "po status", "po number", "order status", "purchase order status"],
    answer:
      "For purchase-order details, refer to the official communication or procurement system made available to your organisation. For assistance, contact the NSPCL officer or procurement contact identified in the purchase order. This chatbot cannot access SAP or confirm the status of an actual purchase order."
  },
  {
    question: "How can I submit an invoice?",
    keywords: ["invoice", "bill submission", "submit bill", "billing", "invoice submission"],
    answer:
      "Follow the invoice-submission instructions in your purchase order or contract. Check that the invoice references the correct PO and includes the required tax details, supporting documents, delivery or service records, and acceptance certificates where applicable. Submit it through the designated official channel."
  },
  {
    question: "How can I check my payment status?",
    keywords: ["payment", "payment status", "bill status", "payment delay", "outstanding payment", "due payment"],
    answer:
      "For payment-status enquiries, contact the designated NSPCL finance or accounts contact using the details in your PO or official correspondence. Keep your PO number, invoice number, invoice date, and submission acknowledgement ready. This chatbot does not have access to payment records."
  },
  {
    question: "What if my GST details need updating?",
    keywords: ["gst", "gstin", "gst details", "tax", "tax invoice", "pan update"],
    answer:
      "Use the official vendor-update process specified by NSPCL or the relevant procurement portal. Provide valid supporting documents and ensure your submitted details match the applicable registration records. Do not post your PAN, GSTIN, or other sensitive business information in this public chatbot."
  },
  {
    question: "Can I request an extension of delivery time?",
    keywords: ["delivery extension", "extension of delivery", "delivery date", "delivery period", "extend delivery", "extension of time"],
    answer:
      "If you need a delivery-time extension, submit a formal written request to the authorised NSPCL contact before the contractual deadline wherever possible. Mention the PO number, affected items, reasons, supporting evidence, and requested revised delivery date. An extension is subject to approval by the competent authority and applicable contract conditions."
  },
  {
    question: "How can I request clarification on a tender?",
    keywords: ["clarification", "query", "pre bid", "pre-bid", "doubt", "technical query", "tender query"],
    answer:
      "Submit tender-related clarifications through the channel and within the timeline specified in the tender notice. Clearly identify the tender number and relevant clause, then state your question concisely. Follow any prescribed pre-bid meeting or online clarification process."
  },
  {
    question: "What is a corrigendum?",
    keywords: ["corrigendum", "amendment", "tender amendment", "revised tender", "date extension", "addendum"],
    answer:
      "A corrigendum is an official correction or amendment to a tender or related document. Always check the official procurement portal for corrigenda, revised dates, updated specifications, and other changes before submitting your bid."
  },
  {
    question: "Can MSME or Udyam vendors receive exemptions?",
    keywords: ["msme", "udyam", "micro small enterprise", "small enterprise", "msme exemption", "exemption"],
    answer:
      "Eligibility for MSME-related benefits or exemptions depends on applicable procurement rules, the tender conditions, and valid supporting documents. Check the exact tender clauses and any applicable policy. Do not assume that every fee, EMD, or requirement is automatically waived."
  },
  {
    question: "How do I update my vendor profile?",
    keywords: ["update vendor", "vendor profile", "change address", "bank change", "change bank details", "contact details", "profile update"],
    answer:
      "Follow the official vendor-master or portal-update procedure provided by NSPCL. Changes to bank details, addresses, authorised contacts, or legal information may require supporting documents and verification. Never share bank account details or credentials in this chatbot."
  },
  {
    question: "How can I contact the procurement team?",
    keywords: ["contact", "contact number", "email", "procurement team", "buyer", "officer", "helpdesk", "support"],
    answer:
      "For a specific enquiry, use the contact details provided in the relevant tender, purchase order, official NSPCL website, or procurement portal. Include the tender or PO reference and a concise description of your query. This prototype does not have a verified live directory of NSPCL officers."
  },
  {
    question: "What should I do if the procurement portal is not working?",
    keywords: ["portal not working", "technical problem", "login problem", "login issue", "upload problem", "upload error", "website error", "technical issue"],
    answer:
      "Try refreshing the page, checking your internet connection, using an updated browser, and verifying the file format and size requirements. If the issue persists, contact the portal's official helpdesk promptly. Record the error message and time, and do not wait until the bid deadline to report a problem."
  },
  {
    question: "How do I find delivery and inspection requirements?",
    keywords: ["inspection", "delivery", "dispatch", "consignment", "material receipt", "acceptance", "transport"],
    answer:
      "Check the PO or contract for the delivery location, delivery schedule, inspection requirements, packing, dispatch documents, and acceptance procedure. Coordinate with the authorised NSPCL contact identified in the contract before dispatch if any requirement is unclear."
  }
];

/* -------------------- QUICK QUESTIONS -------------------- */

const quickQuestionTexts = [
  "How can I register as an NSPCL vendor?",
  "How do I find NSPCL tenders?",
  "What is EMD?",
  "How can I submit an invoice?",
  "How can I check my payment status?",
  "Can I request an extension of delivery time?"
];

/* -------------------- DOM ELEMENTS -------------------- */

let chatMessages;
let chatForm;
let chatInput;
let sendButton;
let clearChatButton;
let quickQuestionsContainer;
let faqListContainer;

let isReplying = false;

/* -------------------- START THE CHATBOT -------------------- */

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
      "NSPCL Vendor Mitra: #chatMessages was not found. Check index.html."
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

/* -------------------- SEND A MESSAGE -------------------- */

function sendMessage(message) {
  const question = String(message || "").trim();

  if (!question || isReplying) {
    return;
  }

  if (!chatMessages) {
    chatMessages = document.getElementById("chatMessages");
  }

  if (!chatMessages) {
    console.error("Chat messages container is missing.");
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

  // A short delay makes the interaction feel conversational.
  window.setTimeout(function () {
    removeTypingIndicator();

    const response = getBotResponse(question);

    addMessage(response, "bot");
    saveMessage(response, "bot");

    isReplying = false;

    if (sendButton) {
      sendButton.disabled = false;
    }

    if (chatInput) {
      chatInput.focus();
    }
  }, 450);
}

/*
 * Expose this function for quick-question buttons in index.html:
 * onclick="window.vmAsk('What is EMD?')"
 */
window.sendMessage = sendMessage;

window.vmAsk = function (question) {
  sendMessage(question);
};

/* -------------------- FIND THE BEST ANSWER -------------------- */

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getBotResponse(question) {
  const normalizedQuestion = normalizeText(question);

  if (!normalizedQuestion) {
    return "Please type your question so I can help.";
  }

  if (
    /^(hi|hello|hey|good morning|good afternoon|good evening|namaste)$/.test(
      normalizedQuestion
    )
  ) {
    return "Hello! Welcome to NSPCL Vendor Mitra. 👋\n\nI can help with common questions about vendor registration, tenders, EMD, GeM, purchase orders, invoices, and delivery requirements.\n\nWhat would you like to know?";
  }

  if (
    normalizedQuestion.includes("thank you") ||
    normalizedQuestion === "thanks" ||
    normalizedQuestion === "thank you"
  ) {
    return "You're welcome! 😊 If you have another vendor-related question, feel free to ask.";
  }

  if (
    normalizedQuestion.includes("human") ||
    normalizedQuestion.includes("real person") ||
    normalizedQuestion.includes("speak to someone")
  ) {
    return "For assistance from an NSPCL representative, please use the official contact details in your tender document, purchase order, or on the relevant official website. This chatbot cannot transfer your chat to an officer.";
  }

  if (
    normalizedQuestion.includes("who are you") ||
    normalizedQuestion.includes("your name") ||
    normalizedQuestion.includes("what can you do")
  ) {
    return "I am NSPCL Vendor Mitra, a rule-based vendor-support chatbot prototype. I can answer common questions about procurement procedures, tenders, EMD, GeM, invoices, and purchase orders. I cannot access confidential company systems or live vendor records.";
  }

  if (
    normalizedQuestion.includes("urgent") ||
    normalizedQuestion.includes("deadline today")
  ) {
    return "If your issue concerns an imminent tender deadline or contractual deadline, contact the official procurement portal helpdesk or the authorised NSPCL contact immediately. Follow the deadline and instructions in the applicable tender or contract.";
  }

  let bestMatch = null;
  let bestScore = 0;

  for (const faq of vendorFAQs) {
    let score = 0;

    const normalizedFAQQuestion = normalizeText(faq.question);

    // Exact question or close match receives a higher score.
    if (normalizedQuestion === normalizedFAQQuestion) {
      score += 100;
    }

    if (
      normalizedQuestion.includes(normalizedFAQQuestion) ||
      normalizedFAQQuestion.includes(normalizedQuestion)
    ) {
      score += 10;
    }

    // Match relevant keywords.
    for (const keyword of faq.keywords) {
      const normalizedKeyword = normalizeText(keyword);

      if (!normalizedKeyword) {
        continue;
      }

      if (normalizedQuestion.includes(normalizedKeyword)) {
        // Multiword matches tend to be more meaningful.
        score += normalizedKeyword.includes(" ") ? 8 : 3;
      }
    }

    // Count shared meaningful words.
    const questionWords = normalizedQuestion
      .split(" ")
      .filter(function (word) {
        return word.length > 2;
      });

    const faqWords = normalizedFAQQuestion.split(" ");

    for (const word of questionWords) {
      if (faqWords.includes(word)) {
        score += 2;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = faq;
    }
  }

  if (bestMatch && bestScore >= 3) {
    return bestMatch.answer;
  }

  return (
    "I'm sorry, I couldn't find a reliable answer to that question in my current FAQ library.\n\n" +
    "You can try asking about:\n" +
    "• Vendor registration\n" +
    "• Tenders and bid submission\n" +
    "• EMD and performance security\n" +
    "• GeM and MSME\n" +
    "• Purchase orders and invoices\n" +
    "• Payment enquiries\n" +
    "• Delivery extensions\n\n" +
    "For official confirmation, please refer to the applicable tender, purchase order, or authorised NSPCL contact."
  );
}

/* -------------------- DISPLAY CHAT MESSAGES -------------------- */

function addMessage(text, sender) {
  if (!chatMessages) {
    return;
  }

  const messageElement = document.createElement("div");

  messageElement.className =
    sender === "user"
      ? "message user-message"
      : "message bot-message";

  // Also provide general classes for compatibility with alternate CSS.
  messageElement.classList.add(sender === "user" ? "user" : "bot");

  const bubble = document.createElement("div");
  bubble.className = "message-bubble";

  // Use textContent so user input is displayed safely, not as HTML.
  // Preserve line breaks in the message.
  bubble.textContent = text;

  const time = document.createElement("div");
  time.className = "message-time";
  time.textContent = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  messageElement.appendChild(bubble);
  messageElement.appendChild(time);

  chatMessages.appendChild(messageElement);
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

  const indicator = document.createElement("div");
  indicator.id = "vmTypingIndicator";
  indicator.className = "message bot-message typing-message";
  indicator.setAttribute("aria-label", "Vendor Mitra is preparing a reply");

  const bubble = document.createElement("div");
  bubble.className = "message-bubble typing-bubble";
  bubble.textContent = "Vendor Mitra is typing...";

  indicator.appendChild(bubble);
  chatMessages.appendChild(indicator);

  scrollChatToBottom();
}

function removeTypingIndicator() {
  const indicator = document.getElementById("vmTypingIndicator");

  if (indicator) {
    indicator.remove();
  }
}

/* -------------------- CHAT HISTORY -------------------- */

const CHAT_STORAGE_KEY = "nspclVendorMitraChat_v1";

function saveMessage(text, sender) {
  try {
    const history = JSON.parse(
      sessionStorage.getItem(CHAT_STORAGE_KEY) || "[]"
    );

    history.push({
      text: text,
      sender: sender,
      time: Date.now()
    });

    // Keep the latest 100 messages.
    sessionStorage.setItem(
      CHAT_STORAGE_KEY,
      JSON.stringify(history.slice(-100))
    );
  } catch (error) {
    // Chat functionality continues even if storage is unavailable.
    console.warn("Chat history could not be saved.", error);
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

    // Remove the static welcome bubble only when restoring saved history.
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
    console.warn("Chat history could not be restored.", error);
  }
}

function clearChat() {
  if (!chatMessages) {
    chatMessages = document.getElementById("chatMessages");
  }

  if (chatMessages) {
    chatMessages.replaceChildren();

    // Restore a fresh welcome message.
    addMessage(
      "Hello! 👋 Welcome to NSPCL Vendor Mitra.\n\nI'm here to help with common vendor queries about registration, tenders, GeM, EMD, purchase orders, invoices, and delivery requirements.\n\nPlease select a quick question or type your query below.",
      "bot"
    );
  }

  try {
    sessionStorage.removeItem(CHAT_STORAGE_KEY);
  } catch (error) {
    console.warn("Chat history could not be cleared.", error);
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

/* -------------------- QUICK-QUESTION BUTTONS -------------------- */

function renderQuickQuestions() {
  if (!quickQuestionsContainer) {
    return;
  }

  quickQuestionsContainer.replaceChildren();

  const list = document.createElement("div");
  list.className = "quick-question-list";

  quickQuestionTexts.forEach(function (question) {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "quick-question";
    button.textContent = question;

    button.addEventListener("click", function () {
      sendMessage(question);
    });

    list.appendChild(button);
  });

  quickQuestionsContainer.appendChild(list);
}

/* -------------------- FAQ SECTION -------------------- */

function renderFAQs() {
  if (!faqListContainer) {
    return;
  }

  faqListContainer.replaceChildren();

  vendorFAQs.slice(0, 12).forEach(function (faq, index) {
    const item = document.createElement("div");
    item.className = "faq-item";

    const questionButton = document.createElement("button");
    questionButton.type = "button";
    questionButton.className = "faq-question";
    questionButton.textContent = faq.question;
    questionButton.setAttribute("aria-expanded", "false");
    questionButton.setAttribute("aria-controls", "vmFaqAnswer" + index);

    const answer = document.createElement("div");
    answer.className = "faq-answer";
    answer.id = "vmFaqAnswer" + index;
    answer.textContent = faq.answer;
    answer.hidden = true;

    questionButton.addEventListener("click", function () {
      const isExpanded =
        questionButton.getAttribute("aria-expanded") === "true";

      questionButton.setAttribute(
        "aria-expanded",
        String(!isExpanded)
      );

      answer.hidden = isExpanded;

      if (!isExpanded) {
        // Let the user ask the same FAQ directly in the chat.
        answer.setAttribute("tabindex", "-1");
      }
    });

    item.appendChild(questionButton);
    item.appendChild(answer);

    faqListContainer.appendChild(item);
  });
}

/* -------------------- OPTIONAL PUBLIC HELPERS -------------------- */

// Other HTML controls may use these functions if needed.
window.vmClearChat = clearChat;
window.vmGetBotResponse = getBotResponse;
