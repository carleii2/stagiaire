// 🔄 Navigation entre les sections
function afficherSection(id, event) {
  document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll("nav button").forEach(btn => btn.classList.remove("active-button"));
  if (event) event.target.classList.add("active-button");
}

// 🌙 Mode sombre
document.getElementById("toggleDarkMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🧠 Base de données des maladies
const baseDeDonnees = [
  {
    maladie: "Grippe",
    symptomes: ["fièvre", "toux", "fatigue", "courbatures"],
    conseils: "Repos, hydratation, paracétamol si besoin."
  },
  {
    maladie: "Covid-19",
    symptomes: ["fièvre", "toux", "perte d'odorat", "fatigue", "maux de gorge", "essoufflement"],
    conseils: "Isolement, test PCR, consulter un médecin si aggravation."
  },
  {
    maladie: "Paludisme",
    symptomes: ["fièvre", "frissons", "maux de tête", "nausées", "vomissements", "sueurs"],
    conseils: "Consulter rapidement un médecin, traitement antipaludique."
  },
  {
    maladie: "Rhume",
    symptomes: ["nez bouché", "éternuements", "toux légère", "fatigue"],
    conseils: "Repos, boire chaud, décongestionnant si nécessaire."
  },
  {
    maladie: "Migraine",
    symptomes: ["maux de tête", "nausées", "sensibilité à la lumière", "fatigue"],
    conseils: "Repos dans le noir, hydratation, traitement antalgique."
  }
];

// 🔍 Recherche de maladies
function rechercherMaladie() {
  const input = document.getElementById("symptomeInput").value.toLowerCase();
  const resultatsDiv = document.getElementById("resultats");
  resultatsDiv.innerHTML = "";

  const symptomesEntres = input.split(",").map(s => s.trim());

  const maladiesTrouvees = baseDeDonnees.filter(maladie =>
    symptomesEntres.some(symptome =>
      maladie.symptomes.some(s => s.includes(symptome))
    )
  );

  if (maladiesTrouvees.length === 0) {
    resultatsDiv.innerHTML = "<p>Aucune maladie trouvée pour ces symptômes.</p>";
  } else {
    maladiesTrouvees.forEach(maladie => {
      resultatsDiv.innerHTML += `
        <h3>${maladie.maladie}</h3>
        <p><strong>Symptômes :</strong> ${maladie.symptomes.join(", ")}</p>
        <p><strong>Conseils :</strong> ${maladie.conseils}</p>
        <hr>
      `;
    });
  }
}

// 🔄 Réinitialisation
function resetRecherche() {
  document.getElementById("resultats").innerHTML = "";
  document.getElementById("symptomeInput").value = "";
}

// 🔐 Authentification
document.getElementById("formLogin").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const users = JSON.parse(localStorage.getItem("medecins")) || {};

  if (users[username] && users[username].password === password) {
    document.getElementById("messageLogin").innerHTML = `<p>✅ Connexion réussie ! Bienvenue Dr ${users[username].nomPrenom}.</p>`;
    afficherProfil(users[username]);
    afficherSection("profil");
  } else {
    document.getElementById("messageLogin").innerHTML = "<p>❌ Identifiants incorrects.</p>";
  }
});

// 📝 Inscription
document.getElementById("formInscription").addEventListener("submit", function(e) {
  e.preventDefault();

  const nomPrenom = document.getElementById("nomPrenom").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const specialite = document.getElementById("specialite").value.trim();
  const username = document.getElementById("nouveauUsername").value.trim();
  const password = document.getElementById("nouveauPassword").value;

  if (!nomPrenom || !contact || !specialite || !username || !password) {
    document.getElementById("messageInscription").innerHTML = "<p>❌ Tous les champs sont obligatoires.</p>";
    return;
  }

  let medecins = JSON.parse(localStorage.getItem("medecins")) || {};

  if (medecins[username]) {
    document.getElementById("messageInscription").innerHTML = "<p>❌ Ce nom d'utilisateur existe déjà.</p>";
    return;
  }

  medecins[username] = {
    nomPrenom,
    contact,
    specialite,
    password,
    username
  };

  localStorage.setItem("medecins", JSON.stringify(medecins));

  document.getElementById("messageInscription").innerHTML = `<p>✅ Compte créé avec succès pour Dr ${nomPrenom}.</p>`;
  document.getElementById("formInscription").reset();
  afficherSection("connexion");
});

// 👤 Affichage du profil
function afficherProfil(medecin) {
  const container = document.getElementById("infosProfil");
  container.innerHTML = `
    <p><strong>Nom :</strong> Dr ${medecin.nomPrenom}</p>
    <p><strong>Contact :</strong> ${medecin.contact}</p>
    <p><strong>Spécialité :</strong> ${medecin.specialite}</p>
    <p><strong>Nom d'utilisateur :</strong> ${medecin.username}</p>
  `;
}

// 📅 Rendez-vous
let listeRendezVous = JSON.parse(localStorage.getItem("rdvList")) || [];

document.getElementById("formRdv").addEventListener("submit", function(e) {
  e.preventDefault();
  const nom = document.getElementById("rdvPatient").value;
  const date = document.getElementById("rdvDate").value;

  if (!nom || !date) {
    document.getElementById("confirmationRdv").innerHTML = "<p>❌ Veuillez remplir tous les champs.</p>";
    return;
  }

  if (new Date(date) < new Date()) {
    document.getElementById("confirmationRdv").innerHTML = "<p>❌ La date doit être dans le futur.</p>";
    return;
  }

  const rdv = {
    patient: nom,
    date: new Date(date).toLocaleString()
  };

  listeRendezVous.push(rdv);
  localStorage.setItem("rdvList", JSON.stringify(listeRendezVous));

  document.getElementById("confirmationRdv").innerHTML = `
    <p>✅ Rendez-vous confirmé pour <strong>${rdv.patient}</strong> le <strong>${rdv.date}</strong>.</p>
  `;

  afficherListeRendezVous();
  document.getElementById("formRdv").reset();
});

// 📋 Liste des rendez-vous
function afficherListeRendezVous() {
  const container = document.getElementById("listeRdv");
  container.innerHTML = "<h3>📅 Rendez-vous programmés :</h3>";

  if (listeRendezVous.length === 0) {
    container.innerHTML += "<p>Aucun rendez-vous pour le moment.</p>";
    return;
  }

  listeRendezVous.forEach((rdv, index) => {
    container.innerHTML += `
      <div>
        <p><strong>${index + 1}.</strong> ${rdv.patient} — ${rdv.date}</p>
        <button onclick="supprimerRdv(${index})">🗑️ Supprimer</button>
      </div>
    `;
  });
}

// 🗑️ Suppression de rendez-vous
function supprimerRdv(index) {
  listeRendezVous.splice(index, 1);
  localStorage.setItem("rdvList", JSON.stringify(listeRendezVous));
  afficherListeRendezVous();
}

// 🟢 Initialisation
document.addEventListener("DOMContentLoaded", afficherListeRendezVous);
