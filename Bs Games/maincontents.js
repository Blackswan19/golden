function verify(){
    if(document.getElementById("code").value === "121"){
        document.getElementById("lock").classList.add("hidden");
        document.getElementById("game").classList.remove("hidden");
        initGame();
    }else{
        document.getElementById("message").textContent = "Invalid code";
        document.getElementById("message").style.color = "#e53935";
    }
}

const gifts = ["100 Stars","200 Stars","300 Stars"];