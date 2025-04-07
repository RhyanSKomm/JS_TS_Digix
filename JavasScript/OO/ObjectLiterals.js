function Jogador(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.chutar = function() {
        console.log(this.nome + " chutou a bola");
    }
}

function Time (nome, qnt) {
    this.nome = nome;
    this.qnt = qnt;
    this.jogadores = [];
    this.addJogador = function(jogador) {
        this.jogadores.push(jogador);
    }
}

function compare (obj1, ob2) {
    if (obj1 instanceof ob2) {
        console.log("São iguais");
    }
    else {
        console.log("São diferentes");
    }
}

let jogador1 = new Jogador("Dijalminha", 30);
let jogador2 = new Jogador("Ronaldo", 25);

let time1 = new Time("Fluzão da massa", 11);

console.log(jogador1 instanceof Jogador); 
