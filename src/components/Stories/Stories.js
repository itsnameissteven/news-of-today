import React from 'react';
import Article from '../Article/Article';

const Stories = ({ topStories }) => {
  const articles = topStories.map((story, i) => {
    return (
      <Article
        key={i}
        abstract={story.abstract}
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