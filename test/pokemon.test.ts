import {Pokemon, isAttackingFirst, PokemonTypes} from "../src/Pokemon";
import {Attack} from "../src/Attack";

// function isEquipWithItem(pokemon: Pokemon){
//     if(pokemon.items){
//         pokemon.items.forEach((item)=>{
//             if(item == "Choice Scarf"){
//                 pokemon.speed = pokemon.speed*1.5;
//             }
//         });
//     }
// }

let charmander = new Pokemon({
    name : "Charmander",
    type : PokemonTypes.FIRE,
    health:100,
    attack:64,
    defense:34,
    speed : 15,
    accuracy: 25,
    spells:[
        new Attack({name:"Ember", damage:10, powerPoints:5, maxPowerPoints:5}),
        new Attack({name:"Dragon Breath", damage:10, powerPoints:5, maxPowerPoints:5}),
        new Attack({name:"Fire Fang", damage:10, powerPoints:5, maxPowerPoints:5}),
        new Attack({name:"Slash", damage:10, powerPoints:5, maxPowerPoints:5}),
    ],
    items: ["Choice Scarf"]
});

let squirtle = new Pokemon({
    name : "Squirtle",
    type : PokemonTypes.WATER,
    health:100,
    attack:64,
    defense:34,
    speed : 21,
    accuracy:25,
    spells:[
        new Attack({name:"Water Gun", damage:10, powerPoints:5, maxPowerPoints:5}),
        new Attack({name:"Bite", damage:10, powerPoints:5, maxPowerPoints:5}),
        new Attack({name:"Water Pulse", damage:10, powerPoints:5, maxPowerPoints:5}),
        new Attack({name:"Aqua Tail", damage:10, powerPoints:5, maxPowerPoints:5}),
    ],
    items: []
});

describe('Pokemon', () => {
    it('should return the name of the pokemon', () => {
        expect(charmander.name).toBe("Charmander");
    });

    it('should return the type of the pokemon', () => {
        expect(charmander.type).toBe("FIRE");
    });

    it('should return the speed of the pokemon', () => {
        expect(charmander.speed).toBe(15);
    });

    it('should return the pokemon with the higher speed', () => {
        expect(isAttackingFirst(charmander, squirtle)).toBe(squirtle);
    });
});