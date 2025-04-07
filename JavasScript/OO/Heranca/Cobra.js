import { Animal } from "./Animal.js";

export class Cobra extends Animal {
    static venenosa = true;
    constructor(nome, raca, peso, idade, cor) {
        super(nome, raca, peso, idade);
        this.cor = cor;
    }

    getCor() {
        return this.cor;
    }
}