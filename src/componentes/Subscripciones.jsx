import "./Subscripciones.css";

export default function Subscripciones() {
  return (
    <main className="container">
      <div className="flex-container">
        <div className="flex-container-img">
          <picture>
            <source
              media="(max-width: 39.999rem)"
              srcSet="/assets/imagenes/subscripciones/illustration-sign-up-mobile.svg"
            />
            <source
              media="(min-width: 40rem)"
              srcSet="/assets/imagenes/subscripciones/illustration-sign-up-desktop.svg"
            />
            <img
              src="/assets/images/multipaginas/pagina-corta.png"
              alt="Imágenes de subcripciones"
            />
          </picture>
        </div>
        <div className="flex-container-articulo1">
          <h1> Actualizado!</h1>
          <p className="descriccion">
            Únete a más de 60,000 gerentes de productos que reciben
            actualizaciones mensuales sobre:
          </p>
          <ul>
            <li>
              <img
                src="/assets/imagenes/subscripciones/icon-list.svg"
                alt="Icono"
              />
              Descubrimiento de productos y construcción de lo que importa.
            </li>
            <li>
              <img
                src="/assets/imagenes/subscripciones/icon-list.svg"
                alt="Icono"
              />
              Midiendo para asegurar que las actualizaciones sean un éxito.
            </li>
            <li>
              <img
                src="/assets/imagenes/subscripciones/icon-list.svg"
                alt="Icono"
              />
              ¡Y mucho más!
            </li>
          </ul>
          <form className="email-error">
            <p>Dirección de correo</p>
            {/* <p>Tu email es incorrecto</p> */}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@company.com"
            ></input>
            <button className="subscribe">
              Subscríbete al boletín mensual
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
