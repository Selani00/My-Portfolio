import React from "react";
import { motion } from "framer-motion";
import about from "../assets/person_3.jpg";

const About = () => {
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>

        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className=" flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="flex-1  flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/11 w-11/12 max-w-sm">
              <img src={about} alt="" className="w-full rounded-lg" />
            </div>
          </div>

          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                tempore. Blanditiis a magnam eligendi, aspernatur totam atque
                rerum laudantium explicabo sequi eveniet dolorem amet quaerat
                tempore, eos aliquam deleniti sit?
              </p>
            </div>

            <a href="./src/assets/Selani_Didulani_CV.pdf" download>
              <button className="btn-primary mt-10 ">Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
