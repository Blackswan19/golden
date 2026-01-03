function verify(){
    if(document.getElementById("code").value === "")//every user has there own code
    {
        document.getElementById("lock").classList.add("hidden");
        document.getElementById("game").classList.remove("hidden");
        initGame();
    }else{
        document.getElementById("message").textContent = "Invalid code";
        document.getElementById("message").style.color = "#e53935";
    }
}


const gifts = ["3100 Stars","1200 Stars","1300 Stars","300 Stars","120 Stars","130 Stars","3100 Stars","1200 Stars","1300 Stars",];
