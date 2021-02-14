import React from "react";
import { Card, CardContent, Typography, Chip } from "@material-ui/core";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import "./Projects.scss";

const projects = [
  {
    id: 1,
    title: "HomeExpensify",
    imgUrl: "/assets/images/budgetapp.png",
    description:
      "An expense web application to track income and expenses. Manage your transactions, and set a budget by category and period.",
    languages: ["React", "Material UI", "SASS"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    imgUrl: "/assets/images/portfolio.png",
    description:
      "A personal portfolio website and blog to showcase my skills. Blog is powered by Sanity CMS.",
    languages: ["React", "Material UI", "SASS", "Sanity"],
  },
  {
    id: 3,
    title: "TeeShop",
    imgUrl: "/assets/images/teeshop.png",
    description:
      "A simple e-commerce web application that allows user to purchase, edit or remove items.",
    languages: ["React", "Material UI", "SASS", "Firebase"],
  },
];

const Projects = () => {
  return (
    <div className='projects'>
      {projects.map((project) => {
        return (
          <div
            key={project.id}
            className={`project-card ${project.id % 2 === 0 ? "left" : ""}`}
          >
            <Card className='image-wrapper'>
              <img src={project.imgUrl} alt='budget' className='image' />
            </Card>
            <Card className='project-details'>
              <CardContent>
                <Typography variant='h5' component='h2'>
                  {project.title}
                </Typography>
                <Typography variant='body2' component='p'>
                  {project.description}
                </Typography>
                <div className='languages'>
                  {project.languages.map((item) => {
                    return (
                      <Chip
                        key={item}
                        className='chip'
                        variant='outlined'
                        color='primary'
                        label={item}
                        size='small'
                      />
                    );
                  })}
                </div>
                <div className='link'>
                  <Link to='/'>
                    <GitHubIcon className='icon' />
                  </Link>
                  <Link to='/'>
                    <LanguageIcon className='icon' />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
