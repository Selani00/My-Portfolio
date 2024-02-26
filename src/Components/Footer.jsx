import React from "react";
import SociaMediaIcons from "../Items/SocialMediaIcons";

const Footer = () => {
  return (
    <div className="bg-gray-800 flex flex-col items-center justify-center">
      <div >
        <SociaMediaIcons style={{ margin: '5px' }}/>
      </div>

      <div className=" text-sm pt-1 pb-4 text-center text-white">
        © Copyright 2024 Selani Didulani | All Rights reserverd
      </div>
    </div>
  );
};

export default Footer;
