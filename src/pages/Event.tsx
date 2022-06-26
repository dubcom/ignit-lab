import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { Obrigado } from "./Obrigado";


export function Event() {
  const { slug } = useParams<{ slug: string }>()
//get id subscriber
  const { id } = useParams<{ id: string }>()

  return (
    <div className=" bg-blur">
    
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        { slug
          ? <Video lessonSlug={slug} />
          : <div className="flex-1" > <Obrigado id={id}/></div>
        }
        <Sidebar />
      </main>
    </div>
    </div>
  );
}
