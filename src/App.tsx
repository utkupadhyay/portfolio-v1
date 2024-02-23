import React, { useEffect, useState } from 'react';

import Badge from './components/badge/Badge';
import Navigation from './components/navigation/Navigation';
import PostThumbnail from './components/post-thumbnail/PostThumnail';
import avatar from './assets/IMG_2431.jpg'
import './App.scss';
import { fetchAllBlogs } from './utils/fetchAllBlogPosts';
import Avatar from './components/avatar/Avatar';

const App = () => {
  const [allBlogPosts, setAllBlogPosts] = useState<any>([]);
  const [errorFetchPosts, setErrorFetchPosts] = useState<any>({})
  useEffect(() => {
    fetchAllBlogs(setAllBlogPosts, setErrorFetchPosts);
  }, []);

  return (
    <>
      <Navigation />
      <main className="main-container">
        <Avatar size="110px" src={avatar} align="center" />
        <div className="site-author-info-container">
          <h2>Hey, I 'm Utkarsh</h2>
          <Badge text="hello@utkupadhyay.com" />
        </div>
        <section className="intro-section-container">
          <p>
            I love building products that solve user problems. I am currently
            building enterprise level products for Honeywell Technology Solutions, India
          </p>
          <p>
            I possess a solid foundation in HTML, CSS, JavaScript, and React, and I have successfully delivered multiple projects that highlight my proficiency in creating adaptable and user-friendly interfaces. I am deeply invested in keeping up with the most recent trends and technologies in frontend development, thereby ensuring that I consistently deliver state-of-the-art solutions.
          </p>
        </section>
        <section className="latest-post-container">
          <h3>Latest Posts</h3>
          <PostThumbnail data={allBlogPosts} error={errorFetchPosts} />
        </section>
      </main>
    </>
  );
};
export default App;
