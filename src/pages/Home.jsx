import { useState } from "react";
import LinkButton from "../components/ui/LinkButton";

function Home() {
  const [userName, setUserName] = useState("Matías Godoy");
  return (
    <div className="relative w-full h-full min-h-screen">
      {/* Fondo con desenfoque */}
      <div className="absolute inset-0 bg-[url('/background.webp')] bg-cover bg-center filter blur-[1px] -z-10"></div>
      
      {/* Contenido */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center text-white px-4 relative z-10">
        <div className="p-28 text-center">
        <h1 className="text-4xl font-bold mb-8 text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.6)]">
            ¡Bienvenido, {userName}!
          </h1>
          <div className="flex flex-col gap-4 w-full max-w-xs items-center">
            <LinkButton
              type="primary"
              href="/perfil-fisico"
              className="transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl bg-blue-600 py-3 px-6 rounded-full text-white bg-opacity-90 backdrop-blur-md"
            >
              Mi estado físico
            </LinkButton>
            <LinkButton
              type="primary"
              href="/perfil-mental"
              className="transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl bg-blue-600 py-3 px-6 rounded-full text-white bg-opacity-90 backdrop-blur-md"
            >
              Mi salud mental
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;