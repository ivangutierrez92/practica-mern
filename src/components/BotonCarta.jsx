import React from "react";

export default function BotonCarta(props) {
  let { contenido, onClick } = props;
  return <button onClick={onClick}>{contenido}</button>;
}
