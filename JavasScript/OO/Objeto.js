let carro = {
    marca: "Ford",
    modelo: "Focus",
    ano: 2010,
    paisOrigem: {
        pais: "Brasil",
        estado: "SP"
    },
    ligar: function() {
        console.log("Ligando o carro");
    }
}

console.table(carro);
console.log(carro.modelo);
console.log(carro.toString());
carro.ligar();

carro.marca = "Chevrolet";
carro.modelo = "Cruze";
console.table(carro);

delete carro.ano;
console.table(carro);

console.log('marca' in carro);

