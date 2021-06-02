import React from 'react';

const Article = ({ abstract }) => {
  return (
    <article className="article">
      <h2>{abstract}</h2>
    </article>
  )
}

export default Article;