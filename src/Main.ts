import {Pokemon, PokemonTypes} from "./Pokemon";

let pokemon = new Pokemon({
    name : "Salameche",
    health: 100,
    attack:51,
    defense:14,
    type: PokemonTypes.FIRE,
    speed : 16,
    accuracy:21,
    spells: [],
    items: ["Choice Scarf"]
});

console.log(pokemon.name);
