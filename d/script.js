// Fonction pour récupérer les diagnostics creer
function getDiagnostics() {
  return JSON.parse(localStorage.getItem("diagnostics")) || [];
}

// Fonction pour enregistrer un nouveau diagnostic
document.getElementById("client").addEventListener("submit", function(e) {
  e.preventDefault();

  const nouveauDiagnostic = {
    nom: document.getElementById("nom").value,
    contact: document.getElementById("contact").value,
    Nom_appareil: document.getElementById("Nom_appareil").value,
    Marque: document.getElementById("Marque").value,
    serie_appareil: document.getElementById("serie_appareil").value,
    diagnostic: document.getElementById("diagnostic").value,
    Recommandations: document.getElementById("Recommandations").value,
    date: new Date().toLocaleString('fr-FR')
  };

  const diagnostics = getDiagnostics();
  diagnostics.push(nouveauDiagnostic);
  localStorage.setItem("diagnostics", JSON.stringify(diagnostics));

  alert("✅ Diagnostic enregistré !");
  this.reset();
});
