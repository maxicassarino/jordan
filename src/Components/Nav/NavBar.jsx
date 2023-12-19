import { Link } from "react-router-dom";
import "./NavBar.css";
import Carrito from "./NavComponents/Carrito";


function NavBar() {

    const scroll = () => {
        const contenedor = document.getElementById('scroll');
        if (contenedor) {
            contenedor.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="NavBar">
            <Link to={"/"} id="Logo">MICHAEL JORDAN</Link>
            <ul id="Menu">
                <Link to={"/category/sale"} className="subrayadoNav" onClick={scroll}>Sale</Link>
                <Link to={"/category/new"} className="subrayadoNav" onClick={scroll}>What's New</Link>
                <Link to={"/"} className="subrayadoNav" onClick={scroll}>Shop</Link>
                <Carrito cant={1}/>
            </ul>
        </div>
);
}

export default NavBar;