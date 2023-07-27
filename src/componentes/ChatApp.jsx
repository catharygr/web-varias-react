import "./ChatApp.css";

export default function ChatApp() {
  return (
    <>
      <main>
        <section className="container">
          <div className="primera-tarjeta"></div>
          <div className="segunda-tarjeta">
            <div className="display-movil">
              <div className="contenido-interno">
                <div className="arco-medio"></div>

                <ul>
                  <li className="flecha-izq"></li>
                  <li>
                    {" "}
                    <img
                      src="/assets/imagenes/chatapp/avatar.jpg"
                      alt="Imagen del avatar"
                    />
                  </li>
                  <li className="primer-encabezado">
                    <h3> Samuel Green</h3>
                    <p>Available to Walk</p>
                  </li>
                  <li className="vl"></li>
                </ul>

                <p className="para-primero para-izq">
                  {" "}
                  That sounds great. I’d be happy with that.
                </p>
                <p className="para-segundo para-izq">
                  {" "}
                  Could you send over some pictures of your dog, please?
                </p>
                <div className="imagen-div">
                  <img
                    className="dog-image"
                    src="/assets/imagenes/chatapp/dog-image-1.jpg"
                    alt="dog-image-1"
                  />
                  <img
                    className="dog-image"
                    src="i/assets/imagenes/chatapp/dog-image-2.jpg"
                    alt="dog-image-2"
                  />
                  <img
                    className="dog-image"
                    src="/assets/imagenes/chatapp/dog-image-3.jpg"
                    alt="dog-image-3"
                  />
                </div>

                <p className="para-derecho para-ancho-derecho">
                  Here are a few pictures. She’s a happy girl!
                </p>
                <p className="para-derecho para-derecho-peque">
                  {" "}
                  Can you make it?
                </p>

                <p className="para-last para-left">
                  {" "}
                  She looks so happy! The time we discussed works. How long
                  shall I take her out for?
                </p>

                <div className="circle up"></div>
                <div className="circle down"></div>
                <div>
                  <p className="walk walk-first">
                    <span className="minute">30 minute walk</span>{" "}
                    <span className="dollar"> $29</span>
                  </p>
                  <p className="walk">
                    {" "}
                    <span className="minute">30 minute walk</span>{" "}
                    <span className="dollar">$49</span>{" "}
                  </p>
                </div>

                <p className="message-type">Type a message…</p>
                <div className="summit-button">
                  <i className="arrow right"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container-second">
          <h1> Simple booking</h1>

          <p className="para-third">
            {" "}
            Stay in touch with our dog walkers through the chat interface. This
            makes it easy to discuss arrangements and make bookings. Once the
            walk has been completed you can rate your walker and book again all
            through the chat.
          </p>
        </div>
      </main>
    </>
  );
}
