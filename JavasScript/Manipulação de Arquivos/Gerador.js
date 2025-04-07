import {writeFile} from 'fs';

const produto = {
    nome: "Produto",
    preco: 100,
    desconto: 0.2,
}

writeFile('arquivoGerado.json', JSON.stringify(produto), (err) => {
    console.log(err || "Arquivo gerado com sucesso");
})