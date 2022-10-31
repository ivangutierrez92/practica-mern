import React from "react";

export default function Dato(props) {
  let { contenido } = props;
  return (
    <div>
      <p>{contenido}</p>
    </div>
  );
}
