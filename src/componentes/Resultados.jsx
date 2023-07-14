import "./Resultados.css";
import data from "../data.js";

export default function Resultados() {
  const { reaccion, memoria, verbal, visual } = data;

  const mapeo = data.map((item) => (item = item));

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
              src="assets/imagenes/icon-reaction.svg"
              alt="Ícono de reaccion"
            />
            Reacción
          </span>
          <span className="fraccion">{reaccion}</span>
        </div>

        <div className="estrellas-yellow">
          <span className="estrellas-color-yellow">
            <img
              src="/assets/imagenes/icon-memory.svg"
              alt="Ícono de memoria"
            />
            Memoria
          </span>
          <span className="fraccion">{memoria}</span>
        </div>

        <div className="estrellas-green">
          <span className="estrellas-color-green">
            <img
              src="/assets/imagenes/icon-verbal.svg"
              alt="Ícono de chatbox"
            />
            Verbal
          </span>
          <span className="fraccion">{verbal}</span>
        </div>

        <div className="estrellas-blue">
          <span className="estrellas-color-blue">
            <img src="assets/imagenes/icon-visual.svg" alt="Ícono de ojo" />
            Visual
          </span>
          <span className="fraccion">{visual}</span>
        </div>
        {mapeo}
        <button>
          <a href="#">Continuar</a>
        </button>
      </section>
    </main>
  );
}
