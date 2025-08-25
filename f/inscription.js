function inscrireCommercant() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const nom = document.getElementById("nom").value;

  // Vérifie si un compte existe déjà avec cet email
  if (localStorage.getItem(email)) {
    alert("Un compte avec cet email existe déjà.");
    return;
  }

  // Crée un objet commerçant
  const commercant = {
    email: email,
    password: password,
    nom: nom
  };

  // Enregistre dans le localStorage
  localStorage.setItem(email, JSON.stringify(commercant));

  alert("Inscription réussie✔✔✔");
  window.location.href = "AJOUT PRODUIT.HTML"; // Redirection après inscription

  // Affiche les infos du commerçant
  document.getElementById("nomCommercant").textContent = nom;
  document.getElementById("interfaceCommercant").style.display = "block";
}
