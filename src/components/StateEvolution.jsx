import { useContext } from "react";
import { Chart } from "react-google-charts";
import { FormsContext } from "../context/FormsContext";
function StateEvolution({ type }) {
  const { fitnessData, mentalHealthData } = useContext(FormsContext);

  const fitnessDataFormatted = [
    ["Fecha", "Puntaje"],
    ...Object.entries(fitnessData),
  ];
  const mentalHealthDataFormatted = [
    ["Fecha", "Puntaje"],
    ...Object.entries(mentalHealthData),
  ];

  const options = {
    chart: {
      title:
        type === "physical"
          ? "Evolución de tu estado físico"
          : "Evolución de tu salud mental",
    },
    curveType: "function",
    width: "100%",
    height: 300,
    legend: { position: "none" },
    titlePosition: "none",
  };

  const showChart =
    (type === "physical" && Object.entries(fitnessData).length > 0) ||
    (type === "mental" && Object.entries(mentalHealthData).length > 0);

  return (
    <article className="py-5 w-full ">
      {showChart && (
        <div className="w-full h-fit relative">
          <div className="w-full absolute top-10 z-30 flex items-center place-content-center gap-3">
            <div className="w-8 h-4 bg-blue-500"></div>
            <span>Puntaje</span>
          </div>
          <Chart
            chartType="Line"
            data={
              type === "physical"
                ? fitnessDataFormatted
                : mentalHealthDataFormatted
            }
            options={options}
          />
        </div>
      )}
    </article>
  );
}

export default StateEvolution;
