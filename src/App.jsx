import NotificacionesPaginas from "./componentes/NotificacionesPaginas";

function App() {
  return (
    <div className="App">
      <NotificacionesPaginas />
    </div>
  );
}

export default App;

// // login, registro
// const [modo, setModo] = useState("registro");

// function handleModo() {
//   // setModo(modo === "login" ? "registro" : "login");
//   setModo((prevModo) => (prevModo === "registro" ? "inicio" : "registro"));
// }

// return (
//   <section className="container forms">
//     {modo === "login" && <Formulario handleModo={handleModo} />}
//     {modo === "registro" && <FormularioRegistro handleModo={handleModo} />}
//   </section>
// );
