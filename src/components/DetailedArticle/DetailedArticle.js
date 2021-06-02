import React from 'react';
import Article from '../Article/Article'

const DetailedArticle = ({ story }) => {
  // const article = topStories.find(story => story.uri === id)
  return (
    <Article
        title={story.title}
        img={story.image?.url}
        alt={story.image?.caption}
        byline={story.byline}
        publishedDate={story.publishedDate}
        uri={story.uri}
      />
  )
}

export default DetailedArticle;
