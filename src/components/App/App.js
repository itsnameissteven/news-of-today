import React, { useState, useEffect } from 'react';
import { getTopStories } from '../../utilities/APICalls';
import { cleanData } from '../../utilities/cleanData';
import Stories from '../Stories/Stories';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    getTopStories().then(data => setTopStories(cleanData(data)))
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Stories topStories={topStories}/>} />
      </Switch>
    </div>
  );
}

export default App;
