import "./RopaBase.css";

export default function RopaBase() {
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
        <div>
          <input className="btn-input" type="text" placeholder="Email Adress" />
          <button className="btn">
            <img
              className="flecha"
              src="/assets/imagenes/ropa-base/icon-arrow.svg"
              alt="Flecha derecha"
            />
          </button>
        </div>
      </div>
    </main>
  );
}
