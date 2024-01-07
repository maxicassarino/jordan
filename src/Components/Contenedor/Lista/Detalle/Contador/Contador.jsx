import React, { useState } from "react";
import "./Contador.css";


function Contador({onAdd, stock}) {

    // Count

    let maxCount = stock;

    const [Count, setCount] = useState(1);

    function aumentarCount() {
        if (Count < maxCount) {
            setCount(Count+1)
        }
    } 

    function restarCount() {
        if (Count > 1) {
            setCount(Count-1)
        }
    } 

    return (
        <div className="carrito">
            <div className="contador">
                <button className="botonesContador" onClick={restarCount}>-</button>
                <span id="Numero">{Count}</span>
                <button className="botonesContador" onClick={aumentarCount}>+</button>
            </div>
            <button className="botonesContador" id="agregar" onClick={() => onAdd(Count)}>Agregar</button>
        </div>
);
}

export default Contador;