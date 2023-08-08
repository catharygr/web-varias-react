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

// /* eslint-disable no-undef */
// import "./Formulario.css";
// import { useState } from "react";

// export default function Formulario() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     confirmarPassword: "",
//   });

//   function handleLogin() {
//     setIsLogin(!isLogin);
//   }

//   function handleInputChange(e) {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Lógica para manejar el submit del formulario
//     const datos = new FormData(e.target);
//     const email = datos.get("email");
//     const password = datos.get("password");

//     if (isLogin) {
//       console.log("Iniciar sesión", email, password);
//     } else {
//       const confirmarPassword = formData.get("confirmarPassword");
//       console.log("Registrarse", email, password, confirmarPassword);
//     }
//   };

//   return (
//     <section className="container forms">
//       <div className={`form ${isLogin ? "loguear" : "inscribirse"}`}>
//         <div className="form-contenido">
//           <header>{isLogin ? "Iniciar sección" : "inscribirse"}</header>
//           <form onSubmit={handleSubmit}>
//             <div className="campo  input-campo">
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Escribe aqui tu email"
//                 className="input"
//                 value={formData.email}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="campo  input-campo">
//               <label htmlFor="password">Contraseña:</label>
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder="Contrase˜ã"
//                 className="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//               />
//               <i className="bx bx-ocultar eye-icon"></i>
//             </div>
//             <div className="form-link">
//               <a href="#" className="olvidaste-password">
//                 ¿Has olvidado tu contraseña
//               </a>
//             </div>
//             <div className="campo btn-campo">
//               <button>Iniciar sección</button>
//             </div>
//           </form>
//           <div className="form-link">
//             <span>
//               ¿No tienes una cuenta?
//               <a href="#" className="link inscrirse-link">
//                 Registrate
//               </a>
//             </span>
//           </div>
//         </div>
//         <div className="linea"></div>
//         <div className="media-opcion">
//           <a href="#" className="campo facebook">
//             <i className="bx bxl-facebook-icon"></i>
//             <span>Iniciar sección con Facebook</span>
//           </a>
//         </div>
//         <div className="media-opcion">
//           <a href="#" className="campo google">
//             <img
//               src="/assets/imagenes/formulario/google.png"
//               alt="Logo de Google"
//               className="google-img"
//             />
//             <span>Iniciar sección con Gmail</span>
//           </a>
//         </div>
//       </div>
//       {/* Inscribirse en el form */}
//       <div className="form inscribirse">
//         <div className="form-contenido">
//           <header>Registrarse</header>
//           <form action="#">
//             <div className="campo input-campo">
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Escribe aqui tu email"
//                 className="input"
//                 value={formData.email}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="campo input-campo">
//               <label htmlFor="password">Contraseña:</label>
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder={isLogin ? "Contraseña" : "Crear tu contraseña"}
//                 className="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="campo input-campo">
//               <label htmlFor="password">Confirmar contraseña:</label>
//               <input
//                 type="password"
//                 name="confirmarPassword"
//                 id="password"
//                 placeholder="Confirmar contraseña"
//                 className="password"
//                 value={formData.confirmarPassword}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="campo btn-campo">
//               <button onClick={handleLogin}>Regístrate</button>
//             </div>
//           </form>
//           <div className="form-link">
//             <span>
//               ¿Ya tienes una cuenta?
//               <a href="#" className="link loguear-link">
//                 Iniciar sección
//               </a>
//             </span>
//           </div>
//         </div>
//         <div className="linea"></div>
//         <div className="media-opcion">
//           <a href="#" className="campo facebook">
//             <i className="bx bxl-facebook-icon"></i>
//             <span>Iniciar sección con Facebook</span>
//           </a>
//         </div>
//         <div className="media-opcion">
//           <a href="#" className="campo google">
//             <img
//               src="/assets/imagenes/formulario/google.png"
//               alt="Logo de Google"
//               className="google-img"
//             />
//             <span>Iniciar sección con Gmail</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
