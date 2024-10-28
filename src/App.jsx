import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FitnessProfile from "./pages/FitnessProfile";
import MentalHealthProfile from "./pages/MentalHealthProfile";
import FitnessForm from "./pages/FitnessForm";
import MentalHealthForm from "./pages/MentalHealthForm";
import { Toaster } from "react-hot-toast";
import FormsContextProvider from "./context/FormsContext";

function App() {
  return (
    <>
      <Toaster />
      <header></header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/perfil-fisico"
            element={
              <FormsContextProvider>
                <FitnessProfile />
              </FormsContextProvider>
            }
          />
          <Route
            path="/perfil-mental"
            element={
              <FormsContextProvider>
                <MentalHealthProfile />
              </FormsContextProvider>
            }
          />
          <Route
            path="/formulario-fisico"
            element={
              <FormsContextProvider>
                <FitnessForm />
              </FormsContextProvider>
            }
          />
          <Route
            path="/formulario-mental"
            element={
              <FormsContextProvider>
                <MentalHealthForm />
              </FormsContextProvider>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
