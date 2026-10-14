
/* =========================================================
   NSPCL VENDOR MITRA
   Vendor Support Chatbot - Complete JavaScript
   Free GitHub Pages Compatible
   ========================================================= */

"use strict";

/* ---------- 1. CONFIGURATION ---------- */

const CONFIG = {
    botName: "NSPCL Vendor Mitra",
    organization: "NTPC-SAIL Power Company Limited (NSPCL)",
    typingDelay: 650,
    maxMessageLength: 1000,
    enableSessionHistory: true
};

/* ---------- 2. FAQ KNOWLEDGE BASE ---------- */

const FAQS = [
    {
        category: "Vendor Registration",
        keywords: [
            "vendor registration", "register vendor", "new vendor",
            "supplier registration", "enlistment", "enlist supplier",
            "become a vendor", "vendor enlistment"
        ],
        question: "How can I register as an NSPCL vendor?",
        answer:
            "To begin vendor registration:\n\n" +
            "1. Visit the official NSPCL website: https://www.nspcl.co.in/\n" +
            "2. Look for the relevant vendor, procurement or tender section.\n" +
            "3. Check the registration procedure and eligibility conditions.\n" +
            "4. Prepare the documents specified in the applicable notice.\n" +
            "5. Submit your application through the designated official channel.\n\n" +
            "The applicable procedure may differ depending on the nature of the supply or service. Please verify the latest requirements with NSPCL."
    },

    {
        category: "GeM",
        keywords: [
            "gem", "government e marketplace", "government e-marketplace",
            "gem registration", "gem seller", "seller registration",
            "gem portal", "register on gem"
        ],
        question: "How do I register on GeM?",
        answer:
            "GeM (Government e-Marketplace) is the Government of India's online procurement platform.\n\n" +
            "To get started:\n" +
            "1. Visit https://gem.gov.in/\n" +
            "2. Select the seller or service provider registration option.\n" +
            "3. Follow the current registration and verification process.\n" +
            "4. Complete your organization and product/service details.\n" +
            "5. Review the applicable terms before participating in bids.\n\n" +
            "GeM registration and NSPCL-specific eligibility are separate matters. Always check the tender's requirements."
    },

    {
        category: "Tender Information",
        keywords: [
            "tender", "tenders", "tender notice", "upcoming tender",
            "open tender", "tender enquiry", "nspcl tender",
            "find tender", "tender list", "procurement notice"
        ],
        question: "Where can I find NSPCL tenders?",
        answer:
            "You can check the following official portals:\n\n" +
            "• NSPCL website: https://www.nspcl.co.in/\n" +
            "• Central Public Procurement Portal: https://eprocure.gov.in/eprocure/app\n" +
            "• GeM: https://gem.gov.in/\n\n" +
            "Search using NSPCL or the relevant tender description. Check the tender reference, issuing unit, submission deadline, amendments and eligibility conditions before bidding."
    },

    {
        category: "Bid Submission",
        keywords: [
            "submit bid", "bid submission", "upload bid",
            "how to bid", "tender submission", "online bidding",
            "technical bid", "price bid", "financial bid"
        ],
        question: "How do I submit a tender bid?",
        answer:
            "A typical electronic bidding process involves:\n\n" +
            "1. Read the complete tender document and amendments.\n" +
            "2. Confirm eligibility and submission requirements.\n" +
            "3. Prepare the technical and financial documents in the prescribed format.\n" +
            "4. Complete the required portal registration and digital-signature steps, where applicable.\n" +
            "5. Upload the documents and submit the bid before the deadline.\n" +
            "6. Save the submission acknowledgement.\n\n" +
            "Follow the specific tender instructions. The applicable portal may prescribe a different process."
    },

    {
        category: "Tender Documents",
        keywords: [
            "documents required", "required documents", "documents for tender",
            "tender documents", "document checklist", "what documents",
            "eligibility documents", "documents needed"
        ],
        question: "What documents may be required for a tender?",
        answer:
            "Depending on the tender, the checklist may include:\n\n" +
            "• Company or business registration details.\n" +
            "• PAN and applicable GST registration details.\n" +
            "• Bank details and supporting documents, if requested.\n" +
            "• Relevant experience and past-performance documents.\n" +
            "• Technical specifications and compliance statements.\n" +
            "• Signed tender forms and declarations.\n" +
            "• EMD or exemption documents, where applicable.\n" +
            "• Financial statements or other qualification documents, if specified.\n\n" +
            "This is a general checklist, not an official NSPCL requirement. The tender document takes precedence."
    },

    {
        category: "EMD",
        keywords: [
            "emd", "earnest money deposit", "bid security",
            "emd exemption", "exemption from emd", "bid security exemption"
        ],
        question: "What is EMD?",
        answer:
            "EMD stands for Earnest Money Deposit. It may be required as bid security in a tender.\n\n" +
            "Whether EMD is applicable, its amount, acceptable payment method, exemptions and refund conditions depend on the tender and applicable procurement rules.\n\n" +
            "Please check the tender's EMD clause and any amendments before submitting your bid."
    },

    {
        category: "Performance Security",
        keywords: [
            "security deposit", "performance security",
            "performance bank guarantee", "pbg", "bank guarantee",
            "contract security", "performance guarantee"
        ],
        question: "What is Performance Security?",
        answer:
            "Performance Security is a contractual security that may be required from a successful bidder to secure performance of the contract.\n\n" +
            "The amount, acceptable instrument, validity, submission deadline, extension and release conditions are governed by the applicable tender and purchase order.\n\n" +
            "Please refer to the relevant contractual clauses rather than assuming a standard percentage or validity period."
    },

    {
        category: "Purchase Orders",
        keywords: [
            "purchase order", "po", "purchase order copy",
            "order status", "po status", "order details",
            "po amendment", "change in purchase order"
        ],
        question: "How can I get my Purchase Order details?",
        answer:
            "For Purchase Order (PO) details:\n\n" +
            "1. Refer to the PO issued by NSPCL.\n" +
            "2. Check the order number, issuing unit, scope, prices and delivery schedule.\n" +
            "3. For a missing copy, amendment or clarification, contact the purchasing officer or the official contact mentioned in your order.\n\n" +
            "This chatbot cannot access internal SAP records or retrieve an individual vendor's PO."
    },

    {
        category: "Invoice and Payment",
        keywords: [
            "payment", "payment status", "vendor payment",
            "invoice", "invoice status", "bill status",
            "payment pending", "payment delay", "bill submitted",
            "when will payment", "outstanding payment"
        ],
        question: "How can I check my invoice or payment status?",
        answer:
            "For an invoice or payment enquiry:\n\n" +
            "1. Keep your PO or contract number available.\n" +
            "2. Note the invoice number and submission date.\n" +
            "3. Check whether the invoice and supporting documents have been submitted as required.\n" +
            "4. Contact the designated NSPCL finance or purchasing contact using the official communication channel.\n\n" +
            "Payment processing may depend on contract terms, receipt or completion confirmation, document verification and applicable approvals.\n\n" +
            "For your privacy, do not enter bank account numbers or other confidential financial details into this public chatbot."
    },

    {
        category: "GST and Tax",
        keywords: [
            "gst", "gst invoice", "tax invoice", "gst details",
            "tds", "tax deduction", "pan", "tax certificate"
        ],
        question: "What should I check in a GST invoice?",
        answer:
            "Check the applicable invoice requirements, including:\n\n" +
            "• Supplier and recipient details.\n" +
            "• GSTINs, where applicable.\n" +
            "• Invoice number and date.\n" +
            "• Description, quantity and value of goods or services.\n" +
            "• Applicable tax rates and amounts.\n" +
            "• PO or contract references, where required.\n\n" +
            "Requirements depend on the transaction and applicable tax rules. Follow the contract and current GST requirements."
    },

    {
        category: "Delivery",
        keywords: [
            "delivery", "delivery schedule", "delivery date",
            "delivery extension", "extension of delivery",
            "dispatch", "material dispatch", "late delivery",
            "delivery period"
        ],
        question: "How can I request a delivery extension?",
        answer:
            "For a delivery extension request:\n\n" +
            "1. Refer to the delivery clause in your PO or contract.\n" +
            "2. Submit a written request to the designated NSPCL purchasing contact.\n" +
            "3. Mention the PO number, affected items, original delivery date, reasons and proposed revised schedule.\n" +
            "4. Attach relevant supporting documents, if applicable.\n\n" +
            "An extension is subject to the applicable contract and approval by the authorized official. Do not assume an extension is approved until formally confirmed."
    },

    {
        category: "MSME",
        keywords: [
            "msme", "msme registration", "udyam",
            "udyam registration", "micro small medium enterprise",
            "msme benefit", "msme payment"
        ],
        question: "How can an MSME supplier provide registration details?",
        answer:
            "MSME suppliers can refer to the official Udyam Registration portal: https://udyamregistration.gov.in/\n\n" +
            "If MSME status is relevant to an NSPCL tender or contract, review the specific tender conditions and submit the applicable supporting documents through the prescribed channel.\n\n" +
            "Eligibility for a particular benefit depends on the applicable rules and procurement conditions."
    },

    {
        category: "Vendor Profile",
        keywords: [
            "update vendor", "vendor details", "change address",
            "change bank details", "bank detail update",
            "vendor profile", "change gstin", "update gst"
        ],
        question: "How can I update vendor details?",
        answer:
            "For a vendor profile update:\n\n" +
            "1. Identify which details need updating.\n" +
            "2. Contact the designated NSPCL vendor-registration or purchasing contact.\n" +
            "3. Follow the official verification process and provide only the requested supporting documents.\n" +
            "4. Obtain confirmation after the change is processed.\n\n" +
            "Changes to bank details should be handled only through verified official channels. Never share bank credentials, passwords or OTPs with this chatbot."
    },

    {
        category: "Technical Queries",
        keywords: [
            "technical specification", "technical clarification",
            "technical query", "drawing", "datasheet",
            "make and model", "equivalent make", "technical compliance"
        ],
        question: "Where can I get technical clarification?",
        answer:
            "Please review the technical specification, drawings, scope of supply and applicable amendments in the tender or PO.\n\n" +
            "If clarification is still required, submit a written query through the tender portal or to the authorized NSPCL contact identified in the tender documents.\n\n" +
            "Do not rely on this chatbot for binding technical approval or acceptance of an alternative make or specification."
    },

    {
        category: "Tender Amendment",
        keywords: [
            "corrigendum", "amendment", "tender amendment",
            "revised tender", "deadline extension",
            "date extension", "revised due date"
        ],
        question: "How can I find tender amendments or corrigenda?",
        answer:
            "Visit the portal where the tender was published and search for the original tender reference.\n\n" +
            "Check all corrigenda, revised schedules, clarifications and changes to eligibility or submission conditions.\n\n" +
            "Use the latest applicable tender documents and observe the revised deadlines officially published by the issuing authority."
    },

    {
        category: "Contact Support",
        keywords: [
            "contact", "contact details", "helpline",
            "customer support", "vendor support",
            "whom to contact", "email address", "phone number",
            "talk to person", "human support"
        ],
        question: "How can I contact NSPCL for assistance?",
        answer:
            "Please visit the official NSPCL website: https://www.nspcl.co.in/\n\n" +
            "Use the contact information or department details published there, or refer to the contact person named in your tender, PO or contract.\n\n" +
            "This demo does not have a verified live vendor-support telephone number or email address."
    },

    {
        category: "About NSPCL",
        keywords: [
            "about nspcl", "what is nspcl",
            "nspcl full form", "company information",
            "ntpc sail power company"
        ],
        question: "What is NSPCL?",
        answer:
            "NSPCL stands for NTPC-SAIL Power Company Limited. It is a joint venture of NTPC Limited and Steel Authority of India Limited (SAIL).\n\n" +
            "For official company information, visit https://www.nspcl.co.in/."
    }
];


/* ---------- 3. QUICK QUESTIONS ---------- */

const QUICK_QUESTIONS = [
    "How can I register as a vendor?",
    "Where can I find NSPCL tenders?",
    "What documents are required for a tender?",
    "How can I check my payment status?",
    "How do I submit a bid?",
    "How can I contact NSPCL?"
];


/* ---------- 4. DOM ELEMENTS ---------- */

const chatMessages = document.getElementById("chatMessages");

const chatForm =
    document.getElementById("chatForm") ||
    document.querySelector(".chat-input-form");

const chatInput =
    document.getElementById("chatInput") ||
    document.querySelector(".chat-input");

const sendButton =
    document.getElementById("sendButton") ||
    document.querySelector(".send-button");

const quickQuestionsContainer =
    document.getElementById("quickQuestions") ||
    document.querySelector(".quick-question-list");

const clearChatButton =
    document.getElementById("clearChat");

const faqContainer =
    document.getElementById("faqList") ||
    document.querySelector(".faq-list");


/* ---------- 5. SESSION STATE ---------- */

let isBotTyping = false;

let conversation = [];

if (CONFIG.enableSessionHistory) {
    try {
        const savedConversation = sessionStorage.getItem(
            "nspclVendorMitraHistory"
        );

        if (savedConversation) {
            const parsed = JSON.parse(savedConversation);

            if (Array.isArray(parsed)) {
                conversation = parsed.filter(function (message) {
                    return (
                        message &&
                        ["bot", "user"].includes(message.role) &&
                        typeof message.text === "string"
                    );
                }).slice(-50);
            }
        }
    } catch (error) {
        conversation = [];
    }
}


/* ---------- 6. GENERAL HELPERS ---------- */

function normalizeText(text) {
    return String(text || "")
        .toLowerCase()
        .replace(/[^\w\s-]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}


function escapeHTML(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function formatMessage(text) {
    /*
     * All user-supplied text is escaped before rendering.
     * Newlines and bullet points are formatted safely.
     */

    return escapeHTML(text)
        .replace(/\n/g, "<br>")
        .replace(
            /(https:\/\/[^\s<]+)/g,
            '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
        );
}


function getCurrentTime() {
    return new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });
}


function saveConversation() {
    if (!CONFIG.enableSessionHistory) return;

    try {
        sessionStorage.setItem(
            "nspclVendorMitraHistory",
            JSON.stringify(conversation.slice(-50))
        );
    } catch (error) {
        // The chatbot continues to work if storage is unavailable.
    }
}


function scrollToLatestMessage() {
    if (chatMessages) {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}


/* ---------- 7. RENDER A CHAT MESSAGE ---------- */

function addMessage(role, text, options = {}) {
    if (!chatMessages) return;

    const message = {
        role: role,
        text: String(text),
        time: getCurrentTime()
    };

    if (!options.skipSave) {
        conversation.push(message);
        conversation = conversation.slice(-50);
        saveConversation();
    }

    const messageElement = document.createElement("div");

    messageElement.className = "message " + role;

    const avatar = document.createElement("div");
    avatar.className = "message-avatar";
    avatar.textContent = role === "bot" ? "V" : "Y";
    avatar.setAttribute("aria-hidden", "true");

    const content = document.createElement("div");
    content.className = "message-content";

    const messageText = document.createElement("div");
    messageText.innerHTML = formatMessage(text);

    const time = document.createElement("span");
    time.className = "message-time";
    time.textContent = message.time;

    content.appendChild(messageText);
    content.appendChild(time);

    messageElement.appendChild(avatar);
    messageElement.appendChild(content);

    chatMessages.appendChild(messageElement);

    scrollToLatestMessage();
}


/* ---------- 8. RESTORE CHAT HISTORY ---------- */

function restoreConversation() {
    if (!chatMessages) return;

    chatMessages.innerHTML = "";

    if (conversation.length === 0) {
        showWelcomeMessage();
        return;
    }

    conversation.forEach(function (message) {
        addMessage(message.role, message.text, {
            skipSave: true
        });
    });
}


/* ---------- 9. WELCOME MESSAGE ---------- */

function showWelcomeMessage() {
    addMessage(
        "bot",
        "Namaste! Welcome to NSPCL Vendor Mitra.\n\n" +
        "I can help you find general information about vendor registration, " +
        "tenders, GeM, bid submission, purchase orders, invoices and other " +
        "procurement-related topics.\n\n" +
        "How may I assist you today?"
    );
}


/* ---------- 10. TYPING INDICATOR ---------- */

function showTypingIndicator() {
    if (!chatMessages) return;

    removeTypingIndicator();

    const typingMessage = document.createElement("div");

    typingMessage.className = "message bot";
    typingMessage.id = "typingIndicator";

    const avatar = document.createElement("div");
    avatar.className = "message-avatar";
    avatar.textContent = "V";

    const indicator = document.createElement("div");
    indicator.className = "typing-indicator";
    indicator.setAttribute("aria-label", "Vendor Mitra is typing");

    for (let i = 0; i < 3; i++) {
        indicator.appendChild(document.createElement("span"));
    }

    typingMessage.appendChild(avatar);
    typingMessage.appendChild(indicator);

    chatMessages.appendChild(typingMessage);

    scrollToLatestMessage();
}


function removeTypingIndicator() {
    const indicator = document.getElementById("typingIndicator");

    if (indicator) {
        indicator.remove();
    }
}


/* ---------- 11. MATCH QUESTIONS TO FAQS ---------- */

function findBestFAQ(userText) {
    const input = normalizeText(userText);

    if (!input) return null;

    let bestMatch = null;
    let highestScore = 0;

    FAQS.forEach(function (faq) {
        let score = 0;

        faq.keywords.forEach(function (keyword) {
            const normalizedKeyword = normalizeText(keyword);

            if (input === normalizedKeyword) {
                score += 12;
            } else if (
                input.includes(normalizedKeyword)
            ) {
                score += normalizedKeyword.split(" ").length > 1 ? 7 : 3;
            } else if (
                normalizedKeyword.includes(input) &&
                input.length >= 5
            ) {
                score += 2;
            }
        });

        const questionWords = normalizeText(faq.question)
            .split(" ")
            .filter(function (word) {
                return word.length > 3;
            });

        questionWords.forEach(function (word) {
            if (input.split(" ").includes(word)) {
                score += 1;
            }
        });

        if (score > highestScore) {
            highestScore = score;
            bestMatch = faq;
        }
    });

    /*
     * Require a reasonable match to avoid misleading answers.
     */

    return highestScore >= 3 ? bestMatch : null;
}


/* ---------- 12. GREETINGS AND GENERAL INTENTS ---------- */

function getSpecialResponse(userText) {
    const input = normalizeText(userText);

    const greetings = [
        "hi",
        "hello",
        "hey",
        "namaste",
        "good morning",
        "good afternoon",
        "good evening"
    ];

    if (
        greetings.some(function (greeting) {
            return input === greeting ||
                input.startsWith(greeting + " ");
        })
    ) {
        return (
            "Hello! Welcome to NSPCL Vendor Mitra.\n\n" +
            "I can assist with general vendor registration, tender procedures, " +
            "GeM, bid documents, purchase orders and invoice enquiries.\n\n" +
            "What would you like to know?"
        );
    }

    if (
        input === "thanks" ||
        input === "thank you" ||
        input.includes("thank you very much")
    ) {
        return (
            "You're welcome! I'm happy to help.\n\n" +
            "Feel free to ask another vendor-support question."
        );
    }

    if (
        input === "bye" ||
        input === "goodbye" ||
        input === "see you"
    ) {
        return (
            "Thank you for using NSPCL Vendor Mitra.\n\n" +
            "For official procurement information, please consult " +
            "the relevant NSPCL tender documents and official website."
        );
    }

    if (
        input.includes("your name") ||
        input.includes("who are you") ||
        input.includes("what are you")
    ) {
        return (
            "I'm NSPCL Vendor Mitra, a basic vendor-support FAQ chatbot. " +
            "I provide general guidance on procurement-related topics, " +
            "but I do not access live NSPCL systems."
        );
    }

    if (
        input.includes("live status") ||
        input.includes("real time status") ||
        input.includes("track my payment") ||
        input.includes("track my invoice")
    ) {
        return (
            "I cannot retrieve live invoice, payment or tender status.\n\n" +
            "Please use the relevant official portal or contact the " +
            "authorized NSPCL department with your reference details. " +
            "Do not share confidential financial information here."
        );
    }

    return null;
}


/* ---------- 13. BUILD THE BOT RESPONSE ---------- */

function getBotResponse(userText) {
    const specialResponse = getSpecialResponse(userText);

    if (specialResponse) {
        return specialResponse;
    }

    const faq = findBestFAQ(userText);

    if (faq) {
        return faq.answer;
    }

    return (
        "I'm sorry, I couldn't find a sufficiently relevant answer " +
        "in my current FAQ knowledge base.\n\n" +
        "You could try asking about:\n\n" +
        "• Vendor registration\n" +
        "• GeM registration\n" +
        "• NSPCL tenders and corrigenda\n" +
        "• Bid submission and required documents\n" +
        "• EMD and Performance Security\n" +
        "• Purchase Orders\n" +
        "• Invoice and payment enquiries\n" +
        "• Delivery extensions\n\n" +
        "For an official clarification, please consult " +
        "https://www.nspcl.co.in/ or the contact identified " +
        "in the relevant tender or contract."
    );
}


/* ---------- 14. SEND A MESSAGE ---------- */

function sendMessage(text) {
    const userText = String(
        text !== undefined
            ? text
            : (chatInput ? chatInput.value : "")
    ).trim();

    if (!userText || isBotTyping) return;

    if (userText.length > CONFIG.maxMessageLength) {
        addMessage(
            "bot",
            "Your message is too long. Please keep it within " +
            CONFIG.maxMessageLength + " characters."
        );
        return;
    }

    addMessage("user", userText);

    if (chatInput) {
        chatInput.value = "";
        chatInput.focus();
    }

    isBotTyping = true;

    if (sendButton) {
        sendButton.disabled = true;
    }

    showTypingIndicator();

    const response = getBotResponse(userText);

    window.setTimeout(function () {
        removeTypingIndicator();

        addMessage("bot", response);

        isBotTyping = false;

        if (sendButton) {
            sendButton.disabled = false;
        }

        if (chatInput) {
            chatInput.focus();
        }
    }, CONFIG.typingDelay);
}


/* ---------- 15. QUICK QUESTION BUTTONS ---------- */

function renderQuickQuestions() {
    if (!quickQuestionsContainer) return;

    quickQuestionsContainer.innerHTML = "";

    QUICK_QUESTIONS.forEach(function (question) {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "quick-question";
        button.textContent = question;

        button.addEventListener("click", function () {
            sendMessage(question);
        });

        quickQuestionsContainer.appendChild(button);
    });
}


/* ---------- 16. RENDER SEARCHABLE FAQ LIST ---------- */

function renderFAQList() {
    if (!faqContainer) return;

    faqContainer.innerHTML = "";

    FAQS.forEach(function (faq, index) {
        const item = document.createElement("div");
        item.className = "faq-item";

        const questionButton = document.createElement("button");
        questionButton.type = "button";
        questionButton.className = "faq-question";
        questionButton.setAttribute("aria-expanded", "false");
        questionButton.setAttribute(
            "aria-controls",
            "faq-answer-" + index
        );

        const questionText = document.createElement("span");
        questionText.textContent = faq.question;

        const arrow = document.createElement("span");
        arrow.textContent = "+";
        arrow.setAttribute("aria-hidden", "true");

        questionButton.appendChild(questionText);
        questionButton.appendChild(arrow);

        const answer = document.createElement("div");
        answer.className = "faq-answer";
        answer.id = "faq-answer-" + index;
        answer.hidden = true;
        answer.textContent = faq.answer;

        questionButton.addEventListener("click", function () {
            const willOpen = answer.hidden;

            answer.hidden = !willOpen;

            questionButton.setAttribute(
                "aria-expanded",
                String(willOpen)
            );

            arrow.textContent = willOpen ? "−" : "+";
        });

        item.appendChild(questionButton);
        item.appendChild(answer);

        faqContainer.appendChild(item);
    });
}


/* ---------- 17. CLEAR CHAT ---------- */

function clearChat() {
    conversation = [];

    try {
        sessionStorage.removeItem("nspclVendorMitraHistory");
    } catch (error) {
        // Continue even if session storage is unavailable.
    }

    if (chatMessages) {
        chatMessages.innerHTML = "";
    }

    removeTypingIndicator();

    isBotTyping = false;

    if (sendButton) {
        sendButton.disabled = false;
    }

    showWelcomeMessage();
}


function initializeClearChat() {
    if (!clearChatButton) return;

    clearChatButton.addEventListener("click", function () {
        clearChat();
    });
}


/* ---------- 18. FORM EVENTS ---------- */

function initializeChatForm() {
    if (chatForm) {
        chatForm.addEventListener("submit", function (event) {
            event.preventDefault();
            sendMessage();
        });
    }

    /*
     * Supports pages where a send button exists without a form.
     */

    if (
        sendButton &&
        (!chatForm || sendButton.form !== chatForm)
    ) {
        sendButton.addEventListener("click", function (event) {
            event.preventDefault();
            sendMessage();
        });
    }

    /*
     * Optional: Enter sends; Shift + Enter inserts a new line.
     */

    if (chatInput && chatInput.tagName === "TEXTAREA") {
        chatInput.addEventListener("keydown", function (event) {
            if (
                event.key === "Enter" &&
                !event.shiftKey &&
                !event.isComposing
            ) {
                event.preventDefault();
                sendMessage();
            }
        });
    }
}


/* ---------- 19. INITIALIZE THE CHATBOT ---------- */

function initializeVendorMitra() {
    initializeChatForm();
    initializeClearChat();
    renderQuickQuestions();
    renderFAQList();
    restoreConversation();

    console.log(
        CONFIG.botName + " initialized successfully."
    );
}


/* ---------- 20. START WHEN HTML IS READY ---------- */

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initializeVendorMitra
    );
} else {
    initializeVendorMitra();
}

