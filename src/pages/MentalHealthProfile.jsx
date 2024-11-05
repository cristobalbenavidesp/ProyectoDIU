import Recommendations from "../components/Recommendations";
import StateEvolution from "../components/StateEvolution";
import LinkButton from "../components/ui/LinkButton";

function MentalHealthProfile() {
  // Array de artículos específicos para la sección de salud mental
  const mentalHealthArticles = [
    {
      title: "Cómo reducir el estrés en la vida diaria",
      description: "El estrés puede tener un impacto negativo en nuestra salud mental y física. Aquí tienes algunos consejos para manejarlo.",
      image: "https://via.placeholder.com/150", // Reemplaza con la URL real de la imagen
      url: "https://example.com/mental1",
    },
    {
      title: "Beneficios de la meditación para la salud mental",
      description: "La meditación puede ayudarte a reducir la ansiedad y mejorar tu bienestar general. Aprende cómo empezar.",
      image: "https://via.placeholder.com/150", // Reemplaza con la URL real de la imagen
      url: "https://example.com/mental2",
    },
    {
      title: "Consejos para mejorar la calidad de tu sueño",
      description: "Un buen descanso es fundamental para la salud mental. Descubre cómo mejorar tu calidad de sueño.",
      image: "https://via.placeholder.com/150", // Reemplaza con la URL real de la imagen
      url: "https://example.com/mental3",
    },
  ];

  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center px-10 py-20">
      <div className="absolute top-5 left-5">
        <LinkButton type="secondary" href="/">
          Volver a Inicio
        </LinkButton>
      </div>
      <LinkButton type="primary" href="/formulario-mental">
        LLenar encuesta de salud mental
      </LinkButton>
      <StateEvolution type="mental" />
      
      {/* Agrega Recommendations pasando mentalHealthArticles como prop */}
      <Recommendations articles={mentalHealthArticles} />
    </div>
  );
}

export default MentalHealthProfile;
