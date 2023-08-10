import "./Formulario.css";
import { useEffect, useState } from "react";
import { Facebook } from "react-feather";

export default function FormularioRegistro() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmarPassword: "",
  });

  const [isLogin, setIsLogin] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!isLogin) {
      setForm({
        email: e.target.email.value,
        password: e.target.password.value,
        confirmarPassword: e.target.confirmarPassword.value,
      });
    } else {
      const entrarEmail = e.target.email.value;
      const entrarPassword = e.target.password.value;
      if (entrarEmail === form.email && entrarPassword === form.password) {
        alert("Bienvenido");
      } else {
        alert("Usuario o contraseña incorrecta");
      }
    }
  }

  useEffect(() => {
    if (isLogin) {
      setForm({
        email: "",
        password: "",
        confirmarPassword: "",
      });
    }
  }, [isLogin]);

  return (
    <div className="form inscribirse">
      <div className="form-contenido">
        <header>{isLogin ? "Iniciar sesión" : "Registrarse"}</header>
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
            <label htmlFor="password">
              {isLogin ? "Contraseña" : "Crear contraseña"}:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              min={8}
              placeholder={
                isLogin ? "Ingresa tu contraseña" : "Crear contraseña"
              }
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
            <button>{isLogin ? "Iniciar sesión" : "Regístrate"}</button>
          </div>
        </form>
        <div className="form-link">
          <span>
            {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}

            <a
              href="#"
              className="link loguear-link"
              onClick={() => setIsLogin(!setIsLogin)}
            >
              {isLogin ? "Regístrate" : "Iniciar sesión"}
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
