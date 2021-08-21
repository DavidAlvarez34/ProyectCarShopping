async function getPokemon(product) {
    let url = "https://api.mercadolibre.com/seller-promotions/users/631366846";
    let resp = await fetch(url);
    const data = await resp.json();
    console.log("El dato", data)
}
getPokemon("pikachu")