import PortaFooter from "./PortaFooter";
import "./PortaPapeles.css";

export default function PortaPapeles() {
  // Estado para el contador y la lista de fragmentos
  const [contador, setContador] = useState(0);
  const [fragmentos, setFragmentos] = useState([]);

  // Estado para el texto de los botones de descarga
  const [botonIOS, setBotonIOS] = useState("Descargar para iOS.");
  const [botonMac, setBotonMac] = useState("Descargar para Mac.");

  // Función para manejar el clic del botón que incrementa el contador
  function manejarClic() {
    setContador(contador + 1);
  }

  // Función para agregar un nuevo fragmento a la lista
  function agregarFragmento() {
    setFragmentos([...fragmentos, `Fragmento ${fragmentos.length + 1}`]);
  }

  // Función para cambiar el texto de los botones de descarga
  function cambiarTextoBotones() {
    setBotonIOS("Descargando...");
    setBotonMac("Descargando...");
  }
  return (
    <>
      <header>
        <div className="img-container"></div>
      </header>
      <main>
        <section className="hero-seccion">
          <img
            src="/assets/imagenes/portapapeles/logo.svg"
            alt="Logo de la compañía Clipboard."
            className="logo"
          />
          <h1 className="hero__titulo">Un historial de todo lo que copias.</h1>
          <p className="hero__parrafo">
            Clipboard te permite rastrear y organizar todo lo que copias. Accede
            instantáneamente a tu portapapeles en todos tus dispositivos.
          </p>
          <button onClick={cambiarTextoBotones} className="ios-btn">
            Descargar para iOS.
          </button>
          <button className="mac-btn">Descargar para Mac.</button>
        </section>

        <section className="mantener-registro-seccion">
          <h2 className="seccion-titulo">
            Mantén un registro de tus fragmentos.
          </h2>
          <p>
            Puedes acceder a tus fragmentos de inmediato en todos tus
            dispositivos. Nuestras aplicaciones para Mac e iOS te ayudarán a
            organizarlo todo.
          </p>
          <div className="flex-container">
            <img
              src="/assets/imagenes/portapapeles/image-computer.png"
              alt="Ordenador"
            />
            <div className="columna">
              <div className="columna-item">
                <h3>Búsqueda rápida.</h3>
                <p>
                  Busca fácilmente tus fragmentos por contenido, categoría,
                  dirección web, aplicación y más.
                </p>
              </div>
              <div className="columna-item">
                <h3>Sincronización con iCloud.</h3>
                <p>
                  Guarda y sincroniza al instante tus fragmentos en todos tus
                  dispositivos.
                </p>
              </div>
              <div className="columna-item">
                <h3>Historial completo.</h3>
                <p>
                  Recupera cualquier fragmento desde el primer momento en que
                  comenzaste a usar la aplicación.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="acceso-seccion">
          <h2 className="seccion-titulo">
            Accede al Portapapeles en cualquier lugar.
          </h2>
          <p>
            Ya sea que estés en movimiento o en tu computadora, puedes acceder a
            todos tus fragmentos del Portapapeles con unos simples clics.
          </p>
          <img
            src="/assets/imagenes/portapapeles/image-devices.png"
            alt="Tableta y dispositivo móvil."
          />
        </section>

        <section className="potenciar-seccion">
          <h2 className="seccion-titulo">Potencia tu flujo de trabajo.</h2>
          <p>Tenemos las herramientas para aumentar tu productividad.</p>
          <div className="flex-container">
            <div className="fila-item">
              <img
                src="/assets/imagenes/portapapeles/icon-blacklist.svg"
                alt="Lista de iconos."
              />
              <h3>Crear listas negras.</h3>
              <p>
                Asegura que la información confidencial nunca llegue a tu
                portapapeles mediante la exclusión de ciertas fuentes.
              </p>
            </div>

            <div className="fila-item">
              <img
                src="/assets/imagenes/portapapeles/icon-text.svg"
                alt="Icono de la letra A."
              />
              <h3>Fragmentos de texto plano.</h3>
              <p>
                Elimina el formato no deseado del texto copiado para obtener una
                apariencia consistente.
              </p>
            </div>

            <div className="fila-item">
              <img
                src="/assets/imagenes/portapapeles/icon-preview.svg"
                alt="Icono de ojo."
              />
              <h3>Vista previa.</h3>
              <p>
                Vista previa rápida de todos los fragmentos en tu Portapapeles
                para un acceso sencillo.
              </p>
            </div>
          </div>
        </section>

        <section className="empresas-seccion">
          <div className="flex-container">
            <div className="fila-item">
              <img
                src="/assets/imagenes/portapapeles/logo-google.png"
                alt="logo google"
              />
            </div>

            <div className="fila-item">
              <img
                src="/assets/imagenes/portapapeles/logo-ibm.png"
                alt="logo ibm"
              />
            </div>

            <div className="fila-item">
              <img
                src="/assets/imagenes/portapapeles/logo-microsoft.png"
                alt="logo microsoft"
              />
            </div>

            <div className="fila-item">
              <img
                src="/assets/imagenes/portapapeles/logo-hp.png"
                alt="logo Hewlett Packard"
              />
            </div>

            <div className="fila-item">
              <img
                src="/assets/imagenes/portapapeles/logo-vector-graphics.png"
                alt="logo Vector Graphics"
              />
            </div>
          </div>
        </section>

        <section className="portapapeles">
          <h2 className="seccion-titulo">Portapapeles para iOS y Mac OS.</h2>
          <p>
            Disponible de forma gratuita en la App Store. Descarga para Mac o
            iOS, sincroniza con iCloud y estarás listo para empezar a agregar a
            tu portapapeles.
          </p>
          <button className="ios-btn">Descargar para IOS.</button>
          <button className="mac-btn">Descargar para Mac.</button>
        </section>
      </main>
      <PortaFooter />
    </>
  );
}
