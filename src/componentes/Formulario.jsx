import "./Formulario.css";
import FormularioRegistro from "./FormularioRegistro";

export default function Formulario() {
  return (
    <section className="container forms">
      <div className="form loguear">
        <div className="form-contenido">
          <header>Iniciar sección</header>
          <form>
            <div className="campo  input-campo">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Escribe aqui tu email"
                className="input"
              />
            </div>
            <div className="campo  input-campo">
              <label htmlFor="password">Contraseña:</label>
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
          <a href="#" className="campo facebook">
            <i className="bx bxl-facebook-icon"></i>
            <span>Iniciar sección con Facebook</span>
          </a>
        </div>
        <div className="media-opcion">
          <a href="#" className="campo google">
            <img
              src="/assets/imagenes/formulario/google.png"
              alt="Logo de Google"
              className="google-img"
            />
            <span>Iniciar sección con Gmail</span>
          </a>
        </div>
      </div>
      <FormularioRegistro />
    </section>
  );
}
