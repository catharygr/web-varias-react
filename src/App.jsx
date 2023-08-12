import Formulario from "./componentes/Formulario";
import FormularioRegistro from "./componentes/FormularioRegistro";
import { useState } from "react";

function App() {
  // login, registro
  const [modo, setModo] = useState("registro");
  return (
    <>
      {modo === "login" && <Formulario />}
      {modo === "registro" && <FormularioRegistro />}
    </>
  );
}

export default App;
