export interface IPokemon{
    name: string;
}

export class Pokemon implements IPokemon{
    name: string;

    constructor(props: IPokemon) {
        this.name = props.name;
    }
}