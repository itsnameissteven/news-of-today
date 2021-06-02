import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ title, img, alt, byline, publishedDate, uri }) => {
  return (
      <Link to={`/${uri}`} className="article">
        <img className="article__img" src={img} alt={alt}/>
        <div className="article__content">
          <h3>{title}</h3>
          <p>{byline}</p>
          <p>{publishedDate}</p>
        </div>
      </Link>
  )
}

export default Article;