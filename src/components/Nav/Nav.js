import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ toggle }) => {
  const sections = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'ny region', 'obituaries', 'opinion', 'politics', 'real estate', 'science', 'sports', 'sunday review', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world']

  const clickableLinks = sections.map((section, i) => {
    const trimmed = section.replace(' ', '')
    return (
      <NavLink 
        key={i}
        to={`/section/${trimmed}`} 
        className="nav-link" 
        activeClassName='nav-link--selected'
      >
        {section}
      </NavLink>
    )
    
  })
  return (
    <div className="nav-container" onClick={toggle}>
      <nav className="nav">
        {clickableLinks}
      </nav>
    </div>
    
  )
    
}

export default Nav;
