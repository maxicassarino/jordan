import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Nav/NavBar';
import Portada from './Components/Secciones/Portada';
import Contenedor from './Components/Contenedor/Contenedor';
import Detalle from './Components/Contenedor/Lista/Detalle/Detalle';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Portada/>
        <Routes>
          <Route path="/" element={<Contenedor/>}/>
          <Route path="/category/:idCategory" element={<Contenedor/>}/>
          <Route path="/item/:idItem" element={<Detalle/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
