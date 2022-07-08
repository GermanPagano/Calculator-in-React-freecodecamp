import React from 'react';
import './App.css';
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import Clear from './componentes/clear-boton'
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {


const [input , setInput] = useState ('');

const cambiarInput = (val) => {
  setInput(input + val)
}

const borrarInput = () => {
  setInput('')
}

const calcular = (val) => {
  if(input){
  setInput(evaluate(input));
  }else(alert('Ingrese valores'))
}



  return (
    <div className="App">
      <div className='contenedor-titulo'>
        <h1>React Calculator</h1>
      </div>

      <div className='contenedor-cacl'>
      <Pantalla input={ input }/>
        <div className='fila'>
          <Boton tomarValor={cambiarInput}>7</Boton>
          <Boton tomarValor={cambiarInput}>8</Boton>
          <Boton tomarValor={cambiarInput}>9</Boton>
          <Boton tomarValor={cambiarInput}>/</Boton>
          
          </div>
        <div className='fila'>
          <Boton tomarValor={cambiarInput}>4</Boton>
          <Boton tomarValor={cambiarInput}>5</Boton>
          <Boton tomarValor={cambiarInput}>6</Boton>
          <Boton tomarValor={cambiarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton tomarValor={cambiarInput}>1</Boton>
          <Boton tomarValor={cambiarInput}>2</Boton>
          <Boton tomarValor={cambiarInput}>3</Boton>
          <Boton tomarValor={cambiarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton tomarValor={cambiarInput}>0</Boton>
          <Boton tomarValor={cambiarInput}>.</Boton>
          <Boton tomarValor={calcular}>=</Boton>
          <Boton tomarValor={cambiarInput}>+</Boton>
        </div>
        <div className='fila'>
        <Clear reiniciar={borrarInput}>C</Clear>
          </div>
      </div>
    </div>
  );
}
export default App;
