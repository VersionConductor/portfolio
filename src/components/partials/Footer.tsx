import React from 'react'
import "./headerFooter.css";
import { useTheme } from '../../hooks/ThemeContextProvider';

const Footer: React.FC = () => {
  const {theme} = useTheme();

  return (
    <footer className={`footer ${theme === 'dark' ? 'dark':'light'}`}>
      <div className="footer-content">
        <p>&copy; 2023 John Doe. All rights reserved.</p>
        <ul className="social-links">
            <li><a href="https://github.com/yourusername" target="_blank">GitHub</a></li>
            <li><a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a></li>
            <li><a href="https://twitter.com/yourusername" target="_blank">Twitter</a></li>
        </ul>
    </div>
    </footer>
  )
}

export default Footer
