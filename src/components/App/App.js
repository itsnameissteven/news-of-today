import React, { useState, useEffect } from 'react';
import { getTopStories } from '../../utilities/APICalls';
import Stories from '../Stories/Stories';

const App = () => {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    getTopStories().then(data => setTopStories(data.results))
    console.log('run')
  }, [])

  return (
    <div className="App">
      <Stories topStories={topStories}/>
    </div>
  );
}

export default App;
