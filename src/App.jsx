import Formulario from "./componentes/Formulario";
import FormularioRegistro from "./componentes/FormularioRegistro";
import { useState } from "react";

function App() {
  const [modo, setModo] = useState("login");

  function hadleNuevoModo(nuevoModo) {
    setModo(nuevoModo);
  }
  return (
    <>
      {modo === "login" && <Formulario hadleNuevoModo={hadleNuevoModo} />}
      {modo === "registrarse" && (
        <FormularioRegistro hadleNuevoModo={hadleNuevoModo} />
      )}
    </>
  );
}

export default App;
