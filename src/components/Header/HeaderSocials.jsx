import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/uche-nwaneti-80559428a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/NwanetiUche" target="_blank">
        <FaGithub />
      </a>
      <a href="https://wa.me/+2348130889711" target="_blank">
        <SiWhatsapp />
      </a>
    </div>
  );
};

export default HeaderSocials;
