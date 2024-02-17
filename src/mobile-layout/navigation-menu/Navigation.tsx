import React from 'react';
import { Link } from 'react-router-dom';
import './MobNavigation.scss';
const MobNavigation = () => {
  return (
    <>
      <div className="mob-nav-container">
        <ul>
          <Link to="/">Home</Link>
          <Link to={`about`}>About</Link>
          <Link to={`blog`}>Blog</Link>
          <Link to={`resume`}>Resume</Link>
        </ul>
      </div>
    </>
  );
};
export default MobNavigation;
