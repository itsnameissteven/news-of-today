import React from 'react';
import Article from '../Article/Article';

const Stories = ({ topStories }) => {
  const articles = topStories.map((story, i) => {
    return (
      <Article
        key={i}
        title={story.title}
        img={story.image.url}
        alt={story.image.caption}
      />
    )
  })

  return (
    <section className="stories">
      {articles}
    </section>
  )
}

export default Stories;