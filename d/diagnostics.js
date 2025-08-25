// Fonction pour récupérer les diagnostics
function getDiagnostics() {
  return JSON.parse(localStorage.getItem("diagnostics")) || [];
}

// Fonction pour supprimer un diagnostic
function supprimerDiagnostic(index) {
  const diagnostics = getDiagnostics();
  diagnostics.splice(index, 1);
  localStorage.setItem("diagnostics", JSON.stringify(diagnostics));
  afficherDiagnostics();
}

// Fonction pour afficher les diagnostics
function afficherDiagnostics() {
  const liste = document.getElementById("listeDiagnostics");
  liste.innerHTML = "";

  const diagnostics = getDiagnostics();
  diagnostics.forEach((diag, index) => {
    const div = document.createElement("div");
    div.className = "diagnostic";
    div.innerHTML = `
      <p><strong>👤 Client :</strong> ${diag.nom} (${diag.contact})</p>
      <p><strong>🖥️ Appareil :</strong> ${diag.Nom_appareil} - ${diag.Marque} - ${diag.serie_appareil}</p>
      <p><strong>📝 Diagnostic :</strong> ${diag.diagnostic}</p>
      <p><strong>🔧 Recommandations :</strong> ${diag.Recommandations}</p>
      <p><strong>📅 Date :</strong> ${diag.date}</p>
      <button onclick="supprimerDiagnostic(${index})">🗑️ Supprimer</button>
      <hr>
    `;
    liste.appendChild(div);
  });
}

// Chargement automatique à l’ouverture de la page
window.addEventListener("DOMContentLoaded", afficherDiagnostics);
