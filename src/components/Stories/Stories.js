import React, { useEffect } from 'react';
import Article from '../Article/Article';

const Stories = ({ articles}) => {
  const allArticles = articles.map((story, i) => {
    return (
      <Article
        key={i}
        title={story.title}
        img={story.image?.url}
        alt={story.image?.caption}
        byline={story.byline}
        publishedDate={story.publishedDate}
        uri={story.uri}
      />
    )
  })

  return (
    <section className="stories">
      {allArticles}
    </section>
  )
}

export default Stories;