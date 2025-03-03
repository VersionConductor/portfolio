import React, { ReactNode, useContext, useEffect, useState } from 'react';
import ThemeContext from './themeContext';

interface ThemeContextProviderProps {
    children: ReactNode;
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>('light'); // Default Theme

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
        // Save the theme to localStorage whenever it is toggled
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setTheme('dark'); // Set the theme state to dark
        } else {
            setTheme('light'); // Set the theme state to light
        }
    }, []); // Run this effect only once on mount

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the ThemeContext
const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export { ThemeContextProvider, useTheme };
