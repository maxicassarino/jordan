import { Link } from "react-router-dom";
import "./NavBar.css";
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
            <Link to={"/jordan"} id="Logo" style={styles.textos}>MICHAEL JORDAN</Link>
            <ul id="Menu">
                <Link to={"/jordan/category/sale"} className="subrayadoNav" onClick={scroll} style={styles.textos} >Sale</Link>
                <Link to={"/jordan/category/new"} className="subrayadoNav" onClick={scroll} style={styles.textos}>What's New</Link>
                <Link to={"/jordan"} className="subrayadoNav" onClick={scroll} style={styles.textos}>Shop</Link>
                <i class="bi bi-moon" onClick={() => setDarkMode(!darkMode)}></i>
                <Link to="/jordan/cart" style={{ color: "inherit" }}>
                    <div>
                        <i className="bi bi-bag-check"></i>
                    </div>
                </Link>
            </ul>
        </div>
);
}

export default NavBar;