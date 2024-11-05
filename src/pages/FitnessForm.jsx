import Button from "../components/ui/Button";
import toast from "react-hot-toast";
import { FormsContext } from "../context/FormsContext";
import { useContext } from "react";
import BackButton from "../components/ui/BackButton";

const FitnessQuestions = [
  {
    question: "¿Cuántas horas dormiste anoche?",
    id: "hoursSlept",
    options: [
      ["Menos de 4 horas", -2],
      ["Entre 4 y 6 horas", 1],
      ["Entre 7 y 9 horas", 4],
      ["Más de 9 horas", 2],
    ],
  },
  {
    question: "¿Cuántas horas de ejercicio hiciste hoy?",
    id: "hoursExercised",
    options: [
      ["Menos de 1 hora", 0],
      ["Entre 1 y 2 horas", 2],
      ["Más de 2 horas", 4],
    ],
  },
  {
    question: "¿Cuántos litros de agua tomaste hoy?",
    id: "litersOfWater",
    options: [
      ["Menos de 1 litro", -2],
      ["Entre 1 y 2 litros", 2],
      ["Entre 2 y 3 litros", 4],
    ],
  },
  {
    question: "¿Cuántas comidas hiciste hoy?",
    id: "meals",
    options: [
      ["menos de 3 comidas", 2],
      ["3 a 4 comidas", 4],
      ["5 o más comidas", -1],
    ],
  },
];

function getScore(answers) {
  let score = 0;
  answers.forEach(([, answer]) => {
    score += answer;
  });
  return score;
}

function FitnessForm() {
  const { saveFitnessScore } = useContext(FormsContext);

  function handleSubmission(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const answers = Object.entries(Object.fromEntries(formData.entries())).map(
      ([key, value]) => [key, parseInt(value)]
    );
    if (Object.values(answers).length !== FitnessQuestions.length) {
      toast.error("Por favor, completa el formulario");
      return;
    }

    toast.success("Formulario enviado");
    const score = getScore(answers);
    saveFitnessScore(score);
  }

  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute inset-0 bg-cover bg-left filter blur-sm" style={{ backgroundImage: 'url(/background.webp)' }}></div>
      <div className="relative w-full min-h-screen flex flex-col">
        {/* Encabezado con el botón de retroceso */}
        <header className="w-full p-5">
          <BackButton href="/perfil-fisico">
          </BackButton>
        </header>

        {/* Sección principal con el formulario */}
        <main className="flex-grow flex items-center justify-center p-5">
          <form
            className="w-full max-w-md flex flex-col items-center gap-5 bg-white rounded-lg py-8"
            onSubmit={handleSubmission}
          >
            <h1 className="text-xl text-center">Formulario diario de estado físico</h1>
            <ul className="flex flex-col gap-5 mb-5">
              {FitnessQuestions.map((question) => (
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
    </div>
  );
}

export default FitnessForm;
