import {Pokemon, PokemonTypes} from "./models/pokemon";
import {Attack} from "./models/attack";
import {Battle} from "./models/battle";

let charmander = new Pokemon({
    name : "Charmander",
    type : PokemonTypes.FIRE,
    health:100,
    attack:10,
    defense:34,
    speed : 15,
    accuracy: 25,
    spells:[
        new Attack({name:"Ember", damage:10, powerPoints:5, maxPowerPoints:5}),
        new Attack({name:"Dragon Breath", damage:10, powerPoints:5, maxPowerPoints:5}),
        new Attack({name:"Fire Fang", damage:10, powerPoints:5, maxPowerPoints:5}),
        new Attack({name:"Slash", damage:10, powerPoints:5, maxPowerPoints:5}),
    ],
});

let squirtle = new Pokemon({
    name : "Squirtle",
    type : PokemonTypes.WATER,
    health:100,
    attack:10,
    defense:34,
    speed : 15,
    accuracy:25,
    spells:[
        new Attack({name:"Water Gun", damage:10, powerPoints:5, maxPowerPoints:5}),
        new Attack({name:"Bite", damage:10, powerPoints:5, maxPowerPoints:5}),
        new Attack({name:"Water Pulse", damage:10, powerPoints:5, maxPowerPoints:5}),
        new Attack({name:"Aqua Tail", damage:10, powerPoints:5, maxPowerPoints:5}),
    ],
});

let firstFight = new Battle({
    pokemons : [charmander,squirtle]
});

firstFight.startBattle().then((pokemon)=> console.log("The winner is :", pokemon.name));

