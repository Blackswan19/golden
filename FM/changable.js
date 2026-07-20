const blockedPasswords = ["6275"];

const specialRates = {
  '2026-07-21': 30
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
  const rate = 30+ (Math.abs(hash) % 5);
  return rate;
}


const allowedPasswords = ["6275", "Mahesh888*"];
    const redirectUrl = "https://mfi0212.github.io/MFI/rate";

    function openPlan() {
        const input = document.getElementById('codeInput').value.trim();
        const errorDiv = document.getElementById('error');
        const popup = document.getElementById('popup');

        errorDiv.innerHTML = '';

        if (!input) {
            errorDiv.innerHTML = '<span style="color:#e02c2c;">Enter the password</span>';
            return;
        }

        if (allowedPasswords.includes(input)) {
            // Correct password - Remove popup
            errorDiv.innerHTML = '<span style="color:#0071e3;">Access Granted!</span>';
            
            setTimeout(() => {
                popup.remove(); // Removes the entire popup
            }, 800);

        } else {
            // Wrong password - Redirect
            errorDiv.innerHTML = '<span style="color:#e02c2c;">Invalid code. Redirecting...</span>';
            
            setTimeout(() => {
                window.location.href = redirectUrl;
            }, 1000);
        }
    }

    // Enter key support
    document.getElementById('codeInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') openPlan();
    });
