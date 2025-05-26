import React from "react";
import Card from "./components/Card";

function App() {
  const produtos = [
    {
      id: 1,
      nome: "Notebook Gamer",
      preco: 5500,
      descricao: "Notebook potente para jogos e desenvolvimento.",
      imagem: "https://picsum.photos/200?1"
    },
    {
      id: 2,
      nome: "Mouse Gamer",
      preco: 250,
      descricao: "Mouse com alta precisão e iluminação RGB.",
      imagem: "https://picsum.photos/200?2"
    },
    {
      id: 3,
      nome: "Teclado Mecânico",
      preco: 400,
      descricao: "Teclado mecânico com switches azuis.",
      imagem: "https://picsum.photos/200?3"
    }
  ];

  return (

    <div className="catalogo">
      <h1>Lista de Produtos</h1>
      <div className="produtos">
        {produtos.map((produto) => (
          <Card
            key={produto.id}
            id={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            descricao={produto.descricao}
            imagem={produto.imagem}
          />
        ))}
      </div>
    </div>

  )

}

export default App;