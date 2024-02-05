import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Nav/NavBar';
import Portada from './Components/Secciones/Portada';
import Contenedor from './Components/Contenedor/Contenedor';
import Detalle from './Components/Contenedor/Lista/Detalle/Detalle';
import Carrito from './Components/Nav/NavComponents/Carrito';
import Checkout from './Components/Nav/NavComponents/Checkout/Checkout';
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
          <Route path="/jordan" element={<Contenedor/>}/>
          <Route path="/jordan/category/:idCategory" element={<Contenedor/>}/>
          <Route path="/jordan/item/:idItem" element={<Detalle/>}/>
          <Route path="/jordan/cart" element={<Carrito />} />
          <Route path="/jordan/checkout" element={<Checkout />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </DarkContext.Provider>
  );
}

export default App;
