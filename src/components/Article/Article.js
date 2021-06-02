import React from 'react';

const Article = ({ title, img, alt, byline, publishedDate }) => {
  return (
    <article className="article">
      <img className="article__img" src={img} alt={alt}/>
      <div className="article__content">
        <h3>{title}</h3>
        <p>{byline}</p>
        <p>{publishedDate}</p>
      </div>
    </article>
  )
}

export default Article;