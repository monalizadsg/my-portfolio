import React from "react";
import Typed from "react-typed";
import { Typography } from "@material-ui/core";
import hero from "../images/hero.png";
import "./Home.scss";

const Home = () => {
  return (
    <div className='home'>
      <div className='hero'>
        <div className='description'>
          <Typography variant='h5'>Hi 👋🏽, I'm </Typography>
          <Typography variant='h1'>Monaliza Dasig.</Typography>
          <Typography variant='h3' className='typed-name'>
            <Typed
              strings={[
                "Front End Developer",
                "Life-long Learner",
                "Self-taught Developer",
              ]}
              typeSpeed={40}
              backSpeed={40}
            />
          </Typography>
          <Typography variant='h5'>
            I'm currently focused on React to build websites.
          </Typography>
        </div>
        <div className='image-wrapper'>
          <img src={hero} alt='hero art' className='image' />
        </div>
      </div>
      <div className='about'>
        <h2>About</h2>
        <p>
          I'm a self-taught developer. I started learning HTML, CSS and
          Javascript. And now, I'm currently learning React. I'm very passionate
          about learning and coding has been playing a huge part of my daily
          life for the past few months. I'm self-driven person who enjoys
          building apps and websites, and I quickly learn by doing which took me
          out of my comfort zone.
        </p>
        <p>
          I'm fascinated with technology as there is so much to learn new things
          every day. Along my learning journey, I was able to train myself
          consistently and pushing my own limits to discover ways how to solve a
          problem. I firmly believe that practice is the key to become better at
          something. I always enjoy learning new things and coding keeps me
          uncomfortable but it is the only way to learn and grow.
        </p>
      </div>
      <div className='contact'>
        <h2>Contact Me</h2>
        <p>Get in touch with me through these contacts:</p>
        <div className='contact-details'>
          <div className='detail'>
            <h3>Contact number</h3>
            <p>+63 9277912637</p>
          </div>
          <div className='detail'>
            <h3>Email Address</h3>
            <p>monalizadasig@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
