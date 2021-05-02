import {isAttackingFirst, Pokemon} from "./pokemon";
import {Attack} from "./attack";

export interface IBattle{
    pokemons: Pokemon[];
}

export class Battle implements IBattle{
    pokemons: Pokemon[];
    turn: number;

    constructor(props: IBattle) {
        this.pokemons = props.pokemons;
        this.turn = this.firstPokemonToAttack();
    }

    async startBattle(): Promise<Pokemon>{
        return await new Promise(resolve => {
            const timer = setInterval(async () => {
                if(this.pokemons[0].isAlive() || this.pokemons[1].isAlive()){
                    resolve(this.getWinner());
                    clearInterval(timer);
                }else{
                    this.useSpell(this.pokemons[this.turn % 2], this.pokemons[(this.turn + 1) % 2]);
                }
            }, 1000);
        });
    }

    public useSpell(attacker:Pokemon, defender:Pokemon){
        const spell = this.getSpell(attacker);
        spell.attack(attacker, defender);
    }

    public getSpell(pokemon: Pokemon): Attack{
        const random = Math.floor(Math.random() * 4);
        return pokemon.spells[random];
    }

    public firstPokemonToAttack(){
        const pokemon = isAttackingFirst(this.pokemons[0], this.pokemons[1]);
        return this.pokemons.indexOf(pokemon);
    }

    public getWinner(): Pokemon{
        return this.pokemons[0].isAlive() ? this.pokemons[0] : this.pokemons[1];
    }

}