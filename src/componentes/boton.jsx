import React from "react";
import '../styless/boton-css.css';

function Boton(props){


  const esOperador = (valor) => {
    return isNaN(valor) && (valor!== '.') && (valor !== '=');
  };
  
    return(
        <div 
        className={`boton-contenedor ${esOperador(props.children) ? 'operador': null }`}
        onClick={() => {props.tomarValor(props.children)}}
        >
          {props.children}
          
        </div>
    )
}

export default Boton;