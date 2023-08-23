import "./RopaBase.css";

export default function RopaBase() {
  return (
    <main className="container">
      <div className="container-nav">
        <nav className="nav-logo">
          <img
            className="logo"
            src="/assets/imagenes/ropa-base/logo.svg"
            alt="Logo de la empresa"
          />
        </nav>
        <h1 className="contenido">
          We are <span>Coming soon</span>
        </h1>
      </div>
      <section>
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
      </section>
    </main>
  );
}
