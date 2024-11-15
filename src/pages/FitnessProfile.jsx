import Recommendations from "../components/Recommendations";
import StateEvolution from "../components/StateEvolution";
import FormButton from "../components/ui/FormButton";
import BackButton from "../components/ui/BackButton";

function FitnessProfile() {
  // Array de artículos específicos para la sección de estado físico
  const fitnessArticles = [
    {
      title: "Cómo mejorar la condición física - UFV Madrid",
      description: "¿Por qué es bueno mejorar la condición física?...",
      image:
        "https://fpsuperiorufv.es/blog/wp-content/uploads/2024/04/como-mejorar-la-condicion-fisica.png", // Reemplaza con la URL real de la imagen
      url: "https://fpsuperiorufv.es/blog/como-mejorar-la-condicion-fisica/",
    },
    {
      title: "Los mejores ejercicios de fortalecimiento muscular",
      description: "el fortalecimiento muscular puede ser la solución",
      image:
        "https://www.gladiatorfit.ch/wp-content/uploads/2023/02/renforcement-musculaire-exercices-1.jpg", // Reemplaza con la URL real de la imagen
      url: "https://www.gladiatorfit.ch/es/blog/los-mejores-ejercicios-de-fortalecimiento-muscular",
    },
    {
      title:
        "Siete ejercicios que puedes hacer en casa para mejorar tu flexibilidad",
      description: "La flexibilidad es una cualidad física muy importante.",
      image: "https://i.blogs.es/6ff6aa/img_9399/1366_2000.webp", // Reemplaza con la URL real de la imagen
      url: "https://www.vitonica.com/entrenamiento/siete-ejercicios-que-puedes-hacer-casa-para-mejorar-tu-flexibilidad",
    },
  ];

  return (
    <div className="relative w-full h-full min-h-screen">
      <div className="absolute inset-0 bg-cover bg-left filter blur-[2px]" style={{ backgroundImage: 'url(/background.webp)' }}></div>
      <BackButton href="/" />
      <div className="relative w-full h-full flex flex-col items-center px-10 py-20">
        <FormButton href="/formulario-fisico">
          Actualiza tu estado fisico
        </FormButton>
        <StateEvolution type="physical" />

        {/* Agrega Recommendations pasando fitnessArticles como prop */}
        <Recommendations articles={fitnessArticles} />
      </div>
    </div>
  );
}

export default FitnessProfile;
