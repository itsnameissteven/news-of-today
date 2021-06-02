import React from 'react';
import { Link } from 'react-router-dom';

const DetailedArticle = ({ story }) => {
  return (
    !story ? <h1>Loading.....</h1> : 
      <article className="detailed-article">
        <img src={story.image?.url} alt={story.image?.caption}/>
        <h2>{story.title}</h2>
        <p>{story.abstract}</p>
        <p>{story.byline}</p>
        <p>{story.publishedDate}</p>
        <a href={story.url}><button>Full Story</button></a>
      </article>
  )
}

export default DetailedArticle;
