import React, { useEffect, useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CERTIFICATES", link: "#certificates" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white  text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-base font-Pacifico">
            S<span className="text-red">D</span>
          </h4>
        </div>
        <div
          className={` ${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium bg-white rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menuLink, index) => (
              <li key={index} className="px-6 font-semibold hover:text-red">
                <a href={menuLink?.link}>{menuLink?.name}</a>
              </li>
            ))}
          </ul>

          
        </div>

        <div 
          onClick={()=>setIsMenuToggled(!isMenuToggled)}
          className={`z-[999] ${isMenuToggled ? "text-gray-900 " : ""} m-5   text-3xl md:hidden`}>
          <FaBars/>

        </div>

        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-5 py-2 font-medium bg-white top-0 duration-300
                ${isMenuToggled ? "right-0 " : "right-[-100%] "}`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menuLink, index) => (
              <li onClick={()=>setIsMenuToggled(false)} key={index} className="px-6 hover:text-red font-semibold ">
                <a href={menuLink?.link}>{menuLink?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
