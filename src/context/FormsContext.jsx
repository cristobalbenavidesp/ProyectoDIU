import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const FormsContext = createContext();

function FormsContextProvider({ children }) {
  const [fitnessData, setFitnessData] = useLocalStorage("fitnessData", {});
  const [mentalHealthData, setMentalHealthData] = useLocalStorage(
    "mentalHealthData",
    {}
  );

  const getCurrentDate = () => {
    const today = new Date();
    const formattedToday = Intl.DateTimeFormat("es-ES").format(today);

    return formattedToday;
  };

  const saveFitnessScore = (score) => {
    setFitnessData({ ...fitnessData, [getCurrentDate()]: score });
  };

  const saveMentalHealthScore = (score) => {
    setMentalHealthData({ ...mentalHealthData, [getCurrentDate()]: score });
  };

  return (
    <FormsContext.Provider
      value={{
        fitnessData,
        mentalHealthData,
        saveFitnessScore,
        saveMentalHealthScore,
      }}
    >
      {children}
    </FormsContext.Provider>
  );
}

export default FormsContextProvider;
