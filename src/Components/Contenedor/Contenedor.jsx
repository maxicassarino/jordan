import { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import "./Contenedor.css";
import ListaProductos from "./Lista/ListaProductos";
import { DarkContext } from "../../App";
import { useContext } from "react";
import {collection, getDocs, getFirestore} from 'firebase/firestore'


function Contenedor() {

    // DarkMode

    const { darkMode } = useContext(DarkContext)

    const styles = {
        container: {
            backgroundColor: darkMode ? "black" : "white",
            color: darkMode ? "white" : "black",
        }
    };

    let {idCategory} = useParams();


    // Firebase

    const [zapatillas, setZapatillas] = useState([]);

    useEffect(() => {

        const cargarProductos = async () => {

            const db = getFirestore();
            const coleccion = collection(db, 'productos');  

            const res = await getDocs(coleccion);
            const array = res.docs.map((item) => ({ ...item.data(), id: item.id }));

            if (idCategory === "sale") {
                let sale = array.filter((item) => item.categoria == "sale");
                setZapatillas(sale);
            } else if (idCategory === "new") {
                let nuevos = array.filter((item) => (item.categoria == "new"));
                setZapatillas(nuevos);
            } else {
                setZapatillas(array);
            }
        }

        cargarProductos();
        
    }, [idCategory]);


    // Titulo dinámico 
    let titulo = "Productos";
    if (idCategory === "sale") {
        titulo = "Nuestras Ofertas";
    } else if (idCategory === "new") {
        titulo = "What's New";
    }

    return (
        <div className="Seccion" id="scroll" style={styles.container}>
            <h4>{titulo}</h4>
            <ListaProductos zapatillas={zapatillas}/>
        </div>
);
}

export default Contenedor;