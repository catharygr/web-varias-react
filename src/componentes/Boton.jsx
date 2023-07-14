/* eslint-disable react/prop-types */
// Hacer un componentes para hacer botones para una pågina web de una clînica

import "./Boton.css";

export default function Boton({ color, texto }) {
  function handleClick() {
    console.log("Me hicieron click");
  }

  return (
    <button onClick={handleClick} className={`btn-base btn-${color}`}>
      {texto}
    </button>
  );
}
