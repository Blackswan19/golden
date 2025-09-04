const passwords = {
        "4211": {
                name: "Chaitanya Harsha",
                membershipType: "",
                membershipIcon: "https://cdn-icons-png.flaticon.com/512/7641/7641727.png",
                fineRate: 6,
                profileBackground: "#ff4d4d",
                stars: 0,
                loans: [
                    {
                        planDate: "24-05-2025",
                        endDate: "-- <p style='color: #ff6200ff;'>(Interest adding stoped by #PY@0212)</p>",
                        interest: 0,
                        takenAmount: 25000,
                        takenFrom: "MLending"
                    },
                    {
                        planDate: "07-04-2025",
                        endDate: "--<p style='color: #ff6200ff;'>(Interest adding stoped by #PY@0212)</p>",
                        interest: 0,
                        takenAmount: 15000,
                        takenFrom: "MLLD"
                    },
                ]
            },
           "6275": {
                name: "Srikanth Jampana",
                membershipType: "",
                membershipIcon: "https://cdn-icons-png.flaticon.com/512/7641/7641727.png",
                fineRate: 7,
                profileBackground: "red",
                stars: 0,
                loans: [
                    {
                        planDate: "10-08-2025",
                        endDate: "05-09-2025<p style='color: rgb(255, 225, 0);'>(Extanded to 6 days)</p>",
                        interest: 1880,
                        takenAmount: 5000,
                        takenFrom: "MLLD"
                    },
                     {
                        planDate: "15-08-2025",
                        endDate: "05-09-2025<p style='color: rgb(255, 225, 0);'>(Extanded to 6 days)</p>",
                        interest: 5640,
                        takenAmount: 20000,
                        takenFrom: "MLending"
                    },
                     {
                        planDate: "16-08-2025",
                        endDate: "05-09-2025<p style='color: rgb(255, 225, 0);'>(Extanded to 6 days)</p>",
                        interest: 1640,
                        takenAmount: 5000,
                        takenFrom: "MLLD"
                    },
                    {
                      planDate: "18-08-2025",
                        endDate: "05-09-2025<p style='color: rgb(255, 225, 0);'>(Extanded to 6 days)</p>",
                        interest: 1790,
                        takenAmount: 5500,
                        takenFrom: "MLLD"
                    },
                    {
                      planDate: "18-08-2025",
                        endDate: "05-09-2025<p style='color: rgb(255, 225, 0);'>(Extanded to 6 days)</p>",
                        interest: 860,
                        takenAmount: 2000,
                        takenFrom: "MLLD"
                    },
                ]
            },
            "Mahesh888*": {
                name: "Mahesh Muthinti",
                membershipType: "",
                membershipIcon: "https://cdn-icons-png.flaticon.com/512/7641/7641727.png",
                fineRate: 6,
                profileBackground: "#00ff00",
                stars: 0,
                loans: [
                    {
                        planDate: "28-06-2025",
                        endDate: "30-10-2025(Extanded to 30 days)",
                        interest: 2000,
                        takenAmount: 10000,
                        takenFrom: "MLending"
                    },
                    {
                        planDate: "31-09-2025",
                        endDate: "30-10-2025",
                        interest: 600,
                        takenAmount: 4600,
                        takenFrom: "MLLD"
                    },
                    {
                        planDate: "01-06-2025",
                        endDate: "19-09-2025(Extanded to 30 days)",
                        interest: 3260,
                        takenAmount: 5000,
                        takenFrom: "MLLD Offer"
                    },
                    {
                        planDate: "25-05-2025",
                        endDate: "24-09-2025(Extanded to 30 days)",
                        interest: 2080,
                        takenAmount: 5000,
                        takenFrom: "MLLD offer"
                    },
                ]
            },
            "Cherish@123": {
                name: "Cherish",
                membershipType: "",
                membershipIcon: "https://cdn-icons-png.flaticon.com/512/7641/7641727.png",
                fineRate: 6,
                profileBackground: "rgb(255 138 0)",
                stars: 0,
                loans: [
                    {
                        planDate: "21-05-2025",
                        endDate: "-- <p style='color: #ff6200ff;'>(Interest adding stoped by #PY@0212)</p>",
                        interest: 0,
                        takenAmount: 8200,
                        takenFrom: "MLLD"
                    },
                    {
                        planDate: "29-05-2025",
                        endDate: "-- <p style='color: #ff6200ff;'>(Interest adding stoped by #PY@0212)</p>",
                        interest: 0,
                        takenAmount: 20500,
                        takenFrom: "MLending"
                    },
                    {
                        planDate: "23-05-2025",
                        endDate: "-- <p style='color: #ff6200ff;'>(Interest adding stoped by #PY@0212)</p>",
                        interest: 0,
                        takenAmount: 7500,
                        takenFrom: "MLLD"
                    },
                    {
                        planDate: "28-05-2025",
                        endDate: "-- <p style='color: #ff6200ff;'>(Interest adding stoped by #PY@0212)</p>",
                        interest: 0,
                        takenAmount: 3500,
                        takenFrom: "MLLD"
                    },
                    {
                        planDate: "25-05-2025",
                        endDate: "-- <p style='color: #ff6200ff;'>(Interest adding stoped by #PY@0212)</p>",
                        interest: 0,
                        takenAmount: 3500,
                        takenFrom: "MLLD(Offer)"
                    },
                    {
                        planDate: "24-05-2025",
                        endDate: "-- <p style='color: #ff6200ff;'>(Interest adding stoped by #PY@0212)</p>",
                        interest: 0,
                        takenAmount: 4800,
                        takenFrom: "MLLD(Offer)"
                    },
                   
                ]
            },
        };

        let sessionReferenceTime = null;

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

                const amountButtons = document.getElementById("amountButtons");
                amountButtons.innerHTML = "";

                user.loans.forEach((loan, index) => {
                    const btn = document.createElement("button");
                    btn.className = "amount-btn";
                    btn.innerHTML = `${loan.takenAmount} Rupees <span class="amount-id">Amount ${index + 1}</span>`;
                    btn.onclick = () => displayLoanDetails(loan, index);
                    amountButtons.appendChild(btn);
                });

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
                        document.getElementById("reminderMessage").textContent = 
                            `Mr. ${user.name}, Today(${cleanEndDate}) you have a amount to return which you have taken from the servive (${loan.takenFrom}).Try to clear on time if not overdue fine amount will be added. Thank you!`;
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
                    if (isNaN(start) || isNaN(end)) {
                        return "Invalid date";
                    }
                    const diffTime = Math.abs(end - start);
                    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                }
                return "Invalid date format";
            } catch (error) {
                console.error("Error calculating days:", error);
                return "Error";
            }
        }

        function calculateOverdueFine(endDate, user) {
            try {
                const dateFormat = /^(\d{2})-(\d{2})-(\d{4})/;
                const endMatch = endDate.split('(')[0].split('<')[0].match(dateFormat);
                if (!endMatch) return { overdue: false, fine: 0, hoursOverdue: 0 };

                const end = new Date(`${endMatch[3]}-${endMatch[2]}-${endMatch[1]}`);
                end.setHours(23, 59, 59, 999);

                if (!sessionReferenceTime) {
                    sessionReferenceTime = new Date();
                }
                const now = sessionReferenceTime;

                if (now > end) {
                    const diffTime = now - end;
                    const hoursOverdue = Math.floor(diffTime / (1000 * 60 * 60));
                    const fine = hoursOverdue * user.fineRate;
                    return { overdue: true, fine: fine, hoursOverdue: hoursOverdue };
                }
                return { overdue: false, fine: 0, hoursOverdue: 0 };
            } catch (error) {
                console.error("Error calculating overdue fine:", error);
                return { overdue: false, fine: 0, hoursOverdue: 0 };
            }
        }

        function displayLoanDetails(loan, index) {
            const loanDetails = document.getElementById("loanDetails");
            const userInput = document.getElementById("userPassword").value.trim();
            const user = passwords[userInput];

            if (!loan.hasOwnProperty('cachedFine')) {
                const overdueInfo = calculateOverdueFine(loan.endDate, user);
                if (overdueInfo.overdue) {
                    user.loans[index].cachedFine = overdueInfo.fine;
                    user.loans[index].cachedHoursOverdue = overdueInfo.hoursOverdue;
                    user.loans[index].originalInterest = loan.interest;
                    user.loans[index].interest = loan.interest + overdueInfo.fine;
                    if (!loan.endDate.includes('Overdue')) {
                        user.loans[index].endDate = `${loan.endDate.split('<')[0]}<br><p style="color: #ff6c00;">Overdue by ${overdueInfo.hoursOverdue} hours</p>`;
                    }
                } else {
                    user.loans[index].cachedFine = 0;
                    user.loans[index].cachedHoursOverdue = 0;
                    user.loans[index].originalInterest = loan.interest;
                }
            }

            const fine = loan.cachedFine || 0;
            const originalInterest = loan.originalInterest || loan.interest;
            const totalReturnAmount = (loan.takenAmount + loan.interest).toFixed(2);
            const cleanEndDate = loan.endDate.split('(')[0].split('<')[0];
            const daysBetween = calculateDaysBetween(loan.planDate, cleanEndDate);

            document.querySelectorAll(".amount-btn").forEach(btn => btn.classList.remove("active"));
            document.getElementById("amountButtons").children[index].classList.add("active");

            loanDetails.innerHTML = `
                <div class="loan-entry">
                <p style="    text-align: center;
    position: sticky;
    top: 20px;
    margin-top: 20px;
    right: 16px;
    float: right;
    margin-right: -9px;
    
"><button class="amounts-btn downsingle" style=' width: 100%;
    font-size: 10px;
    padding: 3px 15px;
    display: flex
;
    flex-direction: row;
    justify-content: center;
    align-items: center;
' onclick="downloadSingleLoan(${index})">
                        <i class="fa-solid fa-download" style="margin-right: 2px;"></i> This amount receipt
                    </button></p>
                    <h3 >
                        Service
                    </h3>
                    <p>Taken in : ${loan.takenFrom} Service</p>
                    <h3 >
                        Amount
                    </h3>
                    <p><i class="fa-solid fa-money-bill-transfer"></i> Taken Amount : ${loan.takenAmount} Rupees</p>
                    <h3 >
                        Taken & Return
                    </h3>
                    <p><i class="fa-solid fa-calendar-day"></i> Taken date : ${loan.planDate}</p>
                    <p><i class="fa-solid fa-calendar-check"></i> Return date : ${loan.endDate}</p>
                    <h3 >
                        Duration
                    </h3>
                    <p><i class="fa-solid fa-clock"></i> Taken for : ${daysBetween} days</p>
                    <h3 >
                        Interest
                    </h3>
                    <p><i class="fa-solid fa-arrow-up-wide-short"></i> Normal Interest : ${originalInterest} Rupees</p>
                    <h3 >
                        Overdue
                    </h3>
                    <p><i class="fa-solid fa-exclamation-triangle"></i> Overdue interest : ${fine} Rupees</p>
                    <hr>
                    <h3 >
                        Total to Return
                    </h3>
                    <p><i class="fa-solid fa-money-check-alt"></i> Amount : ${totalReturnAmount} Rupees</p>
                    <hr>
                    <div class="issuebtn" style="padding-top: 20px;">  
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
                totalTaken += loan.takenAmount;
                totalInterest += (loan.cachedFine || 0) + (loan.originalInterest || loan.interest);
            });
            const totalReturn = (totalTaken + totalInterest).toFixed(2);

            document.getElementById("totalTaken").textContent = totalTaken;
            document.getElementById("totalInterest").textContent = totalInterest;
            document.getElementById("totalReturn").textContent = totalReturn;

            document.getElementById("amountsModal").style.display = "flex";
        }

        function closeAmountsModal() {
            document.getElementById("amountsModal").style.display = "none";
        }

        function closeModal() {
            document.getElementById("userInfoModal").style.display = "none";
            document.getElementById("passwordContainer").style.display = "flex";
            document.getElementById("userPassword").value = "";
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
            ctx.font = '20px Poppins';
            ctx.textAlign = 'left';
            lines.forEach((line, i) => {
                ctx.fillText(line, 30, 40 + i * lineHeight);
            });
            // Watermark
            ctx.fillStyle = 'gray';
            ctx.font = '16px Poppins';
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
            const totalReturnAmount = (loan.takenAmount + (loan.cachedFine || 0) + (loan.originalInterest || loan.interest)).toFixed(2);
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
                const totalReturnAmount = (loan.takenAmount + (loan.cachedFine || 0) + (loan.originalInterest || loan.interest)).toFixed(2);
                text += `Total Amount ${i + 1} : ${totalReturnAmount} ₹\nReturn date : ${formatDate(cleanEndDate)}\n\n`;
            });
            generateImage(text.trim(), 'all_total_amounts.png');
        }
