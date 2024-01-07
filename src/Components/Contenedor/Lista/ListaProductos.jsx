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
                        <img src={zapatilla.grid_picture_url} alt={zapatilla.name} className="Imagen"/>
                        <h5 className="subrayado">{zapatilla.silhouette}</h5>
                        <p>${zapatilla.retail_price_cents}</p>
                    </Link>
                </div>
            ))}
        </div>
);
}

export default ListaProductos;