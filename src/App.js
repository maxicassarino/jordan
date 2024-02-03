import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Nav/NavBar';
import Portada from './Components/Secciones/Portada';
import Contenedor from './Components/Contenedor/Contenedor';
import Detalle from './Components/Contenedor/Lista/Detalle/Detalle';
import Carrito from './Components/Nav/NavComponents/Carrito';
import Footer from './Components/Footer/Footer';
import { createContext, useState } from 'react';

export const DarkContext = createContext(null)

function App() {

  const [darkMode, setDarkMode] = useState(false)

  // Carrito

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };


  return (
    <DarkContext.Provider value={{ darkMode, setDarkMode, carrito, setCarrito, agregarAlCarrito}}>
      <BrowserRouter>
        <NavBar/>
        <Portada/>
        <Routes>
          <Route path="/" element={<Contenedor/>}/>
          <Route path="/category/:idCategory" element={<Contenedor/>}/>
          <Route path="/item/:idItem" element={<Detalle/>}/>
          <Route path="/cart" element={<Carrito />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </DarkContext.Provider>
  );
}

export default App;
