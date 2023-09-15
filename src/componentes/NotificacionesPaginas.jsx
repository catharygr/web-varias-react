import "./NotificacionesPaginas.css";

const notificacionesData = [
  {
    id: "01",
    nombre: "Mark Webber",
    accion: "reaccionó a tu publicación reciente.",
    post: "¡Mi primer torneo hoy!",
    tiempo: "Hace 1 minuto",
    leido: false,
  },
  {
    id: "02",
    nombre: "Angela Gray",
    accion: "te ha seguido",
    tiempo: "Hace 5 minutos",
    leido: false,
  },
  {
    id: "03",
    nombre: "Jacob Thompson",
    accion: "se ha unido a tu grupo.",
    grupo: "Club de ajedrez",
    tiempo: "Hace 1 día",
    leido: false,
  },
  {
    id: "04",
    nombre: "Rizky Hasanuddin",
    accion: "te envió un mensaje privado.",
    tiempo: "Hace 5 días",
    leido: true,
    mensajePrivado:
      "Hola, gracias por crear el Club de Ajedrez. Soy miembro desde hace algunas semanas y ya estoy divirtiéndome mucho y mejorando mi juego.",
  },
  {
    id: "05",
    nombre: "Kimberly Smith",
    accion: "comentó en tu foto.",
    tiempo: "Hace 1 semana",
    leido: true,
    fotoURL: "foto-comentada",
  },
  {
    id: "06",
    nombre: "Nathan Peterson",
    accion: "reaccionó a tu publicación reciente.",
    post: "5 estrategias de final de partida para aumentar tu tasa de victoria.",
    tiempo: "Hace 2 semanas",
    leido: true,
  },
  {
    id: "07",
    nombre: "Anna Kim",
    accion: "salió del grupo",
    grupo: "Club de ajedrez",
    tiempo: "Hace 2 semanas",
    leido: true,
  },
];

export default function NotificacionesPaginas() {
  return (
    <main className="main-block">
      <header className="block-header">
        <span className="block-header__notificaciones">
          <span className="block-header__notificaciones-texto">
            Notificaciones{" "}
          </span>
          <span className="block-header__notificaciones-numero">3</span>
        </span>
        <span className="block-header__marcar-todo">
          Marcar todo como leído
        </span>
      </header>

      {notificacionesData.map((notificacion) => (
        <div
          key={notificacion.id}
          className={`block-notificaciones__tipo01 ${
            notificacion.leido
              ? "block-notificaciones--read"
              : "block-notificaciones--no-leido"
          }`}
        >
          <div className={`usar-img-${notificacion.id}`}></div>
          <div>
            <p>
              <span className="usar-nombre">{notificacion.nombre} </span>
              <span className="usar-accion">{notificacion.accion}</span>
              {notificacion.post && (
                <span className="usar-post">{notificacion.post}</span>
              )}
              {notificacion.grupo && (
                <span className="usar-grupo">{notificacion.grupo}</span>
              )}
              <span className="red-marcar"></span>
            </p>
            <p className="usar-dato">{notificacion.tiempo}</p>
          </div>
          {notificacion.fotoURL && <div className="foto-comentada"></div>}
          {notificacion.mensajePrivado && (
            <div className="block-notifications__type02-c">
              <div className="block-notifications__type02 block-notificaciones--read">
                {notificacion.mensajePrivado}
              </div>
            </div>
          )}
        </div>
      ))}
    </main>
  );
}
