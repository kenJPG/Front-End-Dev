// Defining elements

// window and document
const mainWindow = window;
const mainDocument = document;

// Main Title
const mainTitle = document.querySelector(".titleContainer p");
const toTopButton = document.querySelector("#toTopButton");

// Facebook Modal
const facebookInput = document.querySelector("#facebookModal input");
const facebookCopy = document.querySelector("#facebookModal .copyButton");
const facebookSuccess = document.querySelector("#facebookModal .success");

// Instagram Modal
const instagramInput = document.querySelector("#instagramModal input");
const instagramCopy = document.querySelector("#instagramModal .copyButton");
const instagramSuccess = document.querySelector("#instagramModal .success");

// Twitter Modal
const twitterInput = document.querySelector("#twitterModal input");
const twitterCopy = document.querySelector("#twitterModal .copyButton");
const twitterSuccess = document.querySelector("#twitterModal .success");

// Snapchat Modal
const snapchatInput = document.querySelector("#snapchatModal input");
const snapchatCopy = document.querySelector("#snapchatModal .copyButton");
const snapchatSuccess = document.querySelector("#snapchatModal .success");

// Gmail Modal
const gmailInput = document.querySelector("#gmailModal input");
const gmailCopy = document.querySelector("#gmailModal .copyButton");
const gmailSuccess = document.querySelector("#gmailModal .success");

// Social Media Icon Buttons
const iconButtonList = document.querySelectorAll(".buttonContainer");
// ========================================================================

// Creating back to top button
createButton(toTopButton, mainWindow);

// Giving typing effect to title page
var typeDone = {done: false};
typeEffectCreate(typeDone, "Contact Me").observe(mainTitle);

// Copy Button for Facebook, Instagram, Twitter, Snapchat and Gmail
createCopyButton(facebookCopy, facebookInput, facebookSuccess, document);
createCopyButton(instagramCopy, instagramInput, instagramSuccess, document);
createCopyButton(twitterCopy, twitterInput, twitterSuccess, document);
createCopyButton(snapchatCopy, snapchatInput, snapchatSuccess, document);
createCopyButton(gmailCopy, gmailInput, gmailSuccess, document);

// Fade in effect for icons
for (let i = 0; i < iconButtonList.length; i++) {
	fadeInCreate(i * 100, 400).observe(iconButtonList[i]);
}