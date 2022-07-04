import { List, X } from "phosphor-react";
import { Link } from 'react-router-dom';
import { Logo } from "./Logo";

interface HeaderProps {
  onSidebarOpened(): any;
  sidebarOpened: boolean;
}

export function Header(props: HeaderProps) {

 
  
  return (
    <header className="w-full px-4 py-3 flex items-center justify-between bg-gray-700 border-b border-gray-600 lg:py-5 lg:justify-center">
      <div><Link to="/" ><Logo/></Link> </div>
     
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
