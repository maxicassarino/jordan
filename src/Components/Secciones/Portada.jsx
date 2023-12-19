import "./Portada.css";


function Portada() {

    const verMas = () => {
        const contenedor = document.getElementById('scroll');
        if (contenedor) {
            contenedor.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="Portada">
            <div id="Titulos">
                <h2>Explorá la elegancia en cada paso</h2>
                <h3>Jordan y los Bulls, un Legado que se Calza</h3>
                <button className="home-button" onClick={verMas}>
                    <span>VER MÁS</span>
                </button>
            </div>
        </div>
);
}

export default Portada;