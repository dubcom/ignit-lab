import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useCreateSubscriberMutation } from "../graphql/generated";

export interface ILoginPageProps { }

export function Subscribe<IAuthRouteProps>() {

  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);


    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {

        navigate('/event');
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    setAuthing(true);
    event.preventDefault();

    createSubscriber({
      variables: {
        name,
        email,
      }
    });

    navigate('/event')
  };


  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center p-4 overflow-hidden"> 
      <div className="w-full max-w-[1100px] flex flex-col lg:flex-row items-center justify-between mt-10 lg:mt-20 mx-auto">
        <div className="max-w-[640px] flex flex-col items-center lg:block">
          <Logo />

          <h1 className="mt-8 text-3xl lg:text-[2.5rem] leading-tight text-center lg:text-start">
            Construa uma <strong className="text-blue-500">campanha completa</strong>, do zero, com  <strong className="text-blue-500">sucesso</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed text-center lg:text-start">
            Em apenas uma semana você vai dominar na prática uma das melhores e mais utilizadas estratégias e com alta demanda para acessar as melhores oportunidades dessa eleição.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Digite seu e-mail"
              onChange={event => setEmail(event.target.value)}
            />

            <button
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-800 transition-colors disabled:opacity-50"
              type="submit"
            >
              Garantir minha vaga
            </button>
          </form>

          <div className="flex flex-col gap-2 w-full">
            <button disabled={authing} onClick={() => signInWithGoogle()}
              className="mt-4 bg-red-500 uppercase py-4 rounded font-bold text-sm hover:bg-red-700 transition-colors disabled:opacity-50"
              type="submit">
              Garantir com Google
            </button>
          </div>
          <div className="flex flex-col gap-2 w-full center mt-4 text-gray-300">
            <Link to="event/" className="hover:text-gray-50 text-center uppercase text-gray-500" > Entrar </ Link>
          </div>
        </div>
      </div>
      <img src="/image/code-mockup.png" alt="code" />
    </div>


  );
}