const endpoint = "https://pokeapi.co/api/v2/pokemon/meowth/";
const pokemonElement = document.getElementById("pokemon")

fetch(endpoint)
.then((response) => {
    if (response.ok) {
        return response.json();
    } else {
        notOk()
    }
})
.then((json) => {
    console.log(json.name);
    let pokemonName = document.createElement("div");
    pokemonName.innerText = json.name;
    pokemonElement.appendChild(pokemonName);

    let abilities = [];
    json.abilities.forEach(element => {
        abilities.push(element.ability.name);
    });
    let pokemonAbilities = document.createElement("div");
    pokemonAbilities.innerText = abilities;
    pokemonElement.appendChild(pokemonAbilities);

    let pokemonSprite = document.createElement("img");
    pokemonSprite.src = json.sprites.front_default;
    pokemonElement.appendChild(pokemonSprite);
    
})
.catch((response) => {
    notOk()
});

function notOk() {
    let responseNotOk = document.createElement("div");
    responseNotOk.innerText = "Response is not OK :'(";
    pokemonElement.appendChild(responseNotOk);
}