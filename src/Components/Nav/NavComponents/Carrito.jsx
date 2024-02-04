import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkContext } from "../../../App";


function Carrito() {

    const { carrito, setCarrito, darkMode } = useContext(DarkContext);

    const styles = {
        container: {
            backgroundColor: darkMode ? "black" : "white",
            color: darkMode ? "white" : "black",
        }
    };

    const handleEliminarDelCarrito = (id) => {
        const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
        setCarrito(nuevoCarrito);
    };

    return (
        <div className="Seccion" id="scroll" style={styles.container}>
            <h4>Mis Compras</h4>
            <ul id="Lista">
                {carrito.map((producto) => (
                    <div key={producto.id} className="zapatilla">
                        <img src={producto.imagen} alt={producto.nombre} className="Imagen"/>
                        <h5 className="subrayado">{producto.nombre}</h5>
                        <p>${(producto.precio)*(producto.cantidad)}</p>
                        <p>Cantidad: {producto.cantidad}</p>
                        <button className="botonesContador" onClick={() => handleEliminarDelCarrito(producto.id)}>
                            Eliminar
                        </button>
                    </div>
                ))}
            </ul>
            <Link to="/checkout">
                <center>
                    <button className="botonesContador">Finalizar compra</button>
                </center>
            </Link>
        </div>
);
}

export default Carrito;