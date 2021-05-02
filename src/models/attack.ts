import {Pokemon} from "./pokemon";

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

    //TO-DO Better calcul about the damage of the spell and pokemon
    //TO-DO Better manage of the power points
    public attack(attacker: Pokemon, defender:Pokemon){
        let damage = this.damage + attacker.attack;
        defender.loseHp(damage);
        this.powerPoints--;
    }
}