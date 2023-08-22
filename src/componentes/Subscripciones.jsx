import React, { useState } from "react";
import "./Subscripciones.css";

const features = [
  "Descubrimiento de productos y construcción de lo que importa.",
  "Midiendo para asegurar que las actualizaciones sean un éxito.",
  "¡Y mucho más!",
];

export default function Subscripciones() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías agregar la lógica para enviar el correo electrónico al servidor
    // Por ahora, solo vamos a simular la suscripción exitosa
    setIsSubscribed(true);
  };

  return (
    <main>
      <div className="flex-container">
        {/* ...contenido de la página... */}
        <div className="flex-container-articulo1">
          {/* ...contenido anterior... */}
          <form className="email-error" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@company.com"
              value={email}
              onChange={handleEmailChange}
            ></input>
            <button className="subscribe" type="submit">
              Subscríbete al boletín mensual
            </button>
          </form>
          {isSubscribed && (
            <p className="subscription-message">
              ¡Gracias por suscribirte! Recibirás nuestras actualizaciones
              mensuales.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

// import "./Subscripciones.css";

// export default function Subscripciones() {
//   return (
//     <main>
//       <div className="flex-container">
//         <div className="flex-container-img">
//           <picture>
//             <source
//               media="(max-width: 39.999rem)"
//               srcSet="/assets/imagenes/subscripciones/illustration-sign-up-mobile.svg"
//             />
//             <source
//               media="(min-width: 40rem)"
//               srcSet="/assets/imagenes/subscripciones/illustration-sign-up-desktop.svg"
//             />
//             <img
//               src="/assets/images/multipaginas/pagina-corta.png"
//               alt="Imágenes de subcripciones"
//             />
//           </picture>
//         </div>
//         <div className="flex-container-articulo1">
//           <h1> Actualizado!</h1>
//           <p className="descriccion">
//             Únete a más de 60,000 gerentes de productos que reciben
//             actualizaciones mensuales sobre:
//           </p>
//           <ul>
//             <li>
//               <img
//                 src="/assets/imagenes/subscripciones/icon-list.svg"
//                 alt="Icono"
//               />
//               Descubrimiento de productos y construcción de lo que importa.
//             </li>
//             <li>
//               <img
//                 src="/assets/imagenes/subscripciones/icon-list.svg"
//                 alt="Icono"
//               />
//               Midiendo para asegurar que las actualizaciones sean un éxito.
//             </li>
//             <li>
//               <img
//                 src="/assets/imagenes/subscripciones/icon-list.svg"
//                 alt="Icono"
//               />
//               ¡Y mucho más!
//             </li>
//           </ul>
//           <form className="email-error">
//             <input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="email@company.com"
//             ></input>
//             <button className="subscribe">
//               Subscríbete al boletín mensual
//             </button>
//           </form>
//         </div>
//       </div>
//     </main>
//   );
// }
