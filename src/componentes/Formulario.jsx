import "./Formulario.css";

export default function Formulario() {
  return (
    <section className="formulario">
      {/* Inscribirse formulario */}
      <div className="formulario-inscribirse">
        <div className="formulario-contenido">
          <header>Inscribirse</header>
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
            <div className="amigo btn-amigo">
              <button>Inscribirse</button>
            </div>
          </form>
          <div className="form-link">
            <span>
              ¿Ya tiene una cuenta?
              <a href="#" className="link inscrirse-link">
                Iniciar sección
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
