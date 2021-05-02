import {Attack} from "./attack";

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

    constructor(props: IPokemon) {
        this.name = props.name;
        this.type = props.type;
        this.health= props.health;
        this.attack= props.attack;
        this.speed= props.speed;
        this.defense = props.defense;
        this.accuracy = props.accuracy;
        this.spells = props.spells;
    }

    public loseHp(damage: number){
        this.health -= damage;
    }

    public isAlive(): boolean{
        return this.health > 0;
    }
}

export function isAttackingFirst(first:Pokemon, second:Pokemon): Pokemon{
    if (first.speed === second.speed) {
        return (Math.round(Math.random()) === 0 ? first:second);
    }
    else if(first.speed > second.speed){
        return first;
    }else{
        return second;
    }
}