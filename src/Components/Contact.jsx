import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fpq3fxi', 'template_utt58ni', form.current, {
        publicKey: 'SWWu3tOpP7CkfJisF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
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
        <p className="text-gray-400 mt-3 taxt-lg">Get in touch</p>
      </div>
      

      <div className="mt-16 flex md:flex-row flex-col gap-6 md:p-6 max-w-5xl bg-gray-800 p-6 rounded-lg mx-auto">
        <form className="flex flex-col flex-1 gap-5" ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Your name" name="user_name"></input>
          <input type="Email" placeholder="Your email Address" name="user_email"></input>
          <textarea placeholder="Your Message" rows={10} name="message"></textarea>
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
