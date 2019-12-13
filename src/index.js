import React from 'react';
import ReactDOM from 'react-dom';

function Boton (props){
    return <button className="btn-gral">{props.food}</button>
}

ReactDOM.render(
<div>
<Boton food="Menu"/>
<Boton food="Desayuno"/>
</div>,
 document.getElementById("root"));