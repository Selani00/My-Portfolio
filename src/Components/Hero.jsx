import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Profile from "../assets/Profile_1.png";

import SociaMediaIcons from "../Items/SocialMediaIcons";

const Hero = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-5 px-10"
    >
      {/*Image Section.Image is in top in small size screens so we need to create it first */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          // This style will create a frame behind the profile
          <div
            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:rounded-t-[400px] before:w-full before:max-w-[400px]
                before:h-full before:border-2 before:border-gray-200 before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter transition duration-500 z-10 w-full max-w-[400px] md:max-w-[400px] rounded-t-[400px]"
              src={Profile}
            />
          </div>
        ) : (
          //for the small size screen
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[400px]"
            src={Profile}
          />
        )}
      </div>

      {/* Main section     */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="md:text-4xl text-2xl z-10 text-center md:text-left font-semibold">
            Hi, I'm <br />
          </h1>
          <h1 className="md:text-6xl text-4xl font-bold text-center sm:text-start">
            <span className="xs:relative text-red  xs:font-semibold z-20">
              Selani Didulani
            </span>
          </h1>

          <p className="mt-10 mb-7 md:text-lg text-base text-center md:text-start">
            I'm a Computer Engineering undegraduate who welcome challenges and
            architect solutions.I'm passionate about Web Application development , Front end development ,
            mobile application development , AI/ML projects and UI/UX design. Also, I'm a fast
            learner and a team player who is always eager to learn new
            technologies and work with new people.
          </p>

          <a href="#contact">
            <button className=" text-xl font-semibold text-white md:mx-0 mx-auto rounded-full py-2 px-6 flex items-center gap-2 transition-all duration-300 bg-red hover:-translate-y-2 mt-10 ">
              Contact me
            </button>
          </a>
        </motion.div>

        <motion.div
          className="flex mt-3 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SociaMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
