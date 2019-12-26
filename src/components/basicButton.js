import React from 'react';
import ReactDOM from 'react-dom';

function BasicBtn (props){
    return <button>{props.buttonName}</button>
}

ReactDOM.render(
    <BasicBtn buttonName="soy el boton"/>,
 document.getElementById("root"));