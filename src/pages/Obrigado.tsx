import { gql, useQuery } from "@apollo/client";
import { Logo } from "../components/Logo";


const id = "cl4t2ei79k1eu0bkgugjne3sk";

const GET_SUBSCRIBER = gql`
 query GetSubscriber ( $id: String){
  subscriber(where: {id: $id}) {
    name
    id
  }
}
`

interface  SubscribeProps {
    id: string;
    name: string;
  } 
export function Obrigado(props: SubscribeProps) {
 // get the id subscriber
 const { data } = useQuery<SubscribeProps>(GET_SUBSCRIBER, {
  variables: {
    id: props.id,
    name: props.name,
  }
});
console.log(data);

  return (
    
    <div className="bg-blur bg-cover flex flex-col items-center">
      <div className="w-full flex items-center justify-between mt-20 mx-auto">
        <div className=" text-center">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com  <strong className="text-blue-500">React JS</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        
      </div>
    </div>
    
  );
}
