import React, { useState, useEffect } from 'react';
import { getArticles } from '../../utilities/APICalls';
import { cleanData } from '../../utilities/cleanData';
import Stories from '../Stories/Stories';
import { Switch, Route, Link } from 'react-router-dom';
import DetailedArticle from '../DetailedArticle/DetailedArticle';
import { IoIosHome } from 'react-icons/io';
import Nav from '../Nav/Nav'
import { HiMenuAlt3 } from 'react-icons/hi'

const App = () => {
  const [topArticles, setTopArticles] = useState([]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [section, setSection] = useState('');
  const [sortedArticles, setSortedArticles] = useState([]);

  useEffect(() => {
    getArticles().then(data => setTopArticles(cleanData(data)));
  }, []);
  
  useEffect(() => {
    // const path = window.location.path  Use this option if the setTimeout in route is a code smell
    // if path.includes('/section') setSection with the key that follows
    section && getArticles(section).then(data => setSortedArticles(cleanData(data)));
  }, [section])

  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      setMenuIsOpen(!menuIsOpen);
    }
  }

  return (
    <div className="App">
      <header className="header">
        <Route path="/" render={({match}) => {
          return (
            !match.isExact && 
              <Link to="/" role="button" tabIndex='0' className="home-button">
                <IoIosHome  />
              </Link> 
          )
        }} />
        <h1>News of Today</h1>
        <HiMenuAlt3 
          className='hamburger' 
          onClick={() => setMenuIsOpen(!menuIsOpen)} 
          tabIndex='0'
          onKeyDown={handleKeyDown}  
        />
      </header>
      {menuIsOpen && <Nav toggle={() => setMenuIsOpen(!menuIsOpen)} />}
      <Switch>
        <Route exact path="/" render={() => <Stories articles={topArticles} /> } />
        <Route exact path="/article/:id" render={({ match }) => {
          const story = topArticles.find(story => story.uri.includes(match.params.id));
          const storyBySection = sortedArticles.find(story => story.uri.includes(match.params.id));
          return <DetailedArticle story={story ? story : storyBySection} />;
        }} />
        <Route exact path="/section/:section" render={({ match }) => {
          setTimeout(() => setSection(match.params.section), 0)
          return !sortedArticles.length ? <h1>loading...</h1> : <Stories articles={sortedArticles}/>
        }} />
      </Switch>
    </div>
  );
}

export default App;
