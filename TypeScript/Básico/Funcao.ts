type Funcao = (a: number, b:number)=> number;

const funcao: Funcao = (a,b) =>{
    return a + b;
}

function Soma(a: number, b:number): number {
    return a + b;
}

const somaArrow: Funcao = (a,b) => a + b;

const somaAnonima: Funcao = function(a,b) {
    return a + b;
}

const somaRetornoImplicito: Funcao = (a,b) => a + b;

function somaComParametroOpcional(a: number, b?: number): number {
    if (b) {
        return a + b;
    }
    return a;
}

console.log(Soma(10, 20));