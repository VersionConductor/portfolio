import React from 'react'
import { Sections } from '../../components/Sections'
import { useTheme } from '../../hooks/ThemeContextProvider'

const SkillsSectio: React.FC = () => {
    const {theme} = useTheme();

  return (
    <Sections className={`skillsSection ${theme === 'dark' ? 'dark' : 'light'}`} id="skills">
      <div id="skills">
        <h2>Skills</h2>
        <article className="skills-category-continer">
          <div className="skill-category">
              <h3>Web Development</h3>
              <ul>
                  <li>HTML5 & CSS3</li>
                  <li>JavaScript (React, Vue.js)</li>
                  <li>Node.js & Express</li>
              </ul>
          </div>
          <div className="skill-category">
              <h3>Design</h3>
              <ul>
                  <li>UI/UX Design (Figma, Adobe XD)</li>
                  <li>Graphic Design (Photoshop, Illustrator)</li>
              </ul>
          </div>
          <div className="skill-category">
              <h3>Database Management</h3>
              <ul>
                  <li>SQL (MySQL, PostgreSQL)</li>
                  <li>NoSQL (MongoDB)</li>
              </ul>
          </div>
          <div className="skill-category">
              <h3>Version Control</h3>
              <ul>
                  <li>Git & GitHub</li>
              </ul>
          </div>
          <div className="skill-category">
              <h3>Other Skills</h3>
              <ul>
                  <li>Responsive Design</li>
                  <li>SEO Best Practices</li>
                  <li>Agile Methodologies</li>
              </ul>
          </div>
        </article>
      </div>
    </Sections>
  )
}

export default SkillsSectio
