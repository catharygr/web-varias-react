import "./NotificacionesPaginas.css";

export default function NotificacionesPaginas() {
  return (
    <main className="main-block">
      <div className="block-notificatificaciones__tipo01 block-notificaciones--no-leido">
        <div className="usar-img-01"></div>
        <div>
          <p>
            <span className="usar-nombre">Mark Webber</span>
            <span className="usar-accion">
              Reaccionó a tu publicación reciente.{" "}
            </span>
            <span className="usar-post">¡Mi primer torneo hoy!</span>
            <span className="red-marcar"></span>
          </p>
          <p className="usar-dato">Hace 1 minuto.</p>
        </div>
      </div>

      <div className="block-notificatificaciones__tipo01 block-notificaciones--no-leido">
        <div className="usar-img-02"></div>
        <div>
          <p>
            <span className="usar-nombre">Angela Gray</span>
            <span className="usar-accion">Te ha seguido</span>
            <span className="red-marcar"></span>
          </p>
          <p className="usar-dato">Hace 5 minuto.</p>
        </div>
      </div>

      <div className="block-notificatificaciones__tipo01 block-notificaciones--no-leido">
        <div className="usar-img-03"></div>
        <div>
          <p>
            <span className="usar-nombre">Jacob Thompson</span>
            <span className="usar-accion"> Se ha unido a tu grupo. </span>
            <span className="usar-grupo">Club de ajedrez.</span>
            <span className="red-marcar"></span>
          </p>
          <p className="usar-dato">Hace 1 día</p>
        </div>
      </div>

      <div className="block-notificatificaciones__tipo01 block-notificaciones--read">
        <div className="usar-img-04"></div>
        <div>
          <p>
            <span className="usar-nombre">Rizky Hasanuddin</span>
            <span className="usar-accion"> Te envió un mensaje privado.</span>
            <span className="red-marcar"></span>
          </p>
          <p className="usar-dato">Hace 5 días</p>
        </div>

        <div className="block-notifications__type02-c">
          <div className="block-notifications__type02 block-notificaciones--read">
            Hola, gracias por crear el Club de Ajedrez. Soy miembro desde hace
            algunas semanas y ya estoy divirtiéndome mucho y mejorando mi juego.
          </div>
        </div>
      </div>

      <div className="block-notificatificaciones__tipo01 block-notificaciones--read">
        <div className="usar-img-05"></div>
        <div>
          <p>
            <span className="usar-nombre">Kimberly Smith</span>
            <span className="usar-accion"> Comentó en tu foto.</span>
            <span className="red-marcar"></span>
          </p>
          <p className="usar-dato">Hace 1 semana.</p>
        </div>
        <div className="usar-img-08"></div>
      </div>

      <div className="block-notificatificaciones__tipo01 block-notificaciones--read">
        <div className="usar-img-06"></div>
        <div>
          <div>
            <span className="usar-nombre">Nathan Peterson</span>
            <span className="usar-accion">
              {" "}
              Reaccionó a tu publicación reciente.{" "}
            </span>
            <span className="usar-post">
              5 estrategias de final de partida para aumentar tu tasa de
              victoria.
            </span>
            <span className="red-marcar"></span>
            <p className="usar-dato">Hace 2 semanas</p>
          </div>
        </div>
      </div>

      <div className="block-notificatificaciones__tipo01 block-notificaciones--read">
        <div className="usar-img-07"></div>
        <div>
          <p>
            <span className="usar-nombre">Anna Kim</span>
            <span className="usar-accion"> Salió del grupo </span>
            <span className="usar-grupo">Club de ajedrez.</span>
            <span className="red-marcar"></span>
          </p>
          <p className="usar-dato">Hace 2 semanas</p>
        </div>
      </div>
    </main>
  );
}