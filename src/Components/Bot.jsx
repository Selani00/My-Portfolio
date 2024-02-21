import React from "react";
import { IoIosChatbubbles } from "react-icons/io";
import { Link } from "react-scroll";

const Bot = () => {
  return (
    <div  className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-4xl bg-cyan-600 w-16 h-16 flex items-center 
    justify-center rounded-full animate-bounce"
    >
      <Link to="contact" smooth={true} duration={300}>
        <IoIosChatbubbles />
      </Link>
        
    </div>
    
  );
};

export default Bot;