import './App.css';
import { BsArrowLeftShort } from "react-icons/bs";
import {AiFillEnvironment} from "react-icons/ai"
import { useState } from 'react';
const App =() =>{

  const [open,setOpen] = useState(true)

  return (
   <div className="flex">
     <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ?"w-72" : "w-20"} duration-300 relative`}>
       <BsArrowLeftShort className={`bg-white text-dark-purple text-1xl 
      rounded-full absolute-right-3 top-9 border 
       border-dark-purple cursor-pointer ${!open && "rotate-180"}`}onClick={() => setOpen(!open)}/>
       <div className="inline-flex">
         <AiFillEnvironment className="bg-amber-300"/>
       </div>
       </div>
     <div className="p-7">
       <h1 className="text-2xl font-semibold">Home Page</h1> 
      </div>
   </div>
  );
}

export default App;
