import React, { useState, useEffect } from 'react';
import { getTopStories } from '../../utilities/APICalls';
import { cleanData } from '../../utilities/cleanData';
import Stories from '../Stories/Stories';
import { Switch, Route, Link } from 'react-router-dom';
import DetailedArticle from '../DetailedArticle/DetailedArticle';
import { IoIosHome } from 'react-icons/io';
import Nav from '../Nav/Nav'
import { HiMenuAlt3 } from 'react-icons/hi'

const App = () => {
  const [topStories, setTopStories] = useState([]);
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  useEffect(() => {
    getTopStories().then(data => setTopStories(cleanData(data)))
  }, [])

  return (
    <div className="App">
      <header className="header">
        <Route path="/" render={({match}) => {
          return !match.isExact && <Link to="/"><IoIosHome className="home-button" tabIndex='0'/></Link> 
        }} />
        <h1>News of Today</h1>
        <HiMenuAlt3 className='hamburger' onClick={() => setMenuIsOpen(!menuIsOpen)} tabIndex='0'/>
      </header>
      {menuIsOpen && <Nav toggle={() => setMenuIsOpen(!menuIsOpen)}/>}
      <Switch>
        <Route exact path="/" render={() => <Stories topStories={topStories}/> } />
        <Route exact path="/article/:id" render={({ match }) => {
          const story = topStories.find(story => story.uri.includes(match.params.id));
          return <DetailedArticle story={story} />
        }} />
      </Switch>
    </div>
  );
}

export default App;
