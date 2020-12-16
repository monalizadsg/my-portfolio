import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Switch, Route } from "react-router-dom";
import Projects from "./../components/Projects";
import Home from "../components/Home";
import BlogPosts from "../components/blogposts/BlogPosts";
import Post from "../components/blogposts/Post";
import "./Main.scss";

const Main = () => {
  return (
    <div className='main-container'>
      <Header />
      <div className='content'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/blog' component={BlogPosts} />
          <Route path='/:slug' component={Post} />
          <Route path='/projects' component={Projects} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
