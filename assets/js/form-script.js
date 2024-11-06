document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le formulaire de soumettre normalement

    // Prépare les données du formulaire pour l'envoi
    const formData = new FormData(this);

    // Envoie la requête POST vers Formspree
    fetch('https://formspree.io/f/xpwzdpkr', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
        .then(response => {
            if (response.ok) {
                // Affiche le message de confirmation
                document.getElementById('confirmationMessage').style.display = 'block';
                // Réinitialise le formulaire après envoi
                document.getElementById('contactForm').reset();
            } else {
                alert("Une erreur s'est produite. Veuillez réessayer.");
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert("Une erreur s'est produite lors de l'envoi du formulaire.");
        });
});
