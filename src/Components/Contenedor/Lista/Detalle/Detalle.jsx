import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Detalle.css";
import Contador from "./Contador/Contador";
import { DarkContext } from "../../../../App";
import { useContext } from "react";
import { doc, getDoc, getFirestore } from 'firebase/firestore'

function Detalle() {

    const { darkMode } = useContext(DarkContext)

    const styles = {
        container: {
            backgroundColor: darkMode ? "black" : "white",
            color: darkMode ? "white" : "black",
        }
    };

    let { idItem } = useParams();

    // Firebase

    const [zapatilla, setZapatilla] = useState(null);

    useEffect(() => {
        const cargarZapatilla = async () => {
            const db = getFirestore();
            const item = doc(db, 'productos', `${idItem}`);
            const res = await getDoc(item);
            if (res.exists()) {
                const itemDetalle = { ...res.data(), id: idItem };
                setZapatilla(itemDetalle);
            } else {
                // Manejar el caso en que el documento no existe
                console.error(`No se encontró la zapatilla con ID ${idItem}`);
            }
        };

        cargarZapatilla();
    }, [idItem]);


    // Condición para manejar el caso en que zapatilla es null
    if (!zapatilla) {
        return <div>Waiting...</div>;
    }


    return (
        <div className="Detalle" id="scroll" style={styles.container}>
            <h2>{zapatilla.nombre}</h2>
            <div className="flex">
                <img src={zapatilla.imagen} alt={zapatilla.nombre} className="imagen" />
                <div className="informacion">
                    <p>{zapatilla.descripcion}</p>
                    <Contador zapatilla={zapatilla} stock={zapatilla.stock} />
                </div>
            </div>
        </div>
    );
}

export default Detalle;
