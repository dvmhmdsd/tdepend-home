import { useEffect, useState } from 'react';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    root.classList.remove('light', 'dark');
    root.classList.add(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  return (
    <div data-theme={theme}>
      {typeof children === 'function' ? children({ theme, toggleTheme }) : children}
    </div>
  );
}
