import React, { useEffect, useState } from 'react';

import Badge from './components/badge/Badge';
import { footerMenuData } from './components/footer-menu/footer-menu';
import FooterMenu from './components/footer-menu/FooterMenu';
import { data } from './components/latest-post/data';
import LatestPost from './components/latest-post/LatestPost';
import Navigation from './components/navigation/Navigation';
import SubscribeForm from './components/subscribe-form/SubscribeForm';
import supabase from './database/supabaseClient';

import './App.scss';

const App = () => {
  const [allBlogPosts, setAllBlogPosts] = useState<any>([]);
  const fetchAllBlogs = async () => {
    let { data, error } = await supabase.from('blogposts').select('*');
    if (data) {
      setAllBlogPosts(data);
    }
    if (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return (
    <>
      <Navigation />
      {/* <MobNavigation /> */}
      <main className="main-container">
        <div className="site-author-info-container">
          <h2>Hey, I 'm Utkarsh</h2>
          <Badge text="hello@utkupadhyay.com" />
        </div>
        <section className="intro-section-container">
          <p>
            I love building products that solve user problems. I am currently
            building enterprise level products for Honeywell India.
          </p>
          <p>
            I have a strong foundation in HTML, CSS, JavaScript, and React and
            have successfully delivered numerous projects that showcase my
            expertise in creating responsive and user-friendly interfaces. I am
            passionate about staying up-to-date with the latest trends and
            technologies in frontend development, ensuring that I consistently
            deliver cutting-edge solutions.
          </p>
        </section>
        <section className="latest-post-container">
          <h3>Latest Posts</h3>
          <LatestPost data={allBlogPosts} />
          <h2>Want to connect with me?</h2>
          <h2>
            Feel free to contact me at
            <span className="underline-container"> hello@utkupadhyay.com</span>
          </h2>
        </section>
        <FooterMenu footerMenuData={footerMenuData} />
        <SubscribeForm
          placeholder="Enter your email"
          submitButtonTxt="Subscribe"
        />
        <footer className="footer-container">
          <p className="footer-message">
            Made in India with blessings of Shree Ram{' '}
          </p>
        </footer>
      </main>
    </>
  );
};
export default App;
