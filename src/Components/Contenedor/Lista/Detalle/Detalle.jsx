import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Detalle.css";
import Contador from "./Contador/Contador";
import { DarkContext } from "../../../../App";
import { useContext } from "react";


function Detalle() {

    const { darkMode } = useContext(DarkContext)

    const styles = {
        container: {
            backgroundColor: darkMode ? "black" : "white",
            color: darkMode ? "white" : "black",
        }
    };

    const [zapatilla, setZapatilla] = useState(null);
    const { idItem } = useParams();


    // Buscar zapatilla detallada

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Stupidism/goat-sneakers/master/api.json")
        .then((response) => response.json())
        .then((data) => {
            const zapatillaDetalle = data.sneakers.find(
            (z) => z.id === parseInt(idItem)
            );
            // Generar stock 
            zapatillaDetalle.stock = Math.floor(Math.random() * (7 - 2 + 1) + 2);
            setZapatilla(zapatillaDetalle);
        })
        .catch((error) => {
            console.error("Error en la solicitud:", error);
        });
    }, [idItem]);

    if (!zapatilla) {
        return <div>Waiting...</div>;
    }

    // Función para quitar las etiquetas <p>
    const sacarEtiquetas = (html) => {
        return html ? html.replace(/<\/?p>/g, "") : "";
    };

    // Función para generar el párrafo descriptivo
    const generarParrafo = () => {
        const modelo = zapatilla.silhouette.toLowerCase();
        switch (modelo) {
            case "air jordan 1":
                return "This Nike Air Jordan 1 Retro High OG is a retro re-release of an original 1985 colorway. The shoe features a black and medium grey leather upper with a white midsole and black outsole. It also features OG Nike Air branding on the tongue and the Wings logo on the ankle collar. It was last retroed in 2013, and a low-top version dropped in 2015.";
            case "air jordan 4":
                return "The 2019 edition of the Air Jordan 4 celebrates the 30th anniversary of the classic silhouette, appearing in the same colorway that Michael Jordan wore when he sank ‘The Shot’ during the first round of the 1989 NBA playoffs. It’s rendered in a build that’s faithful to the original, complete with a black nubuck upper, visible Air Sole cushioning underfoot and Nike Air branding on the heel.";
            case "air jordan 5":
                return "The 2019 edition of the Air Jordan 5 is true to the original colorway, which Michael Jordan wore when he captured his first NBA title. Dressed primarily in black nubuck with a reflective 3M layer underneath, the mid-top features Infrared accents on the midsole, heel tab and lace lock. Nike Air branding adorns the heel and sockliner, an OG detail last seen on the 2000 retro.";
            default:
                return "Descripción no disponible.";
        }
    };

    function onAdd(count) {
        alert("Quiero agregar " + count + " " + zapatilla.silhouette + " al carrito.")
    }

    return (
        <div className="Detalle" id="scroll" style={styles.container}>
            <h2>{zapatilla.name}</h2>
            <div className="flex">
                <img src={zapatilla.grid_picture_url} alt={zapatilla.name} className="imagen"/>
                <div className="informacion">
                    <p>{sacarEtiquetas(zapatilla.story_html) || generarParrafo()}</p>
                    <Contador onAdd={onAdd} stock={zapatilla.stock}/>
                </div>
            </div>
        </div>
    );
}

export default Detalle;