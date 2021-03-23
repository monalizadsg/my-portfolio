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
            <GitHubIcon className='icon' />
            <LinkedInIcon className='icon' />
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
              I'm an aspiring front-end developer. I'm very passionate about
              learning and coding has been playing a huge part in my daily life.
              I'm a self-driven person who enjoys building apps and websites,
              eager to learn new skills, and I quickly learn by doing which
              always takes me out of my comfort zone.
            </p>
            <p>
              I'm fascinated with technology as there is so much to learn new
              things every day. I firmly believe that practice is the key to
              become better at something. With that, I was able to train myself
              consistently and pushing my limits to discover ways how to solve a
              problem. I always enjoy learning new things and coding keeps
              challenging me and it offers a room of creativity which keeps me
              motivated.
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
            <p>Get in touch with me through these contacts:</p>
            <div className='contact-details'>
              <div className='detail'>
                <div>Contact number</div>
                <p>+63 9277912637</p>
              </div>
              <div className='detail'>
                <div>Email Address</div>
                <p>monalizadasig@gmail.com</p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Home;
