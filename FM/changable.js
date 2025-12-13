  const blockedPasswords = ["6275"];

 const specialRates = {
            'Thu Dec 04 2025': 34
        };
function getDailyInterestRate() {
    const today = new Date().toISOString().slice(0, 10,10); 

    let hash = 5381;
    for (let i = 0; i < today.length; i++) {
        hash = ((hash << 5) + hash) + today.charCodeAt(i); 
    }

    const rate = 40 + (Math.abs(hash) % 15);
    return rate;
}

