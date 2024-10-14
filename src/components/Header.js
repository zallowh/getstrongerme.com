import React from 'react'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Logo from './Logo';
import '../home.css';

const Header = () => {
  return (
      <div className='max-w-full'>
        <header className='max-w-full p-0 m-0 flex justify-center'>
          <Logo width="100%" /> 
        </header>  
        
        <nav className="navbar flex " >
          <ul className="navbar-list">
            <li className="navbar-item ">
              <Link to="/email-marketing">Email Marketing</Link>
            </li>
            <li className="navbar-item">
              <Link to="/web-dev">Web Dev</Link>
            </li>
            <li className="navbar-item">
              <Link to="/google-ads">Google Ads/SEO</Link>
            </li>
            <li className="navbar-item">
              <Link to="/meta-ads">Meta Ads</Link>
            </li>
            <li className="navbar-item">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

      </div>

  );
};

export default Header;
