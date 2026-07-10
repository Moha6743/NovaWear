// ======================
// NOVAWEAR - SCRIPT
// ======================

let panier = JSON.parse(localStorage.getItem("panier")) || [];

// Ajouter un produit
function ajouterAuPanier(nom, prix) {

    panier.push({
        nom: nom,
        prix: prix,
        quantite: 1
    });

    sauvegarderPanier();

    alert(nom + " a été ajouté au panier !");
}

// Sauvegarder
function sauvegarderPanier() {
    localStorage.setItem("panier", JSON.stringify(panier));
}

// Afficher le panier
function afficherPanier() {

    const liste = document.getElementById("panier");

    if (!liste) return;

    liste.innerHTML = "";

    let total = 0;

    panier.forEach((article, index) => {

        total += article.prix * article.quantite;

        liste.innerHTML += `
        <div class="card">
            <h3>${article.nom}</h3>
            <p>${article.prix.toFixed(2)} €</p>

            <div style="display:flex;gap:10px;justify-content:center;margin:15px 0;">

                <button onclick="diminuer(${index})">-</button>

                <span>${article.quantite}</span>

                <button onclick="augmenter(${index})">+</button>

            </div>

            <button onclick="supprimer(${index})">
                Supprimer
            </button>

        </div>
        `;

    });

    const totalHTML = document.getElementById("total");

    if (totalHTML) {

        totalHTML.innerHTML =
            "Total : " + total.toFixed(2) + " €";

    }

}

// Augmenter quantité
function augmenter(index){

    panier[index].quantite++;

    sauvegarderPanier();

    afficherPanier();

}

// Diminuer quantité
function diminuer(index){

    if(panier[index].quantite > 1){

        panier[index].quantite--;

    }

    sauvegarderPanier();

    afficherPanier();

}

// Supprimer
function supprimer(index){

    panier.splice(index,1);

    sauvegarderPanier();

    afficherPanier();

}

window.onload = afficherPanier;
