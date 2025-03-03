import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

interface CustomNavLinkProps extends React.HTMLProps<HTMLAnchorElement> {
    URL: string; // URL prop for the link
    className?: string; // Optional className prop
}

const Anchor: React.FC<CustomNavLinkProps> = ({ children, URL, className, ...props }) => {
    return (
        <RouterNavLink 
            to={URL} 
            className={({ isActive }) => isActive ? `${className} active` : className} 
            {...props}
        >
            {children}
        </RouterNavLink>
    );
}

export default Anchor;

