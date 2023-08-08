import "./Formulario.css";

export default function FormularioRegistro() {
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");
  const [error, setError] = useState(false);


  function handleInputChange(e) {
    setPassword(e.target.value);
  }

  function handleConfirmarPassword(e) {
    setConfirmarPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(password !== confirmarPassword){
      setError("Las contraseñas no coinciden");
  } else if (password.length < 8) {
      setError("La contraseña debe tener al menos 6 caracteres");
  }





  return (
    <div className="form inscribirse">
      <div className="form-contenido">
        <header>Registrarse</header>
        <form action="#">
          <div className="campo input-campo">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Escribe aqui tu email"
              className="input"
            />
          </div>
          <div className="campo input-campo">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              name="password"
              id="password"
              min={8}
              placeholder="Crear contraseña"
              className="password"
            />
          </div>
          <div className="campo input-campo">
            <label htmlFor="password">Confirmar contraseña:</label>
            <input
              type="password"
              name="password"
              id="password"
              min={8q}
              placeholder="Confirmar contraseña"
              className="password"
            />
          </div>
          <div className="campo btn-campo">
            <button>Regístrate</button>
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
  );
}
