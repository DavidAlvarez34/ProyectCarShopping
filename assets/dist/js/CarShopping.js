// class Poke {
//     constructor(data) {
//         this.data = data
//     }

//     static async getPokemons(id) {
//         let url = "https://pokeapi.co/api/v2/pokemon/" + id;
//         const resp = await fetch(url);
//         const data = await resp.json();
//         let Pokemon = new Poke(data)
//         await Pokemon.CreatePoke()
//     }

//     async CreatePoke() {
//         let ctn = document.createElement('div');
//         let nombre = document.createElement('h2');
//         nombre.textContent = `${this.data.name} #${this.data.id}`;
//         let img = document.createElement('img');
//         img.setAttribute('src', this.data.sprites.front_default);
//         ctn.appendChild(nombre);
//         ctn.appendChild(img);
//         pokeDiv.appendChild(ctn);
//     }
// }

// Poke.getPokemons("pikachu");




async function getPokemon(pokemon) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
    let resp = await fetch(url);
    const data = await resp.json();
    console.log("El dato", data)
}


console.log("1")
console.error("2")
console.error("3")
getPokemon("pikachu")
console.error("4")
console.error("5")
console.error("6")
console.error("7")