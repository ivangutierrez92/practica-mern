import React from "react";

export default function BotonCarta(props) {
  let { contenido, onClick } = props;
  return <button className="boton-carta bg-light" onClick={onClick}>{contenido}</button>;
}
