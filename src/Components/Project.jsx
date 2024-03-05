import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import Alison from "../assets/Project_images/Alison.png";
import DocMs from "../assets/Project_images/DocMS.png";
import mobile from "../assets/Project_images/Mobile.png";
import PRS from "../assets/Project_images/PRS.png";
import Spam from "../assets/Project_images/Spam.png";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Project = () => {
  const ProjectList = [
    {
      title: "Portfolio Website",
      discription: "My Portfolio Website using React and Tailwind CSS",
      image: Spam,
      gitLink: "https://github.com/Selani00/My-Portfolio",
      demo: "https://email-spam-detector-jyr7.onrender.com/",
    },
    {
      title: "Spam Email Detecter",
      discription: "Web Application using Flask and Machine Learning",
      image: Spam,
      gitLink: "https://github.com/Selani00/Spam-Email-Detection-ML",
      demo: "https://email-spam-detector-jyr7.onrender.com/",
    },
    {
      title: "Travel Companion",
      discription: "Mobile Application using Flutter and Firebase",
      image: mobile,
      gitLink: "https://github.com/",
      demo: "https://github.com/Selani00/Travel_Companion_s",
    },
    {
      title: "Document Management System",
      discription: "Web Application using ASP.Net and SQL Server",
      image: DocMs,
      gitLink: "https://github.com/",
      demo: "https://github.com/",
    },
    {
      title: "Patient Registration System",
      discription: "Desktop Application using WPF and Sqlite",
      image: PRS,
      gitLink: "https://github.com/",
      demo: "https://github.com/",
    },
    {
      title: "Resturant Website",
      discription: "WebApplication using HTML and CSS",
      image: Alison,
      gitLink: "https://github.com/",
      demo: "https://github.com/",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="md:text-4xl text-3xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-200 mt-3 md:text-xl text-base tracking-wide font-bold mb-7">My awesome works</p>
      </div>
      <br />
      <div className="flex md:flex-col-3  mx-auto items-center relative ">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
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
          className="max-w-[100%] lg:max-w-[80%] "
        >
          {ProjectList.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="h-fit w-full p-4 bg-slate-700 rounded-xl mb-10 ">
                <img src={item.image} alt="" className="rounded-lg w-full h-40 object-cover" />
                <h3 className="text-xl my-4 font-bold">{item.title}</h3>
                <h3 className="text-base my-4">{item.discription}</h3>
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