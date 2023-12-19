import React, { useState } from "react";
import "./Contador.css";


function Contador({onAdd}) {

    // Count

    let maxCount = 5;

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
                <button onClick={restarCount}>-</button>
                <span>{Count}</span>
                <button onClick={aumentarCount}>+</button>
            </div>
            <button onClick={() => onAdd(Count)}>Agregar</button>
        </div>
);
}

export default Contador;