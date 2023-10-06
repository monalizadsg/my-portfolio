import React from "react";
import Typed from "react-typed";
import { Typography, Grid } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import {
  hero,
  css,
  html,
  javascript,
  materialui,
  sass,
  reactjs,
  firebase,
} from "../images/index";
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
        </div>
        <div className='image-wrapper'>
          <img src={hero} alt='hero art' className='image' />
        </div>
      </div>
      <main>
        <article className='about'>
          <section className='card'>
            <div>
              <h2 className='heading'>About</h2>
            </div>
            <p>
              I previously worked as a front-end developer at{" "}
              <a href='https://www.spce.com/'>SPCE</a>, a digital platform
              that serves as a defined space for B2B deals. My responsibilities include converting design layouts
              into code, implementing mobile responsive designs, and integrating
              back-end and third-party APIs.
            </p>
    
            <p>
              Extremely motivated to constantly learn, develop my skills and grow professionally. 
              I'm fascinated with technology as it offers endless opportunities for learning 
              something new every day. I firmly believe that practice is the key to
              become better at something. Through consistent learning and pushing my own limits,
              I've honed my ability to find innovative solutions to problems. 
            </p>

            <div>
              <p>Here's a few technologies I've been working with recently:</p>
              <div className='skill-container'>
                <Grid container spacing={2} className='grid'>
                  <Grid item xs={3} sm={2} md={1}>
                    <div className='skill-card'>
                      <div className='skill-title'>HTML5</div>
                      <div className='skill-logo'>
                        <img src={html} alt='icon' />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={3} sm={2} md={1}>
                    <div className='skill-card'>
                      <div className='skill-title'>CSS3</div>
                      <div className='skill-logo'>
                        <img src={css} alt='icon' />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={3} sm={2} md={1}>
                    <div className='skill-card'>
                      <div className='skill-title'>JavaScript</div>
                      <div className='skill-logo'>
                        <img src={javascript} alt='icon' />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={3} sm={2} md={1}>
                    <div className='skill-card'>
                      <div className='skill-title'>React</div>
                      <div className='skill-logo'>
                        <img src={reactjs} alt='icon' />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={3} sm={2} md={1}>
                    <div className='skill-card'>
                      <div className='skill-title'>Sass</div>
                      <div className='skill-logo'>
                        <img src={sass} alt='icon' />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={3} sm={2} md={1}>
                    <div className='skill-card'>
                      <div className='skill-title'>Material UI</div>
                      <div className='skill-logo'>
                        <img src={materialui} alt='icon' />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={3} sm={2} md={1}>
                    <div className='skill-card'>
                      <div className='skill-title'>Firebase</div>
                      <div className='skill-logo'>
                        <img src={firebase} alt='icon' />
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </section>
        </article>
        <article className='contact'>
          <section className='card'>
            <div>
              <h2 className='heading'>Contact Me</h2>
            </div>
            <p>Get in touch with me through email at monalizadasig@gmail.com</p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Home;
