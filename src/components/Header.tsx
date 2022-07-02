import { getAuth, signOut } from 'firebase/auth';
import { List, X } from "phosphor-react";
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from "./Logo";

interface HeaderProps {
  onSidebarOpened(): any;
  sidebarOpened: boolean;
}

export function Header(props: HeaderProps) {


  const auth = getAuth();
  const navigate = useNavigate();
  function handleSignOut() {
    signOut(auth);
    navigate('/');
  }

  
  return (
    <header className="w-full py-5 flex flex-row  justify-between  bg-gray-700 border-b border-gray-600 px-5 lg:px-0 mr-8">
      <div><Link to="/" ><Logo/></Link> </div>
      <div className="items-center flex lg:hidden ">
      <button className="mt-4 mr-4 ml-4 p-8  bg-green-500 uppercase py-1 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50" 
        onClick={handleSignOut}> Sair </button>
        </div>
      <div className="lg:hidden flex flex-row items-center">
       
        {!props.sidebarOpened ? ( 
          
          <List 
            size={40} 
            className="right-1 hover:cursor-pointer text-green-400"
            onClick={props.onSidebarOpened}
          />
        ) : (
          <X 
            size={40} 
            className="right-1 hover:cursor-pointer text-gray-200"
            onClick={props.onSidebarOpened}
          />
        )}
       
      
      </div>
      
    </header>
  )
}
