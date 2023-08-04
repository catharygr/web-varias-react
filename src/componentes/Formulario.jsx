import "./Formulario.css";

export default function Formulario() {
  return (
    <section className="container-formulario">
      <div className="formulario-loguear">
        <div className="formulario-contenido">
          <header>Iniciar sección</header>
          <form action="#">
            <div className="amigo  input-amigo">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className="input"
              />
            </div>
            <div className="amigo  input-amigo">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
              <i className="bx bx-hide fa-eye"></i>
            </div>
            <div className="form-link">
              <a href="#" className="olvidaste-password">
                ¿Has olvidado tu contraseña
              </a>
            </div>
            <div className="formulario-input">
              <button className="amigo btn-amigo">Iniciar sección</button>
            </div>
            <div className="form-link">
              <span>No tiene una cuenta</span>
              <a href="#" className="">
                ¿Has olvidado tu contraseña
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
