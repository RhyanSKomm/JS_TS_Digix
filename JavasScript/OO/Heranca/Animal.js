export class Animal {
    constructor(nome, raca, peso, idade) {
        this.nome = nome;
        this.raca = raca;
        this.peso = peso;
        this.idade = idade;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    emitirSom() {
        console.log("Som do animal");
    }

    mover() {
        console.log("Movendo-se");
    }
}