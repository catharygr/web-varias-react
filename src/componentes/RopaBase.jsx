import "./RopaBase.css";

export default function RopaBase() {
  return (
    <main className="container">
      <div>
        <nav className="nav-logo">
          <img
            className="logo"
            src="/assets/imagenes/ropa-base/logo.svg"
            alt="Logo de la empresa"
          />
        </nav>
        <h1>We are coming soon</h1>
      </div>
      <section>
        <div className="hero-mobile">
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
