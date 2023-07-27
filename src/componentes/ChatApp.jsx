import "./ChatApp.css";

export default function ChatApp() {
  return (
    <>
      <main>
        <section className="telefono-seccion">
          <div className="app-header">
            <img
              src="/assets/imagenes/chatapp/avatar.jpg"
              alt="Foto de perfil"
            />
            <div className="perfiles">
              <span className="perfiles-nombre">Samuel Green</span>
              <span>Disponible para pasear</span>
            </div>
          </div>
          <div className="app-interfaz">
            <span className="msg enviar-msg">
              Eso suena genial. Estaría feliz con eso.
            </span>
            <span className="msg enviar-msg">
              ¿Podrías enviarme algunas fotos de tu perro, por favor?
            </span>
            <span className="foto-msg">
              <img
                src="/assets/imagenes/chatapp/dog-image-1.jpg"
                alt="Foto de perro"
              />
              <img
                src="/assets/imagenes/chatapp/dog-image-2.jpg"
                alt="Foto de perro"
              />
              <img
                src="/assets/imagenes/chatapp/dog-image-3.jpg"
                alt="Foto de perro"
              />
            </span>
            <span className="msg receptor-msg">
              Aquí tienes algunas fotos. ¡Ella es una perrita feliz!
            </span>
            <span className="msg receptor-msg">¿Puedes hacerlo?</span>
            <span className="msg enviar-msg">
              ¡Se ve tan feliz! El horario que discutimos funciona. ¿Cuánto
              tiempo debo sacarla a pasear?
            </span>
            <span className="oferta oferta-1">
              Paseo de 30 minutos.
              <span className="precio">$29</span>
            </span>
            <span className="oferta oferta-2">
              Paseo de 1 hora.
              <span className="precio">$49</span>
            </span>
            <div className="mensaje-area">Escribe un mensaje...</div>
          </div>
        </section>
        <section className="texto-seccion">
          <h1>Reserva sencilla.</h1>
          <p>
            Mantente en contacto con nuestros paseadores de perros a través de
            la interfaz de chat. Esto facilita discutir arreglos y hacer
            reservas. Una vez que se haya completado el paseo, puedes calificar
            a tu paseador y reservar nuevamente, todo a través del chat.
          </p>
          <footer className="atribucion">
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
            . Hecho por <a href="https://bubulazi.com/">bubulazi.com</a>.
          </footer>
        </section>
      </main>
    </>
  );
}
