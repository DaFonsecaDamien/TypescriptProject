import {Attack} from "../src/models/attack";
import {isAttackingFirst, Pokemon, PokemonTypes} from "../src/models/pokemon";

let charmander = new Pokemon({
    name : "Charmander",
    type : PokemonTypes.FIRE,
    health:100,
    attack:20,
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
    speed : 20,
    accuracy:25,
    spells:[
        new Attack({name:"Water Gun", damage:10, powerPoints:5, maxPowerPoints:5}),
        new Attack({name:"Bite", damage:10, powerPoints:5, maxPowerPoints:5}),
        new Attack({name:"Water Pulse", damage:10, powerPoints:5, maxPowerPoints:5}),
        new Attack({name:"Aqua Tail", damage:10, powerPoints:5, maxPowerPoints:5}),
    ],
});
let ivysaur = new Pokemon({
    name : "Squirtle",
    type : PokemonTypes.WATER,
    health:100,
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
let pidgey = new Pokemon({
    name : "Pidgey",
    type : PokemonTypes.WATER,
    health:100,
    attack:10,
    defense:34,
    speed :15,
    accuracy:25,
    spells:[
        new Attack({name:"Water Gun", damage:10, powerPoints:5, maxPowerPoints:5}),
        new Attack({name:"Bite", damage:10, powerPoints:5, maxPowerPoints:5}),
        new Attack({name:"Water Pulse", damage:10, powerPoints:5, maxPowerPoints:5}),
        new Attack({name:"Aqua Tail", damage:10, powerPoints:5, maxPowerPoints:5}),
    ],
});

describe('Test Class Pokemon', ()=> {

    it('should return the pokemon with the higher speed', () => {
        expect(isAttackingFirst(charmander, ivysaur)).toBe(charmander);
    });
    it('should return the pokemon with the higher speed', () => {
        expect(isAttackingFirst(charmander, squirtle)).toBe(squirtle);
    });

    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0);
    });
    it('should return a random pokemon when their speed is equal', () => {
        expect(isAttackingFirst(charmander, pidgey)).toBe(charmander);
    });
    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore();
    });

    it('should return the status of the pokemon', () => {
        expect(charmander.isAlive()).toBe(true);
    });
});
