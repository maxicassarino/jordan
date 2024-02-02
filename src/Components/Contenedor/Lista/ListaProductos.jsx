import { Link } from "react-router-dom";
import "./ListaProductos.css";
import { DarkContext } from "../../../App";
import { useContext } from "react";


function ListaProductos({zapatillas}) {

    const { darkMode } = useContext(DarkContext)

    const styles = {
        textos: {
            color: darkMode ? "white" : "black",
        }
    };

    return (
        <div id="Lista">
            {zapatillas.map(zapatilla => (
                <div key={zapatilla.id} className="zapatilla">
                    <Link to={`/item/${zapatilla.id}`} className="textDecoration" style={styles.textos}>
                        <img src={zapatilla.imagen} alt={zapatilla.nombre} className="Imagen"/>
                        <h5 className="subrayado">{zapatilla.nombre}</h5>
                        <p>${zapatilla.precio}</p>
                    </Link>
                </div>
            ))}
        </div>
);
}

export default ListaProductos;