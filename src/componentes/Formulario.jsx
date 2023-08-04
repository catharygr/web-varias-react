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
            <div className="amigo btn-amigo">
              <button>Iniciar sección</button>
            </div>
          </form>
          <div className="form-link">
            <span>
              No tiene una cuenta
              <a href="#" className="link inscrirse-link">
                Registrate
              </a>
            </span>
          </div>
        </div>
        <div className="linea"></div>
        <div className="media-opcion">
          <a href="#" className="amigo facebbok">
            <i className="bx bxl-facebook-icon"></i>
            <span>Iniciar sección con Facebook</span>
          </a>
        </div>
        <div className="media-opcion">
          <a href="#" className="amigo google">
            <i className="bx bxl-google"></i>
            <span>Iniciar sección con Google</span>
          </a>
        </div>
      </div>
    </section>
  );
}
