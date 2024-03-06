import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ubq9s3s', 'template_utt58ni', form.current, {
        publicKey: 'SWWu3tOpP7CkfJisF',
      })
      .then(
        () => {
          console.log('SUCCESS!');

          
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const contact_info = [
    {
      logo: <BiSolidMessageRoundedDetail className="w-8 h-8" />,
      text: "pkselani00@gmail.com",
    },
    {
      logo: <RiWhatsappFill  className="w-8 h-8" />,
      text: "071 149 8377",
    },
    {
      logo: <FaLocationDot className="w-8 h-8" />,
      text: "Kottawa",
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8 ">
        <h3 className="md:text-4xl text-3xl">
          Contact <span className=" text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-200 my-3 md:text-xl text-base tracking-wide font-bold mb-10">Get in touch</p>
      </div>
      

      <div className="mt-16 flex md:flex-row flex-col gap-6 md:p-6 max-w-5xl bg-gray-800 p-6 rounded-lg mx-auto">
        <form className="flex flex-col flex-1 gap-5" ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Your name" name="from_name" required></input>
          <input type="email" placeholder="Your email Address" name="from_email" required></input>
          <textarea type="text" placeholder="Your Message" rows={10} name="message" required></textarea>
          <button className="btn-primary w-fit" type="submit" value="Send">Send Message</button>
        </form>
        <div className="flex flex-col gap-7">

          {contact_info.map((info, i) => (
            <div className="flex gap-4 w-fit items-center">
              <div className="min-w-[3.5rem] min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                
                {info.logo}
              </div>
              <p className="text-base">{info.text}</p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Contact;
