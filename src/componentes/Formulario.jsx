import "./Formulario.css";

export default function Formulario() {
  return (
    <section className="container-formulario">
      <div className="formulario-loguear">
        <div className="formulario-contenido">
          <header>Iniciar sección</header>
          <form action="">
            <div className="formulario-input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="formulario-input">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <div className="formulario-input">
              <button type="submit">Ingresar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
