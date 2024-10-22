import { useState } from "react";
import LinkButton from "../components/ui/LinkButton";

function Home() {
  const [userName, setUserName] = useState("Matías Godoy");
  return (
    <div className="w-full h-full min-h-screen flex flex-col gap-5 items-center place-content-center ">
      <h1 className="text-4xl mb-10 text-center">¡Bienvenido, {userName}!</h1>
      <LinkButton type="primary" href="/perfil-fisico">
        Mi estado físico
      </LinkButton>
      <LinkButton type="primary" href="/perfil-mental">
        Mi salud mental
      </LinkButton>
    </div>
  );
}

export default Home;
