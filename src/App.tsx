import React from 'react';
import Navigation from './components/navigation/Navigation';
import Badge from './components/badge/Badge';
import { data } from './components/latest-post/data';
import LatestPost from './components/latest-post/LatestPost';
import { footerMenuData } from './components/footer-menu/footer-menu';
import FooterMenu from './components/footer-menu/FooterMenu';
const App = () => {
  return (
    <>
      <Navigation />
      <div>
        <h2>Hey I 'm Utkarsh</h2>
        <Badge text="hello@utkupadhyay.com" />
      </div>
      <section>
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
      <section>
        <h3>Latest Posts</h3>
        <LatestPost data={data} />
        <h2>Want to connect with me?</h2>
        <h2>Feel free to contact me at hello@utkupadhyay.com</h2>
        <footer>
          <FooterMenu footerMenuData={footerMenuData} />
          {/* <SubscribeForm placeholder = 'Enter your email' submitButtonTxt = 'Subscribe'/> */}
        </footer>
      </section>
    </>
  );
};
export default App;
