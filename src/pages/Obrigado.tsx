import { useEffect, useState } from "react";

import { getAuth } from 'firebase/auth';



export function Obrigado() {
  const auth = getAuth();
  const [name, setName] = useState<string | null>();
  const [profilePic, setProfilePic] = useState<string | null>();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setName(user.displayName);
        setProfilePic(user.photoURL);
      }
    });
  }, []);



  return (

    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="items-center">
        <div className="items-center text-center pl-4">
          <h1 className="text-3xl font-bold"> {name} </h1>
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Obrigado pelo cadastro! Agora escolha um video <strong className="text-blue-500">para ver </strong> e aprender sobre <strong className="text-blue-500">marketing politico</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>


      </div>
    </div>

  );
}
