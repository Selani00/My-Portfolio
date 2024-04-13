import React from "react";

import c from "../assets/Languages_icons/c-.png"
import java from "../assets/Languages_icons/java.png"
import javascript from "../assets/Languages_icons/js.png"
import cc from "../assets/Languages_icons/c-sharp.png"
import python from "../assets/Languages_icons/python.png"
import NextJs from "../assets/Languages_icons/nextjs1.jpg";
import TypeScript from "../assets/Languages_icons/typescript.png";

import react from "../assets/Languages_icons/React.png";
import asp from "../assets/Languages_icons/www.png";
import tailwind from "../assets/Languages_icons/TailwindCSS.png";
import firebase from "../assets/Languages_icons/firebase.png";
import flutter from "../assets/Languages_icons/flutter.png";

const Skills = () => {
  // const Languages = [
  //   {
  //     logo: <FaJava className="w-12 h-12" />,
  //     level: "Advance",
  //     cont: 86,
  //   },
  //   {
  //     logo: <FaJava className="w-12 h-12" />,
  //     level: "Advance",
  //     cont: 86,
  //   },
  //   {
  //     logo: <FaJava className="w-12 h-12" />,
  //     level: "Advance",
  //     cont: 86,
  //   },
  //   {
  //     logo: <FaJava className="w-12 h-12" />,
  //     level: "Advance",
  //     cont: 86,
  //   },
  //   {
  //     logo: <FaJava className="w-12 h-12" />,
  //     level: "Advance",
  //     cont: 86,
  //   },
  // ];

  const Languages_icon = [
    {
      logo: c,
      name: "C++",
    },
    {
      logo: java,
      name: "Java",
    },
    {
      logo: TypeScript,
      name: "TypeScript",
    },
    
    {
      logo: javascript,
      name: "JavaScript",
    },
    {
      logo: cc,
      name: "C#",
    },
    {
      logo: python,
      name: "python",
    },

  ];

  const Framwork_Icon = [
    {
      logo: react,
      name: "React",
    },
    {
      logo: asp,
      name: "ASP.NET",
    },
    {
      logo: NextJs,
      name: "NextJs",
    },
    {
      logo: tailwind,
      name: "Tailwind CSS",
    },
    {
      logo: firebase,
      name: "Firebase",
    },
    {
      logo: flutter,
      name: "Flutter",
    },
    
  ];

  return (
    <section id="skills" className="py-10 bg-blue1 relative">
      <div className="mt-1 text-gray-100 text-center">
        <h3 className="md:text-4xl text-3xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-200 mt-3 md:text-xl text-base tracking-wide font-bold mb-7">Languages</p>

        
        <div className="flex items-center justify-center mt-12 gap-10 md:gap-20 flex-wrap mx-10">
          {Languages_icon?.map((Languages, i) => (
            <div>
              <img
                src={Languages.logo}
                alt="c_icon"
                className="w-16 h-16 hover:scale-95 transition-all duration-300 cursor-pointer"
              />
              <p className="text-base mt-1">{Languages.name}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-200 mt-10 md:text-xl text-base tracking-wide font-bold mb-7 ">Framworks</p>

        <div className="flex items-center justify-center mt-12  gap-10 md:gap-20 flex-wrap">
          {Framwork_Icon?.map((Framworks, i) => (
            <div>
              <img
                src={Framworks.logo}
                alt="c_icon"
                className="w-16 h-16 hover:scale-95 transition-all duration-300 cursor-pointer"
              />
              <p className="text-base mt-1">{Framworks.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

