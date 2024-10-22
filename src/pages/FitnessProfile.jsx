import Recommendations from "../components/Recommendations";
import StateEvolution from "../components/StateEvolution";
import LinkButton from "../components/ui/LinkButton";

function FitnessProfile() {
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center px-10 py-20">
      <LinkButton type="primary" href="/formulario-fisico">
        LLenar encuesta de estado físico
      </LinkButton>
      <StateEvolution type="physical" />
      <Recommendations />
    </div>
  );
}

export default FitnessProfile;
