import React, { useState, useContext } from "react";
import "./Contador.css";
import { DarkContext } from "../../../../../App";


function Contador({zapatilla, stock}) {

    const { carrito, setCarrito, darkMode } = useContext(DarkContext);

    const styles = {
        boton: {
            borderColor: darkMode ? "grey" : "black",
        }
    };

    // Count

    const [Count, setCount] = useState(1);

    const [Stock, setStock] = useState(stock)

    const [botonListo, setBotonListo] = useState(false);


    const handleAgregarAlCarrito = () => {
        const productoEnCarrito = carrito.find((producto) => producto.id === zapatilla.id);
    
        if (productoEnCarrito) {
            const actualizarStock = Stock - Count;
            // Si el producto ya está en el carrito, actualiza la cantidad
            const nuevoCarrito = carrito.map((producto) =>
            producto.id === zapatilla.id ? { ...producto, cantidad: producto.cantidad + Count } : producto
            );
            setStock(actualizarStock);
            setCarrito(nuevoCarrito);
            if (actualizarStock >= 1) {
                setCount(1);
            } else {
                setCount(0);
            }
        } else {
            const nuevoStock = Stock - Count;
            setCarrito([...carrito, { ...zapatilla, cantidad: Count }]);
            setStock(nuevoStock);
            if (nuevoStock >= 1) {
                setCount(1);
            } else {
                setCount(0);
            }
        }

        
        // Después de 5 segundos, vuelve a "Agregar"
        setBotonListo(true);
        setTimeout(() => {
            setBotonListo(false);
        }, 1000);
    };


    function aumentarCount() {
        if (Count < Stock) {
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
                <button className="botonesContador" onClick={restarCount} style={styles.boton}>-</button>
                <span id="Numero">{Count}</span>
                <button className="botonesContador" onClick={aumentarCount} style={styles.boton}>+</button>
            </div>
            <button className="botonesContador" id="agregar" onClick={handleAgregarAlCarrito} disabled={botonListo} style={styles.boton}>{botonListo ? "Listo" : "Agregar"}</button>
        </div>
);
}

export default Contador;