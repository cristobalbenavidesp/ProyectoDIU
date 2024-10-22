import Card from "./ui/Card";

const recommendations = [
  {
    title: "Recomendación 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Recomendación 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Recomendación 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function Recommendations() {
  return (
    <article className="py-5 w-full h-fit">
      <h1 className="text-xl">Recomendaciones según tu estado</h1>
      <ul className="flex flex-col gap-3 py-5">
        {recommendations.map((recommendation, index) => (
          <li key={index}>
            <Card>
              <h2>{recommendation.title}</h2>
              <p>{recommendation.description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default Recommendations;
