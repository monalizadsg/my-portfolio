import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../client";
import "./Post.scss";
import Loading from "../Loading";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Post() {
  const [postData, setPostData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    setIsLoading(true);
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => {
        setPostData(data[0]);
        setIsLoading(false);
      })
      .catch(console.error);
  }, [slug]);

  if (!postData)
    return (
      <div className='loading'>
        <Loading isLoading={isLoading} />
      </div>
    );

  return (
    <div className='post'>
      <div className='title'>
        <h1>{postData.title}</h1>
      </div>
      <div className='image'>
        {postData.mainImage && (
          <img src={urlFor(postData.mainImage).width(500).url()} alt='post' />
        )}
      </div>

      <div className='body'>
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
      </div>
    </div>
  );
}
