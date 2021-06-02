import React from 'react';

const Article = ({ title, img, alt }) => {
  return (
    <article className="article">
      <img className="article__img" src={img} alt={alt}/>
      <div className="article__content">
        <h3>{title}</h3>
      </div>
    </article>
  )
}

export default Article;