import Recommendations from "../components/Recommendations";
import StateEvolution from "../components/StateEvolution";
import LinkButton from "../components/ui/LinkButton";

function FitnessProfile() {
  // Array de artículos específicos para la sección de estado físico
  const fitnessArticles = [
    {
      title: "8 tips para mejorar la resistencia física - Pluxee",
      description: "La resistencia física es fundamental para cualquier actividad...",
      image: "https://via.placeholder.com/150", // Reemplaza con la URL real de la imagen
      url: "https://example.com/fitness1",
    },
    {
      title: "Fortalecimiento muscular: vuélvete más fuerte - Mayo Clinic",
      description: "Learn more about services at Mayo Clinic.",
      image: "https://via.placeholder.com/150", // Reemplaza con la URL real de la imagen
      url: "https://example.com/fitness2",
    },
    {
      title: "Tips de Nutrición para Mejorar tu Calidad de Vida de Forma Fácil",
      description: "Te damos 10 tips de nutrición sencillos de llevar a cabo para que tengas una vida más saludable.",
      image: "https://via.placeholder.com/150", // Reemplaza con la URL real de la imagen
      url: "https://example.com/fitness3",
    },
  ];

  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center px-10 py-20">
      <div className="absolute top-5 left-5">
        <LinkButton type="secondary" href="/">
          Volver a Inicio
        </LinkButton>
      </div>
      <LinkButton type="primary" href="/formulario-fisico">
        LLenar encuesta de estado físico
      </LinkButton>
      <StateEvolution type="physical" />
      
      {/* Agrega Recommendations pasando fitnessArticles como prop */}
      <Recommendations articles={fitnessArticles} />
    </div>
  );
}

export default FitnessProfile;
