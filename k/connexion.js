function anderson() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const data  = localStorage.getItem(email);
    if(!data) {
        alert("aucun compte trouvé.");
        return;
    } 
    const commercant = JSON.parse(data);
    if(commercant.password !== password){
        alert("mot de passe incorrect.");
    }
    if(commercant.password == password){
        alert("connexion reussi✅.");
     window.location.href = "loader2.html";
    }
}