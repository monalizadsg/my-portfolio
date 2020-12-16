import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client";
import "./BlogPosts.scss";

const BlogPosts = () => {
  const [postsData, setPostsData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      slug,
    }`
      )
      .then((data) => setPostsData(data))
      .catch(console.error);
  }, []);

  return (
    <div className='blog-posts'>
      <h1 className='title'>Blog</h1>
      <p>
        Welcome to my digital garden! Here I will share about my web development
        journey, what I learned along the way and life in general.
      </p>
      <div className='posts-wrapper'>
        {postsData &&
          postsData.map((post, index) => (
            <Link
              to={"/" + post.slug.current}
              key={post.slug.current}
              className='link'
            >
              <span key={index}>
                <div className='post-title'>{post.title}</div>
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default BlogPosts;
