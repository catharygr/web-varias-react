/* eslint-disable react/prop-types */
import "./Formulario.css";
import { Facebook } from "react-feather";
import { useState } from "react";

export default function FormularioRegistro({ handleModo }) {
  const [formulario, setFormulario] = useState({
    email: "",
    password: "",
    confirmarPassword: "",
  });

  function handleChange(evento) {
    const { name, value } = evento.target;
    setFormulario((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formulario.password === formulario.confirmarPassword) {
      localStorage.setItem("userData", JSON.stringify(formulario));
      alert("Registro exitoso");
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  return (
    <div className="form inscribirse">
      <div className="form-contenido">
        <header>Registrarse</header>
        <form onSubmit={handleSubmit}>
          <div className="campo input-campo">
            <label htmlFor="email">Email:</label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Escribe aqui tu email"
              className="input"
              onChange={handleChange}
              value={formulario.email}
            />
          </div>
          <div className="campo input-campo">
            <label htmlFor="password">Crear contraseña</label>
            <input
              required
              type="password"
              name="password"
              id="password"
              min={8}
              placeholder="Crear contraseña"
              className="password"
              onChange={handleChange}
              value={formulario.password}
            />
          </div>

          <div className="campo input-campo">
            <label htmlFor="confirmar-password">Confirmar contraseña:</label>
            <input
              required
              type="password"
              name="confirmarPassword"
              id="confirmar-password"
              min={8}
              placeholder="Confirmar contraseña"
              className="password"
              onChange={handleChange}
              value={formulario.confirmarPassword}
            />
          </div>
          <div className="campo btn-campo">
            <button onClick={handleModo}>Regístrate</button>
          </div>
        </form>
        <div className="form-link">
          <span>
            ¿Ya tienes una cuenta?
            <a href="#" className="link loguear-link">
              Iniciar sesión
            </a>
          </span>
        </div>
      </div>
      <div className="linea"></div>
      <div className="media-opcion">
        <a href="https://es-es.facebook.com" className="campo facebook">
          <div className="span-facebook">
            <Facebook size={30} className="icono-facebook" />
            <span>Iniciar sección con Facebook</span>
          </div>
        </a>
      </div>
      <div className="media-opcion">
        <a href="https://accounts.google.com" className="campo google">
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
