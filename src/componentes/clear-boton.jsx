import React from "react";
import '../styless/clear-boton-css.css';

const Clear = (props) => {

    return(

<div className="clear"
    onClick={()=>{props.reiniciar()}}
>
{props.children}
</div>
    )


}
export default Clear;