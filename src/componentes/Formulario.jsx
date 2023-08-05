import "./Formulario.css";

export default function Formulario() {
  return (
    <section className="container formulario">
      <div className="formulario loguear">
        <div className="formulario-contenido">
          <header>Iniciar sección</header>
          <form action="#">
            <div className="campo  input-campo">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="input"
              />
            </div>
            <div className="campo  input-campo">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Contrase˜ã"
                className="password"
              />
              <i className="bx bx-ocultar eye-icon"></i>
            </div>
            <div className="form-link">
              <a href="#" className="olvidaste-password">
                ¿Has olvidado tu contraseña
              </a>
            </div>
            <div className="campo btn-campo">
              <button>Iniciar sección</button>
            </div>
          </form>
          <div className="form-link">
            <span>
              ¿No tienes una cuenta?
              <a href="#" className="link inscrirse-link">
                Registrate
              </a>
            </span>
          </div>
        </div>
        <div className="linea"></div>
        <div className="media-opcion">
          <a href="#" className="campo facebbok">
            <i className="bx bxl-facebook-icon"></i>
            <span>Iniciar sección con Facebook</span>
          </a>
        </div>
        <div className="media-opcion">
          <a href="#" className="campo google">
            <img src="images/google.png" alt="Logo de Google" />
            <span>Iniciar sección con Gmail</span>
          </a>
        </div>
      </div>
      {/* Inscribirse en el formulario */}
      <div className="form inscribirse">
        <div className="form-contenido">
          <header>Registrarse</header>
          <form action="#">
            <div className="campo input-campo">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="input"
              />
            </div>
            <div className="campo input-campo">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Crear contraseña"
                className="password"
              />
            </div>
            <div className="campo input-campo">
              <label htmlFor="password">Confirmar contraseña</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Confirmar contraseña"
                className="password"
              />
            </div>
            <div className="campo btn-campo">
              <button>Registrarse</button>
            </div>
          </form>
          <div className="form-link">
            <span>
              ¿Ya tienes una cuenta?
              <a href="#" className="link loguear-link">
                Iniciar sección
              </a>
            </span>
          </div>
        </div>
        <div className="linea"></div>
        <div className="media-opcion">
          <a href="#" className="campo facebbok">
            <i className="bx bxl-facebook-icon"></i>
            <span>Iniciar sección con Facebook</span>
          </a>
        </div>
        <div className="media-opcion">
          <a href="#" className="campo google">
            <img src="images/google.png" alt="Logo de Google" />
            <span>Iniciar sección con Gmail</span>
          </a>
        </div>
      </div>
    </section>
  );
}
