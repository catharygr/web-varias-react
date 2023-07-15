import "./Resultados.css";

export default function Resultados() {
  return (
    <main>
      <section className="card">
        <h2>Su Resultado</h2>
        <div className="circle">
          <h1>76</h1>
          <p>de 100</p>
        </div>
        <h1>Optimo</h1>
        <p>
          Su resultado es mejor que el 65% de las personas que hicieron esta
          prueba.
        </p>
      </section>

      <section className="sumario">
        <h1>Sumario</h1>

        <div className="estrellas-red">
          <span className="estrellas-color-red">
            <img
              src="assets/imagenes/resultados/icon-reaction.svg"
              alt="Ícono de reaccion"
            />
            Reacción
          </span>
          <span className="fraccion">80 / 100</span>
        </div>

        <div className="estrellas-yellow">
          <span className="estrellas-color-yellow">
            <img
              src="/assets/imagenes/resultados/icon-memory.svg"
              alt="Ícono de memoria"
            />
            Memoria
          </span>
          <span className="fraccion">92 / 100</span>
        </div>

        <div className="estrellas-green">
          <span className="estrellas-color-green">
            <img
              src="/assets/imagenes/resultados/icon-verbal.svg"
              alt="Ícono de chatbox"
            />
            Verbal
          </span>
          <span className="fraccion">61 / 100</span>
        </div>

        <div className="estrellas-blue">
          <span className="estrellas-color-blue">
            <img
              src="assets/imagenes/resultados/icon-visual.svg"
              alt="Ícono de ojo"
            />
            Visual
          </span>
          <span className="fraccion">72 / 100</span>
        </div>

        <button>
          <a href="#">Continuar</a>
        </button>
      </section>
    </main>
  );
}
