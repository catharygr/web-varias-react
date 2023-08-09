import "./Formulario.css";
import { useState } from "react";
import { Facebook } from "react-feather";

export default function FormularioRegistro() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmarPassword: "",
  });
  console.log(form);

  function handleSubmit(e) {
    e.preventDefault();
    setForm({
      email: e.target.email.value,
      password: e.target.password.value,
      confirmarPassword: e.target.confirmarPassword.value,
    });
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
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
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
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <div className="campo input-campo">
            <label htmlFor="password">Confirmar contraseña:</label>
            <input
              type="password"
              name="confirmarPassword"
              id="password"
              min={8}
              placeholder="Confirmar contraseña"
              className="password"
              value={form.confirmarPassword}
              onChange={(e) =>
                setForm({ ...form, confirmarPassword: e.target.value })
              }
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
