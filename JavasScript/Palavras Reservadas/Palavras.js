let pessoa = {
    nome: "Lucas"
}

let pessoa2 = {
}

console.log(Object.getOwnPropertyDescriptor(pessoa));

Object.assign(pessoa2, pessoa);

let config = {
    ip: '127.0.0.1',
    port: '8080',
    block: true
}

let { ip, port, block } = config;
console.log(ip, port, block);

let lista = ['Lucas', 'Dijalma', 'Ronaldo'];
let [primeiro, segundo, terceiro] = lista;

console.log(primeiro, segundo, terceiro);

let lista2 = ['Lucas', 'Dijalma', 'Ronaldo'];
let [primeiro2, ...resto] = lista2;

console.log(primeiro2);

console.log(resto);