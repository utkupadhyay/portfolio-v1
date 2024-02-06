import React from 'react';
import { Outlet, Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <>
      <ul>
        <Link to="/">Home</Link>
        <Link to={`about`}>About</Link>
        <Link to={`blog`}>Blog</Link>
        <Link to={`resume`}>Resume</Link>
      </ul>
    </>
  );
};
export default Navigation;
