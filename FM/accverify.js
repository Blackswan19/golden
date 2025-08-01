const passwords = {
            "4211": {
                name: "Chaitanya Harsha",
                membershipType: "Premium - Mini",
                membershipIcon: "https://cdn-icons-png.flaticon.com/512/7641/7641727.png",
                fineRate: 5,
                profileBackground: "#ff4d4d",
                stars: 0,
                loans: [
                    {
                        planDate: "24-05-2025",
                        endDate: "15-07-2025(Extended to 15 days)",
                        interest: 4800,
                        takenAmount: 15000,
                        takenFrom: "MLending"
                    },
                    {
                        planDate: "07-04-2025",
                        endDate: "15-07-2025(Extended to 15 days)",
                        interest: 6200,
                        takenAmount: 10000,
                        takenFrom: "MLLD"
                    },
                ]
            },
            "6275": {
                name: "Srikanth Jampana",
                membershipType: "Premium - Mini",
                membershipIcon: "https://cdn-icons-png.flaticon.com/512/7641/7641727.png",
                fineRate: 5,
                profileBackground: "red",
                stars: 100,
                loans: [
                    {
                        planDate: "31-07-2025",
                        endDate: "15-08-2025",
                        interest: 4500,
                        takenAmount: 20000,
                        takenFrom: "MLending"
                    },
                    {
                        planDate: "1-08-2025",
                        endDate: "15-08-2025",
                        interest: 4500,
                        takenAmount: 20000,
                        takenFrom: "MLending"
                    },
                ]
            },
            "Mahesh888*": {
                name: "Mahesh Muthinti",
                membershipType: "Premium - Mini",
                membershipIcon: "https://cdn-icons-png.flaticon.com/512/7641/7641727.png",
                fineRate: 0,
                profileBackground: "#00ff00",
                stars: 0,
                loans: [
                    {
                        planDate: "28-06-2025",
                        endDate: "02-08-2025(Extanded to 5 days)",
                        interest: 2500,
                        takenAmount: 10000,
                        takenFrom: "Delayit offer"
                    },
                    {
                        planDate: "06-07-2025",
                        endDate: "05-08-2025",
                        interest: 390,
                        takenAmount: 1500,
                        takenFrom: "MLLD Offer"
                    },
                    {
                        planDate: "01-06-2025",
                        endDate: "20-08-2025(Extanded to 30 days)",
                        interest: 2020,
                        takenAmount: 5000,
                        takenFrom: "MLLD Offer"
                    },
                     {
                        planDate: "25-05-2025",
                        endDate: "24-08-2025(Extanded to 30 days)",
                        interest: 1040,
                        takenAmount: 5000,
                        takenFrom: "MLLD offer"
                    },
                ]
            },
            "Cherish@123": {
                name: "Cherish",
                membershipType: "Premium - Mini",
                membershipIcon: "https://cdn-icons-png.flaticon.com/512/7641/7641727.png",
                fineRate: 3,
                profileBackground: "rgb(255 138 0)",
                stars: 0,
                loans: [
                    {
                        planDate: "21-05-2025",
                        endDate: "15-08-2025(Extanded to 15days)",
                        interest: 1900,
                        takenAmount: 5000,
                        takenFrom: "MLLD"
                    },
                    {
                        planDate: "29-05-2025",
                        endDate: "15-08-2025(Extanded to 15days)",
                        interest: 5200,
                        takenAmount: 15000,
                        takenFrom: "MLending"
                    },
                    {
                        planDate: "23-05-2025",
                        endDate: "15-08-2025(Extanded to 15days)",
                        interest: 1220,
                        takenAmount: 3500,
                        takenFrom: "MLLD"
                    },
                    {
                        planDate: "28-05-2025",
                        endDate: "15-08-2025(Extanded to 15days)",
                        interest: 0,
                        takenAmount: 2000,
                        takenFrom: "MLLD"
                    },
                    {
                        planDate: "25-05-2025",
                        endDate: "15-08-2025(Extanded to 15days)",
                        interest: 0,
                        takenAmount: 2500,
                        takenFrom: "MLLD(Offer)"
                    },
                    {
                        planDate: "24-05-2025",
                        endDate: "15-08-2025(Extanded to 15days)",
                        interest: 0,
                        takenAmount: 3500,
                        takenFrom: "MLLD(Offer)"
                    },
                    {
                        planDate: "26-05-2025",
                        endDate: "15-08-2025(Extanded to 15days)",
                        interest: 0,
                        takenAmount: 10000,
                        takenFrom: "MLending"
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
                            `Dear ${user.name}, Today is your ${loan.takenFrom} return date (${cleanEndDate}). Try to clear on time if not overdue amount will be added. Thank you!`;
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
                        user.loans[index].endDate = `${loan.endDate.split('<')[0]}<br><p style="color: red;">Overdue by ${overdueInfo.hoursOverdue} hours, additional fine added.</p>`;
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
                    <h3 style="text-decoration: underline; margin: 25px 0px; font-weight: 600; font-size: 15px;">
                        Service
                    </h3>
                    <p>${loan.takenFrom}</p>
                    <h3 style="text-decoration: underline; margin: 25px 0px; font-weight: 600; font-size: 15px;">
                        Amount Details
                    </h3>
                    <p><i class="fa-solid fa-money-bill-transfer"></i> Amount: ${loan.takenAmount} Rupees</p>
                    <h3 style="text-decoration: underline; margin: 25px 0px; font-weight: 600; font-size: 15px;">
                        Taken & Ends
                    </h3>
                    <p><i class="fa-solid fa-calendar-day"></i> Taken on: ${loan.planDate}</p>
                    <p><i class="fa-solid fa-calendar-check"></i> End on: ${loan.endDate}</p>
                    <h3 style="text-decoration: underline; margin: 25px 0px; font-weight: 600; font-size: 15px;">
                        Loan Duration
                    </h3>
                    <p><i class="fa-solid fa-clock"></i> Duration: ${daysBetween} days</p>
                    <h3 style="text-decoration: underline; margin: 25px 0px; font-weight: 600; font-size: 15px;">
                        Interest
                    </h3>
                    <p><i class="fa-solid fa-arrow-up-wide-short"></i> Normal Interest: ${originalInterest} Rupees</p>
                    <h3 style="text-decoration: underline; margin: 25px 0px; font-weight: 600; font-size: 15px;">
                        Total Amount to Pay
                    </h3>
                    <p><i class="fa-solid fa-money-check-alt"></i> ${totalReturnAmount} Rupees</p>
                    <hr>
                    <h3 style="text-decoration: underline; margin: 25px 0px; font-weight: 600; font-size: 15px;">
                        Fine
                    </h3>
                    <p><i class="fa-solid fa-exclamation-triangle"></i> Overdue Fine: ${fine} Rupees</p>
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
