/* eslint-disable react/prop-types */
// Hacer un componentes para hacer botones para una pågina web de una clînica

import "./Botones.css";

export default function Botones({ color, texto }) {
  function handleClick() {
    console.log("Me hicieron click");
  }

  return (
    <div className="botones">
      <button onClick={handleClick} className={`{{{btn btn-${color}}}`}>
        {texto}
      </button>
    </div>
  );
}
