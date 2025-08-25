function ander() {
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(localStorage.getItem(email)) {
        alert("ce compte existe deja.");
        return;
    }
    const inscription = {
        nom: nom,
        email: email,
        password: password
    };
    localStorage.setItem(email, JSON.stringify(inscription));

    document.getElementById("nomInscription").textContent = inscription.nom;
     document.getElementById("indInscription").style.display = "block";
     alert("inscription reussi✅")
}