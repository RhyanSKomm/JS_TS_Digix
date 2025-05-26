import React, { useState } from 'react';
import './Calculadora.css';

export default function Calculadora() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleResult = () => {
    try {
      setInput(eval(input).toString()); // ⚠️ Cuidado com eval em apps reais
    } catch {
      setInput('Erro');
    }
  };

  const botoes = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className="calculadora">
      <h1>Calculadora</h1>
      <input type="text" value={input} readOnly className="display" />
      <div className="botoes">
        {botoes.map((btn, i) => (
          <button
            key={i}
            onClick={() => (btn === '=' ? handleResult() : handleClick(btn))}
          >
            {btn}
          </button>
        ))}
        <button className="limpar" onClick={handleClear}>Limpar</button>
      </div>
    </div>
  );
}
