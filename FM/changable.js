const blockedPasswords = ["6275"];

const specialRates = {
  '2025-12-23': 42
};

function getDailyInterestRate() {
  const today = new Date().toISOString().slice(0, 10); 
  if (specialRates[today]) {
    return specialRates[today];
  }
  let hash = 5381;
  for (let i = 0; i < today.length; i++) {
    hash = ((hash << 5) + hash + today.charCodeAt(i)) | 0;
  }
  const rate = 35 + (Math.abs(hash) % 5);
  return rate;
}


  
const offer = {
//   leftHeart:  "💓",
//   text:      "Valentine's Day offer",     // ← leave "" to hide text
//   rightHeart: "💓",
//   linkUrl:    "https://mfi0212.github.io/swan/offer/presave",
//   linkText:   "Pre-Save here"
};


const banner = document.getElementById("banner");

const hasText = offer.text && offer.text.trim() !== "";
const hasLink = offer.linkUrl && offer.linkText && offer.linkText.trim() !== "";

let html = "";

if (hasText || hasLink) {
  html += `<span class="heart">${offer.leftHeart}</span>`;

  if (hasText) {
    html += ` ${offer.text.trim()} `;
  }

  html += `<span class="heart">${offer.rightHeart}</span>`;

  if (hasLink) {
    html += `
      <a href="${offer.linkUrl}" target="_blank" rel="noopener noreferrer">
        ${offer.linkText}
      </a>
    `;
  }
} else {
  // Nothing at all → show minimal fallback or stay almost invisible
  html = `<span class="nothing">· · ·</span>`;
  banner.classList.add("empty");
}

banner.innerHTML = html;
banner.insertAdjacentHTML('beforeend',
//   '<div style="font-size:0.72rem; opacity:0.7; margin-top:6px; text-align:right;">Feb 14</div>'
);
