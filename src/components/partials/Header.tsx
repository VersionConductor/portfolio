import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '../../hooks/ThemeContextProvider';
import Logo from '../Logo'
import Anchor from '../Anchor'
import "./headerFooter.css";

const Header: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  const themeIcons = document.querySelectorAll(".changeThemeIcon");
  const header = useRef<HTMLElement | null>(null);

  const navbarToggle = () => {
    setToggle((prev)=> !prev)
  }

  useEffect(() => {
    if(themeIcons) {
      themeIcons.forEach(themeIcon => {
        if(themeIcon?.classList.contains('fa-moon')) {
          themeIcon?.classList.remove('fa-moon');
          themeIcon?.classList.add('fa-sun');
        } else {
          themeIcon?.classList.remove('fa-sun');
          themeIcon?.classList.add('fa-moon');
        }
      });
    }

  }, [theme]);

  return (
    <header ref={header} className={`header ${theme === 'dark' ? 'dark' : 'light'}`}>
      <nav>
        <div>
          <Logo URL={`/`} className='responsiveLogo' />
        </div>
        <article className='navBar-bar-darkmode'>
          <div className="nav-bars-btn" onClick={navbarToggle}>
            <i className='fa-solid fa-bars'></i>
          </div>
          <div className='website-theme-button' onClick={toggleTheme}>
            <i className="changeThemeIcon fa-solid fa-moon"></i>
          </div>
        </article>
        
        <div className={`navlink-items ${toggle ? "show":null}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <div className='website-theme-button responSive' onClick={toggleTheme}>
            <i className="changeThemeIcon fa-solid fa-moon"></i>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
