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
          </section>
        </div>
      </section>
    </main>
  );
}
