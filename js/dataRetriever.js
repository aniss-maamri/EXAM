const url = "https://polemika.univ-paris8.fr/omk/api/items";
let items;

items = fetch(url)
    .then(response => response.json())
    .catch(error => alert("Erreur : " + error));

console.log(items);
