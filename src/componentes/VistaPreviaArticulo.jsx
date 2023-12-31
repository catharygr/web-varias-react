import "./VistaPreviaArticulo.css";
import { Share } from "react-feather";

export default function VistaPreviaArticulo() {
  const articuloData = {
    titulo:
      "Cambia la apariencia general y la sensación al añadir estos maravillosos toques a los muebles en tu hogar.",
    parrafo:
      "¿Alguna vez has estado en una habitación y has sentido que faltaba algo? Quizás parecía un poco vacía y poco acogedora. Tengo algunos consejos simples para ayudarte a hacer que cualquier habitación se sienta completa.",
    autor: "Michelle Appleton",
    fecha: "28 Jun 2020",
    avatar: "/assets/imagenes/vista-previa/avatar-michelle.jpg",
  };

  return (
    <main className="container">
      <img
        src="/assets/imagenes/vista-previa/drawers.jpg"
        alt="drawers"
        className="articulo-img"
      />
      <section className="articulo-detalles">
        <div className="articulo-envoltura">
          <h1 className="articulo-titulo">{articuloData.titulo}</h1>
          <p className="articulo-parrafo">{articuloData.parrafo}</p>
          <section className="editor-detalle-grupo">
            <div className="editor-info-grupo">
              <img
                src="/assets/imagenes/vista-previa/avatar-michelle.jpg"
                alt="avatar de michelle"
                className="img-michelle"
              />
              <div className="editor-detalle">
                <h2 className="editor-nombre">{articuloData.autor}</h2>
                <p className="dato-editado">{articuloData.fecha}</p>
              </div>
            </div>
            <div className="link-para-compartir herramienta" href="#">
              <Share className="compartir-libreria" />
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
                        <img
                          className="fa-marcas fa-cuadrado-facebook fa-2x"
                          src="/assets/imagenes/vista-previa/icon-facebook.svg"
                          alt="Enlace de Facebook"
                        />
                      </a>
                    </li>
                    <li className="icon-item">
                      <a
                        className="icon-link"
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="fa-marcas fa-twitter fa-2x"
                          src="/assets/imagenes/vista-previa/icon-twitter.svg"
                          alt="Enlace de twitter"
                        />
                      </a>
                    </li>
                    <li className="icon-item">
                      <a
                        className="icon-link"
                        href="https://www.pinterest.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="fa-marcas fa-pinterest fa-2x"
                          src="/assets/imagenes/vista-previa/icon-pinterest.svg"
                          alt="Enlace de pinterest"
                        />
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
