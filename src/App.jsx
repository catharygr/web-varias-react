import Formulario from "./componentes/Formulario";
import FormularioRegistro from "./componentes/FormularioRegistro";
import { useState } from "react";

function App() {
  // login, registro
  const [modo, setModo] = useState("registro");

  function handleModo() {
    // setModo(modo === "login" ? "registro" : "login");
    setModo((prevModo) => (prevModo === "registro" ? "inicio" : "registro"));
  }

  return (
    <section className="container forms">
      {modo === "login" && <Formulario handleModo={handleModo} />}
      {modo === "registro" && <FormularioRegistro handleModo={handleModo} />}
    </section>
  );
}

export default App;
