import React from "react";
import { motion } from "framer-motion";
import about from "../assets/person_3.jpg";

import UOR from "../assets/Educations/UOR.png";
import IHRA from "../assets/Educations/IHRA.png";
import Devi from "../assets/Educations/Devi.png";
import DVP from "../assets/Educations/DVP.png";

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
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className="text-justify leading-7 w-11/12">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Animi, tempore. Blanditiis a magnam eligendi, aspernatur totam
                  atque rerum laudantium explicabo sequi eveniet dolorem amet
                  quaerat tempore, eos aliquam deleniti sit?
                </p>

                <a href="./src/assets/Selani_Didulani_CV.pdf" download>
                  <button className="btn-primary mt-10 ">Download CV</button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        <p className="text-gray-400 my-3 text-lg">My Educations</p>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* Middle line */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>
              {/* left cards */}

              <div className="mt-6 sm:mt-0 sm:md-12">
                <div className="flex flex-col items-center sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                        variants={{
                          hidden: { opacity: 0, x: 50 },
                          visible: { opacity: 1, x: 0 },
                        }}
                      >
                        <div className="mt-5 bg-gray-800 p-4 rounded shadow group hover:bg-white cursor-pointer ease-in duration-150">
                          <h3 className="text-white text-start font-bold md-3 group-hover:text-deep-blue group-hover:font-[600] text-base mb-5">
                            B. Sc . Engineering(Hons) <br /> Computer
                            Engineering
                          </h3>

                          <ul className="text-gray-400 text-start text-sm group-hover:text-gray-800 group-hover:font-[500] leading-5">
                            <li>2021 - present</li>
                            <li>
                              Faculty of Engineering- University of Ruhuna
                            </li>
                            <li>SGPA-3.51-Fourth Semester</li>
                          </ul>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-white border-deep-blue border-4 w-12 h-12 absolute left-1/2 transform -translate-x-1/2
                  -translate-y-4 sm:translate-y-0 flex items-center justify-center z-10"
                  >
                    <figure>
                      <img src={UOR} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* right cards */}
              <div className="mt-6 sm:mt-0 sm:md-12">
                <div className="flex flex-col items-center sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
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
                        <div className="mt-5 bg-gray-800 p-4 rounded shadow group hover:bg-white cursor-pointer ease-in duration-150">
                          <h3 className="text-white text-start font-bold md-3 group-hover:text-deep-blue group-hover:font-[600] text-base mb-5">
                            Certificate Course in Computer Application
                          </h3>

                          <ul className="text-gray-400 text-start text-sm group-hover:text-gray-800 group-hover:font-[500] leading-5">
                            <li>2020</li>
                            <li>University of Colombo - IHRA</li>
                            <li>Merit Pass</li>
                          </ul>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-white border-deep-blue border-4 w-12 h-12 absolute left-1/2 transform -translate-x-1/2
                  -translate-y-4 sm:translate-y-0 flex items-center justify-center z-10"
                  >
                    <figure>
                      <img src={IHRA} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* left cards */}
              <div className="mt-6 sm:mt-0 sm:md-12">
                <div className="flex flex-col items-center sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                        variants={{
                          hidden: { opacity: 0, x: 50 },
                          visible: { opacity: 1, x: 0 },
                        }}
                      >
                        <div className="bg-gray-800 p-4 rounded shadow group hover:bg-white cursor-pointer ease-in duration-150">
                          <h3 className="text-white text-start font-bold md-3 group-hover:text-deep-blue group-hover:font-[600] text-base mb-5">
                            Advanced Level
                          </h3>

                          <ul className="text-gray-400 text-start text-sm group-hover:text-gray-800 group-hover:font-[500] leading-5">
                            <li>2017– 2019</li>
                            <li> Devi Balika Vidyalaya– Colombo 08</li>
                            <li>Physical science</li>
                          </ul>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-white border-deep-blue border-4 w-12 h-12 absolute left-1/2 transform -translate-x-1/2
                  -translate-y-4 sm:translate-y-0 flex items-center justify-center z-10"
                  >
                    <figure>
                      <img src={Devi} alt="" className="p-1" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* right cards */}
              <div className="mt-6 sm:mt-0 sm:md-12">
                <div className="flex flex-col items-center sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
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
                        <div className=" bg-gray-800 p-4 rounded shadow group hover:bg-white cursor-pointer ease-in duration-150">
                          <h3 className="text-white text-start font-bold md-3 group-hover:text-deep-blue group-hover:font-[600] text-base mb-5">
                            Ordinary Level
                          </h3>

                          <ul className="text-gray-400 text-start text-sm group-hover:text-gray-800 group-hover:font-[500] leading-5">
                            <li>2006-2018</li>
                            <li>Pannipitiya Dharmapala Vidayalaya</li>
                          </ul>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-white border-deep-blue border-4 w-12 h-12 absolute left-1/2 transform -translate-x-1/2
                  -translate-y-4 sm:translate-y-0 flex items-center justify-center z-10"
                  >
                    <figure>
                      <img src={DVP} alt="" className="p-1" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
