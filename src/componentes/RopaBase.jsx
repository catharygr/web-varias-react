import { useState } from "react";
import "./RopaBase.css";

export default function RopaBase() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  function handleEmailChange(event) {
    const newEmail = event.target.value;

    setEmail(newEmail);
  }

  function handleClick() {
    const isValid = validateEmail(email);
    console.log(isValid);

    setIsValidEmail(isValid);
  }

  function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    const isValid = regex.test(email);

    return isValid;
  }

  return (
    <main className="container">
      <div className="container-nav">
        <header className="header-logo">
          <img
            className="logo"
            src="/assets/imagenes/ropa-base/logo.svg"
            alt="Logo de la empresa"
          />
        </header>
      </div>

      <div className="hero-picture">
        <picture>
          <source
            media="(max-width: 41.999 )"
            srcSet="/assets/imagenes/ropa-base/hero-mobile.jpg"
          />
          <source
            media="(min-width: 42rem )"
            srcSet="/assets/imagenes/ropa-base/hero-desktop.jpg"
          />
          <img
            className="hero"
            src="/assets/imagenes/ropa-base/hero-mobile.jpg"
            alt="Imagen de la empresa"
          />
        </picture>
      </div>

      <div className="contenido-escrito">
        <h1 className="titulo">We are</h1>

        <span>Coming soon</span>

        <p>
          Hello fellow shoppers! We are currently building our new fashion
          store. Add your email below to stay up-to-date with announcements and
          our launch deals.
        </p>
        <div className="form-container">
          <form>
            <input
              required
              className="form-input"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
            />

            <img
              className="input-error-image"
              src="/assets/imagenes/ropa-base/icon-error.svg"
              alt=""
            />

            <button onClick={handleClick} type="submit" className="form-btn">
              <img
                src="/assets/imagenes/ropa-base/icon-arrow.svg"
                alt="Flecha a la derecha"
              />
            </button>
            {!isValidEmail && (
              <span className="input-error-message">
                Please provide a valid email
              </span>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
