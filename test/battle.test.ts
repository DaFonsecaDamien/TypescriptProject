import {Attack} from "../src/models/attack";
import {Pokemon, PokemonTypes} from "../src/models/pokemon";
import {Battle} from "../src/models/battle";

let charmander: Pokemon;
let squirtle: Pokemon;
let ivysaur: Pokemon;
let battle: Battle;
let battleWithOutHP: Battle;


describe('Test Class Battle', () => {

    beforeEach(() => {
        charmander = new Pokemon({
            name : "Charmander",
            type : PokemonTypes.FIRE,
            health:100,
            attack:20,
            defense:34,
            speed : 18,
            accuracy: 25,
            spells:[
                new Attack({name:"Ember", damage:10, powerPoints:5, maxPowerPoints:5}),
                new Attack({name:"Dragon Breath", damage:10, powerPoints:5, maxPowerPoints:5}),
                new Attack({name:"Fire Fang", damage:10, powerPoints:5, maxPowerPoints:5}),
                new Attack({name:"Slash", damage:10, powerPoints:5, maxPowerPoints:5}),
            ],
        });
        squirtle = new Pokemon({
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
        ivysaur = new Pokemon({
            name : "Ivysaur",
            type : PokemonTypes.WATER,
            health:0,
            attack:10,
            defense:34,
            speed : 5,
            accuracy:25,
            spells:[
                new Attack({name:"Water Gun", damage:10, powerPoints:5, maxPowerPoints:5}),
                new Attack({name:"Bite", damage:10, powerPoints:5, maxPowerPoints:5}),
                new Attack({name:"Water Pulse", damage:10, powerPoints:5, maxPowerPoints:5}),
                new Attack({name:"Aqua Tail", damage:10, powerPoints:5, maxPowerPoints:5}),
            ],
        });
        battle = new Battle({
            pokemons : [charmander,squirtle]
        });
        battleWithOutHP = new Battle({
            pokemons : [charmander,ivysaur]
        });
    });
    it('should return the winner of a full fight', () => {
        battle.startBattle().then(pokemon => expect(pokemon).toBe(charmander));
    });

    it('should return the winner when a pokemon has 0 hp', () => {
        expect(battleWithOutHP.getWinner()).toBe(charmander);
    });
});