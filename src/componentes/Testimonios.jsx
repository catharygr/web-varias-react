import "./Testimonios.css";

export default function Testimonios() {
  const testimoniosData = [
    {
      id: "tarjeta-uno",
      nombre: "Daniel Clifford",
      trabajo: "Graduado verificado",
      testimonial:
        "Recibí una oferta de trabajo en medio del curso, y las asignaturas que aprendí eran actuales, si no más, en la empresa a la que me uní. Honestamente, siento que valió cada centavo.",
      descriccion:
        "Fui técnico de emergencias médicas (EMT) durante muchos años antes de unirme al bootcamp. Estaba buscando hacer una transición y había escuchado a algunas personas que tuvieron una experiencia increíble aquí. Me inscribí en el curso introductorio gratuito y ¡lo encontré increíblemente divertido! Poco después me matriculé. Las siguientes 12 semanas fueron el mejor -y más agotador- momento de mi vida. Desde que completé el curso, he logrado cambiar de carrera exitosamente y ahora trabajo como Ingeniero de Software en una startup de realidad virtual.",
      imagen: "/assets/imagenes/testimonios/image-daniel.jpg",
    },
    {
      id: "tarjeta-dos",
      nombre: "Jonathan Walters",
      trabajo: "Graduado verificado",
      testimonial: "El equipo fue muy solidario y me mantuvo motivado.",
      descriccion:
        "Comencé como un novato total con prácticamente ninguna habilidad de programación. Ahora trabajo como ingeniero móvil para una gran empresa. Esta fue una de las mejores inversiones que he hecho en mí mismo.",
      imagen: "/assets/imagenes/testimonios/image-jonathan.jpg",
    },
    {
      id: "tarjeta-tres",
      nombre: "Kira Whittle",
      trabajo: "Graduado verificado",
      testimonial:
        "¡Una experiencia que cambia la vida por completo! ¡Altamente recomendado!",
      descriccion:
        "Antes de unirme al bootcamp, nunca había escrito una línea de código. Necesitaba una estructura proporcionada por profesionales que pudieran ayudarme a aprender programación paso a paso. Me animaron a inscribirme a través de un antiguo estudiante suyo que solo podía decir cosas maravillosas sobre el programa. Todo el plan de estudios y el personal no defraudaron. Fueron muy prácticos y nunca tuve que esperar mucho tiempo para recibir ayuda. El proyecto del equipo ágil, en particular, fue excepcional. Llevó mi aprendizaje al siguiente nivel de una manera que ningún tutorial podría haber logrado. De hecho, a menudo lo he mencionado en entrevistas como ejemplo de mi experiencia en desarrollo. Sin duda, me ayudó a conseguir un trabajo como desarrollador full-stack después de recibir múltiples ofertas. ¡Recomendado al 100%!",
      imagen: "/assets/imagenes/testimonios/image-kira.jpg",
    },
    {
      id: "tarjeta-cuatro",
      nombre: "Patrick Abrams",
      trabajo: "Graduado verificado",
      testimonial:
        "Excelente apoyo docente por parte de los asistentes de enseñanza que hicieron el bootcamp ellos mismos. Obtener orientación de ellos y aprender de sus experiencias fue fácil.",
      descriccion:
        "El personal parece estar genuinamente preocupado por mi progreso, lo cual encuentro realmente refrescante. El programa me brindó la confianza necesaria para poder salir al mundo y presentarme como un desarrollador junior capaz. El nivel es superior al resto. Obtendrás la atención personal que necesitas de una increíble comunidad de personas inteligentes y sorprendentes.",
      imagen: "/assets/imagenes/testimonios/image-patrick.jpg",
    },
    {
      id: "tarjeta-cinco",
      nombre: "Jeanette Harmon",
      trabajo: "Graduado verificado",
      testimonial: "En general, una experiencia maravillosa y gratificante.",
      descriccion:
        "¡Gracias por la maravillosa experiencia! Ahora tengo un trabajo que realmente disfruto y gano un buen salario mientras hago algo que amo.",
      imagen: "/assets/imagenes/testimonios/image-jeanette.jpg",
    },
  ];

  return (
    <main className="container">
      {testimoniosData.map((tarjeta, index) => (
        <div className={`tarjeta-${index}`} key={index}>
          <img
            src="/assets/imagenes/testimonios/bg-pattern-quotation.svg"
            className="comillas"
            alt="Comillas"
          />
          <div className="header">
            <img
              className="miniatura online"
              src={tarjeta.imagen}
              alt="Foto de perfil"
            />
            <div className="personal-info">
              <p className="nombre-apellido">{tarjeta.nombre}</p>
              <p className="trabajo">{tarjeta.trabajo}</p>
            </div>
          </div>
          <p className="testimonial">{tarjeta.testimonial}</p>
          <p className="descriccion">{tarjeta.descriccion}</p>
        </div>
      ))}
    </main>
  );
}
