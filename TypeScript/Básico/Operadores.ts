let a: number = 10;
let b: number = 20;

let soma: number = a + b;
let subtracao: number = a - b;
let multiplicacao: number = a * b;
let divisao: number = a / b;

console.log("Soma: " + soma);
console.log("Subtração: " + subtracao);
console.log("Multiplicação: " + multiplicacao);
console.log("Divisão: " + divisao);

let nome: string = "João";
let sobrenome: string = "Silva";
let textoConcatenado: string = nome + sobrenome;
let textoRepetido: string = nome.repeat(3);

console.log(`Texto Concatenado: ${textoConcatenado}`);
console.log(`Texto Repetido: ${textoRepetido}`);

let comparacao1: boolean = a == b;
let comparacao2: boolean = a != b;
let comparacao3: boolean = a === b;
let comparacao4: boolean = a !== b;

console.log(`Comparação 1: ${comparacao1} + Comparação 2: ${comparacao2} + Comparação 3: ${comparacao3} + Comparação 4: ${comparacao4}`);

let comparacao5: boolean = a> 0 && b > 0;
let comparacao6: boolean = a < 0 || b < 0;
let comparacao7: boolean = !(a > 0);

console.log(`Comparação 5: ${comparacao5} + Comparação 6: ${comparacao6} + Comparação 7: ${comparacao7}`);

let resultado: string = (a > b) ? "A é maior que B" : "B é maior que A";

console.log(resultado);

let valor: number = 10;
valor += 5;
valor -= 3;
valor *= 2;
valor /= 4;
valor %= 3;
console.log(`Valor: ${valor}`);

let contador: number = 0;
contador++;
contador--;
console.log(`Contador: ${contador}`);

let valorNulo: number | null = null;
let valorDefault: number = valorNulo ?? 10;

console.log(`Valor nulo: ${valorNulo} Valor Default: ${valorDefault}`);

let numeros: number[] = [1, 2, 3, 4, 5];
let novosNumeros: number[] = [...numeros, 6,7,8,9,10];

console.log(`Numeros: ${numeros} Novos Numeros: ${novosNumeros}`);

let pessoa: { nome: string, idade: number } = { nome: "Maria", idade: 30 };
let { nome: nomePessoa, idade: idadePessoa } = pessoa;
console.log(`Nome: ${nomePessoa} Idade: ${idadePessoa}`);

let objeto: {nome: string, idade: number } = { nome: "Carlos", idade: 25 };
let resultados: { [key: string]: number } = { 
    soma: soma,
    subtracao: subtracao,
    multiplicacao: multiplicacao,
    divisao: divisao
};

console.log(resultados["soma"]);

let resultado2: { [key: string]: any} = {
    nome: "Lucas",
    idade: 28,
    atribuo: true,
    endereco: {
        rua: "Rua A",
        numero: 123
    }
};
