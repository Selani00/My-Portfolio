import React from "react";

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
      logo: "src/assets/Languages_icons/c-.png",
      name: "C++",
    },
    {
      logo: "src/assets/Languages_icons/java.png",
      name: "Java",
    },
    {
      logo: "src/assets/Languages_icons/js.png",
      name: "JavaScript",
    },
    {
      logo: "src/assets/Languages_icons/c-sharp.png",
      name: "C#",
    },
    {
      logo: "src/assets/Languages_icons/python.png",
      name: "python",
    },
    {
      logo: "src/assets/Languages_icons/html-5.png",
      name: "HTML",
    },
    {
      logo: "src/assets/Languages_icons/css-3.png",
      name: "CSS",
    },
  ];

  const Framwork_Icon = [
    {
      logo: "src/assets/Languages_icons/React.png",
      name: "React",
    },
    {
      logo: "src/assets/Languages_icons/www.png",
      name: "ASP.NET",
    },
    {
      logo: "src/assets/Languages_icons/TailwindCSS.png",
      name: "Tailwind CSS",
    },
    {
      logo: "src/assets/Languages_icons/firebase.png",
      name: "Firebase",
    },
    {
      logo: "src/assets/Languages_icons/flutter.png",
      name: "Flutter",
    },
    
  ];

  return (
    <section id="skills" className="py-10 bg-blue1 relative">
      <div className="mt-1 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Languages</p>

        {/* <div
          className="flex items-center justify-center
     mt-12 gap-10 flex-wrap"
        >
          {Languages?.map((skills, i) => (
            <div
              key={i}
              className="border-2 border-cyan-600 group relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl "
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,154,170) ${skills.cont}%,#ddd ${skills.cont}%)`,
                }}
                className="w-16 h-16 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-14 h-14 bg-gray-900 rounded-full flex group-hover:text-cyan-600 items-center justify-center">
                  {skills.logo}
                </div>
              </div>
              <p className="text-xl mt-3">{skills.level}</p>
            </div>
          ))}
        </div> */}
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

        <p className="text-gray-400 mt-5 text-lg">Framworks</p>

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

{
  /* <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {Languages?.map((skills, i) => (
            <div
              key={i}
              className="border-2 border-cyan-600 group relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl "
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,154,170) ${skills.cont}%,#ddd ${skills.cont}%)`,
                }}
                className="w-16 h-16 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-14 h-14 bg-gray-900 rounded-full flex group-hover:text-cyan-600 items-center justify-center">
                  {skills.logo}
                </div>
              </div>
              <p className="text-xl mt-3">{skills.level}</p>
            </div>
          ))}
        </div> */
}
