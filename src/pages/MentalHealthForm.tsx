import React from "react";
import Button from "../components/ui/Button";
import toast from "react-hot-toast";

const MentalHealthQuestions = [
  {
    question: "¿Cómo te sientes hoy?",
    id: "feelings",
    options: ["Muy mal", "Mal", "Regular", "Bien", "Muy bien"],
  },
  {
    question: "¿Cuántas horas de sueño tuviste anoche?",
    id: "hoursSlept",
    options: [
      "Menos de 4 horas",
      "Entre 4 y 6 horas",
      "Entre 6 y 8 horas",
      "Más de 8 horas",
    ],
  },
  {
    question: "¿Cuántas horas de ejercicio hiciste hoy?",
    id: "hoursExercised",
    options: [
      "Ninguna",
      "Menos de 1 hora",
      "Entre 1 y 2 horas",
      "Más de 2 horas",
    ],
  },
  {
    question: "¿Cuántos momentos de estrés tuviste hoy?",
    id: "stressfulMoments",
    options: ["Ninguno", "1", "2", "3 o más veces"],
  },
];

function handleSubmission(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const answers = Object.fromEntries(formData.entries());
  if (Object.values(answers).length !== MentalHealthQuestions.length) {
    toast.error("Por favor, completa el formulario");
    return;
  }
  console.log(answers);
  toast.success("Formulario enviado");
}

function MentalHealthForm() {
  return (
    <form
      className="w-full h-full min-h-screen flex flex-col items-center place-content-center gap-5 "
      onSubmit={handleSubmission}
    >
      <h1 className="text-xl text-center">Formulario diario de salud mental</h1>
      <ul className="flex flex-col gap-5 mb-5">
        {MentalHealthQuestions.map((question) => (
          <li key={question.id} className="flex flex-col">
            <label htmlFor={question.id}>{question.question}</label>
            <select id={question.id} name={question.id}>
              <option value="" disabled selected>
                Elige una opción
              </option>
              {question.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </li>
        ))}
      </ul>
      <Button type="primary">Enviar</Button>
    </form>
  );
}

export default MentalHealthForm;
