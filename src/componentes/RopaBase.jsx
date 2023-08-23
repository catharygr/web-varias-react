import "./RopaBase.css";

export default function RopaBase() {
  return (
    <main className="container">
      <nav className="nav-logo">
        <img
          src="/assets/imagenes/ropa-base/logo.svg"
          alt="Logo de la empresa"
        />
      </nav>
      <section>
        <img
          className="hero-mobile"
          src="/assets/imagenes/ropa-base/hero-mobile.jpg"
          alt="Imagen de una modelo"
        />
      </section>
    </main>
  );
}
