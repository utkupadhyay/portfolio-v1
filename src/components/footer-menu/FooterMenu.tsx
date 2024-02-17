import React from 'react';
import { Link } from 'react-router-dom';

import './FooterMenu.scss';

const FooterMenu = ({ footerMenuData }) => {
  return (
    <>
      <div className="footer-wrapper">
        {/* <Link to={`about`} className="footer-links">
          About
        </Link> */}
        {footerMenuData?.map((menu: string, i: number) => {
          return (
            <a href={`#`} key={i} className="footer-links">
              {menu}
            </a>
          );
        })}
      </div>
    </>
  );
};
export default FooterMenu;
