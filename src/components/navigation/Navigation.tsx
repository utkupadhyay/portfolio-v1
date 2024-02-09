import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
const Navigation = () => {
  return (
    <>
      <ul className="navigation-container">
        <Link to="/">Home</Link>
        <Link to={`about`}>About</Link>
        <Link to={`blog`}>Blog</Link>
        <Link to={`resume`}>Resume</Link>
      </ul>
    </>
  );
};
export default Navigation;
