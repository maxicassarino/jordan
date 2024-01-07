import "./Footer.css";
import { DarkContext } from "../../App";
import { useContext } from "react";


function Footer() {

    const { darkMode } = useContext(DarkContext)

    const styles = {
        container: {
            backgroundColor: darkMode ? "black" : "white",
            color: darkMode ? "white" : "black",
        },
    };

    return (
        <div id="Footer" style={styles.container}>MICHAEL JORDAN</div>
);
}

export default Footer;