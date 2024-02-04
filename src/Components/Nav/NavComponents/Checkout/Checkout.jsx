import React, { useState, useContext } from 'react';
import { DarkContext } from "../../../../App";

function Checkout() {

    const { carrito, setCarrito, darkMode } = useContext(DarkContext);
    
    // Darkmode

    const styles = {
        container: {
            backgroundColor: darkMode ? "black" : "white",
            color: darkMode ? "white" : "black",
        }
    };
    
    // Formulario

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');

    // Compra

    function handlePurchase() {
        const compra = {
            Buyer: {Nombre: nombre, Apellido: apellido, Email: email},
            Items: carrito,
            Total: calcularTotal(carrito),
        }
        console.log(compra)
        setCarrito([]);
    }

    const calcularTotal = (carrito) => {
        return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
    };


    return (
        <div className="Seccion" id="scroll" style={styles.container}>
            <h4>Finalizar Compra</h4>
            <input type="text" placeholder='Ingrese su Nombre' onChange={(e) => setNombre(e.target.value)}/>
            <input type="text" placeholder='Ingrese su Apellido' onChange={(e) => setApellido(e.target.value)}/>
            <input type="email" placeholder='Ingrese su Email' onChange={(e) => setEmail(e.target.value)}/>
            <button onClick={handlePurchase}>Comprar</button>
        </div>
    )
}

export default Checkout