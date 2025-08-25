document.addEventListener("DOMContentLoaded", () => {
    const loadingOverlay = document.getElementById("loadingOverlay");

    setTimeout(() => {
        loadingOverlay.classList.add("hidden");
    }, 3000);

    // Initialize font and theme from localStorage or prefers-color-scheme
    const savedFont = localStorage.getItem("font") || "default";
    appApplyFont(savedFont);

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        appApplyTheme(savedTheme);
    } else {
        const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
        appApplyTheme(prefersLight ? "light" : "dark");
    }

    // Listen for system theme changes if no theme is saved
    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
            appApplyTheme(e.matches ? "light" : "dark");
        }
    });

    // Add event listeners for theme radio buttons
    document.getElementById("themeLight")?.addEventListener("change", () => appApplyTheme("light"));
    document.getElementById("themeNight")?.addEventListener("change", () => appApplyTheme("night"));
    document.getElementById("themeDark")?.addEventListener("change", () => appApplyTheme("dark"));
});

const users = {
    "Ganesh@5577": {
        name: "J Ganesh",
        fineRate: 5,
        profileBackground: "black",
        loans: [
            {
                planDate: "20-08-2025",
                endDate: "01-09-2025",
                interest: 550,
                takenAmount: 3200,
                totalAmountToReturn: 3750
            }
        ]
    }
};

let previousSection = null;

function appShowLoginPrompt() {
    const passwordInput = document.getElementById("passwordInput");
    const autofillMessage = document.getElementById("autofillMessage");
    passwordInput.value = "";
    document.getElementById("errorMessage").style.display = "none";
    document.getElementById("passwordSection").style.display = "block";
    document.getElementById("userDetails").style.display = "none";
    document.getElementById("settingsSection").style.display = "none";
    document.getElementById("fontSettingsSection").style.display = "none";
    document.getElementById("themeSettingsSection").style.display = "none";
    document.getElementById("popupTitle").textContent = "Verification";
    document.getElementById("backBtn").style.display = "none";
    document.getElementById("settingsBtn").style.display = "inline-block";
    document.getElementById("accountPopup").style.display = "flex";
    document.getElementById("popupOverlay").style.display = "block";
    setTimeout(() => {
        document.getElementById("accountPopup").classList.add("show");
        document.getElementById("popupOverlay").classList.add("show");
    }, 10);

    // Autofill stored password after a 2-second delay
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
            }, 500);
        }, 500);
    }
    previousSection = null; // Reset previous section when opening popup
}

function appAuthenticateUser() {
    const enteredPassword = document.getElementById("passwordInput").value;
    const user = users[enteredPassword];

    if (user) {
        previousSection = "passwordSection";
        localStorage.setItem("savedPassword", enteredPassword);
        document.getElementById("passwordSection").style.display = "none";
        document.getElementById("userDetails").style.display = "block";
        document.getElementById("settingsSection").style.display = "none";
        document.getElementById("fontSettingsSection").style.display = "none";
        document.getElementById("themeSettingsSection").style.display = "none";
        document.getElementById("popupTitle").textContent = "My Account";
        document.getElementById("backBtn").style.display = "none";
        document.getElementById("settingsBtn").style.display = "inline-block";
        const accountDetails = document.getElementById("accountDetails");
        accountDetails.style.background = user.profileBackground;
        let loansHTML = user.loans.map((loan, index) => `
            <div class="loan-item">
                <h4>Amount ${index + 1}</h4>
                <p><strong>Taken Amount:</strong> ₹${loan.takenAmount}</p>
                <p><strong>Taken on:</strong> ${loan.planDate}</p>
                <p><strong>Return on:</strong> ${loan.endDate}</p>
                <p><strong>Interest:</strong> ₹${loan.interest}</p>
                <hr>
                <p style="color: #00b99e;font-weight: 900;"><strong>Total Amount to Return:</strong> ₹${loan.totalAmountToReturn}</p>
            </div>
        `).join('');
        accountDetails.innerHTML = `
        <div class="borrowtop">
            <h4>Borrower</h4>
            <p><strong>${user.name}</strong></p>
        </div>   
        ${loansHTML}
        `;
    } else if (enteredPassword === '1907') {
        window.location.href = "https://mfi0212.github.io/MFI/banned";
    } else {
        document.getElementById("errorMessage").style.display = "block";
    }
}

function appToggleSettingsPanel() {
    const settingsSection = document.getElementById("settingsSection");
    const fontSettingsSection = document.getElementById("fontSettingsSection");
    const themeSettingsSection = document.getElementById("themeSettingsSection");
    const passwordSection = document.getElementById("passwordSection");
    const userDetails = document.getElementById("userDetails");
    const popupTitle = document.getElementById("popupTitle");
    const backBtn = document.getElementById("backBtn");
    const settingsBtn = document.getElementById("settingsBtn");

    if (settingsSection.style.display === "block") {
        settingsSection.style.display = "none";
        fontSettingsSection.style.display = "none";
        themeSettingsSection.style.display = "none";
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
        themeSettingsSection.style.display = "none";
        passwordSection.style.display = "none";
        userDetails.style.display = "none";
        popupTitle.textContent = "Site Settings";
        backBtn.style.display = previousSection ? "inline-block" : "none";
        settingsBtn.style.display = "none";
    }

    // Update radio button states
    const savedFont = localStorage.getItem("font") || "default";
    const savedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    document.getElementById("fontDefault").checked = savedFont === "default";
    document.getElementById("fontSerif").checked = savedFont === "serif";
    document.getElementById("themeLight").checked = savedTheme === "light";
    document.getElementById("themeNight").checked = savedTheme === "night";
    document.getElementById("themeDark").checked = savedTheme === "dark";
}

function appDisplayFontOptions() {
    const settingsSection = document.getElementById("settingsSection");
    const fontSettingsSection = document.getElementById("fontSettingsSection");
    const themeSettingsSection = document.getElementById("themeSettingsSection");
    const passwordSection = document.getElementById("passwordSection");
    const userDetails = document.getElementById("userDetails");
    const popupTitle = document.getElementById("popupTitle");
    const backBtn = document.getElementById("backBtn");
    const settingsBtn = document.getElementById("settingsBtn");

    previousSection = settingsSection.style.display === "block" ? "settingsSection" : (userDetails.style.display === "block" ? "userDetails" : (passwordSection.style.display === "block" ? "passwordSection" : previousSection));
    settingsSection.style.display = "none";
    fontSettingsSection.style.display = "block";
    themeSettingsSection.style.display = "none";
    passwordSection.style.display = "none";
    userDetails.style.display = "none";
    popupTitle.textContent = "Font Settings";
    backBtn.style.display = "inline-block";
    settingsBtn.style.display = "none";
}

function appDisplayThemeOptions() {
    const settingsSection = document.getElementById("settingsSection");
    const fontSettingsSection = document.getElementById("fontSettingsSection");
    const themeSettingsSection = document.getElementById("themeSettingsSection");
    const passwordSection = document.getElementById("passwordSection");
    const userDetails = document.getElementById("userDetails");
    const popupTitle = document.getElementById("popupTitle");
    const backBtn = document.getElementById("backBtn");
    const settingsBtn = document.getElementById("settingsBtn");

    previousSection = settingsSection.style.display === "block" ? "settingsSection" : (userDetails.style.display === "block" ? "userDetails" : (passwordSection.style.display === "block" ? "passwordSection" : previousSection));
    settingsSection.style.display = "none";
    fontSettingsSection.style.display = "none";
    themeSettingsSection.style.display = "block";
    passwordSection.style.display = "none";
    userDetails.style.display = "none";
    popupTitle.textContent = "Theme Settings";
    backBtn.style.display = "inline-block";
    settingsBtn.style.display = "none";
}

function appNavigateBack() {
    const settingsSection = document.getElementById("settingsSection");
    const fontSettingsSection = document.getElementById("fontSettingsSection");
    const themeSettingsSection = document.getElementById("themeSettingsSection");
    const passwordSection = document.getElementById("passwordSection");
    const userDetails = document.getElementById("userDetails");
    const popupTitle = document.getElementById("popupTitle");
    const backBtn = document.getElementById("backBtn");
    const settingsBtn = document.getElementById("settingsBtn");

    fontSettingsSection.style.display = "none";
    themeSettingsSection.style.display = "none";
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
        appClosePopup();
    }
}

function appApplyFont(font) {
    document.documentElement.style.setProperty("--font-family", font === "default" ? "'Poppins', sans-serif" : "'Times New Roman', serif");
    localStorage.setItem("font", font);
}

function appApplyTheme(theme) {
    const validThemes = ["light", "night", "dark"];
    theme = validThemes.includes(theme) ? theme : "dark"; // Fallback to "dark" if invalid
    document.body.classList.remove("light-theme", "night-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem("theme", theme);
}

function appClosePopup() {
    document.getElementById("accountPopup").classList.remove("show");
    document.getElementById("popupOverlay").classList.remove("show");
    setTimeout(() => {
        document.getElementById("accountPopup").style.display = "none";
        document.getElementById("popupOverlay").style.display = "none";
    }, 300);
    previousSection = null; // Reset previous section when closing popup
}

document.getElementById("popupOverlay")?.addEventListener("click", appClosePopup);
document.getElementById("passwordInput")?.addEventListener("keypress", function(event) {
    if (event.key === "Enter") appAuthenticateUser();
});
