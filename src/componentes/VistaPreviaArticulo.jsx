import "./VistaPreviaArticulo.css";

export default function VistaPreviaArticulo() {
  return (
    <main className="container">
      <img src="images/drawers.jpg" alt="drawers" className="article-img" />
      <section className="article-details">
        <div className="article-wrapper">
          <h1 className="article-heading">
            Cambia la apariencia general y la sensación al añadir estos
            maravillosos toques a los muebles en tu hogar.
          </h1>
          <p className="article-paragraph">
            ¿Alguna vez has estado en una habitación y has sentido que faltaba
            algo? Quizás parecía un poco vacía y poco acogedora. Tengo algunos
            consejos simples para ayudarte a hacer que cualquier habitación se
            sienta completa.
          </p>
          <section className="editor-detail-group">
            <div className="editor-info-group">
              <img
                src="/assets/imagenes/vista-previa/avatar-michelle.jpg"
                alt="avatar of michelle"
                className="img-michelle"
              />
              <div className="editor-detail">
                <h2 className="editor-name">Michelle Appleton</h2>
                <p className="date-edited">28 Jun 2020</p>
              </div>
            </div>
            <div className="link-to-share tooltip" href="#">
              <img
                className="icon-share"
                src="/assets/imagenes/vista-previa/icon-share.svg"
                alt="link to share"
              />
              <div className="tooltip-detail">
                <div className="tooltip-wrapper">
                  <p className="share">Compartir</p>
                  <ul className="icon-list">
                    <li className="icon-item">
                      <a
                        className="icon-link"
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-square-facebook fa-2x"></i>
                      </a>
                    </li>
                    <li className="icon-item">
                      <a
                        className="icon-link"
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-twitter fa-2x"></i>
                      </a>
                    </li>
                    <li className="icon-item">
                      <a
                        className="icon-link"
                        href="https://www.pinterest.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-pinterest fa-2x"></i>
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
