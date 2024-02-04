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

    // Estado de la compra
    const [compraRealizada, setCompraRealizada] = useState(false);

    // Compra

    function handlePurchase() {
        const compra = {
            Buyer: {Nombre: nombre, Apellido: apellido, Email: email},
            Items: carrito,
            Total: calcularTotal(carrito),
        }
        console.log(compra)
        setCarrito([]);
        setCompraRealizada(true);
    }

    const calcularTotal = (carrito) => {
        return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
    };


    return (
        <div className="Seccion" id="scroll" style={styles.container}>
            {compraRealizada ? (
                <div>
                    <h4>{`Gracias por realizar su compra, ${nombre} ${apellido}!`}</h4>
                    <br />
                    <center>
                        <p>{`Consulte el pedido en su casilla de email: ${email}`}</p>
                    </center>
                </div>
            ) : (
                <div>
                    <h4>Finalizar Compra</h4>
                    <div id='form'>
                        <input type="text" placeholder='Ingrese su Nombre' onChange={(e) => setNombre(e.target.value)}/>
                        <input type="text" placeholder='Ingrese su Apellido' onChange={(e) => setApellido(e.target.value)}/>
                        <input type="email" placeholder='Ingrese su Email' onChange={(e) => setEmail(e.target.value)}/>
                        <button onClick={handlePurchase} id='submit'>Comprar</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Checkout