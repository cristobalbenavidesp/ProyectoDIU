import React from "react";
import Button from "../components/ui/Button";
import toast from "react-hot-toast";
const FitnessQuestions = [
  {
    question: "¿Cuántas horas dormiste anoche?",
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
    question: "¿Cuántos litros de agua tomaste hoy?",
    id: "litersOfWater",
    options: [
      "Menos de 1 litro",
      "Entre 1 y 2 litros",
      "Entre 2 y 3 litros",
      "Más de 3 litros",
    ],
  },
  {
    question: "¿Cuántas comidas hiciste hoy?",
    id: "meals",
    options: ["Menos de 3 comidas", "3 comidas", "Más de 3 comidas"],
  },
];

function handleSubmission(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const answers = Object.fromEntries(formData.entries());
  if (Object.values(answers).length !== FitnessQuestions.length) {
    toast.error("Por favor, completa el formulario");
    return;
  }
  console.log(answers);
  toast.success("Formulario enviado");
}

function FitnessForm() {
  return (
    <form
      className="w-full h-full min-h-screen flex flex-col items-center place-content-center gap-5 "
      onSubmit={handleSubmission}
    >
      <h1 className="text-xl text-center">
        Formulario diario de estado físico
      </h1>
      <ul className="flex flex-col gap-5 mb-5">
        {FitnessQuestions.map((question) => (
          <li key={question.id} className="flex flex-col">
            <label className="flex flex-col">
              {question.question}
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
            </label>
          </li>
        ))}
      </ul>
      <Button type="primary">Enviar</Button>
    </form>
  );
}

export default FitnessForm;
