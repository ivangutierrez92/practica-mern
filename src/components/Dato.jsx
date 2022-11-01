import React from "react";

export default function Dato(props) {
  let { contenido } = props;
  return (
    <div className="dato bg-light">
      <p>{contenido}</p>
    </div>
  );
}
