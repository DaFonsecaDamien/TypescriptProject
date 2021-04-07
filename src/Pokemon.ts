import {Attack} from "./Attack";

export enum PokemonTypes {
    NORMAL = "NORMAL",
    FIRE = "FIRE",
    WATER= "WATER",
    ELECTRIC= "ELECTRIC",
    GRASS= "GRASS",
    ICE= "ICE",
    FIGHTING= "FIGHTING",
    POISON= "POISON",
    GROUND= "GROUND",
    FLYING= "FLYING",
    PSYCHIC= "PSYCHIC",
    BUG= "BUG",
    ROCK= "ROCK",
    GHOST= "GHOST",
    DRAGON= "DRAGON",
    DARK= "DARK",
    STEEL= "STEEL",
    FAIRY= "FAIRY"
}

export interface IPokemon{
    name: string;
    type: PokemonTypes;
    health: number;
    defense: number;
    attack: number;
    speed: number;
    accuracy: number;
    spells: Attack[];
    items: string[];
}

export class Pokemon implements IPokemon{
    name: string;
    type: PokemonTypes;
    health: number;
    defense: number;
    attack: number;
    speed: number;
    accuracy: number;
    spells: Attack[];
    items: string[];

    constructor(props: IPokemon) {
        this.name = props.name;
        this.type = props.type;
        this.health = props.health;
        this.defense = props.defense;
        this.attack = props.attack;
        this.speed = props.speed;
        this.accuracy = props.accuracy;
        this.items = props.items;
        this.spells = props.spells;
    }
}

export function isAttackingFirst(first:Pokemon, second:Pokemon): Pokemon{
    if(first.speed == second.speed && first.accuracy == second.accuracy){
        return first;
    }else if(first.speed > second.speed){
        return first;
    }else{
        return second;
    }
}


