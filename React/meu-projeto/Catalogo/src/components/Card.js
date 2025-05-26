import React from "react";
import '../App.css';


function Card({ id, nome, preco, descricao, imagem }) {
    return (
        <div className="card-produto">
            <img src={imagem} alt={nome} />
            <h2>{id} - {nome}</h2>
            <p>{descricao}</p>
            <p>R$ {preco.toFixed(2)}</p>
        </div>
    );
}

export default Card;