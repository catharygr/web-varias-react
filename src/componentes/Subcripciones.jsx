export default function Subcripciones() {
  return (
    <main className="container">
      <div className="flex-container">
        <div className="flex-container-articulo1">
          <h1>Mantente actualizado</h1>
          <p className="descriccion">
            Únete a más de 60,000 gerentes de productos que reciben
            actualizaciones mensuales sobre:
          </p>
          <ul className="lista">
            <li className="lista-articulo">
              <img src="./assets/images/icon-list.svg" alt="" />
              Descubrimiento de productos y construcción de lo que importa.
            </li>
            <li className="list-item">
              <img src="./assets/images/icon-list.svg" alt="" />
              Midiendo para asegurar que las actualizaciones sean un éxito.
            </li>
            <li className="list-item">
              <img src="./assets/images/icon-list.svg" alt="" />
              ¡Y mucho más!
            </li>
          </ul>
          <div className="email-error">
            <p>Dirección de correo</p>
            <p>Tu email es incorrecto</p>
          </div>
        </div>
      </div>
    </main>
  );
}
