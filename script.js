let panier = JSON.parse(localStorage.getItem("panier")) || [];

function ajouterAuPanier(nom, prix) {
    panier.push({
        nom: nom,
        prix: prix
    });

    localStorage.setItem("panier", JSON.stringify(panier));

    alert(nom + " ajouté au panier !");
}

function afficherPanier() {

    const liste = document.getElementById("panier");

    if(!liste) return;

    liste.innerHTML = "";

    let total = 0;

    panier.forEach((article,index)=>{

        total += article.prix;

        liste.innerHTML += `
        <div class="card">
            <h3>${article.nom}</h3>
            <p>${article.prix.toFixed(2)} €</p>
            <button onclick="supprimer(${index})">
            Supprimer
            </button>
        </div>
        `;

    });

    document.getElementById("total").innerHTML =
    "Total : " + total.toFixed(2) + " €";

}

function supprimer(index){

    panier.splice(index,1);

    localStorage.setItem("panier",JSON.stringify(panier));

    afficherPanier();

}

window.onload = afficherPanier;
