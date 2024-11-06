import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export const FormsContext = createContext();

function FormsContextProvider({ children }) {
  const [fitnessData, setFitnessData] = useLocalStorage("fitnessData", {});
  const [mentalHealthData, setMentalHealthData] = useLocalStorage(
    "mentalHealthData",
    {}
  );
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/formulario-fisico") {
      navigate("/perfil-fisico");
    }
  }, [fitnessData]);

  useEffect(() => {
    if (location.pathname === "/formulario-mental") {
      navigate("/perfil-mental");
    }
  }, [mentalHealthData]);

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
