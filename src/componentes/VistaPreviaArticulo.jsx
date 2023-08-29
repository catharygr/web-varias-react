import "./VistaPreviaArticulo.css";

export default function VistaPreviaArticulo() {
  return (
    <main className="container">
      <img
        src="/assets/imagenes/vista-previa/drawers.jpg"
        alt="drawers"
        className="articulo-img"
      />
      <section className="articulo-detalles">
        <div className="articulo-envoltura">
          <h1 className="articulo-titulo">
            Cambia la apariencia general y la sensación al añadir estos
            maravillosos toques a los muebles en tu hogar.
          </h1>
          <p className="articulo-parrafo">
            ¿Alguna vez has estado en una habitación y has sentido que faltaba
            algo? Quizás parecía un poco vacía y poco acogedora. Tengo algunos
            consejos simples para ayudarte a hacer que cualquier habitación se
            sienta completa.
          </p>
          <section className="editor-detalle-grupo">
            <div className="editor-info-grupo">
              <img
                src="/assets/imagenes/vista-previa/avatar-michelle.jpg"
                alt="avatar de michelle"
                className="img-michelle"
              />
              <div className="editor-detalle">
                <h2 className="editor-nombre">Michelle Appleton</h2>
                <p className="dato-editado">28 Jun 2020</p>
              </div>
            </div>
            <div className="link-para-compartir herramienta" href="#">
              <img
                className="icon-compartir"
                src="/assets/imagenes/vista-previa/icon-share.svg"
                alt="link para compartir"
              />
              <div className="herramienta-detalle">
                <div className="herramienta-envoltura">
                  <p className="compartir">COMPARTIR</p>
                  <ul className="icon-lista">
                    <li className="icon-item">
                      <a
                        className="icon-link"
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-marcas fa-cuadrado-facebook fa-2x"></i>
                      </a>
                    </li>
                    <li className="icon-item">
                      <a
                        className="icon-link"
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-marcas fa-twitter fa-2x"></i>
                      </a>
                    </li>
                    <li className="icon-item">
                      <a
                        className="icon-link"
                        href="https://www.pinterest.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-marcas fa-pinterest fa-2x"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
