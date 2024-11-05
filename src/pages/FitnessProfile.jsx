import Recommendations from "../components/Recommendations";
import StateEvolution from "../components/StateEvolution";
import LinkButton from "../components/ui/LinkButton";

function FitnessProfile() {
  // Array de artículos específicos para la sección de estado físico
  const fitnessArticles = [
    {
      title: "Cómo mejorar la condición física - UFV Madrid",
      description: "¿Por qué es bueno mejorar la condición física?...",
      image: "https://fpsuperiorufv.es/blog/wp-content/uploads/2024/04/como-mejorar-la-condicion-fisica.png", // Reemplaza con la URL real de la imagen
      url: "https://fpsuperiorufv.es/blog/como-mejorar-la-condicion-fisica/",
    },
    {
      title: "Los mejores ejercicios de fortalecimiento muscular",
      description: "el fortalecimiento muscular puede ser la solución",
      image: "https://www.gladiatorfit.ch/wp-content/uploads/2023/02/renforcement-musculaire-exercices-1.jpg", // Reemplaza con la URL real de la imagen
      url: "https://www.gladiatorfit.ch/es/blog/los-mejores-ejercicios-de-fortalecimiento-muscular",
    },
    {
      title: "Siete ejercicios que puedes hacer en casa para mejorar tu flexibilidad",
      description: "La flexibilidad es una cualidad física muy importante.",
      image: "https://i.blogs.es/6ff6aa/img_9399/1366_2000.webp", // Reemplaza con la URL real de la imagen
      url: "https://www.vitonica.com/entrenamiento/siete-ejercicios-que-puedes-hacer-casa-para-mejorar-tu-flexibilidad",
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
