import React from "react";
import { FaJava } from "react-icons/fa6";


const Skills = () => {
  const skills = [
    {
      logo: <FaJava className="w-12 h-12" />,
      level: "Advance",
      cont: 86,
    },
    {
      logo: <FaJava className="w-12 h-12" />,
      level: "Advance",
      cont: 86,
    },
    {
      logo: <FaJava className="w-12 h-12" />,
      level: "Advance",
      cont: 86,
    },
    {
      logo: <FaJava className="w-12 h-12" />,
      level: "Advance",
      cont: 86,
    },
    {
      logo: <FaJava className="w-12 h-12" />,
      level: "Advance",
      cont: 86,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-blue1 relative">
      <div className="mt-1 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowladge</p>
       
          <div
            className="flex items-center justify-center
     mt-12 gap-10 flex-wrap"
          >
            {skills?.map((skills, i) => (
              <div
                key={i}
                className="border-2 border-cyan-600 group relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl "
              >
                <div
                  style={{
                    background: `conic-gradient(rgb(8,154,170) ${skills.cont}%,#ddd ${skills.cont}%)`,
                  }}
                  className="w-16 h-16 flex items-center 
        justify-center rounded-full"
                >
                  <div className="text-6xl w-14 h-14 bg-gray-900 rounded-full flex group-hover:text-cyan-600 items-center justify-center">
                    {skills.logo}
                  </div>
                </div>
                <p className="text-xl mt-3">{skills.level}</p>
              </div>
            ))}
          </div>
      
      </div>
    </section>
  );
};

export default Skills;
