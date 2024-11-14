import Recommendations from "../components/Recommendations";
import StateEvolution from "../components/StateEvolution";
import FormButton from "../components/ui/FormButton";
import BackButton from "../components/ui/BackButton";

function MentalHealthProfile() {
  // Array de artículos específicos para la sección de salud mental
  const mentalHealthArticles = [
    {
      title:
        "Técnicas de respiración que te ayudarán a conciliar el sueño en pocos minutos",
      description: "Un buen descanso es esencial...",
      image: "https://velfont.com/wp-content/uploads/Octubre-1-.png", // Reemplaza con la URL real de la imagen
      url: "https://velfont.com/tecnicas-de-respiracion-que-te-ayudaran-a-conciliar-el-sueno-rapidamente/",
    },
    {
      title: "Beneficios de la meditación en la salud mental",
      description:
        "La meditación tiene muchos beneficios, que no solo favorecen a nuestro sistema emocional...",
      image:
        "https://vidasaludable.udec.cl/sites/default/files/styles/large/public/meditación_cvs.jpg?itok=qv6QpN5L", // Reemplaza con la URL real de la imagen
      url: "https://vidasaludable.udec.cl/node/370",
    },
    {
      title: "5 hábitos que pueden ayudarte a reducir el estrés",
      description:
        "El 90% de la población mundial sufre estrés, que se manifiesta de diferentes maneras.",
      image:
        "https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic2543855.jpg?w=1600&q=50", // Reemplaza con la URL real de la imagen
      url: "https://www.nationalgeographicla.com/ciencia/2023/02/5-habitos-que-pueden-ayudarte-a-reducir-el-estres",
    },
  ];

  return (
    <div className="w-full h-full min-h-screen">
      <BackButton href="/" />
      <div className="w-full h-full flex flex-col items-center px-10 py-20">
        <FormButton href="/formulario-mental">
          LLenar encuesta de salud mental
        </FormButton>
        <StateEvolution type="mental" />

        {/* Agrega Recommendations pasando mentalHealthArticles como prop */}
        <Recommendations articles={mentalHealthArticles} />
      </div>
    </div>
  );
}

export default MentalHealthProfile;
