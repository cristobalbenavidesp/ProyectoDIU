import Recommendations from "../components/Recommendations";
import StateEvolution from "../components/StateEvolution";
import LinkButton from "../components/ui/LinkButton";

function MentalHealthProfile() {
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center px-10 py-20">
      <LinkButton type="primary" href="/formulario-mental">
        LLenar encuesta de salud mental
      </LinkButton>
      <StateEvolution type="mental" />
      <Recommendations />
    </div>
  );
}

export default MentalHealthProfile;
