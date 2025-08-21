function inscrireCommercant() {
  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Vérifie si le compte existe déjà
  if (localStorage.getItem(email)) {
    alert("Ce compte existe déjà.");
    return;
  }

  // Crée l'objet commerçant
  const commercant = {
    nom: nom,
    email: email,
    password: password
  };

  // Sauvegarde dans localStorage
  localStorage.setItem(email, JSON.stringify(commercant));

  // Affiche les infos et interface
  document.getElementById("nomCommercant").textContent = commercant.nom;
  document.getElementById("interfaceCommercant").style.display = "block";
  alert("Inscription réussie !");
}