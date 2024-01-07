import { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import "./Contenedor.css";
import ListaProductos from "./Lista/ListaProductos";
import { DarkContext } from "../../App";
import { useContext } from "react";


function Contenedor() {

    const { darkMode } = useContext(DarkContext)

    const styles = {
        container: {
            backgroundColor: darkMode ? "black" : "white",
            color: darkMode ? "white" : "black",
        }
    };

    const [zapatillas, setZapatillas] = useState([]);
    let {idCategory} = useParams();

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Stupidism/goat-sneakers/master/api.json')
            .then(response => response.json())
            .then(data => {
                // Filtrar modelos Air Jordan menores que 5
                const modelosAirJordan = data.sneakers.filter(zapatilla => {
                    const match = zapatilla.name.match(/\d+/);
                    const numero = match ? parseInt(match[0]) : 0;
                    if (zapatilla.retail_price_cents == null) {
                        zapatilla.retail_price_cents = 14000
                    }
                    return zapatilla.name.includes('Jordan') && numero <= 5;
                });
                // Extraer el número del nombre y ordenar
                const modelosOrdenados = modelosAirJordan.sort((a, b) => {
                    const numeroA = parseInt(a.name.match(/\d+/)[0]);
                    const numeroB = parseInt(b.name.match(/\d+/)[0]);
                    return numeroA - numeroB;
                });
                // Filtros
                if (idCategory === "sale") {
                    let sale = modelosOrdenados.filter((item) => item.retail_price_cents <= 15000);
                    setZapatillas(sale);
                } else if (idCategory === "new") {
                    let nuevos = modelosOrdenados.filter((item) => (item.retail_price_cents >= 17000 && item.retail_price_cents < 20000) || (item.retail_price_cents === 20000 && item.name.includes("5")) || item.retail_price_cents === 22000);
                    setZapatillas(nuevos);
                } else {
                    setZapatillas(modelosOrdenados);
                }
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
            });
    
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