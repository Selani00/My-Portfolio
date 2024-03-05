import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Profile from "../assets/profile-image.png";
import SociaMediaIcons from "../Items/SocialMediaIcons";
import { TypeAnimation } from "react-type-animation";

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
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[400px]"
              src={Profile}
            />
          </div>
        ) : (
          //for the small size screen
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src={Profile}
          />
        )}
      </div>

      {/* Main section     */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32 ">
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
            Hi, It's me <br />
          </h1>
          <h1 className="md:text-5xl text-4xl font-bold ">
            Selani {""}
            <span className="xs:relative text-red  xs:font-semibold z-20">
              Didulani
            </span>
          </h1>

          <p className="mt-10 mb-7 md:text-base text-sm text-center md:text-start">
            I'm Computer Engineering undergraduate who is interested in
            front-end development, mobile app development, and UI/UX design.
          </p>

          <a href="#contact">
            <button className=" text-lg font-semibold text-white md:mx-0 mx-auto rounded-full py-2 px-6 flex items-center gap-2 transition-all duration-300 bg-red hover:-translate-y-2 mt-10 ">Contact me</button>
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