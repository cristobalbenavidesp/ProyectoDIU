import React from "react";
import Button from "../components/ui/Button";
import toast from "react-hot-toast";
import LinkButton from "../components/ui/LinkButton";
import { FormsContext } from "../context/FormsContext";
import { useContext } from "react";

const MentalHealthQuestions = [
  {
    question: "¿Cómo te sientes hoy?",
    id: "feelings",
    options: [
      ["Muy mal", -2],
      ["Mal", -1],
      ["Regular", 0],
      ["Bien", 2],
      ["Muy bien", 4],
    ],
  },
  {
    question: "¿Cuántas horas de sueño tuviste anoche?",
    id: "hoursSlept",
    options: [
      ["Menos de 4 horas", -2],
      ["Entre 4 y 6 horas", 0],
      ["Entre 6 y 8 horas", 2],
      ["Más de 8 horas", 4],
    ],
  },
  {
    question: "¿Cuántas horas de ejercicio hiciste hoy?",
    id: "hoursExercised",
    options: [
      ["Ninguna", -2],
      ["Menos de 1 hora", 0],
      ["Entre 1 y 2 horas", 2],
      ["Más de 2 horas", 4],
    ],
  },
  {
    question: "¿Cuántos momentos de estrés tuviste hoy?",
    id: "stressfulMoments",
    options: [
      ["Ninguno", 4],
      ["1", 2],
      ["2", 0],
      ["3 o más veces", -2],
    ],
  },
];

// Función para calcular el puntaje total basado en las respuestas
function getScore(answers) {
  let score = 0;
  answers.forEach(([, answer]) => {
    score += answer;
  });
  return score;
}

function MentalHealthForm() {
  const { saveMentalHealthScore } = useContext(FormsContext);

  function handleSubmission(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const answers = Object.entries(Object.fromEntries(formData.entries())).map(
      ([key, value]) => [key, parseInt(value as string)]
    );
    if (Object.values(answers).length !== MentalHealthQuestions.length) {
      toast.error("Por favor, completa el formulario");
      return;
    }

    const score = getScore(answers);
    toast.success("Formulario enviado");
    saveMentalHealthScore(score);
  }

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Encabezado con el botón de retroceso */}
      <header className="w-full p-5">
        <LinkButton href="/perfil-mental" type="secondary">
          Volver al perfil de salud mental
        </LinkButton>
      </header>

      {/* Sección principal con el formulario */}
      <main className="flex-grow flex items-center justify-center p-5">
        <form
          className="w-full max-w-md flex flex-col items-center gap-5"
          onSubmit={handleSubmission}
        >
          <h1 className="text-xl text-center">Formulario diario de salud mental</h1>
          <ul className="flex flex-col gap-5 mb-5">
            {MentalHealthQuestions.map((question) => (
              <li key={question.id} className="flex flex-col">
                <label className="flex flex-col">
                  {question.question}
                  <select id={question.id} name={question.id} defaultValue={""}>
                    <option value="" disabled>
                      Elige una opción
                    </option>
                    {question.options.map(([option, score], index) => (
                      <option key={`${question.id}-${index}`} value={score}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </li>
            ))}
          </ul>
          <Button type="primary">Enviar</Button>
        </form>
      </main>
    </div>
  );
}

export default MentalHealthForm;
