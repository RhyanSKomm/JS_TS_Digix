import './App.css';

function Soma (props) {
  return (
    <div className="App">
      <h2>Resultado da soma: {props.a + props.b}</h2>
    </div>
  );
}

export default Soma;