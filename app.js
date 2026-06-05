function generate(){
    let characters = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for(let i = 0; i < 8; i++){
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex]
    }
    document.getElementById("password").value = password
}

function copypassword(){

    let password = document.getElementById("password").value ;

    navigator.clipboard.writeText(password)

    alert("copy")
}
