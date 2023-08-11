import Formulario from "./componentes/Formulario";
import { useState } from "react";
import FormularioRegistro from "./componentes/FormularioRegistro";

function App() {
  // const [modo, setModo] = useState("login");

  // function hadleNuevoModo(nuevoModo) {
  //   setModo(nuevoModo);
  // }
  return (
    <>
      <Formulario />
      <FormularioRegistro />
    </>
  );
}

export default App;
