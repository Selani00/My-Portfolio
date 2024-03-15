import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import Alison from "../assets/Project_images/Alison.png";
import DocMs from "../assets/Project_images/DocMS.png";
import mobile from "../assets/Project_images/Mobile.png";
import PRS from "../assets/Project_images/PRS.png";
import Spam from "../assets/Project_images/Spam.png";
import Portfolio from "../assets/Project_images/Portfolio.png"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Project = () => {
  const ProjectList = [
    {
      title: "Spam Email Detecter",
      discription: "Web Application using Flask and Machine Learning",
      image: Spam,
      gitLink: "https://github.com/Selani00/Spam-Email-Detection-ML",
      demo: "https://email-spam-detector-jyr7.onrender.com/",
    },
    {
      title: "Portfolio Website",
      discription: "My Portfolio Website using React and Tailwind CSS",
      image: Portfolio,
      gitLink: "https://github.com/Selani00/My-Portfolio",
      demo: "https://selani00.github.io/My-Portfolio/",
    },
    
    {
      title: "Travel Companion",
      discription: "Mobile Application using Flutter and Firebase",
      image: mobile,
      gitLink: "https://github.com/Selani00/Travel_Companion_s",
      demo: "https://www.linkedin.com/posts/selani-didulani_flutter-firebase-mvc-activity-7154882139463864320-sc8P?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "Document Management System",
      discription: "Web Application using ASP.Net and SQL Server",
      image: DocMs,
      gitLink: "https://github.com/Selani00/Document-Management-System",
      demo: "https://www.linkedin.com/posts/selani-didulani_reactjs-aspdotnet-sqlserver-activity-7136624080148971521-0S5P?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "Patient Registration System",
      discription: "Desktop Application using WPF and Sqlite",
      image: PRS,
      gitLink: "https://www.linkedin.com/posts/selani-didulani_wpf-mvvm-sqlite-activity-7089518674738352129-oCfL?utm_source=share&utm_medium=member_desktop",
      demo: "https://www.linkedin.com/posts/selani-didulani_wpf-mvvm-sqlite-activity-7089518674738352129-oCfL?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "Resturant Website",
      discription: "WebApplication using HTML and CSS",
      image: Alison,
      gitLink: "https://github.com/Selani00/Alison_Course_HTML-CSS",
      demo: "https://www.linkedin.com/posts/selani-didulani_html-css-frontend-activity-7134380396812652544-6jE7?utm_source=share&utm_medium=member_desktop",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center pt-10">
        <h3 className="md:text-4xl text-3xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-200 mt-3 md:text-xl text-base tracking-wide font-bold mb-7">My awesome works</p>
      </div>
      <br />
      <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto items-center group">
        {/* <Swiper
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
        > */}
          {ProjectList.map((item, i) => (
            // <SwiperSlide key={i}>
              <d key={i} className="h-fit w-full p-4 bg-slate-700 rounded-xl mb-10  group-hover:blur-sm hover:!blur-none">
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
              </d>
            // </SwiperSlide>
          ))}
        {/* </Swiper> */}
      </div>
    </section>
  );
};

export default Project;


