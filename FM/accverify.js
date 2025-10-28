
const passwords = {
    "4211": {
        name: "Chaitanya Harsha",
        membershipType: "",
        membershipIcon: "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/100/2.gif",
        profileBackground: "#ff8b24",
        stars: 0,
        tierPoints: 45,  // Tier 1
        showCustomContent: "no",
        customContent: {
            type: "text",
            value: "NOTE: Your amounts has updated to match the offer criteria",
            url: ""
        },
        loans: [
            {
                planDate: "24-05-2025",
                endDate: "-- <p style='color: #ff36ff;'>(Interest adding stopped by #PY@0212)</p>",
                interest: 0,
                takenAmount: 25000,
                takenFrom: "MLending",
                fineRate: 5
            },
            {
                planDate: "07-04-2025",
                endDate: "--<p style='color: #ff36ff;'>(Interest adding stopped by #PY@0212)</p>",
                interest: 0,
                takenAmount: 15000,
                takenFrom: "MLLD",
                fineRate: 4
            }
        ]
    },
    "6275": {
        name: "Srikanth Jampana",
        membershipType: "",
        membershipIcon: "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/100/2.gif",
        profileBackground: "#ff4500",
        stars: 0,
        tierPoints: 5,  // Tier 2 (auto)
        showCustomContent: "",
        customContent: {
            type: "image",
            value: "programXoffer.png",
            url: "https://mfi0212.github.io/swan/offer/programx"
        },
        loans: [
            { planDate: "10-08-2025", endDate: "25-08-2025", interest: 1360, takenAmount: 5000, takenFrom: "MLLD", fineRate: 86 },
            { planDate: "15-08-2025", endDate: "30-08-2025", interest: 4800, takenAmount: 20000, takenFrom: "MLending", fineRate: 320 },
            { planDate: "16-08-2025", endDate: "31-08-2025", interest: 1275, takenAmount: 5000, takenFrom: "MLLD", fineRate: 90 },
            { planDate: "18-08-2025", endDate: "02-09-2025", interest: 1380, takenAmount: 5000, takenFrom: "MLLD", fineRate: 88 },
            { planDate: "18-08-2025", endDate: "02-09-2025", interest: 690, takenAmount: 2500, takenFrom: "MLLD", fineRate: 46 },
            { planDate: "13-10-2025", endDate: "28-10-2025", interest: 0, takenAmount: 10000, takenFrom: "MLending", fineRate: 46 },
            { planDate: "14-10-2025", endDate: "29-10-2025", interest: 0, takenAmount: 2700, takenFrom: "MLLD", fineRate: 46 },
            { planDate: "23-10-2025", endDate: "07-11-2025", interest: 1480, takenAmount: 4000, takenFrom: "MLLD", fineRate: 46 }
        ]
    },
    "Mahesh888*": {
        name: "Mahesh Muthinti",
        membershipType: "",
        membershipIcon: "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/100/2.gif",
        profileBackground: "#8a49f4",
        stars: 10,
        tierPoints: 40,  // Tier 2 (auto)
        showCustomContent: "no",
        customContent: {
            type: "image",
            value: "programXoffer.png",
            url: "https://mfi0212.github.io/swan/offer/programx"
        },
        loans: [
            { planDate: "29-09-2025", endDate: "29-10-2025", interest: 600, takenAmount: 4200, takenFrom: "MLLD", fineRate: 90 },
            { planDate: "25-05-2025", endDate: "07-11-2025(Extended to 15 days)", interest: 773, takenAmount: 4500, takenFrom: "Delayit offer", fineRate: 50 },
            { planDate: "01-06-2025", endDate: "16-11-2025(Extended to 39 days)", interest: 2030, takenAmount: 11700, takenFrom: "ProgramsX & Split Pay offer", fineRate: 50 }
        ]
    },
    "Cherish@123": {
        name: "Cherish #1",
        membershipType: "",
        membershipIcon: "https://media.tenor.com/pT6HQx4wIogAAAAj/twitch-rpx-syria.gif",
        profileBackground: "rgb(255 44 0)",
        stars: 0,
        tierPoints: 40,  // Tier 1
        showCustomContent: "no",
        customContent: {
            type: "image",
            value: "programXoffer.png",
            url: "https://mfi0212.github.io/swan/offer/programx"
        },
        loans: [
            { planDate: "14-10-2025", endDate: "31-10-2025", interest: 3600, takenAmount: 6690, takenFrom: "MLLD", fineRate: 30 },
            { planDate: "14-10-2025", endDate: "31-10-2025", interest: 2969, takenAmount: 5880, takenFrom: "MLLD", fineRate: 30 },
            { planDate: "14-10-2025", endDate: "31-10-2025", interest: 3380, takenAmount: 5560, takenFrom: "MLLD(Offer)", fineRate: 30 }
        ]
    },
    "Cherish@1234": {
        name: "Cherish #2",
        membershipType: "",
        membershipIcon: "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/100/2.gif",
        profileBackground: "rgb(90 135 242)",
        stars: 0,
        tierPoints: 0,  // Tier 1
        showCustomContent: "no",
        customContent: {
            type: "image",
            value: "programXoffer.png",
            url: "https://mfi0212.github.io/swan/offer/programx"
        },
        loans: [
            { planDate: "29-05-2025", endDate: "29-05-2025", interest: 5600, takenAmount: 25000, takenFrom: "MLending", fineRate: 80 }
        ]
    }
};

const TIER_THRESHOLDS = [
    { tier: 1, points: 0,   interestRate: "Standard" },
    { tier: 2, points: 100, interestRate: "2% lower" }
];

function getTierInfo(points) {
    if (points >= 100) {
        return { tier: 2, points, needed: 0, nextRate: null };
    } else {
        return { tier: 1, points, needed: 100 - points, nextRate: "2% lower" };
    }
}
function showTierPopup(html) {
    const old = document.getElementById("tierPopupModal");
    if (old) old.remove();

    const modal = document.createElement("div");
    modal.id = "tierPopupModal";
    modal.style.cssText = `
        position:fixed; inset:0; background:rgba(0,0,0,0.75); 
        display:flex; align-items:center; justify-content:center; z-index:9999;
    `;
    modal.innerHTML = `
        <div style="background:#111; color:#fff; padding:20px; border-radius:12px; max-width:320px; text-align:center; font-family:sans-serif;">
            <p style="margin:0 0 16px; line-height:1.5;">${html}</p>
            <button onclick="this.closest('#tierPopupModal').remove()" 
                    style="background:#00ff9d; border:none; padding:8px 16px; border-radius:6px; cursor:pointer; font-weight:600;">
                OK
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedPassword = localStorage.getItem("userPassword");
    if (savedPassword) {
        const passwordInput = document.getElementById("userPassword");
        passwordInput.value = savedPassword;
        document.getElementById("poweredBy").style.display = "block";
    }
});
document.getElementById("submitBtn").addEventListener("click", () => {
    const userInput = document.getElementById("userPassword").value.trim();
    const errorMessage = document.getElementById("error-message");
    const user = passwords[userInput];

    if (!userInput) {
        errorMessage.textContent = "Enter a password.";
        return;
    }

    if (user) {
        localStorage.setItem("userPassword", userInput);
        document.getElementById("userName").textContent = user.name;
        document.getElementById("starCount").textContent = user.stars;

        const membershipTypeContainer = document.getElementById("membershipType");
        membershipTypeContainer.innerHTML = `
            <a href="https://mfi0212.github.io/MFI/starpre" style="text-decoration: underline; text-underline-position: under;">${user.membershipType}</a>
        `;

        const userNameContainer = document.getElementById("userNameContainer");
        userNameContainer.innerHTML = `
            <span id="userName">${user.name}</span>
            <img src="${user.membershipIcon}" alt="${user.membershipType} Icon" class="user-icon">
        `;

        const profilePicture = document.getElementById("profilePicture");
        profilePicture.style.backgroundColor = user.profileBackground;
        const nameParts = user.name.trim().split(/\s+/).slice(0, 2);
        const iconText = nameParts.map(part => part.charAt(0)).join("").toUpperCase();
        profilePicture.style.backgroundImage = "none";
        profilePicture.textContent = iconText;

        // === TIER PROGRESS (AUTO TIER 2 IF ≥100) ===
        const tierInfo = getTierInfo(user.tierPoints);
        const percent = tierInfo.tier === 2 ? 100 : (user.tierPoints / 100) * 100;

        // Use profile color for bar
        let barColor = user.profileBackground;
        if (barColor.startsWith("rgb")) {
            const rgb = barColor.match(/\d+/g);
            if (rgb) barColor = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.9)`;
        } else if (barColor.startsWith("#")) {
            barColor = barColor + "cc";
        }

        const tierProgressHTML = `
            <div id="tierProgress">
                <div style="display: flex; align-items: center; gap: 6px; cursor: pointer;" id="tierClickTrigger">
                    <span style="color: #ffd700; font-weight: 600;">Tier ${tierInfo.tier}</span>
                    <div class='tiergraphbar'>
                        <div style="width: ${percent}%; height: 100%; background: ${barColor}; transition: width 0.4s ease;"></div>
                    </div>
                    <span style="color: #aaa; font-size: 12px;">${user.tierPoints} pts</span>
                </div>
            </div>
        `;

        const existingTier = document.getElementById("tierProgress");
        if (existingTier) existingTier.remove();
        userNameContainer.insertAdjacentHTML("afterend", tierProgressHTML);

        document.getElementById("tierClickTrigger").addEventListener("click", () => {
            const msg = tierInfo.tier === 2
                ? `You have <b>Tier 2</b> (${user.tierPoints} points).<br>You unlocked <b>2% lower interest rate</b>!`
                : `You have <b>Tier 1</b> (${user.tierPoints} points).<br>You need <b>${tierInfo.needed}</b> more points to reach <b>Tier 2</b> and get <b>2% lower interest</b>.`;
            showTierPopup(msg);
        });

        // === BORROW LIMIT MESSAGE ===
        const totalTaken = user.loans.reduce((sum, loan) => sum + loan.takenAmount, 0);
        const borrowLimitMessage = document.createElement("div");
        borrowLimitMessage.id = "borrowLimitMessage";
        if (totalTaken > 20000 && Math.random() < 0.8) {
            borrowLimitMessage.innerHTML = `
                <div class="bot" style="display:flex;justify-content:center;align-items:baseline;">
                    <p class="borrowLimitMessage" style='color:red;font-size:11px;text-align:center;font-weight:500;'>
                        <img style="width:16px;position:relative;top:3px;left:-1px;" src="https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/2" alt="">
                        <span style='font-size:12px;color:white;text-decoration:none;border-radius:10px;'>BsRora (<i style='position:relative;right:-4px;' class="fa-solid fa-robot"></i>)</span> : 
                        We found you have crossed the borrow limit. From the next borrow, we will charge an extra fee. 
                        To borrow more, use <a href="https://mfi0212.github.io/MFI/starpre" style='white-space:nowrap;color:white;font-size:12px;'>Premium Plan</a>.
                    </p>
                </div>	
            `;
        } else {
            borrowLimitMessage.innerHTML = "";
        }
        const userInfoModal = document.getElementById("userInfoModal");
        const profilePictureContainer = profilePicture.parentElement;
        userInfoModal.insertBefore(borrowLimitMessage, profilePictureContainer);

        // === AMOUNT BUTTONS ===
        const amountButtons = document.getElementById("amountButtons");
        amountButtons.innerHTML = "";
        user.loans.forEach((loan, index) => {
            const btn = document.createElement("button");
            btn.className = "amount-btn";
            btn.innerHTML = `₹${loan.takenAmount}<span class="amount-id"> Amount ${index + 1}</span>`;
            btn.onclick = () => displayLoanDetails(loan, index);
            amountButtons.appendChild(btn);
        });

        // === SPECIAL CONTENT ===
        const specialContentDiv = document.getElementById("specialContent");
        try {
            if (user.showCustomContent === "yes" && user.customContent && user.customContent.value) {
                const contentUrl = user.customContent.url && /^https?:\/\//.test(user.customContent.url) ? user.customContent.url : null;
                const contentHtml = user.customContent.type === "text"
                    ? `<h3 style="color:white;font-size:16px;">Special Offer</h3><p style="color:#00aeff;font-size:14px;">${user.customContent.value}</p>`
                    : `<h3 style="color:white;font-size:16px;">Special Offer</h3><img class="applybtn" src="${user.customContent.value}" alt="Special Offer" style="cursor:pointer;" onerror="this.src='';">`;
                if (contentUrl) {
                    specialContentDiv.innerHTML = `<a href="${contentUrl}" style="text-decoration:none;display:block;" aria-label="Special offer">${contentHtml}</a>`;
                    specialContentDiv.onclick = (e) => { window.open(contentUrl, '_blank'); e.preventDefault(); };
                } else {
                    specialContentDiv.innerHTML = contentHtml;
                }
            } else {
                specialContentDiv.innerHTML = "";
            }
        } catch (error) {
            console.error("Error rendering specialContent:", error);
            specialContentDiv.innerHTML = "";
            errorMessage.textContent = "Error loading special content.";
        }

        // === SHOW FIRST LOAN & REMINDER ===
        if (user.loans.length > 0) {
            displayLoanDetails(user.loans[0], 0);
            checkDueToday(user);
        } else {
            errorMessage.textContent = "No active loans found.";
        }

        document.getElementById("userInfoModal").style.display = "block";
        document.getElementById("passwordContainer").style.display = "none";
        errorMessage.textContent = "";
    } else {
        errorMessage.textContent = "Invalid password.";
    }
});

// ===============================================
// 6. DUE TODAY REMINDER
// ===============================================
function checkDueToday(user) {
    const today = new Date();
    const dateFormat = /^(\d{2})-(\d{2})-(\d{4})/;
    const todayStr = `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${today.getFullYear()}`;

    user.loans.forEach(loan => {
        const cleanEndDate = loan.endDate.split('(')[0].split('<')[0];
        const endMatch = cleanEndDate.match(dateFormat);
        if (endMatch) {
            const endDateStr = `${endMatch[1]}-${endMatch[2]}-${endMatch[3]}`;
            if (endDateStr === todayStr && !loan.endDate.includes('Overdue')) {
                document.getElementById("reminderMessage").innerHTML = 
                    `Mr. ${user.name}, Today (${cleanEndDate}) you have an amount to return from <b>${loan.takenFrom}</b>. <br><br> Clear on time to avoid overdue interest. Thank you!`;
                document.getElementById("reminderModal").style.display = "flex";
            }
        }
    });
}

function closeReminderModal() {
    document.getElementById("reminderModal").style.display = "none";
}

function calculateDaysBetween(startDate, endDate) {
    try {
        const dateFormat = /^(\d{2})-(\d{2})-(\d{4})/;
        const startMatch = startDate.match(dateFormat);
        const endMatch = endDate.split('(')[0].match(dateFormat);
        if (startMatch && endMatch) {
            const start = new Date(`${startMatch[3]}-${startMatch[2]}-${startMatch[1]}`);
            const end = new Date(`${endMatch[3]}-${endMatch[2]}-${endMatch[1]}`);
            const diffTime = Math.abs(end - start);
            return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        }
        return "Invalid date format";
    } catch (error) {
        return "Error";
    }
}

let sessionReferenceTime = null;

function calculateOverdueFine(endDate, loan, user) {
    try {
        const dateFormat = /^(\d{2})-(\d{2})-(\d{4})/;
        const endMatch = endDate.split('(')[0].split('<')[0].match(dateFormat);
        if (!endMatch) return { overdue: false, fine: 0, hoursOverdue: 0, daysOverdue: 0 };

        const end = new Date(`${endMatch[3]}-${endMatch[2]}-${endMatch[1]}`);
        end.setHours(23, 59, 59, 999);

        if (!sessionReferenceTime) sessionReferenceTime = new Date();
        const now = sessionReferenceTime;

        if (now > end) {
            const diffTime = now - end;
            const hoursOverdue = Math.floor(diffTime / (1000 * 60 * 60));
            const daysOverdue = Math.floor(hoursOverdue / 24);
            const fineRate = loan.fineRate !== undefined ? loan.fineRate : user.fineRate || 0;
            const fine = daysOverdue * fineRate;
            return { overdue: true, fine, hoursOverdue, daysOverdue };
        }
        return { overdue: false, fine: 0, hoursOverdue: 0, daysOverdue: 0 };
    } catch (error) {
        return { overdue: false, fine: 0, hoursOverdue: 0, daysOverdue: 0 };
    }
}

function displayLoanDetails(loan, index) {
    const loanDetails = document.getElementById("loanDetails");
    const userInput = document.getElementById("userPassword").value.trim();
    const user = passwords[userInput];

    const overdueInfo = calculateOverdueFine(loan.endDate, loan, user);
    const fine = overdueInfo.fine || 0;
    const totalReturnAmount = (loan.takenAmount + loan.interest + fine).toFixed(2);
    const cleanEndDate = loan.endDate.split('(')[0].split('<')[0];
    const daysBetween = calculateDaysBetween(loan.planDate, cleanEndDate);

    document.querySelectorAll(".amount-btn").forEach(btn => btn.classList.remove("active"));
    document.getElementById("amountButtons").children[index].classList.add("active");

    let overdueSection = "";
    if (overdueInfo.overdue) {
        overdueSection = `
            <h3>Overdue Details</h3>
            <p style="color:#ff9300;">You are overdue by: ${overdueInfo.daysOverdue} days (${overdueInfo.hoursOverdue} hours)</p>
            <p style="color:#ff9300;">Overdue interest: ${fine} Rupees</p>
        `;
    }

    loanDetails.innerHTML = `
        <div class="loan-entry">
            <p style="text-align:center;position:sticky;top:90px;margin-top:20px;right:16px;float:right;margin-right:-9px;">
                <button class="amounts-btn downsingle" style="width:100%;font-size:9px;padding:0px 12px;display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:10px;font-weight:400;letter-spacing:0.2px;" onclick="downloadSingleLoan(${index})">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg> Download This Receipt
                </button>
            </p>
            <h3>Service</h3>
            <p>Taken in : ${loan.takenFrom} </p>
            <h3>Amount</h3>
            <p>Taken Amount : ${loan.takenAmount} Rupees</p>
            <h3>Taken & Return</h3>
            <p>Taken date : ${loan.planDate}</p>
            <p>Return date : ${loan.endDate}</p>
            <h3>Duration</h3>
            <p>Taken for : ${daysBetween} days</p>
            <h3>Interest</h3>
            <p>Normal Interest : ${loan.interest} Rupees</p>
            <hr>
            ${overdueSection}
            <hr>
            <h3>Total to Return</h3>
            <p>Full Amount : ${totalReturnAmount} Rupees</p>
            <hr>
            <div class="issuebtn" style="padding-top:20px;width:102.5%;">  
                <a target="_blank" href="https://forms.gle/RzTJ8W9bwmm8DVj2A"><button>I have an issue here.!</button></a>
            </div>
        </div>
    `;
}

function showAmountsModal() {
    const userInput = document.getElementById("userPassword").value.trim();
    const user = passwords[userInput];
    if (!user) return;

    let totalTaken = 0;
    let totalInterest = 0;
    user.loans.forEach(loan => {
        const overdueInfo = calculateOverdueFine(loan.endDate, loan, user);
        const fine = overdueInfo.fine || 0;
        totalTaken += loan.takenAmount;
        totalInterest += loan.interest + fine;
    });
    const totalReturn = (totalTaken + totalInterest).toFixed(2);

    document.getElementById("totalTaken").textContent = totalTaken;
    document.getElementById("totalInterest").textContent = totalInterest;
    document.getElementById("totalReturn").textContent = totalReturn;

    document.getElementById("amountsModal").style.display = "";
}

function closeAmountsModal() {
    document.getElementById("amountsModal").style.display = "none";
}

function closeModal() {
    document.getElementById("userInfoModal").style.display = "none";
    document.getElementById("passwordContainer").style.display = "flex";
    document.getElementById("userPassword").value = "";
    document.getElementById("specialContent").innerHTML = "";
    document.getElementById("borrowLimitMessage")?.remove();
    document.getElementById("tierProgress")?.remove();
    sessionReferenceTime = null;
}

function formatDate(dateStr) {
    const [d, m, y] = dateStr.split('-');
    return `${d}/${m}/${y.slice(2)}`;
}

function generateImage(text, filename) {
    const canvas = document.createElement('canvas');
    const lines = text.split('\n');
    const lineHeight = 30;
    canvas.width = 600;
    canvas.height = 60 + lines.length * lineHeight;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.font = '20px Poppins, Arial, sans-serif';
    ctx.textAlign = 'left';
    lines.forEach((line, i) => {
        ctx.fillText(line, 30, 40 + i * lineHeight);
    });
    ctx.fillStyle = 'gray';
    ctx.font = '16px Poppins, Arial, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('Powered by BsBookpad', canvas.width - 20, 20);
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png', 1.0);
    a.download = filename;
    a.click();
}

function downloadSingleLoan(index) {
    const userInput = document.getElementById("userPassword").value.trim();
    const user = passwords[userInput];
    if (!user) return;
    const loan = user.loans[index];
    const cleanEndDate = loan.endDate.split('(')[0].split('<')[0];
    const overdueInfo = calculateOverdueFine(loan.endDate, loan, user);
    const fine = overdueInfo.fine || 0;
    const totalReturnAmount = (loan.takenAmount + loan.interest + fine).toFixed(2);
    const text = `Total Amount ${index + 1} : ${totalReturnAmount} ₹\nReturn date : ${formatDate(cleanEndDate)}`;
    generateImage(text, `total_amount_${index + 1}.png`);
}

function downloadAllLoans() {
    const userInput = document.getElementById("userPassword").value.trim();
    const user = passwords[userInput];
    if (!user) return;
    let text = '';
    user.loans.forEach((loan, i) => {
        const cleanEndDate = loan.endDate.split('(')[0].split('<')[0];
        const overdueInfo = calculateOverdueFine(loan.endDate, loan, user);
        const fine = overdueInfo.fine || 0;
        const totalReturnAmount = (loan.takenAmount + loan.interest + fine).toFixed(2);
        text += `Total Amount ${i + 1} : ${totalReturnAmount} ₹\nReturn date : ${formatDate(cleanEndDate)}\n\n`;
    });
    generateImage(text.trim(), 'all_total_amounts.png');
}

function showStarCount() {
    const stars = document.getElementById('starCount').textContent.trim();
    alert(`BsRora(Bot) : \n\nYou have ${stars} stars.\n\nYou can use these stars when you think interest is high to reduce the interest.`);
}
