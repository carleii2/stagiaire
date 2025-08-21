function connecterCommercant() {
  const email = document.getElementById("email").value;
  const password= document.getElementById("password").value;

  const data = localStorage.getItem(email);
  if (!data) {
    alert("Aucun compte trouvé.");
    return;
  }

  const commercant = JSON.parse(data);
  if (commercant.password !== password) {
    alert("Mot de passe incorrect.");
  }
    if (commercant.password == password) {
    alert("Mot de passe correct.");
    window.location.href = "AJOUT PRODUIT.HTML";
    }
  document.getElementById("nomCommercant").textContent = commercant.nom;
  document.getElementById("interfaceCommercant").style.display = "block";
  alert("Connexion réussie !");
}
