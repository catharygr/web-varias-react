/* eslint-disable react/prop-types */
import Botones from "./componentes/Boton";

function App() {
  return (
    <div className="btn-container">
      <Botones color={"acento"} texto={"Abrir"} />
      <Botones color={"invertido"} texto={"Guardar"} />
      <Botones color={"base"} texto={"Eliminar"} />
    </div>
  );
}

export default App;
