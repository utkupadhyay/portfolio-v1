import React from 'react';
import { Link } from 'react-router-dom';

const FooterMenu = ({ footerMenuData }) => {
  console.log({ footerMenuData });
  return (
    <>
      <Link to={`about`}>About</Link>
      {footerMenuData?.map((menu: string) => {
        return <a href={`#`}>{menu}</a>;
      })}
    </>
  );
};
export default FooterMenu;
