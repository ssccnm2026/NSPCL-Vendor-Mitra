
/* ==========================================================
   NSPCL VENDOR MITRA — FAQ DATABASE
   File: faq.js

   Purpose:
   Provides structured FAQ data for the NSPCL Vendor Mitra
   website. This file does not connect to internal NSPCL
   systems or retrieve live vendor/payment information.
   ========================================================== */

(function () {
  "use strict";

  const faqs = [
    {
      id: 1,
      category: "Vendor Registration",
      question: "How can I register as an NSPCL vendor?",
      keywords: [
        "vendor registration",
        "register vendor",
        "new vendor",
        "vendor enrolment",
        "vendor empanelment"
      ],
      answer:
        "To register as a vendor, check the registration instructions issued by NSPCL or the applicable procurement portal. Keep your business registration documents, PAN, GST details where applicable, bank documentation, and relevant experience certificates ready. Submit documents only through the authorised process. Registration is subject to verification and applicable requirements."
    },
    {
      id: 2,
      category: "Vendor Registration",
      question: "Which documents are needed for vendor registration?",
      keywords: [
        "registration documents",
        "documents required",
        "vendor documents",
        "PAN",
        "GST certificate"
      ],
      answer:
        "Depending on the registration process, documents may include PAN, GST registration where applicable, business constitution documents, bank details, address proof, authorised-signatory details, experience certificates, and financial information. Refer to the official checklist for the exact requirements."
    },
    {
      id: 3,
      category: "Vendor Registration",
      question: "How can I update my vendor profile?",
      keywords: [
        "update vendor profile",
        "change vendor details",
        "change address",
        "change bank details",
        "vendor master update"
      ],
      answer:
        "Follow the official vendor-master update process specified by NSPCL or the relevant procurement portal. Changes may require supporting documents and verification. For bank-detail changes, use only an authenticated official channel and follow the prescribed verification process."
    },
    {
      id: 4,
      category: "Tender",
      question: "Where can I find NSPCL tenders?",
      keywords: [
        "find tenders",
        "NSPCL tender",
        "open tenders",
        "NIT",
        "tender notice"
      ],
      answer:
        "Check the official NSPCL website and the e-procurement portal specified in the tender notice. Search using the tender number, description, or closing date. Review the complete tender document and check for corrigenda or amendments before preparing your bid."
    },
    {
      id: 5,
      category: "Tender",
      question: "How can I participate in an NSPCL tender?",
      keywords: [
        "participate in tender",
        "tender participation",
        "submit bid",
        "bid process",
        "tender procedure"
      ],
      answer:
        "Read the tender document carefully, verify eligibility, prepare the required technical and commercial documents, arrange EMD or applicable exemptions where permitted, and submit the bid through the prescribed portal before the deadline. Save the submission acknowledgement and check for subsequent tender updates."
    },
    {
      id: 6,
      category: "Tender",
      question: "What documents are required for bid submission?",
      keywords: [
        "bid documents",
        "documents for tender",
        "technical documents",
        "financial documents",
        "bid checklist"
      ],
      answer:
        "Requirements vary by tender. They may include signed tender forms, technical compliance documents, experience certificates, financial records, declarations, PAN and GST details where applicable, EMD or exemption documents, and the prescribed price schedule. Use the tender-specific checklist as the final authority."
    },
    {
      id: 7,
      category: "Tender",
      question: "What is a technical bid?",
      keywords: [
        "technical bid",
        "technical offer",
        "technical evaluation",
        "technical compliance"
      ],
      answer:
        "A technical bid demonstrates compliance with the tender's technical specifications and eligibility conditions. It may include product specifications, compliance statements, drawings, certificates, experience details, and deviation statements. Follow the tender instructions regarding the permitted contents of the technical submission."
    },
    {
      id: 8,
      category: "Tender",
      question: "What is a price bid?",
      keywords: [
        "price bid",
        "financial bid",
        "commercial bid",
        "BOQ",
        "price schedule"
      ],
      answer:
        "A price bid contains the commercial offer in the prescribed format. Check quantities, units, taxes, freight, discounts, delivery terms, and arithmetic carefully. Enter prices only in the designated commercial section and follow the tender's instructions."
    },
    {
      id: 9,
      category: "Tender",
      question: "What is a corrigendum?",
      keywords: [
        "corrigendum",
        "tender amendment",
        "revised tender",
        "addendum",
        "tender date extension"
      ],
      answer:
        "A corrigendum is an official correction or amendment to a tender or related document. It may change specifications, conditions, submission dates, or other requirements. Always check the official procurement portal for updates before submitting your bid."
    },
    {
      id: 10,
      category: "Tender",
      question: "How can I ask a question about a tender?",
      keywords: [
        "tender clarification",
        "pre-bid query",
        "technical query",
        "clarification",
        "tender doubt"
      ],
      answer:
        "Use the clarification or pre-bid procedure specified in the tender. Mention the tender reference, relevant clause, and a clear description of your query. Submit it within the prescribed time and through the authorised channel."
    },
    {
      id: 11,
      category: "EMD and Security",
      question: "What is EMD?",
      keywords: [
        "EMD",
        "earnest money deposit",
        "bid security",
        "EMD amount"
      ],
      answer:
        "EMD means Earnest Money Deposit. It may be required as bid security under the tender conditions. Check the applicable amount, payment method, validity, exemptions, and refund conditions in the tender document."
    },
    {
      id: 12,
      category: "EMD and Security",
      question: "Can a vendor get an EMD exemption?",
      keywords: [
        "EMD exemption",
        "exemption from EMD",
        "bid security exemption",
        "MSME EMD"
      ],
      answer:
        "An EMD exemption may be available in certain cases, subject to applicable rules, tender conditions, and valid supporting documents. Read the specific tender clauses carefully. Do not assume an exemption applies unless the tender permits it and the required evidence is accepted."
    },
    {
      id: 13,
      category: "EMD and Security",
      question: "What is performance security?",
      keywords: [
        "performance security",
        "PBG",
        "performance bank guarantee",
        "security deposit"
      ],
      answer:
        "Performance security is a contractual security that may be required from a successful bidder. The amount, format, validity, submission deadline, and release conditions are specified in the applicable tender or purchase order."
    },
    {
      id: 14,
      category: "GeM",
      question: "What is GeM?",
      keywords: [
        "GeM",
        "Government e Marketplace",
        "GeM portal",
        "government procurement"
      ],
      answer:
        "GeM stands for Government e-Marketplace, an online platform used for public procurement. Visit https://gem.gov.in for official seller registration, catalogue, bid, and platform instructions. Also comply with any applicable NSPCL procurement requirements."
    },
    {
      id: 15,
      category: "GeM",
      question: "How can I register as a seller on GeM?",
      keywords: [
        "GeM seller registration",
        "register on GeM",
        "GeM account",
        "seller account"
      ],
      answer:
        "Visit the official GeM portal at https://gem.gov.in and follow its current seller-registration instructions. Review the eligibility requirements and keep the required business and tax documents ready. Use only the official portal for account creation and management."
    },
    {
      id: 16,
      category: "MSME",
      question: "What is Udyam registration?",
      keywords: [
        "Udyam",
        "MSME registration",
        "micro enterprise",
        "small enterprise",
        "medium enterprise"
      ],
      answer:
        "Udyam registration is the Government of India's registration framework for eligible micro, small, and medium enterprises. Refer to https://udyamregistration.gov.in for official information and registration instructions. Procurement benefits depend on applicable rules and the conditions of the specific tender."
    },
    {
      id: 17,
      category: "Purchase Order",
      question: "What is a purchase order?",
      keywords: [
        "purchase order",
        "PO",
        "PO number",
        "order document"
      ],
      answer:
        "A purchase order is a formal procurement document specifying the ordered goods or services and applicable commercial and contractual conditions. Review the description, quantity, price, taxes, delivery schedule, inspection requirements, payment terms, and other clauses carefully."
    },
    {
      id: 18,
      category: "Purchase Order",
      question: "How can I check my purchase order status?",
      keywords: [
        "PO status",
        "purchase order status",
        "order status",
        "PO tracking"
      ],
      answer:
        "Check the official procurement system or correspondence made available to your organisation. For clarification, contact the authorised procurement representative identified in your PO or official communication. This chatbot cannot access SAP or verify live purchase-order status."
    },
    {
      id: 19,
      category: "Purchase Order",
      question: "Can I request a change in delivery date?",
      keywords: [
        "delivery extension",
        "extend delivery date",
        "delivery period",
        "delivery date change",
        "extension of time"
      ],
      answer:
        "Submit a formal written request to the authorised NSPCL contact. Include the PO number, affected items, reason for delay, supporting evidence, and requested revised date. Any extension is subject to approval by the competent authority and the applicable contract conditions."
    },
    {
      id: 20,
      category: "Purchase Order",
      question: "What should I check before dispatching material?",
      keywords: [
        "dispatch material",
        "material dispatch",
        "delivery requirements",
        "inspection",
        "packing instructions"
      ],
      answer:
        "Before dispatch, review the PO for delivery location, schedule, packing and marking, inspection requirements, transport conditions, and required documents. Coordinate with the authorised site or procurement contact if clarification is needed."
    },
    {
      id: 21,
      category: "Invoice and Payment",
      question: "How do I submit an invoice?",
      keywords: [
        "submit invoice",
        "invoice submission",
        "billing",
        "bill submission",
        "tax invoice"
      ],
      answer:
        "Follow the invoice-submission instructions in your PO or contract. Check the PO reference, invoice details, applicable tax information, delivery or service records, and any required acceptance certificates. Submit through the designated official channel."
    },
    {
      id: 22,
      category: "Invoice and Payment",
      question: "How can I check my payment status?",
      keywords: [
        "payment status",
        "payment delay",
        "outstanding payment",
        "invoice payment",
        "bill status"
      ],
      answer:
        "Contact the designated NSPCL finance or accounts representative using the details in your PO or official correspondence. Keep your PO number, invoice number, invoice date, and submission acknowledgement ready. This chatbot cannot view actual payment records."
    },
    {
      id: 23,
      category: "Invoice and Payment",
      question: "What should I do if my payment is delayed?",
      keywords: [
        "payment delayed",
        "late payment",
        "payment pending",
        "unpaid invoice",
        "payment follow up"
      ],
      answer:
        "First confirm that the invoice and required supporting documents were submitted correctly. Then contact the designated finance or accounts representative with the invoice reference and submission details. Any payment timeline is subject to the applicable contract terms and verification process."
    },
    {
      id: 24,
      category: "GST and Tax",
      question: "Why are GST details important?",
      keywords: [
        "GST",
        "GSTIN",
        "GST details",
        "GST invoice",
        "tax details"
      ],
      answer:
        "Correct GST details help ensure that invoices and applicable tax documentation are consistent with relevant requirements. Follow the tax and invoicing conditions applicable to your transaction and PO. If details change, use the authorised vendor-update procedure."
    },
    {
      id: 25,
      category: "Technical Support",
      question: "What should I do if the procurement portal is not working?",
      keywords: [
        "portal not working",
        "login problem",
        "upload error",
        "technical error",
        "website issue"
      ],
      answer:
        "Check your internet connection, refresh the page, try an updated browser, and verify the file format and size requirements. If the problem continues, contact the portal's official helpdesk promptly. Record the error message and time, especially if a submission deadline is approaching."
    },
    {
      id: 26,
      category: "Technical Support",
      question: "How can I contact NSPCL procurement support?",
      keywords: [
        "contact procurement",
        "procurement support",
        "helpdesk",
        "contact officer",
        "support email"
      ],
      answer:
        "Use the official contact details provided in the relevant tender, purchase order, NSPCL website, or procurement portal. Include the tender or PO reference and a clear description of your query. This FAQ database does not contain a verified live directory of officers."
    },
    {
      id: 27,
      category: "General",
      question: "What information should I include in a vendor enquiry?",
      keywords: [
        "vendor enquiry",
        "enquiry format",
        "write enquiry",
        "query format",
        "email format"
      ],
      answer:
        "Include a clear subject, tender or PO reference where applicable, a concise explanation of the issue, relevant clause or item number, and supporting documents if requested. Use the official communication channel and avoid sending passwords or unnecessary sensitive information."
    },
    {
      id: 28,
      category: "General",
      question: "Is NSPCL Vendor Mitra an official live status system?",
      keywords: [
        "live status",
        "official chatbot",
        "live data",
        "SAP access",
        "payment records",
        "vendor status"
      ],
      answer:
        "This version of NSPCL Vendor Mitra is a standalone FAQ prototype. It provides general guidance based on predefined answers and does not access internal NSPCL systems, SAP, vendor master data, live tender records, purchase orders, or payment status. Please verify important matters through official channels."
    }
  ];

  /*
   * Public interface:
   * window.NSPCL_FAQS
   * window.NSPCL_FAQS.getAll()
   * window.NSPCL_FAQS.getByCategory(category)
   * window.NSPCL_FAQS.search(query)
   * window.NSPCL_FAQS.getById(id)
   */

  window.NSPCL_FAQS = {
    getAll: function () {
      return faqs.map(function (faq) {
        return { ...faq, keywords: [...faq.keywords] };
      });
    },

    getByCategory: function (category) {
      const target = String(category || "").trim().toLowerCase();

      return faqs
        .filter(function (faq) {
          return faq.category.toLowerCase() === target;
        })
        .map(function (faq) {
          return { ...faq, keywords: [...faq.keywords] };
        });
    },

    getById: function (id) {
      const faq = faqs.find(function (item) {
        return item.id === Number(id);
      });

      return faq
        ? { ...faq, keywords: [...faq.keywords] }
        : null;
    },

    search: function (query) {
      const target = String(query || "").trim().toLowerCase();

      if (!target) {
        return [];
      }

      return faqs
        .filter(function (faq) {
          const searchableText = [
            faq.question,
            faq.category,
            faq.answer,
            ...faq.keywords
          ]
            .join(" ")
            .toLowerCase();

          return searchableText.includes(target);
        })
        .map(function (faq) {
          return { ...faq, keywords: [...faq.keywords] };
        });
    }
  };
})();

