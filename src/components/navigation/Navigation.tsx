import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  const fileUrl = 'https://fugwdppuipartgpmhwlk.supabase.co/storage/v1/object/sign/portfolio-v1-storage/resume/Resume.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8tdjEtc3RvcmFnZS9yZXN1bWUvUmVzdW1lLnBkZiIsImlhdCI6MTcwODI4NDYzMywiZXhwIjo0ODYxODg0NjMzfQ.oUcUmgUtBN7hRVad5zfR8oE8Zr3VoMEreVCx7XQjFnQ&t=2024-02-18T19%3A30%3A33.391Z';

  const downloadFile = () => {
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Resume.pdf';
    a.click();
  };


  return (
    <>
      <ul className="navigation-container">
        <Link to="/">Home</Link>
        {/* <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link> */}
        <a href='https://utkupadhyay.notion.site/utkupadhyay/System-Design-3dbfc6e02f40401e9b74f25696f6bc95' target='blank'>Learn</a>
        <span onClick={downloadFile}>Resume</span>
      </ul>
    </>
  );
};
export default Navigation;
