import React from "react";

export default function TituloImagen(props) {
  let { categoria, imagen } = props;
  return (
    <>
      <h2 className="titulo bg-light">{categoria}</h2>
      <img className="picture" src={imagen} alt={categoria} />
    </>
  );
}
