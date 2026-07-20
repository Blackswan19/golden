// document.addEventListener('contextmenu', e => e.preventDefault());   

const passwords = {
    "6275": {
        name: "Srikanth Jampana",
        membershipIcon: "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/100/2.gif",
        profileBackground: "rgb(197 74 0)",
        profileSecBackground:"rgb(197 74 0)",
        stars: 0,
        coins: 1,
        verified: true,
        showCustomContent: "no",
        customContent: {
            type: "image",
            value: "programXoffer.png",
            url: "https://mfi0212.github.io/swan/offer/programx"
        },
        loans: [
            { planDate: "10-08-2025", endDate: "10-09-2025", interest: 1800, takenAmount: 5000, takenFrom: "MLLD", fineRate: 60 },
            { planDate: "15-08-2025", endDate: "15-09-2025", interest: 1950, takenAmount: 6500, takenFrom: "MLLD", fineRate: 70 },
            { planDate: "18-08-2025", endDate: "18-09-2025", interest: 1800, takenAmount: 5000, takenFrom: "MLLD", fineRate: 60 },
            { planDate: "18-08-2025", endDate: "18-09-2025", interest: 1350, takenAmount: 3500, takenFrom: "MLLD", fineRate: 45 },
            { planDate: "01-11-2025", endDate: "01-12-2025", interest: 1500, takenAmount: 5000, takenFrom: "Lendlink - LID", fineRate: 60 },
            { planDate: "06-11-2025", endDate: "07-12-2025", interest: 3500, takenAmount: 10000, takenFrom: "P2P lend", fineRate: 150 },
            { planDate: "09-11-2025", endDate: "09-12-2025", interest: 2800, takenAmount: 8000, takenFrom: "MLLD", fineRate: 80 },
            { planDate: "25-11-2025", endDate: "25-12-2025", interest: 3050, takenAmount: 9500, takenFrom: "MLending Duplicate ", fineRate: 95 }
        ]
    },
    "Mahesh888*": {
        name: "Mahesh Muthinti",
        membershipIcon: "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/100/2.gif",
        profileBackground: "transparent",
        profileSecBackground:"transparent",
        stars: 0,
        coins: 1,
        verified: true,
        showCustomContent: "no",
        customContent: {
            type: "image",
            value: "programXoffer.png",
            url: "https://mfi0212.github.io/swan/offer/programx"
        },
        loans: [
            { planDate: "11-05-2026", endDate: "10-08-2026", interest: 5938, takenAmount: 23480, takenFrom: "Golden", fineRate: 130 },
        ]
    },
    "0212": {
        name: "Lana Del",
        membershipIcon: "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/100/2.gif",
         profileBackground: "rgb(255 211 182)",
        profileSecBackground:"rgb(255 170 165)",
        stars: 10000,
        coins: 0,
        verified: true,
        showCustomContent: "yes",
        customContent: {
            type: "image",
            value: "programXoffer.png",
            url: "https://mfi0212.github.io/swan/offer/programx"
        },
        loans: [
            { planDate: "06-11-2025", endDate: "07-12-2025", interest: 3900, takenAmount: 5000, takenFrom: "P2P lend", fineRate: 150 },
            { planDate: "06-11-2025", endDate: "07-12-2025", interest: 3900, takenAmount: 10000, takenFrom: "P2P lend", fineRate: 150 },
        ]
    },
};

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
        document.getElementById("coinsCount").textContent = user.coins;

        const userNameContainer = document.getElementById("userNameContainer");

        // Verified Icon - Only show if verified: true
        let verifiedHTML = '';
        if (user.verified === true) {
            verifiedHTML = `
                <img 
                    style="width: 25px;" 
                    src="verified_icon.png" 
                    alt="Verified"
                    onerror="this.style.display='none'" 
                >
            `;
        }

        userNameContainer.innerHTML = `
            <span id="userName">${user.name}</span>
            ${verifiedHTML}
            <img src="${user.membershipIcon}" alt="Membership Icon" class="user-icon">
        `;

        const profilePicture = document.getElementById("profilePicture");
        profilePicture.style.backgroundColor = user.profileBackground;
        profilePicturess.style.backgroundColor = user.profileSecBackground;
        const nameParts = user.name.trim().split(/\s+/).slice(0, 2);
        const iconText = nameParts.map(part => part.charAt(0)).join("").toUpperCase();
        profilePicture.style.backgroundImage = "none";
        profilePicturess.style.backgroundImage = "none";
        profilePicture.textContent = iconText;

        // Remove Tier Progress
        document.getElementById("tierProgress")?.remove();

        // === ADS SECTION COMPLETELY REMOVED ===

        const amountButtons = document.getElementById("amountButtons");
        amountButtons.innerHTML = "";
        user.loans.forEach((loan, index) => {
                    const btn = document.createElement("button");
                    btn.className = "amount-btn";
                    btn.innerHTML = `<a style="display: flex; justify-content: center; align-items: center;color: white;" href="#scrotamts"> ₹${loan.takenAmount}<span class="amount-id" > ${index + 1}</span></a>`;
                    btn.onclick = () => displayLoanDetails(loan, index);
                    amountButtons.appendChild(btn);
                });
        updateAllButtonColors(user);

        const specialContentDiv = document.getElementById("specialContent");
        try {
            if (user.showCustomContent === "yes" && user.customContent && user.customContent.value) {
                const contentUrl = user.customContent.url && /^https?:\/\//.test(user.customContent.url) ? user.customContent.url : null;
                const contentHtml = user.customContent.type === "text"
                    ? `<h3 style="font-size:16px;">Special Note</h3><p style="color:#00aeff;font-size:14px;">${user.customContent.value}</p>`
                    : `<h3 style="color:white;font-size:16px;">Special Note</h3><img class="applybtn" src="${user.customContent.value}" style="cursor:pointer;" onerror="this.src='';">`;
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

        if (user.loans.length > 0) {
            displayLoanDetails(user.loans[0], 0);
            checkDueReminders(user);
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

function checkDueReminders(user) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const dateFormat = /^(\d{2})-(\d{2})-(\d{4})/;
    const formatDate = (d) => `${String(d.getDate()).padStart(2,'0')}-${String(d.getMonth()+1).padStart(2,'0')}-${d.getFullYear()}`;

    const todayStr = formatDate(today);
    const tomorrowStr = formatDate(tomorrow);

    let dueToday = null;
    let dueTomorrow = null;

    user.loans.forEach(loan => {
        const cleanEndDate = loan.endDate.split('(')[0].split('<')[0].trim();
        const match = cleanEndDate.match(dateFormat);
        if (!match) return;

        const endDateStr = `${match[1]}-${match[2]}-${match[3]}`;

        if (endDateStr === todayStr) dueToday = { loan, date: cleanEndDate };
        if (endDateStr === tomorrowStr) dueTomorrow = { loan, date: cleanEndDate };
    });

    const reminderModal = document.getElementById("reminderModal");
    const reminderMessage = document.getElementById("reminderMessage");

    if (dueToday) {
        reminderMessage.innerHTML = 
            `Mr. ${user.name}, <b>Today (${dueToday.date})</b> you have an amount to return from <b>${dueToday.loan.takenFrom}</b>.<br><br>Clear on time to avoid overdue interest. Thank you!`;
        reminderModal.style.display = "flex";
    } 
    else if (dueTomorrow) {
        reminderMessage.innerHTML = 
            `Mr. ${user.name}, <b>Tomorrow (${dueTomorrow.date})</b> your Amount <b>${dueTomorrow.loan.takenAmount}</b> from <b>${dueTomorrow.loan.takenFrom}</b> has to be returned.<br><br>` +
            `<b style="color: #ff8c00;font-weight: 300;">Return the amount before 6 PM today.</b><br><br>` +
            `Note: Do you like to extend? Do so today only. Tomorrow extension will not be provided and additional interest will be added.`;
        reminderModal.style.display = "flex";
    }
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

function calculateOverdueFine(endDateString, loan, user = {}) {
    try {
        const clean = endDateString.split('(')[0].split('<')[0].trim();
        const match = clean.match(/^(\d{2})-(\d{2})-(\d{4})$/);
        if (!match) return { overdue: false, fine: 0, daysOverdue: 0, hoursOverdue: 0 };

        const [, day, month, year] = match;
        const endDate = new Date(`${year}-${month}-${day}`);
        endDate.setHours(23, 59, 59, 999);

        const now = new Date();

        if (now <= endDate) {
            return { overdue: false, fine: 0, daysOverdue: 0, hoursOverdue: 0 };
        }
        const diffMs = now - endDate;
        const hoursOverdue = Math.floor(diffMs / (1000 * 60 * 60));
        const daysOverdue = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

        const fineRate = loan?.fineRate ?? user?.fineRate ?? 0;
        const fine = daysOverdue * fineRate;

        return {
            overdue: true,
            fine,
            daysOverdue,
            hoursOverdue,
            fineRateUsed: fineRate,
            endDate: endDate.toISOString().split('T')[0],
            calculatedAt: now.toISOString()
        };

    } catch (err) {
        console.error("Fine calc error:", err);
        return { overdue: false, fine: 0, daysOverdue: 0, hoursOverdue: 0 };
    }
}

function isDueToday(endDate) {
    const today = new Date();
    const dateFormat = /^(\d{2})-(\d{2})-(\d{4})/;
    const todayStr = `${String(today.getDate()).padStart(2,'0')}-${String(today.getMonth()+1).padStart(2,'0')}-${today.getFullYear()}`;
    
    const cleanEndDate = endDate.split('(')[0].split('<')[0].trim();
    const match = cleanEndDate.match(dateFormat);
    if (!match) return false;
    
    const endDateStr = `${match[1]}-${match[2]}-${match[3]}`;
    return endDateStr === todayStr;
}

function updateAllButtonColors(user) {
    const buttons = document.querySelectorAll("#amountButtons .amount-btn");
    buttons.forEach((btn, idx) => {
        const loan = user.loans[idx];
        if (!loan) return;

        const overdueInfo = calculateOverdueFine(loan.endDate, loan, user);
        const dueToday = isDueToday(loan.endDate);
        if (!btn.classList.contains("active")) {
            if (overdueInfo.overdue) {
                btn.style.background = "rgb(195 86 0)";
                btn.style.color = "white";
            } else if (dueToday) {
                btn.style.background = "#ff9900ff";
                btn.style.color = "white";
            } else {
                btn.style.background = "";
                btn.style.color = "";
                btn.style.border = "";
            }
        }
    });
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

    document.querySelectorAll(".amount-btn").forEach(btn => {
        btn.classList.remove("active");
        updateAllButtonColors(user);
    });

    const activeBtn = document.getElementById("amountButtons").children[index];
    activeBtn.classList.add("active");
    activeBtn.style.background = "#0066cc";
    activeBtn.style.color = "black";

    let overdueSection = "";
    if (overdueInfo.overdue) {
        overdueSection = `
             <h3>Overdue Details</h3>
            <p style="color: #ff9300;"><svg style="fill: #ff9300;" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M440-120q-75 0-140.5-28T185-225q-49-49-77-114.5T80-480q0-75 28-140.5T185-735q49-49 114.5-77T440-840q21 0 40.5 2.5T520-830v82q-20-6-39.5-9t-40.5-3q-118 0-199 81t-81 199q0 118 81 199t199 81q118 0 199-81t81-199q0-11-1-20t-3-20h82q2 11 2 20v20q0 75-28 140.5T695-225q-49 49-114.5 77T440-120Zm112-192L400-464v-216h80v184l128 128-56 56Zm168-288v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z"/></svg> You are overdue by: ${overdueInfo.daysOverdue} days (${overdueInfo.hoursOverdue} hours)</p>
            <p style="color: #ff9300;"><svg style="fill: #ff9300;" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-80q-66 0-127.5-20.5T240-160l58-58q42 29 88 43.5t94 14.5q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480H80q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80ZM159-243l163-163 120 100 198-198v104h80v-240H480v80h104L438-414 318-514 117-313q11 23 19.5 37.5T159-243Zm321-237Z"/></svg> Overdue interest: ${fine} Rupees</p>
        `;
    }

    loanDetails.innerHTML = `
        <p id="scrotamts"></p>
        <div class="loan-entry">
            <p style="    text-align: center;
    position: sticky;
    top: 140px;
    z-index: 1000000;">
                <button class="amounts-btn downsingle" style="    width: 100%;
    font-size: 12px;
    padding: 2px
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    font-weight: 300;
    backdrop-filter: blur(3px);
    gap: 5px;
    background: #2535488f;
    border-radius: 9999px;
    border-top: solid 1px #ffffff30;
    border-bottom: solid 0.1px #ffffff24;" onclick="downloadSingleLoan(${index})">
                    <svg style="width: 14px; height: 20px;" xmlns="http://www.w3.org/2000/svg" id="Outline" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-80v-800l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v800l-60-60-60 60-60-60-60 60-60-60-60 60-60-60-60 60-60-60-60 60-60-60-60 60Zm120-200h480v-80H240v80Zm0-160h480v-80H240v80Zm0-160h480v-80H240v80Z"/></svg>
                    Download this particular amount Receipt
                </button>
            </p>
            <h3>Service</h3>
            <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z"/></svg> Taken in : ${loan.takenFrom} </p>
            <h3>Amount</h3>
            <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M557-518 387-688l57-56 113 113 227-226 56 56-283 283ZM320-220l278 76 238-74q-5-9-14.5-15.5T800-240H598q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T618-354l-234-86h-64v220ZM80-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L600-60l-280-78v58H80Zm80-80h80v-280h-80v280Z"/></svg> Taken Amount : ${loan.takenAmount} Rupees</p>
            <h3>Taken & Return</h3>
            <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/></svg> Taken date : ${loan.planDate}</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v255l-80 80v-175H200v400h248l80 80H200Zm0-560h560v-80H200v80Zm0 0v-80 80ZM662-60 520-202l56-56 85 85 170-170 56 57L662-60Z"/></svg> Return date : ${loan.endDate}</p>
            <h3>Duration</h3>
            <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-520q66 0 113-47t47-113v-120H320v120q0 66 47 113t113 47ZM160-80v-80h80v-120q0-61 28.5-114.5T348-480q-51-32-79.5-85.5T240-680v-120h-80v-80h640v80h-80v120q0 61-28.5 114.5T612-480q51 32 79.5 85.5T720-280v120h80v80H160Z"/></svg> Taken for : ${daysBetween} days</p>
            <h3>Interest</h3>
            <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M220-60 80-200l140-140 57 56-44 44h494l-43-44 56-56 140 140L740-60l-57-56 44-44H233l43 44-56 56Zm260-460q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM200-400q-33 0-56.5-23.5T120-480v-320q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v320q0 33-23.5 56.5T760-400H200Zm80-80h400q0-33 23.5-56.5T760-560v-160q-33 0-56.5-23.5T680-800H280q0 33-23.5 56.5T200-720v160q33 0 56.5 23.5T280-480Zm-80 0v-320 320Z"/></svg> Normal Interest : ${loan.interest} Rupees</p>
            <hr>
            ${overdueSection}
            <hr>
            <h3>Total to Return</h3>
            <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-400 40-640l440-240 440 240-440 240Zm0 160L63-467l84-46 333 182 333-182 84 46-417 227Zm0 160L63-307l84-46 333 182 333-182 84 46L480-80Zm0-411 273-149-273-149-273 149 273 149Zm0-149Z"/></svg>Full Amount : ${totalReturnAmount} Rupees</p>
            <hr>
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

function generateStyledReceipt(textLines, filename) {
    const canvas = document.createElement('canvas');
    const lineHeight = 38;
    const leftMargin = 40;
    const topStart = 80;
    const headingY = 50;

    canvas.width = 720;
    canvas.height = topStart + textLines.length * lineHeight + 60;

    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00BFFF';
    ctx.font = 'bold 32px Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('BS&MFI MONEY RECEIPT', leftMargin, headingY);

    textLines.forEach((line, i) => {
        const y = topStart + i * lineHeight;
        if (line === 'Try to clear in time, Thank you.') {
            ctx.fillStyle = '#00BFFF';
            ctx.font = 'bold 22px Arial, sans-serif';
        } else {
            ctx.fillStyle = '#000000';
            ctx.font = '22px Arial, sans-serif';
        }
        ctx.textAlign = 'left';
        ctx.fillText(line, leftMargin, y);
    });

    ctx.fillStyle = '#777777';
    ctx.font = 'italic 16px Arial';
    ctx.textAlign = 'right';
    ctx.fillText('Powered by BsBookpad', canvas.width - 30, canvas.height - 25);

    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    alert("Receipt has Downloaded..! Verify once...!");
}

function formatReturnDateForReceipt(loan) {
    const userInput = document.getElementById("userPassword").value.trim();
    const user = passwords[userInput];
    if (!user) return "Error";
    
    const overdueInfo = calculateOverdueFine(loan.endDate, loan, user);
    if (overdueInfo.overdue) return "till today";
    
    const cleanEndDate = loan.endDate.split('(')[0].split('<')[0];
    const [d, m, y] = cleanEndDate.split('-');
    return `${d}/${m}/${y.slice(-2)}`;
}

function downloadSingleLoan(index) {
    const userInput = document.getElementById("userPassword").value.trim();
    const user = passwords[userInput];
    if (!user || !user.loans[index]) {
        alert("No loan found! Enter password first.");
        return;
    }

    const loan = user.loans[index];
    const overdueInfo = calculateOverdueFine(loan.endDate, loan, user);
    const fine = overdueInfo.fine || 0;
    const total = (loan.takenAmount + loan.interest + fine).toFixed(2);

    const lines = [
        `Mr. ${user.name}`,
        `Total amount to repay : ₹${total}`,
        '',
        `Amount ${index + 1} total : ₹${total}`,
        `Return date : ${formatReturnDateForReceipt(loan)}`,
        '',
        'Try to clear in time, Thank you.'
    ];

    generateStyledReceipt(lines, `receipt_${user.name}_${index + 1}.png`);
}

function downloadAllLoans() {
    const userInput = document.getElementById("userPassword").value.trim();
    const user = passwords[userInput];
    if (!user || user.loans.length === 0) {
        alert("No loans found! Enter password first.");
        return;
    }

    let totalTaken = 0, totalInterest = 0;
    const amountLines = [];

    user.loans.forEach((loan, i) => {
        const overdueInfo = calculateOverdueFine(loan.endDate, loan, user);
        const fine = overdueInfo.fine || 0;
        const total = (loan.takenAmount + loan.interest + fine).toFixed(2);
        totalTaken += loan.takenAmount;
        totalInterest += loan.interest + fine;

        amountLines.push(`Amount ${i + 1} total : ₹${total}`);
        amountLines.push(`Return date : ${formatReturnDateForReceipt(loan)}`);
        if (i < user.loans.length - 1) amountLines.push('');
    });

    const grandTotal = (totalTaken + totalInterest).toFixed(2);
    const lines = [
        '',
        `Mr. ${user.name}`,
        `Total amount to repay : ₹${grandTotal}`,
        '',
        ...amountLines,
        '',
        'Try to clear in time, Thank you.'
    ];

    generateStyledReceipt(lines, `all_receipts_${user.name}.png`);
}

function showStarCount() {
    const stars = document.getElementById('starCount').textContent.trim();
    if(stars == 0){
        alert(`BsRora(Bot) : \n\nYou have ${stars} stars.\n\nYou can earn stars by renting an mansion and earn swans then cunvert iinto stars.`);
    }
    else{
        alert(`BsRora(Bot) : \n\nYou have ${stars} stars.\n\nYou can use these stars to reduce the interest.`);
    }
}

function showCoinsCount() {
    const coins = document.getElementById('coinsCount').textContent.trim();
    alert(`BsRora(Bot) : \n\nYou have ${coins} Tomar Juntos active amount`);
}
