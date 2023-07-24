/* eslint-disable react/jsx-no-target-blank */
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
              <span style="display: block;">Disponible para caminar</span>
            </div>
          </div>
          <div className="app-interfaz">
            <span className="msg enviar-msg">
              That sounds great. I’d be happy with that.
            </span>

            <span className="msg enviar-msg">
              Could you send over some pictures of your dog, please?
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

            <span className="msg reciever-msg">
              Here are a few pictures. She’s a happy girl!
            </span>

            <span className="msg receptor-msg">Can you make it?</span>

            <span className="msg enviar-msg">
              She looks so happy! The time we discussed works. How long shall I
              take her out for?
            </span>

            <span className="oferta oferta-1">
              30 minute walk
              <span className="precio">$29</span>
            </span>

            <span className="oferta oferta-2">
              1 hour walk
              <span className="precio">$49</span>
            </span>

            <div className="mensaje-area">Type a message…</div>
          </div>
        </section>
        <section className="texto-seccion">
          <h1>Simple booking</h1>
          <p>
            Stay in touch with our dog walkers through the chat interface. This
            makes it easy to discuss arrangements and make bookings. Once the
            walk has been completed you can rate your walker and book again all
            through the chat.
          </p>
        </section>
        <footer className="atribucion">
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Hecho por <a href="#">Cathy</a>.
        </footer>
      </main>
    </>
  );
}
