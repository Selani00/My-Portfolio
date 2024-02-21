import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Project = () => {
  const ProjectList = [
    {
      title: "Movie App",
      discription: "A movie app built using react and tailwindcss",
      image: project1,
      gitLink: "https://github.com/",
      demo: "https://github.com/",
    },
    {
      title: "Movie App",
      discription: "A movie app built using react and tailwindcss",
      image: project2,
      gitLink: "https://github.com/",
      demo: "https://github.com/",
    },
    {
      title: "Movie App",
      discription: "A movie app built using react and tailwindcss",
      image: project1,
      gitLink: "https://github.com/",
      demo: "https://github.com/",
    },
    {
      title: "Movie App",
      discription: "A movie app built using react and tailwindcss",
      image: project1,
      gitLink: "https://github.com/",
      demo: "https://github.com/",
    },
    {
      title: "Movie App",
      discription: "A movie app built using react and tailwindcss",
      image: project1,
      gitLink: "https://github.com/",
      demo: "https://github.com/",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex md:flex-col-3 flex-col-1 mx-auto items-center relative">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[100%] lg:max-w-[80%]"
        >
          {ProjectList.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                <img src={item.image} alt="" className="rounded-lg" />
                <h3 className="text-xl my-4">{item.title}</h3>
                <h3 className="text-lg my-4">{item.discription}</h3>
                <div className="flex gap-3">
                  <a
                    href={item.gitLink}
                    className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                  >
                    GitLink
                  </a>
                  <a
                    href={item.demo}
                    className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;

{
  /* <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                <img src={project1} alt="" className="rounded-lg" />
                <h3 className="text-xl my-4">Movie appp</h3>
                <div className="flex gap-3">
                  <a
                    href=""
                    className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                  >
                    Github
                  </a>
                  <a
                    href=""
                    className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                  >
                    Demo
                  </a>
                </div>
              </div> */
}
