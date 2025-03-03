import React from 'react'
import { Sections } from '../../components/Sections'
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

import "./sectionsStyles.css";
import { useTheme } from '../../hooks/ThemeContextProvider';

const HomeSections: React.FC = () => {
  const {theme} = useTheme();

  return (
    <Sections className={`homeSection ${theme === 'dark' ? 'dark' : 'light'}`} id='home'>
      <div className='homesection-wrapper'>
        <article className='home-info'>
          <h1>
            Hi, i'm william <br />
            web Designer
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel magnam
            labore nostrum deleniti dolor placeat animi perferendis repudiandae
            illum, dicta quis eos esse corporis autem.
          </p>
          <aside className='home-hire-and-about'>
            <Link to={'#'}>
                <Button type='button' className='homeSection-Button hireMe'>Hire Me</Button>
            </Link>
            <Link to={'#'}>
                <Button type='button' className='homeSection-Button aboutMe'>About Me</Button>
            </Link>
          </aside>
        </article>
        <article>
          <aside className='homeSection-image-container'>
            <img src="#" alt="" />
          </aside>
        </article>
      </div>
    </Sections>
  );
}

export default HomeSections
