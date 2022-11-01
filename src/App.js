import { useState } from "react";
import "./App.css";
import BotonCarta from "./components/BotonCarta";
import CategoriaImagen from "./components/CategoriaImagen";
import Dato from "./components/Dato";
import data from "./data/events1";

function App() {
  let [indiceCarousel, setIndiceCarousel] = useState(0);
  let [mostrarContenido, setMostrarContenido] = useState(true);

  let prev = () => {
    if (indiceCarousel > 0) {
      setIndiceCarousel(--indiceCarousel);
    } else {
      setIndiceCarousel(data.length - 1);
    }
  };

  let next = () => {
    if (indiceCarousel < data.length - 1) {
      setIndiceCarousel(++indiceCarousel);
    } else {
      setIndiceCarousel(0);
    }
  };

  let hide = () => {
    setMostrarContenido(!mostrarContenido);
  };

  return (
    <div className="card bg-dark">
      <CategoriaImagen categoria={data[indiceCarousel].category.toUpperCase()} imagen={data[indiceCarousel].image} />
      {mostrarContenido ? (
        <div>
          <Dato contenido={data[indiceCarousel].name} />
          <Dato
            contenido={
              data[indiceCarousel].description.length > 65
                ? `${data[indiceCarousel].description.slice(0, 65)}...`
                : data[indiceCarousel].description
            }
          />
        </div>
      ) : (
        <></>
      )}
      <div className="contenedor-botones">
        <BotonCarta contenido="◄" onClick={prev} />
        <BotonCarta contenido={mostrarContenido ? "▲" : "▼"} onClick={hide} />
        <BotonCarta contenido="►" onClick={next} />
      </div>
    </div>
  );
}

export default App;
