import React, { useState, useEffect } from 'react';
import { getTopStories } from '../../utilities/APICalls';
import { cleanData } from '../../utilities/cleanData';
import Stories from '../Stories/Stories';

const App = () => {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    getTopStories().then(data => setTopStories(cleanData(data)))
    console.log('run')
  }, [])

  return (
    <div className="App">
      <Stories topStories={topStories}/>
    </div>
  );
}

export default App;
