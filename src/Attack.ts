import {Pokemon} from "./Pokemon";

export interface IAttack{
    name: string;
    damage: number;
    powerPoints: number;
    maxPowerPoints: number;
}

export class Attack implements IAttack{
    name: string;
    damage: number;
    powerPoints: number;
    maxPowerPoints: number;

    constructor(props: IAttack) {
        this.name = props.name;
        this.damage = props.damage;
        this.powerPoints = props.powerPoints;
        this.maxPowerPoints = props.maxPowerPoints;
    }

    attack(pokemon: Pokemon){
        
    }
}