function StateEvolution({ type }) {
  return (
    <article className="py-5 w-full ">
      {type === "physical" && (
        <h1 className="text-xl"> Evolución de mi estado físico</h1>
      )}
      {type === "mental" && (
        <h1 className="text-xl">Evolución de mi salud mental</h1>
      )}
      <div className="w-full aspect-square bg-blue-500">
        <p>Aquí deberia ir el gráfico</p>
      </div>
    </article>
  );
}

export default StateEvolution;
