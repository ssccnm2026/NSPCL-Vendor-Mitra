
/* =========================================================
   NSPCL VENDOR MITRA
   Smarter bilingual FAQ assistant
   Works with the existing index.html and faq.js.
   No automatic popup opening is performed by this file.
   ========================================================= */

(function () {
  "use strict";

  const STORAGE_KEY = "nspclVendorMitraChat_v3";
  const LANGUAGE_KEY = "nspclVendorMitraLanguage_v1";
  const MIN_MATCH_SCORE = 4;
  let language = "en";
  let elements = {};
  let isSending = false;

  const TEXT = {
    en: {
      greeting:
        "Hello! I am NSPCL Vendor Mitra. I can help you find vendor FAQs about registration, tenders, EMD, GeM, MSME, purchase orders, invoices and GST. What would you like to know?",
      placeholder: "Type your question in English or Hindi...",
      send: "Send",
      clear: "Clear chat",
      quickTitle: "Quick questions",
      faqTitle: "Frequently asked questions",
      typing: "Finding the most relevant FAQ...",
      fallback:
        "I could not confidently match your question to an existing FAQ. Please try different words or select a topic below. For a case-specific or confidential matter, use the official NSPCL contact channels.",
      live:
        "I cannot access live tender, SAP, purchase order, invoice or payment records. Please check the relevant official NSPCL or tender portal, or contact the authorised NSPCL department.",
      matched: "Related FAQ:",
      hindiNote: "Hindi help: This answer is taken from the existing FAQ database. The original answer may be in English.",
      empty: "Please type a question first.",
      cleared: "Chat cleared. How can I help you?",
      open: "Open Vendor Mitra chat",
      close: "Close chat",
      language: "Language"
    },
    hi: {
      greeting:
        "नमस्ते! मैं NSPCL Vendor Mitra हूँ। मैं विक्रेता पंजीकरण, टेंडर, EMD, GeM, MSME, Purchase Order, Invoice और GST से जुड़े FAQs खोजने में मदद कर सकता हूँ। कृपया अपना प्रश्न हिंदी या English में लिखें।",
      placeholder: "अपना प्रश्न हिंदी या English में लिखें...",
      send: "भेजें",
      clear: "चैट साफ़ करें",
      quickTitle: "त्वरित प्रश्न",
      faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
      typing: "आपके प्रश्न से संबंधित FAQ खोज रहा हूँ...",
      fallback:
        "मुझे आपके प्रश्न से मेल खाता हुआ FAQ निश्चित रूप से नहीं मिला। कृपया दूसरे शब्दों में पूछें या नीचे दिए गए किसी विषय को चुनें। किसी विशेष या गोपनीय मामले के लिए NSPCL के आधिकारिक संपर्क माध्यम का उपयोग करें।",
      live:
        "मैं लाइव टेंडर, SAP, Purchase Order, Invoice या भुगतान रिकॉर्ड नहीं देख सकता। कृपया संबंधित आधिकारिक NSPCL/टेंडर पोर्टल देखें या अधिकृत NSPCL विभाग से संपर्क करें।",
      matched: "संबंधित FAQ:",
      hindiNote: "हिंदी सहायता: यह उत्तर मौजूदा FAQ डेटाबेस से लिया गया है। मूल उत्तर English में हो सकता है।",
      empty: "कृपया पहले अपना प्रश्न लिखें।",
      cleared: "चैट साफ़ कर दी गई है। मैं आपकी कैसे मदद कर सकता हूँ?",
      open: "Vendor Mitra चैट खोलें",
      close: "चैट बंद करें",
      language: "भाषा"
    }
  };

  /*
   * Bilingual synonyms improve matching even when a user does not
   * use the exact words stored in faq.js.
   */
  const TOPICS = [
    {
      id: "registration",
      words: [
        "vendor registration", "supplier registration", "register vendor",
        "new vendor", "vendor code", "supplier code", "onboarding",
        "विक्रेता पंजीकरण", "वेंडर रजिस्ट्रेशन", "नया विक्रेता",
        "विक्रेता कोड", "सप्लायर रजिस्ट्रेशन", "पंजीकरण"
      ]
    },
    {
      id: "tender",
      words: [
        "tender", "tender notice", "bid", "bidding", "tender document",
        "tender status", "e tender", "टेंडर", "निविदा", "बोली",
        "टेंडर दस्तावेज", "निविदा सूचना", "टेंडर स्टेटस"
      ]
    },
    {
      id: "emd",
      words: [
        "emd", "earnest money deposit", "bid security", "security deposit",
        "exemption from emd", "ईएमडी", "बयाना राशि", "बिड सिक्योरिटी",
        "ईएमडी छूट", "जमानत राशि"
      ]
    },
    {
      id: "gem",
      words: [
        "gem", "government e marketplace", "gem portal", "government marketplace",
        "जेम", "GeM पोर्टल", "सरकारी ई मार्केटप्लेस"
      ]
    },
    {
      id: "msme",
      words: [
        "msme", "udyam", "micro small medium", "msme benefit",
        "एमएसएमई", "उद्यम", "उद्यम पंजीकरण", "एमएसएमई लाभ"
      ]
    },
    {
      id: "purchase",
      words: [
        "purchase order", "po", "order amendment", "delivery date",
        "delivery extension", "work order", "purchase order status",
        "परचेज ऑर्डर", "पीओ", "क्रय आदेश", "ऑर्डर संशोधन",
        "डिलीवरी तारीख", "डिलीवरी अवधि", "कार्यादेश"
      ]
    },
    {
      id: "invoice",
      words: [
        "invoice", "bill submission", "invoice submission", "bill status",
        "payment status", "payment pending", "payment release",
        "इनवॉइस", "बिल जमा", "बिल की स्थिति", "भुगतान स्थिति",
        "पेमेंट पेंडिंग", "भुगतान कब होगा"
      ]
    },
    {
      id: "gst",
      words: [
        "gst", "tax invoice", "gst number", "gstin", "tax details",
        "जीएसटी", "टैक्स इनवॉइस", "जीएसटी नंबर", "कर विवरण"
      ]
    },
    {
      id: "technical",
      words: [
        "technical support", "technical query", "specification",
        "technical clarification", "drawing", "inspection",
        "तकनीकी सहायता", "तकनीकी प्रश्न", "तकनीकी स्पष्टीकरण",
        "स्पेसिफिकेशन", "निरीक्षण", "ड्रॉइंग"
      ]
    },
    {
      id: "contact",
      words: [
        "contact", "contact person", "phone number", "email address",
        "helpdesk", "help desk", "whom to contact",
        "संपर्क", "संपर्क व्यक्ति", "फोन नंबर", "ईमेल",
        "हेल्पडेस्क", "किससे संपर्क करें"
      ]
    }
  ];

  const LIVE_STATUS_WORDS = [
    "live status", "current status", "my payment", "my invoice",
    "my po status", "my tender status", "payment released",
    "invoice paid", "status of my", "check my payment",
    "मेरे भुगतान", "मेरे बिल", "मेरे इनवॉइस", "मेरे पीओ",
    "मेरे टेंडर का स्टेटस", "भुगतान जारी हुआ", "पेमेंट आया",
    "भुगतान कब होगा", "वर्तमान स्थिति"
  ];

  function byId(id) {
    return document.getElementById(id);
  }

  function getElements() {
    return {
      chatbot: byId("chatbot"),
      messages: byId("chatMessages"),
      quickQuestions: byId("quickQuestions"),
      form: byId("chatForm"),
      input: byId("chatInput"),
      sendButton: byId("sendButton"),
      clearButton: byId("clearChat"),
      faqList: byId("faqList"),
      launcher: byId("chatLauncher")
    };
  }

  function normalise(value) {
    return String(value == null ? "" : value)
      .toLocaleLowerCase()
      .normalize("NFKC")
      .replace(/[.,!?;:()[\]{}"'`~@#$%^&*_+=<>/\\|]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function getFaqs() {
    const source = window.NSPCL_FAQS;

    if (!source) return [];

    try {
      if (typeof source.getAll === "function") {
        const result = source.getAll();
        if (Array.isArray(result)) return result;
      }

      if (Array.isArray(source)) return source;

      if (Array.isArray(source.faqs)) return source.faqs;
      if (Array.isArray(source.items)) return source.items;
    } catch (error) {
      console.warn("Vendor Mitra could not read the FAQ database.", error);
    }

    return [];
  }

  function firstValue(object, keys) {
    if (!object || typeof object !== "object") return "";

    for (const key of keys) {
      if (object[key] != null && object[key] !== "") {
        const value = object[key];
        if (Array.isArray(value)) return value.join(" ");
        if (typeof value === "string" || typeof value === "number") {
          return String(value);
        }
      }
    }
    return "";
  }

  function faqQuestion(faq) {
    return firstValue(faq, [
      "question", "q", "title", "query", "faqQuestion"
    ]);
  }

  function faqAnswer(faq) {
    return firstValue(faq, [
      "answer", "a", "response", "content", "faqAnswer", "description"
    ]);
  }

  function faqCategory(faq) {
    return firstValue(faq, [
      "category", "section", "topic", "group"
    ]);
  }

  function faqKeywords(faq) {
    return firstValue(faq, [
      "keywords", "tags", "synonyms", "searchTerms", "search_terms"
    ]);
  }

  function findTopic(query) {
    const q = normalise(query);
    let best = null;
    let bestLength = 0;

    TOPICS.forEach(function (topic) {
      topic.words.forEach(function (word) {
        const w = normalise(word);
        if (w && q.includes(w) && w.length > bestLength) {
          best = topic;
          bestLength = w.length;
        }
      });
    });

    return best;
  }

  function topicHindi(topicId) {
    const labels = {
      registration: "विक्रेता पंजीकरण",
      tender: "टेंडर और निविदा",
      emd: "EMD / बयाना राशि",
      gem: "GeM पोर्टल",
      msme: "MSME / उद्यम",
      purchase: "Purchase Order / क्रय आदेश",
      invoice: "Invoice और भुगतान",
      gst: "GST / कर विवरण",
      technical: "तकनीकी सहायता",
      contact: "संपर्क जानकारी"
    };
    return labels[topicId] || "संबंधित विषय";
  }

  function scoreFaq(query, faq) {
    const q = normalise(query);
    const question = normalise(faqQuestion(faq));
    const category = normalise(faqCategory(faq));
    const keywords = normalise(faqKeywords(faq));
    const answer = normalise(faqAnswer(faq));

    if (!q || !question) return 0;

    let score = 0;

    if (q === question) score += 12;
    if (question.includes(q) || q.includes(question)) score += 7;

    const queryTokens = q.split(" ").filter(function (word) {
      return word.length > 1;
    });
    const questionTokens = question.split(" ");
    const keywordTokens = keywords.split(" ");
    const categoryTokens = category.split(" ");

    queryTokens.forEach(function (word) {
      if (questionTokens.includes(word)) score += 3;
      if (keywordTokens.includes(word)) score += 4;
      if (categoryTokens.includes(word)) score += 2;
      if (answer.includes(word)) score += 0.5;
    });

    const topic = findTopic(q);
    if (topic) {
      const faqText = question + " " + category + " " + keywords;
      topic.words.forEach(function (word) {
        const w = normalise(word);
        if (w && faqText.includes(w)) score += 3;
      });
    }

    return score;
  }

  function findBestFAQ(query) {
    const faqs = getFaqs();
    let bestFaq = null;
    let bestScore = 0;

    faqs.forEach(function (faq) {
      const score = scoreFaq(query, faq);
      if (score > bestScore) {
        bestScore = score;
        bestFaq = faq;
      }
    });

    if (bestScore < MIN_MATCH_SCORE) return null;
    return { faq: bestFaq, score: bestScore };
  }

  function isGreeting(query) {
    const q = normalise(query);
    return [
      "hi", "hello", "hey", "good morning", "good afternoon",
      "good evening", "namaste", "namaskar", "नमस्ते", "नमस्कार",
      "हेलो", "हाय", "सुप्रभात"
    ].includes(q);
  }

  function isThanks(query) {
    const q = normalise(query);
    return [
      "thanks", "thank you", "thankyou", "धन्यवाद",
      "बहुत धन्यवाद", "शुक्रिया"
    ].includes(q);
  }

  function isIdentityQuestion(query) {
    const q = normalise(query);
    return [
      "who are you", "what are you", "what is vendor mitra",
      "आप कौन हैं", "तुम कौन हो", "वेंडर मित्र क्या है",
      "आप क्या कर सकते हैं"
    ].some(function (phrase) {
      return q === normalise(phrase);
    });
  }

  function isLiveStatusQuestion(query) {
    const q = normalise(query);
    return LIVE_STATUS_WORDS.some(function (phrase) {
      return q.includes(normalise(phrase));
    });
  }

  function buildAnswer(query) {
    const t = TEXT[language];

    if (!normalise(query)) return t.empty;

    if (isGreeting(query)) return t.greeting;

    if (isThanks(query)) {
      return language === "hi"
        ? "आपका स्वागत है! यदि आपके पास कोई और प्रश्न है, तो पूछिए।"
        : "You're welcome! Feel free to ask another vendor-related question.";
    }

    if (isIdentityQuestion(query)) {
      return language === "hi"
        ? "NSPCL Vendor Mitra एक FAQ सहायता चैटबॉट है। यह उपलब्ध FAQs के आधार पर विक्रेता पंजीकरण, टेंडर, EMD, GeM, MSME, Purchase Order, Invoice और GST से जुड़े सामान्य प्रश्नों में मदद करता है।"
        : "NSPCL Vendor Mitra is an FAQ assistant that helps vendors find general information about registration, tenders, EMD, GeM, MSME, purchase orders, invoices and GST.";
    }

    if (isLiveStatusQuestion(query)) return t.live;

    const result = findBestFAQ(query);

    if (result) {
      const question = faqQuestion(result.faq);
      const answer = faqAnswer(result.faq);
      const category = faqCategory(result.faq);

      if (!answer) {
        return language === "hi"
          ? "मुझे संबंधित FAQ मिला, लेकिन उसमें उत्तर उपलब्ध नहीं है। कृपया आधिकारिक NSPCL संपर्क माध्यम से पुष्टि करें।"
          : "I found a related FAQ, but it does not contain an answer. Please confirm through an official NSPCL contact channel.";
      }

      if (language === "hi") {
        return "आपके प्रश्न से संबंधित FAQ:\n" +
          (question ? question + "\n\n" : "") +
          answer +
          "\n\n" + t.hindiNote +
          (category ? "\n\nविषय: " + topicHindi(findTopic(query)?.id || "") : "");
      }

      return (question ? question + "\n\n" : "") + answer;
    }

    const topic = findTopic(query);

    if (topic) {
      const topicFaqs = getFaqs().filter(function (faq) {
        const content = normalise(
          faqQuestion(faq) + " " + faqCategory(faq) + " " + faqKeywords(faq)
        );
        return topic.words.some(function (word) {
          const w = normalise(word);
          return w && content.includes(w);
        });
      });

      if (topicFaqs.length) {
        const suggestions = topicFaqs.slice(0, 3).map(function (faq) {
          return "• " + faqQuestion(faq);
        }).join("\n");

        return language === "hi"
          ? "इस विषय पर ये FAQ उपलब्ध हैं:\n" + suggestions +
            "\n\nकृपया इनमें से किसी प्रश्न को चुनें या थोड़ा और विवरण लिखें।"
          : "I found these FAQs for this topic:\n" + suggestions +
            "\n\nChoose one of these questions or add a little more detail.";
      }
    }

    return t.fallback;
  }

  function addMessage(text, sender, save) {
    if (!elements.messages) return null;

    const wrapper = document.createElement("div");
    wrapper.className = "message " +
      (sender === "user" ? "user-message" : "bot-message");
    wrapper.setAttribute("data-sender", sender);

    const body = document.createElement("div");
    body.className = "message-content";
    body.textContent = String(text);
    wrapper.appendChild(body);

    const time = document.createElement("small");
    time.className = "message-time";
    time.textContent = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
    wrapper.appendChild(time);

    elements.messages.appendChild(wrapper);
    elements.messages.scrollTop = elements.messages.scrollHeight;

    if (save) saveHistory();
    return wrapper;
  }

  function saveHistory() {
    if (!elements.messages) return;

    const history = Array.from(
      elements.messages.querySelectorAll(".message")
    ).map(function (node) {
      const body = node.querySelector(".message-content");
      return {
        sender: node.getAttribute("data-sender") || "bot",
        text: body ? body.textContent : ""
      };
    });

    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(-60)));
    } catch (error) {
      console.warn("Chat history could not be saved.", error);
    }
  }

  function restoreHistory() {
    if (!elements.messages) return false;

    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (!stored) return false;

      const history = JSON.parse(stored);
      if (!Array.isArray(history) || history.length === 0) return false;

      elements.messages.replaceChildren();
      history.slice(-60).forEach(function (item) {
        if (item && typeof item.text === "string") {
          addMessage(item.text, item.sender === "user" ? "user" : "bot", false);
        }
      });
      return true;
    } catch (error) {
      console.warn("Saved chat history could not be restored.", error);
      return false;
    }
  }

  function showTyping() {
    if (!elements.messages) return null;

    const node = document.createElement("div");
    node.className = "message bot-message vm-typing";
    node.setAttribute("aria-live", "polite");

    const body = document.createElement("div");
    body.className = "message-content";
    body.textContent = TEXT[language].typing;

    node.appendChild(body);
    elements.messages.appendChild(node);
    elements.messages.scrollTop = elements.messages.scrollHeight;
    return node;
  }

  function sendMessage(forcedQuestion) {
    if (isSending) return;

    const query = typeof forcedQuestion === "string"
      ? forcedQuestion.trim()
      : (elements.input ? elements.input.value.trim() : "");

    if (!query) {
      addMessage(TEXT[language].empty, "bot", true);
      return;
    }

    if (elements.input) elements.input.value = "";
    addMessage(query, "user", true);

    isSending = true;
    if (elements.sendButton) elements.sendButton.disabled = true;

    const typing = showTyping();

    window.setTimeout(function () {
      if (typing) typing.remove();
      addMessage(buildAnswer(query), "bot", true);
      isSending = false;
      if (elements.sendButton) elements.sendButton.disabled = false;
      if (elements.input && !forcedQuestion) elements.input.focus();
    }, 180);
  }

  function addLanguageControls() {
    if (!elements.chatbot || byId("vmLanguageControls")) return;

    const bar = document.createElement("div");
    bar.id = "vmLanguageControls";
    bar.setAttribute("aria-label", "Chat language");
    bar.style.cssText =
      "display:flex;align-items:center;justify-content:flex-end;" +
      "gap:6px;padding:8px 12px;flex-wrap:wrap;";

    const label = document.createElement("span");
    label.textContent = "Language / भाषा:";
    label.style.cssText = "font-size:12px;opacity:.8;";
    bar.appendChild(label);

    [
      { value: "en", label: "English" },
      { value: "hi", label: "हिन्दी" }
    ].forEach(function (item) {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = item.label;
      button.dataset.vmLanguage = item.value;
      button.style.cssText =
        "border:1px solid #cbd5e1;border-radius:16px;padding:5px 10px;" +
        "background:#fff;color:#1e3a5f;cursor:pointer;font-size:12px;";
      button.addEventListener("click", function () {
        setLanguage(item.value);
      });
      bar.appendChild(button);
    });

    const form = elements.form;
    if (form && form.parentNode) {
      form.parentNode.insertBefore(bar, form);
    } else {
      elements.chatbot.insertBefore(bar, elements.chatbot.firstChild);
    }
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage === "hi" ? "hi" : "en";

    try {
      sessionStorage.setItem(LANGUAGE_KEY, language);
    } catch (error) {
      // The language switch still works if storage is unavailable.
    }

    updateLanguageUI();
    renderQuickQuestions();
    renderFaqAccordion();
  }

  function updateLanguageUI() {
    const t = TEXT[language];

    if (elements.input) {
      elements.input.placeholder = t.placeholder;
      elements.input.setAttribute("aria-label", t.placeholder);
    }

    if (elements.sendButton) {
      elements.sendButton.textContent = t.send;
      elements.sendButton.setAttribute("aria-label", t.send);
    }

    if (elements.clearButton) {
      elements.clearButton.textContent = t.clear;
      elements.clearButton.setAttribute("aria-label", t.clear);
    }

    document.querySelectorAll("[data-vm-language]").forEach(function (button) {
      const selected = button.dataset.vmLanguage === language;
      button.setAttribute("aria-pressed", selected ? "true" : "false");
      button.style.fontWeight = selected ? "700" : "400";
      button.style.borderColor = selected ? "#1e5aa8" : "#cbd5e1";
      button.style.background = selected ? "#eaf2ff" : "#fff";
    });

    const quickHeading = byId("vmQuickHeading");
    if (quickHeading) quickHeading.textContent = t.quickTitle;

    const faqHeading = byId("vmFaqHeading");
    if (faqHeading) faqHeading.textContent = t.faqTitle;
  }

  function renderQuickQuestions() {
    const container = elements.quickQuestions;
    if (!container) return;

    const faqs = getFaqs();
    const chosen = faqs.slice(0, 5);
    container.replaceChildren();

    chosen.forEach(function (faq) {
      const question = faqQuestion(faq);
      if (!question) return;

      const button = document.createElement("button");
      button.type = "button";
      button.className = "quick-question";
      button.textContent = question;
      button.addEventListener("click", function () {
        // Open only after the visitor explicitly clicks a quick question.
        if (elements.chatbot) {
          elements.chatbot.classList.add("vm-chat-open");
        }
        sendMessage(question);
      });
      container.appendChild(button);
    });
  }

  function renderFaqAccordion() {
    const container = elements.faqList;
    if (!container) return;

    const faqs = getFaqs();
    if (!faqs.length) return;

    container.replaceChildren();

    faqs.forEach(function (faq, index) {
      const question = faqQuestion(faq);
      const answer = faqAnswer(faq);
      if (!question || !answer) return;

      const details = document.createElement("details");
      details.className = "vm-faq-item";

      const summary = document.createElement("summary");
      summary.textContent = question;

      const answerNode = document.createElement("div");
      answerNode.className = "vm-faq-answer";
      answerNode.textContent = answer;

      details.appendChild(summary);
      details.appendChild(answerNode);
      container.appendChild(details);
    });
  }

  function clearChat() {
    if (elements.messages) elements.messages.replaceChildren();

    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      // Clearing the visible conversation still works.
    }

    addMessage(TEXT[language].cleared, "bot", true);
  }

  function initialise() {
    elements = getElements();

    if (!elements.messages || !elements.form || !elements.input) {
      console.warn(
        "Vendor Mitra: expected chat elements were not found. " +
        "Check that index.html retains the existing chat element IDs."
      );
      return;
    }

    try {
      const savedLanguage = sessionStorage.getItem(LANGUAGE_KEY);
      if (savedLanguage === "hi" || savedLanguage === "en") {
        language = savedLanguage;
      }
    } catch (error) {
      // Default language is English.
    }

    addLanguageControls();

    if (elements.form.dataset.vmBound !== "true") {
      elements.form.dataset.vmBound = "true";
      elements.form.addEventListener("submit", function (event) {
        event.preventDefault();
        sendMessage();
      });
    }

    if (elements.clearButton &&
        elements.clearButton.dataset.vmBound !== "true") {
      elements.clearButton.dataset.vmBound = "true";
      elements.clearButton.addEventListener("click", clearChat);
    }

    const restored = restoreHistory();
    if (!restored) addMessage(TEXT[language].greeting, "bot", true);

    renderQuickQuestions();
    renderFaqAccordion();
    updateLanguageUI();

    // Public functions retained for existing HTML buttons and links.
    window.sendMessage = sendMessage;
    window.vmAsk = function (question) {
      if (typeof question === "string" && question.trim()) {
        sendMessage(question);
      }
    };
    window.vmClearChat = clearChat;
    window.vmGetBotResponse = buildAnswer;
    window.vmSetLanguage = setLanguage;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialise, { once: true });
  } else {
    initialise();
  }
})();
