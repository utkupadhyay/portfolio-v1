import React, { useEffect, useState } from 'react';

import Badge from './components/badge/Badge';
import Navigation from './components/navigation/Navigation';
import PostThumbnail from './components/post-thumbnail/PostThumnail';
import SubscribeForm from './components/subscribe-form/SubscribeForm';

import './App.scss';
import { fetchAllBlogs } from './utils/fetchAllBlogPosts';

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
          {/* <h2>Want to connect with me?</h2> */}
          {/* <h2>
            Feel free to contact me at
            <span className="underline-container"> hello@utkupadhyay.com</span>
          </h2> */}
        </section>
        {/* <FooterMenu footerMenuData={footerMenuData} /> */}

        {/* <footer className="footer-container">
          <p className="footer-message">
            Made in India with blessings of Shree Ram{' '}
          </p>
        </footer> */}
        {/* <SubscribeForm
          placeholder="Email"
          submitButtonTxt="Subscribe"
        /> */}
      </main>
    </>
  );
};
export default App;
