import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import OlaReact from './App';
import BotaoEstilizado from './Botao';
import Mensagem from './Mensagem';
import SecaoSobre from './Sobre';
import PerfilUsuario from './Perfil';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BotaoEstilizado />
    <Mensagem cor="blue" texto="Hello World!" />
    <SecaoSobre />
    <PerfilUsuario 
      imagem="https://picsum.photos/200?1"
      nome="João da Silva"
      bio="Desenvolvedor Front-end apaixonado por React."
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
