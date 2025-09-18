 document.addEventListener("DOMContentLoaded", () => {
            const customMenu = document.querySelector(".custom-menu");

            // Handle context menu (right-click)
            // document.addEventListener("contextmenu", (event) => {
            //     event.preventDefault();
            //     if (customMenu) {
            //         customMenu.style.display = "block";
            //         customMenu.style.top = `${event.pageY}px`;
            //         customMenu.style.left = `${event.pageX}px`;
            //     }
            // });

            // Hide custom menu on click
            document.addEventListener("click", () => {
                if (customMenu) {
                    customMenu.style.display = "none";
                }
                const settingsPanel = document.getElementById("settingsPanelTop");
                if (settingsPanel && !event.target.closest('.settings-bar') && !event.target.closest('.settings-panel')) {
                    settingsPanel.classList.remove("show");
                }
            });

            // Hide loading overlay after 3 seconds
            const loadingOverlay = document.getElementById("loadingOverlay");
            setTimeout(() => {
                loadingOverlay.classList.add("hidden");
            }, 3000);

            // Load saved font and theme
            try {
                const savedFont = localStorage.getItem("font") || "default";
                console.log("Retrieved font from localStorage:", savedFont);
                applyFont(savedFont);
                document.getElementById("fontDefaultTop").checked = savedFont === "default";
                document.getElementById("fontSerifTop").checked = savedFont === "serif";
                document.getElementById("fontDefault").checked = savedFont === "default";
                document.getElementById("fontSerif").checked = savedFont === "serif";

                const savedTheme = localStorage.getItem("theme") || "dark";
                console.log("Retrieved theme from localStorage:", savedTheme);
                applyTheme(savedTheme);
                document.getElementById("themeToggle").checked = savedTheme === "light";
                document.getElementById("themeDarkTop").checked = savedTheme === "dark";
                document.getElementById("themeLightTop").checked = savedTheme === "light";
            } catch (e) {
                console.error("Error accessing localStorage:", e);
                applyFont("default");
                applyTheme("dark");
            }

            // Listen for system theme changes
            window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
                try {
                    if (!localStorage.getItem("theme")) {
                        console.log("System theme changed, no saved theme, applying: dark");
                        applyTheme("dark");
                        document.getElementById("themeToggle").checked = false;
                        document.getElementById("themeDarkTop").checked = true;
                        document.getElementById("themeLightTop").checked = false;
                    }
                } catch (e) {
                    console.error("Error checking localStorage on theme change:", e);
                }
            });
        });

        // Default users object
        const users = {
            "Ganesh@5577": {
                name: "J Ganesh",
                fineRate: 5,
                profileBackground: "#ffffff00",
                loans: [
                    {
                        planDate: "20-08-2025",
                        endDate: "10-09-2025",
                        interest: 800,
                        takenAmount: 3200,
                        fineRate: 50
                    },
                ]
            }
        };

        let previousSection = null;

        function showLoginPrompt() {
            const passwordInput = document.getElementById("passwordInput");
            const autofillMessage = document.getElementById("autofillMessage");
            passwordInput.value = "";
            document.getElementById("errorMessage").style.display = "none";
            document.getElementById("passwordSection").style.display = "block";
            document.getElementById("userDetails").style.display = "none";
            document.getElementById("settingsSection").style.display = "none";
            document.getElementById("fontSettingsSection").style.display = "none";
            document.getElementById("popupTitle").textContent = "Verification";
            document.getElementById("backBtn").style.display = "none";
            document.getElementById("settingsBtn").style.display = "inline-block";
            document.getElementById("accountPopup").style.display = "flex";
            document.getElementById("popupOverlay").style.display = "block";
            setTimeout(() => {
                document.getElementById("accountPopup").classList.add("show");
                document.getElementById("popupOverlay").classList.add("show");
            }, 10);

            try {
                const storedPassword = localStorage.getItem("savedPassword");
                if (storedPassword && users[storedPassword]) {
                    setTimeout(() => {
                        passwordInput.value = storedPassword;
                        autofillMessage.style.display = "block";
                        autofillMessage.classList.add("show");
                        setTimeout(() => {
                            autofillMessage.classList.remove("show");
                            setTimeout(() => {
                                autofillMessage.style.display = "none";
                            }, 300);
                        }, 1000);
                    }, 500);
                }
            } catch (e) {
                console.error("Error accessing localStorage for password:", e);
            }
            previousSection = null;
        }

        function calculateDaysOverdue(endDate, currentDate) {
            const end = new Date(endDate.split("-").reverse().join("-"));
            const current = new Date(currentDate.split("-").reverse().join("-"));
            const diffTime = current - end;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays > 0 ? diffDays : 0;
        }

        function calculateDuration(startDate, endDate) {
            const start = new Date(startDate.split("-").reverse().join("-"));
            const end = new Date(endDate.split("-").reverse().join("-"));
            const diffTime = end - start;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays >= 0 ? diffDays : 0;
        }

        function authenticateUser() {
            const enteredPassword = document.getElementById("passwordInput").value;
            const user = users[enteredPassword];
            const today = new Date().toLocaleDateString("en-GB").split("/").join("-");

            if (user) {
                previousSection = "passwordSection";
                try {
                    localStorage.setItem("savedPassword", enteredPassword);
                    console.log("Stored password in localStorage:", enteredPassword);
                } catch (e) {
                    console.error("Error saving password to localStorage:", e);
                }

                document.getElementById("passwordSection").style.display = "none";
                document.getElementById("userDetails").style.display = "block";
                document.getElementById("settingsSection").style.display = "none";
                document.getElementById("fontSettingsSection").style.display = "none";
                document.getElementById("popupTitle").textContent = "My Account";
                document.getElementById("backBtn").style.display = "none";
                document.getElementById("settingsBtn").style.display = "inline-block";
                const accountDetails = document.getElementById("accountDetails");
                accountDetails.style.background = user.profileBackground;
                let loansHTML = user.loans.map((loan, index) => {
                    const totalAmountToReturn = loan.takenAmount + loan.interest;
                    const daysOverdue = calculateDaysOverdue(loan.endDate, today);
                    const fineRate = loan.fineRate !== undefined ? loan.fineRate : user.fineRate;
                    const fine = daysOverdue * fineRate;
                    const duration = calculateDuration(loan.planDate, loan.endDate);
                    const repaymentMessage = daysOverdue >= 0 ? 
                        `<center><p style="color: white; font-weight: bold; padding: 9px; border-radius: 2px; font-size: 13px; margin: 0px; border-left: solid 4px; background: red;">YOU HAVE TO RETURN THIS AMOUNT </p></center>` : 
                        '';
                    return `
                        <div class="loan-item">
                            <h4 style="text-align:center;">Amount ${index + 1}</h4>
                            <p>Taken Amount: <strong>₹${loan.takenAmount}</strong></p>
                            <p>Taken on: <strong>${loan.planDate}</strong></p>
                            <p>Return on: <strong>${loan.endDate}</strong></p>
                            <p>Duration: <strong>${duration} days</strong></p>
                            <p>Interest: <strong>₹${loan.interest}</strong></p>
                            <p>Overdue Interest: <strong>₹${fine}</strong></p>
                            <hr>
                            <p style="color: #00b99e;">Total Amount to Return: <strong>₹${totalAmountToReturn+fine}</strong></p>
                            ${repaymentMessage}
                        </div>
                    `;
                }).join('');
                accountDetails.innerHTML = `
                    <div style="margin: 15px;" class="borrowtop" style="background-color: #212121;">
                        <h2 style="text-align: center; margin: -5px; padding: 0px; font-size: 10px; color: #00a9ff;">Borrower</h2>
                        <p style="text-align: center; display: block; font-size: 16px; margin: 0px; padding: 0px;    display: flex
;
    align-items: center;
    justify-content: center;
    gap: 5px;"><strong>${user.name}</strong> <img width="15px" src="https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/3" alt=""></p>
                    </div>   
                    ${loansHTML}
                `;
            } else if (enteredPassword === '1907') {
                window.location.href = "https://mfi0212.github.io/MFI/banned";
            } else {
                document.getElementById("errorMessage").style.display = "block";
            }
        }

        function toggleSettingsPanelTop() {
            const settingsPanel = document.getElementById("settingsPanelTop");
            settingsPanel.classList.toggle("show");
        }

        function toggleSettingsPanel() {
            const settingsSection = document.getElementById("settingsSection");
            const fontSettingsSection = document.getElementById("fontSettingsSection");
            const passwordSection = document.getElementById("passwordSection");
            const userDetails = document.getElementById("userDetails");
            const popupTitle = document.getElementById("popupTitle");
            const backBtn = document.getElementById("backBtn");
            const settingsBtn = document.getElementById("settingsBtn");

            if (settingsSection.style.display === "block") {
                settingsSection.style.display = "none";
                fontSettingsSection.style.display = "none";
                if (previousSection === "userDetails") {
                    userDetails.style.display = "block";
                    popupTitle.textContent = "My Account";
                    backBtn.style.display = "none";
                    settingsBtn.style.display = "inline-block";
                } else {
                    passwordSection.style.display = "block";
                    popupTitle.textContent = "Verification";
                    backBtn.style.display = "none";
                    settingsBtn.style.display = "inline-block";
                }
            } else {
                previousSection = userDetails.style.display === "block" ? "userDetails" : (passwordSection.style.display === "block" ? "passwordSection" : previousSection);
                settingsSection.style.display = "block";
                fontSettingsSection.style.display = "none";
                passwordSection.style.display = "none";
                userDetails.style.display = "none";
                popupTitle.textContent = "Site Settings";
                backBtn.style.display = previousSection ? "inline-block" : "none";
                settingsBtn.style.display = "none";
            }

            try {
                const savedFont = localStorage.getItem("font") || "default";
                console.log("Updating radio buttons - font:", savedFont);
                document.getElementById("fontDefault").checked = savedFont === "default";
                document.getElementById("fontSerif").checked = savedFont === "serif";
            } catch (e) {
                console.error("Error updating radio buttons from localStorage:", e);
            }
        }

        function displayFontOptions() {
            const settingsSection = document.getElementById("settingsSection");
            const fontSettingsSection = document.getElementById("fontSettingsSection");
            const passwordSection = document.getElementById("passwordSection");
            const userDetails = document.getElementById("userDetails");
            const popupTitle = document.getElementById("popupTitle");
            const backBtn = document.getElementById("backBtn");
            const settingsBtn = document.getElementById("settingsBtn");

            previousSection = settingsSection.style.display === "block" ? "settingsSection" : (userDetails.style.display === "block" ? "userDetails" : (passwordSection.style.display === "block" ? "passwordSection" : previousSection));
            settingsSection.style.display = "none";
            fontSettingsSection.style.display = "block";
            passwordSection.style.display = "none";
            userDetails.style.display = "none";
            popupTitle.textContent = "Font Settings";
            backBtn.style.display = "inline-block";
            settingsBtn.style.display = "none";
        }

        function navigateBack() {
            const settingsSection = document.getElementById("settingsSection");
            const fontSettingsSection = document.getElementById("fontSettingsSection");
            const passwordSection = document.getElementById("passwordSection");
            const userDetails = document.getElementById("userDetails");
            const popupTitle = document.getElementById("popupTitle");
            const backBtn = document.getElementById("backBtn");
            const settingsBtn = document.getElementById("settingsBtn");

            fontSettingsSection.style.display = "none";
            settingsSection.style.display = "none";
            userDetails.style.display = "none";
            passwordSection.style.display = "none";

            if (previousSection === "settingsSection") {
                settingsSection.style.display = "block";
                popupTitle.textContent = "Site Settings";
                backBtn.style.display = previousSection === "userDetails" || previousSection === "passwordSection" ? "inline-block" : "none";
                settingsBtn.style.display = "none";
            } else if (previousSection === "userDetails") {
                userDetails.style.display = "block";
                popupTitle.textContent = "My Account";
                backBtn.style.display = "none";
                settingsBtn.style.display = "inline-block";
            } else if (previousSection === "passwordSection") {
                passwordSection.style.display = "block";
                popupTitle.textContent = "Verification";
                backBtn.style.display = "none";
                settingsBtn.style.display = "inline-block";
            } else {
                closePopup();
            }
        }

        function applyFont(font) {
            try {
                document.documentElement.style.setProperty("--font-family", font === "default" ? "'Poppins', sans-serif" : "'Times New Roman', serif");
                localStorage.setItem("font", font);
                console.log("Applied and stored font:", font);
                document.getElementById("fontDefaultTop").checked = font === "default";
                document.getElementById("fontSerifTop").checked = font === "serif";
                document.getElementById("fontDefault").checked = font === "default";
                document.getElementById("fontSerif").checked = font === "serif";
            } catch (e) {
                console.error("Error applying or storing font:", e);
            }
        }

        function applyTheme(theme) {
            try {
                const validThemes = ["light", "dark"];
                theme = validThemes.includes(theme) ? theme : "dark";
                document.body.classList.remove("light-theme", "dark-theme");
                document.body.classList.add(`${theme}-theme`);
                localStorage.setItem("theme", theme);
                console.log("Applied and stored theme:", theme);
                document.getElementById("themeToggle").checked = theme === "light";
                document.getElementById("themeDarkTop").checked = theme === "dark";
                document.getElementById("themeLightTop").checked = theme === "light";
            } catch (e) {
                console.error("Error applying or storing theme:", e);
                document.body.classList.remove("light-theme", "dark-theme");
                document.body.classList.add("dark-theme");
            }
        }

        function toggleTheme() {
            const themeToggle = document.getElementById("themeToggle");
            const theme = themeToggle.checked ? "light" : "dark";
            applyTheme(theme);
        }

        function resetTheme() {
            try {
                localStorage.removeItem("theme");
                console.log("Cleared theme from localStorage");
                applyTheme("dark");
                document.getElementById("themeToggle").checked = false;
                document.getElementById("themeDarkTop").checked = true;
                document.getElementById("themeLightTop").checked = false;
            } catch (e) {
                console.error("Error resetting theme:", e);
            }
        }

        const accountAccess = document.querySelector('.account-access');
        const sentinel = document.createElement('div');
        sentinel.style.height = '1px';
        document.querySelector('.container').insertBefore(sentinel, accountAccess);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        accountAccess.classList.remove('sticky');
                    } else {
                        accountAccess.classList.add('sticky');
                    }
                });
            },
            {
                root: null,
                rootMargin: '-1px 0px 0px 0px',
                threshold: 0
            }
        );

        observer.observe(sentinel);

        function closePopup() {
            document.getElementById("accountPopup").classList.remove("show");
            document.getElementById("popupOverlay").classList.remove("show");
            setTimeout(() => {
                document.getElementById("accountPopup").style.display = "none";
                document.getElementById("popupOverlay").style.display = "none";
            }, 300);
            previousSection = null;
        }

        document.getElementById("popupOverlay")?.addEventListener("click", closePopup);
        document.getElementById("passwordInput")?.addEventListener("keypress", function(event) {
            if (event.key === "Enter") authenticateUser();
        });
