// function saveEnregistrerData() {
//   const depart = document.getElementById("depart").value.trim();
//   const destination = document.getElementById("destination").value.trim();
//   const date = document.getElementById("date").value.trim();
//   const heure = document.getElementById("heur").value.trim();
//   const tarif = document.getElementById("tarif").value.trim();

//   if (depart && destination && date && heure && tarif) {
//     const varMu = {
//       depart: depart,
//       destination: destination,
//       date: date,
//       heure:heure,
//       tarif:tarif
//     };

//     localStorage.setItem("varMu", JSON.stringify(varMu));
//     alert("✅ trajet enregistrées !");
//     // Redirection possible ici : window.location.href = "page-suivante.html";
//   } else {
//     alert("⚠️ Veuillez remplir tous les champs.");
//   }
// }
// let data = JSON.parse(localStorage.getItem("varMu"));
// console.log(data.depart, data.destination, data.date, data.heure, data.tarif);

// Récupération des données depuis le LocalStorage
const clientData = JSON.parse(localStorage.getItem("clientData"));

// Vérification et affichage
if (clientData) {
  document.getElementById("depart").textContent = clientData.depart;
  document.getElementById("destination").textContent = clientData.destination;
  document.getElementById("date").textContent = clientData.date;
    document.getElementById("heure").textContent = clientData.heure;
      document.getElementById("tarif").textContent = clientData.tarif;
  

  
} else {
  alert("⚠️ Aucune donnée client trouvée dans le LocalStorage.");
}
function saveClientData() {
  const depart = document.getElementById("depart").value.trim();
  const destination = document.getElementById("destination").value.trim();
  const tarif = document.getElementById("tarif").value.trim();

  if (depart && destination && tarif) {
    const barBir = {
      depart: depart,
      destination: destination,
      tarif: tarif
    };

    localStorage.setItem("clientData", JSON.stringify(barBir));
    alert("✅ Informations enregistrées !");
    // Redirection possible ici : window.location.href = "page-suivante.html";
  } else {
    alert("⚠️ Veuillez remplir tous les champs.");
  }
}
let data = JSON.parse(localStorage.getItem("clientData"));
console.log(data.depart, data.destination, data.tarif);


