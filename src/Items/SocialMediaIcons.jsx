import { FaLinkedin, FaSquareGithub, FaHackerrank } from "react-icons/fa6";

const SocialMediaIcons = () => {
  return (
  
      <div className="flex justify-center md:justify-start my-8 gap-7 ">
        <a
          className="hover:scale-125 transition duration-500"
          href="https://www.linkedin.com/in/selani-didulani-1866a2227/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={32} />
        </a>

        <a
          className="hover:scale-125 transition duration-500"
          href="https://github.com/Selani00"
          target="_blank"
          rel="noreferrer"
        >
          <FaSquareGithub size={32} />
        </a>

        <a
          className="hover:scale-125 transition duration-500"
          href="https://www.hackerrank.com/profile/selani_didulani"
          target="_blank"
          rel="noreferrer"
        >
          <FaHackerrank size={32} />
        </a>
      </div>

      

      
 
  );
};

export default SocialMediaIcons;
