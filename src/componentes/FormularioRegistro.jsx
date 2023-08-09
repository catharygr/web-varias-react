import "./Formulario.css";
import { useState } from "react";
import { Facebook } from "react-feather";

export default function FormularioRegistro() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmarPassword: "",
  });
  const [error, setError] = useState(false);

  const { email, password, confirmarPassword } = form;

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError(false);
  };

  const handleConfirmarPassword = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError(false);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      confirmarPassword.trim() === ""
    ) {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return;
    }
    if (password !== confirmarPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    setError(false);
  }

  return (
    <div className="form inscribirse">
      <div className="form-contenido">
        <header>Registrarse</header>
        <form onSubmit={handleSubmit}>
          <div className="campo input-campo">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Escribe aqui tu email"
              className="input"
              value={email}
              onChange={handleInputChange}
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
              value={password}
              onChange={handleInputChange}
            />
          </div>
          {error && <div className="error">{error}</div>}
          <div className="campo input-campo">
            <label htmlFor="password">Confirmar contraseña:</label>
            <input
              type="password"
              name="password"
              id="password"
              min={8}
              placeholder="Confirmar contraseña"
              className="password"
              value={confirmarPassword}
              onChange={handleConfirmarPassword}
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
          <div className="span-facebook">
            <Facebook size={30} />
            <span>Iniciar sección con Facebook</span>
          </div>
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
