import "./Formulario.css";
import FormularioRegistro from "./FormularioRegistro";
import emailjs from "emailjs-com"; // Importa la librería Email.js
import { Facebook } from "react-feather";
import { useState } from "react";

export default function Formulario() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [isPasswordResetSent, setIsPasswordResetSent] = useState(false);

  function handleForgotPasswordSubmit(e) {
    e.preventDefault();

    if (forgotPasswordEmail) {
      // Configura tu cuenta de Email.js
      const emailService = "YOUR_EMAIL_SERVICE_ID";
      const emailTemplate = "YOUR_EMAIL_TEMPLATE_ID";
      const userID = "YOUR_USER_ID";

      // Envía el correo de restablecimiento
      emailjs
        .send(
          emailService,
          emailTemplate,
          { to_email: forgotPasswordEmail },
          userID
        )
        .then((response) => {
          console.log("Correo de restablecimiento enviado:", response);
          setIsPasswordResetSent(true); // Cambia el estado para mostrar el mensaje de éxito
        })
        .catch((error) => {
          console.error(
            "Error al enviar el correo de restablecimiento:",
            error
          );
        });
    } else {
      console.log("Por favor ingresa un correo electrónico válido.");
    }
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  console.log(form);

  function handleSubmit(e) {
    e.preventDefault();
    const entrarEmail = e.target.email.value;
    const entrarPassword = e.target.password.value;
    if (entrarEmail === form.email && entrarPassword === form.password) {
      alert("Bienvenido");
    } else {
      alert("Usuario o contraseña incorrecta");
    }
  }

  return (
    <section className="container forms">
      <div className="form loguear">
        <div className="form-contenido">
          <header>Iniciar sección</header>
          <form onSubmit={handleSubmit}>
            <div className="campo  input-campo">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Escribe aqui tu email"
                className="input"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="campo  input-campo">
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Escribe tu contraseña"
                className="password"
                value={form.password}
                onChange={handleChange}
              />
              <i className="bx bx-ocultar eye-icon"></i>
            </div>
            <div className="form-link">
              <a
                href="#"
                className="olvidaste-password"
                onClick={() => setIsPasswordResetSent(false)}
              >
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
          <a href="https://es-es.facebook.com" className="campo facebook">
            <Facebook size={30} className="icono-facebook" />
            <span>Iniciar con Facebook</span>
          </a>
        </div>
        <div className="media-opcion">
          <a href="https://es-es.facebook.com" className="campo google">
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
