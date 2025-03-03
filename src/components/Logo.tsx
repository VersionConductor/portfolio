import React from 'react';
import { navLogo } from '../assets';
import { NavLink } from 'react-router-dom';

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string; // Optional className prop
  URL: string
}

const Logo: React.FC<LogoProps> = ({ className, URL, ...props }) => {
  return (
    <NavLink to={URL}>
      <img className={className} src={navLogo} alt="Nav Logo" {...props} />
    </NavLink>
  );
};

export default Logo;

