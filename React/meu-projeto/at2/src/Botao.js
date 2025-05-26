import React from "react";
import styles from "./CSSModules/Botao.module.css";


function alerta() {
  alert("Botão clicado!");
}

export default function BotaoEstilizado() {
  return (
    <button onClick={alerta} className={styles.botaoLegal}>Clique</button>
  )
}
