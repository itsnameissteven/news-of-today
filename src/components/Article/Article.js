import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ title, img, alt, byline, publishedDate, uri }) => {
  return (
      <Link to={`/${uri}`} className="article">
        <img className="article__img" src={img} alt={alt}/>
        <div className="article__content">
          <h3 className="article__content__item">{title}</h3>
          <p className="article__content__item">{byline}</p>
          <p className="article__content__item">{publishedDate}</p>
        </div>
      </Link>
  )
}

export default Article;