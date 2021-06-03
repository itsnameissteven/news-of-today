import React from 'react';

const DetailedArticle = ({ story }) => {
  return (
    !story ? <h1>Loading.....</h1> : 
      <article className="detailed-article">
        <img className="detailed-article__img" src={story.image?.url} alt={story.image?.caption}/>
        <h2 className="detailed-article__item">{story.title}</h2>
        <p className="detailed-article__item">{story.abstract}</p>
        <p className="detailed-article__item">{story.byline}</p>
        <p className="detailed-article__item">{story.publishedDate}</p>
        <a className="detailed-article__item" href={story.url}><button className="detailed-article__btn">Full Story</button></a>
      </article>
  )
}

export default DetailedArticle;
