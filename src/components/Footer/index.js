import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Solid from '@fortawesome/fontawesome-free-solid'
import * as Brands from '@fortawesome/free-brands-svg-icons'
import "./style.css";

const Footer = () => {
  return (
    <footer>

      <a href="https://github.com/hplive" target="_blank" >
        <FontAwesomeIcon className="spaceIcons" icon={Brands.faGithub} />
      </a>
      <a href="https://www.youtube.com/channel/UC58_7N1LLxAy3-3G-ABbeEA" target="_blank"      >
        <FontAwesomeIcon className="spaceIcons" icon={Brands.faYoutubeSquare} />
      </a>
      <a href="https://www.facebook.com/heldermrpereira" target="_blank">
      <FontAwesomeIcon className="spaceIcons" icon={Brands.faFacebook} />
      </a>
      <a
        href="https://www.linkedin.com/in/heldermrpereira/"
        target="_blank"
      >
         <FontAwesomeIcon className="spaceIcons" icon={Brands.faLinkedin} />
      </a>
      <a href="https://twitter.com/_helderpereira_" target="_blank">
      <FontAwesomeIcon className="spaceIcons" icon={Brands.faTwitter} />
      </a>
      <a href="https://instagram.com/heldermrpereira" target="_blank">
      <FontAwesomeIcon className="spaceIcons" icon={Brands.faInstagram} />
      </a>
    </footer>
  );
};

export default Footer;