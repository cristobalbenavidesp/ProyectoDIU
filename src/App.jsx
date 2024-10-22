import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FitnessProfile from "./pages/FitnessProfile";
import MentalHealthProfile from "./pages/MentalHealthProfile";
import FitnessForm from "./pages/FitnessForm";
import MentalHealthForm from "./pages/MentalHealthForm";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <header></header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil-fisico" element={<FitnessProfile />} />
          <Route path="/perfil-mental" element={<MentalHealthProfile />} />
          <Route path="/formulario-fisico" element={<FitnessForm />} />
          <Route path="/formulario-mental" element={<MentalHealthForm />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
