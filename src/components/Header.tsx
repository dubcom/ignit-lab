import { List, X } from "phosphor-react";
import { Link } from 'react-router-dom';
import { Logo } from "./Logo";

interface HeaderProps {
  onSidebarOpened(): any;
  sidebarOpened: boolean;
}

export function Header(props: HeaderProps) {

 
  
  return (
    <header className="w-full py-5 flex flex-row p-8  justify-between bg-gray-700 border-b border-gray-600 px-5 lg:px-0 mr-8">
      
      <div className="ml-8 mr-8 max-w-[1199px]"><Link to="/" ><Logo/></Link> </div>
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
