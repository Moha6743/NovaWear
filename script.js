let panier = JSON.parse(localStorage.getItem("panier")) || [];

function ajouterAuPanier(nom, prix) {

    panier.push({
        nom: nom,
        prix: prix
    });

    localStorage.setItem("panier", JSON.stringify(panier));

    alert(nom + " a été ajouté au panier !");
}
