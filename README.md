
# NSPCL Vendor Mitra 🤝

### A Simple Vendor Support FAQ Chatbot

NSPCL Vendor Mitra is a free, web-based chatbot prototype designed to help vendors find general information about procurement procedures, tender participation, vendor registration, and common supplier queries.

The website is built using HTML, CSS, and JavaScript and can be hosted free of cost using GitHub Pages.

## 🚀 Features

- Vendor registration guidance
- Tender search and participation information
- Technical bid and price bid guidance
- EMD and performance security FAQs
- Government e-Marketplace (GeM) information
- MSME and Udyam registration guidance
- Purchase order and delivery-related FAQs
- Invoice submission and payment enquiry guidance
- GST and vendor profile update information
- Interactive chatbot interface
- Quick-question buttons
- Expandable FAQ section
- Session-based chat history
- Responsive design for desktop and mobile devices
- No API key or paid AI service required

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- GitHub Pages

## 📁 Project Structure

```text
NSPCL-Vendor-Mitra/
│
├── index.html
├── style.css
├── script.js
├── faq.js
└── README.md
```

## 🌐 Website

GitHub repository:

https://github.com/ssccnm2026/NSPCL-Vendor-Mitra

Website:

https://ssccnm2026.github.io/NSPCL-Vendor-Mitra/

The website URL will work once GitHub Pages is enabled and deployment succeeds.

## ⚙️ Deployment Instructions

1. Open the GitHub repository.
2. Upload or create `index.html`, `style.css`, `script.js`, and `faq.js` in the root folder.
3. Ensure that filenames and references in the HTML file match exactly.
4. Open **Settings → Pages**.
5. Under Build and deployment, select **Deploy from a branch**.
6. Select the `main` branch and `/ (root)` folder.
7. Click **Save**.
8. Wait for GitHub Pages to complete deployment.
9. Open the published website and refresh the page.

## 📝 Maintaining the FAQs

The `faq.js` file contains structured FAQ data organised by category.

To add a new FAQ, follow the existing format:

```javascript
{
  id: 29,
  category: "General",
  question: "How can I get procurement assistance?",
  keywords: [
    "procurement assistance",
    "vendor help",
    "procurement support"
  ],
  answer:
    "Please refer to the official tender documents or contact the authorised procurement representative."
}
```

Use a unique ID for every new FAQ.

**Important:** The current `script.js` must be configured to read `window.NSPCL_FAQS` for changes in `faq.js` to affect chatbot responses. Otherwise, the chatbot will continue using the FAQ data embedded in `script.js`.

## 🔐 Important Limitations

- This is a rule-based FAQ chatbot prototype.
- It does not access NSPCL's internal SAP systems.
- It cannot verify live vendor registration, tender, purchase order, or payment status.
- Responses are general guidance and do not replace official tender documents, purchase orders, or authorised instructions.
- Do not enter confidential business information, passwords, banking details, or sensitive documents into the chatbot.

## 📜 Licence

This project is intended as a vendor-support prototype. Before publishing or distributing it, add an appropriate licence and confirm that the use of NSPCL's name, logo, and other branding is authorised.

---

**NSPCL Vendor Mitra**  
*Making vendor information easier to access.*
