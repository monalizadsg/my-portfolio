import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='social-icons'>
        <GitHubIcon className='icon' />
        <LinkedInIcon className='icon' />
      </div>
      <p>
        Coded with <span className='heart-emoji'>❤ </span>by
        <strong> Monaliza Dasig</strong>.
      </p>
    </div>
  );
};

export default Footer;
