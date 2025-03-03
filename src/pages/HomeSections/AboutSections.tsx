import React from 'react'
import { Sections } from '../../components/Sections'
import { useTheme } from '../../hooks/ThemeContextProvider'

const AboutSections: React.FC = () => {
    const {theme} = useTheme();

  return (
    <Sections className={`aboutSection ${theme === 'dark' ? 'dark' : 'light'}`} id='about'>
        <h2 className="about-heading">About</h2>
        <article className='about-content-wrapper'>
          <aside className='about-special'>
            <h2>Specialities</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quia eveniet numquam rem neque!</p>
          </aside>
          <aside className='about-cards'>
            <div className='about-card-design'>
              <i className="fa-solid fa-lightbulb" style={{ "--icon-color" : "#FB8C00" } as React.CSSProperties} aria-label="Product design icon"></i>
              <h3>Product design</h3>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tenetur iure neque fugiat excepturi.</span>
            </div>
            <div className='about-card-design'>
            <i className="fa-solid fa-pen-ruler" style={{"--icon-color": "blue"} as React.CSSProperties} aria-label="UI/UX design icon"></i>
            <h3>UI/UX design</h3>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tenetur iure neque fugiat excepturi.</span>
            </div>
            <div className='about-card-design'>
              <i className="fa-brands fa-intercom" style={{"--icon-color": "red"} as React.CSSProperties} aria-label="Interactive design icon"></i>
              <h3>Interactive design</h3>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tenetur iure neque fugiat excepturi.</span>
            </div>
          </aside>
        <div id="about-me">
          <h2>About Me</h2>
          <p>Hello! I'm John Doe, a passionate web developer with a love for creating dynamic and user-friendly web applications. I have a background in [Your Background, e.g., Computer Science, Graphic Design], and I enjoy turning ideas into reality through code.</p>
          <p>With experience in both front-end and back-end development, I strive to build applications that not only look great but also provide a seamless user experience. I am constantly learning and exploring new technologies to enhance my skills and stay updated with industry trends.</p>
          <p>In my free time, I enjoy [Your Hobbies or Interests, e.g., hiking, photography, or contributing to open-source projects]. I believe in the power of collaboration and am always open to new opportunities and challenges.</p>
        </div>
        </article>
    </Sections>
  )
}

export default AboutSections
