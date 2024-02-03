import React, { useState, useContext } from "react";
import "./Contador.css";
import { DarkContext } from "../../../../../App";


function Contador({zapatilla, stock}) {

    const { agregarAlCarrito } = useContext(DarkContext);

    // Count

    let maxCount = stock;

    const [Count, setCount] = useState(1);

    const [isAdded, setIsAdded] = useState(false);

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

    const handleAgregarAlCarrito = () => {
        agregarAlCarrito({ ...zapatilla, cantidad: Count });
        setIsAdded(true);
    };

    return (
        <div className="carrito">
            <div className="contador">
                <button className="botonesContador" onClick={restarCount}>-</button>
                <span id="Numero">{Count}</span>
                <button className="botonesContador" onClick={aumentarCount}>+</button>
            </div>
            <button className="botonesContador" id="agregar" onClick={handleAgregarAlCarrito} disabled={isAdded}>{isAdded ? "Listo" : "Agregar"}</button>
        </div>
);
}

export default Contador;