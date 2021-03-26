import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='social-icons'>
        <a
          className='link'
          href='https://github.com/monalizadsg'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHubIcon className='icon' />
        </a>
        <a
          className='link'
          href='https://www.linkedin.com/in/monaliza-dasig/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LinkedInIcon className='icon' />
        </a>
      </div>
      <p>
        Coded with <span className='heart-emoji'>❤ </span>by
        <strong> Monaliza Dasig</strong>.
      </p>
    </div>
  );
};

export default Footer;
