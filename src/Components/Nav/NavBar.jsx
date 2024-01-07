import { Link } from "react-router-dom";
import "./NavBar.css";
import Carrito from "./NavComponents/Carrito";
import { DarkContext } from "../../App";
import { useContext } from "react";


function NavBar() {

    const { darkMode, setDarkMode } = useContext(DarkContext)

    const styles = {
        container: {
            backgroundColor: darkMode ? "black" : "white",
            color: darkMode ? "white" : "black",
            borderColor: darkMode ? 'rgb(77, 77, 77)' : 'rgb(226, 226, 226)',
        },
        textos: {
            color: darkMode ? "white" : "black",
        }
    };

    const scroll = () => {
        const contenedor = document.getElementById('scroll');
        if (contenedor) {
            contenedor.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="NavBar" style={styles.container}>
            <Link to={"/"} id="Logo" style={styles.textos}>MICHAEL JORDAN</Link>
            <ul id="Menu">
                <Link to={"/category/sale"} className="subrayadoNav" onClick={scroll} style={styles.textos} >Sale</Link>
                <Link to={"/category/new"} className="subrayadoNav" onClick={scroll} style={styles.textos}>What's New</Link>
                <Link to={"/"} className="subrayadoNav" onClick={scroll} style={styles.textos}>Shop</Link>
                <i class="bi bi-moon" onClick={() => setDarkMode(!darkMode)}></i>
                <Carrito/>
            </ul>
        </div>
);
}

export default NavBar;