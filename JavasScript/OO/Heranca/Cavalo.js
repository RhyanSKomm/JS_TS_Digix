import { Animal } from "./Animal.js";

export class Cavalo extends Animal {
    constructor(nome, raca, peso, idade, cor) {
        super(nome, raca, peso, idade);
        this.cor = cor;
    }

    getCor() {
        return this.cor;
    }

    emitirSom() {
        console.log("Relinchar");
    }

    mover() {
        console.log("Cavalo trotando");
    }
}