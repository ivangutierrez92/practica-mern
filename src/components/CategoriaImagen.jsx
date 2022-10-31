import React from "react";

export default function TituloImagen(props) {
  let { categoria, imagen } = props;
  return (
    <>
      <h2>{categoria}</h2>
      <img src={imagen} alt={categoria} />
    </>
  );
}
