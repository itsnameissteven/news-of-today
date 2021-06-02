import React, { useState, useEffect } from 'react';
import { getTopStories } from '../../utilities/APICalls';
import { cleanData } from '../../utilities/cleanData';
import Stories from '../Stories/Stories';
import { Switch, Route } from 'react-router-dom';
import DetailedArticle from '../DetailedArticle/DetailedArticle'

const App = () => {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    getTopStories().then(data => setTopStories(cleanData(data)))
  }, [])

  return (
    <div className="App">
     <Switch>
        <Route exact path="/" render={() => <Stories topStories={topStories}/> } />
        <Route exact path="/article/:id" render={({ match }) => {
          const { id } = match.params;
          const story = topStories.find(story => story.uri.includes(id));
          console.log(story);
          return <DetailedArticle story={story} />
        }} />
      </Switch>
    </div>
  );
}

export default App;
