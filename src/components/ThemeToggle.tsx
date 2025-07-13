import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import styles from "../styles/App.module.css";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme') as 'light' | 'dark';
    setTheme(current || 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className={styles.themeToggle}
      aria-label="Cambiar tema"
    >
      {theme === 'dark' ? <Sun size={30} /> : <Moon size={30} />}
    </button>
  );
};

export default ThemeToggle;