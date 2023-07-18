import "./Testimonios.css";

export default function Testimonios() {
  const testimoniosData = [
    {
      id: 1,
      nombre: "Daniel Clifford",
      trabajo: "Graduado verificado",
      testimonio:
        "Recibí una oferta de trabajo en medio del curso, y las asignaturas que aprendí eran actuales, si no más, en la empresa a la que me uní. Honestamente, siento que valió cada centavo.",
      descriccion:
        "Fui técnico de emergencias médicas (EMT) durante muchos años antes de unirme al bootcamp. Estaba buscando hacer una transición y había escuchado a algunas personas que tuvieron una experiencia increíble aquí. Me inscribí en el curso introductorio gratuito y ¡lo encontré increíblemente divertido! Poco después me matriculé. Las siguientes 12 semanas fueron el mejor -y más agotador- momento de mi vida. Desde que completé el curso, he logrado cambiar de carrera exitosamente y ahora trabajo como Ingeniero de Software en una startup de realidad virtual.",
      imagen: "/assets/imagenes/testimonios/image-daniel.jpg",
      comillas: "/assets/imagenes/testimonios/bg-pattern-quotation.svg",
    },
    {
      id: 2,
      nombre: "Jonathan Walters",
      trabajo: "Graduado verificado",
      testimonio: "El equipo fue muy solidario y me mantuvo motivado.",
      descriccion:
        "Comencé como un novato total con prácticamente ninguna habilidad de programación. Ahora trabajo como ingeniero móvil para una gran empresa. Esta fue una de las mejores inversiones que he hecho en mí mismo.",
      imagen: "/assets/imagenes/testimonios/image-jonathan.jpg",
      comillas: "/assets/imagenes/testimonios/bg-pattern-quotation.svg",
    },
    {
      id: 3,
      nombre: "Kira Whittle",
      trabajo: "Graduado verificado",
      testimonio:
        "¡Una experiencia que cambia la vida por completo! ¡Altamente recomendado!",
      descriccion:
        "Antes de unirme al bootcamp, nunca había escrito una línea de código. Necesitaba una estructura proporcionada por profesionales que pudieran ayudarme a aprender programación paso a paso. Me animaron a inscribirme a través de un antiguo estudiante suyo que solo podía decir cosas maravillosas sobre el programa. Todo el plan de estudios y el personal no defraudaron. Fueron muy prácticos y nunca tuve que esperar mucho tiempo para recibir ayuda. El proyecto del equipo ágil, en particular, fue excepcional. Llevó mi aprendizaje al siguiente nivel de una manera que ningún tutorial podría haber logrado. De hecho, a menudo lo he mencionado en entrevistas como ejemplo de mi experiencia en desarrollo. Sin duda, me ayudó a conseguir un trabajo como desarrollador full-stack después de recibir múltiples ofertas. ¡Recomendado al 100%!",
      imagen: "/assets/imagenes/testimonios/image-kira.jpg",
      comillas: "/assets/imagenes/testimonios/bg-pattern-quotation.svg",
    },
    {
      id: 4,
      nombre: "Jeanette Harmon",
      trabajo: "Graduado verificado",
      testimonio:
        "El programa fue muy desafiante, pero lo apoyaron todos los días para que tuviera éxito.",
      descriccion:
        "Me encantó cómo se estructuró el programa. No hay nada como esto en el mercado. El currículo y el plan de estudios son increíbles, y estoy muy feliz de haberme inscrito. ¡Los proyectos que hice con mi equipo fueron tan buenos que los incluí en mi cartera profesional! ¡Esto me ayudó a conseguir mi trabajo actual como desarrollador de software full-stack!",
      imagen: "/assets/imagenes/testimonios/image-jeanette.jpg",
      comillas: "/assets/imagenes/testimonios/bg-pattern-quotation.svg",
    },
    {
      id: 5,
      nombre: "Patrick Abrams",
      trabajo: "Graduado verificado",
      testimonial:
        "Fue un curso increíblemente completo que me dio las bases para construir mi carrera como ingeniero de software.",
      descriccion:
        "Antes de inscribirme, solo sabía responder 'sí' o 'no' a la pregunta '¿Puedes construir un sitio web básico si te dan un diseño de pantalla?'. Ahora puedo manejar todo el proceso de desarrollo web solo, incluido el diseño, el desarrollo de front-end y back-end, y el despliegue. ¡No solo eso, sino que ahora también tengo una sólida comprensión de los principios básicos de la ingeniería de software, como las estructuras de datos, los algoritmos y la arquitectura de datos! ",
      imagen: "/assets/imagenes/testimonios/image-patrick.jpg",
      comillas: "/assets/imagenes/testimonios/bg-pattern-quotation.svg",
    },
  ];

  return (
    <main className="container">
      {testimoniosData.map((testimonio) => (
        <div className="tarjetas" key={testimonio.id}>
          <img
            src="/assets/imagenes/testimonios/bg-pattern-quotation.svg"
            className="comillas"
          />
          <div className="header">
            <img className="miniatura" src={testimonio.imagen} />
            <div className="personal-info">
              <p className="nombre-apellido">{testimonio.nombre}</p>
              <p className="trabajo">{testimonio.trabajo}</p>
            </div>
          </div>
          <p className="testimonial">{testimonio.testimonial}</p>
          <p className="descriccion">{testimonio.descriccion}</p>
        </div>
      ))}
    </main>
  );
}
