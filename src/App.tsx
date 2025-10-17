import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import About from './components/about/About';
import Navigation from './components/navigation/Navigation';
import './App.css';

const App: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'ru'>('ru');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as 'en' | 'ru' | null;
    if (savedLang && (savedLang === 'en' || savedLang === 'ru')) {
      setLang(savedLang);
    }

    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme ?? 'dark';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleLangChange = (newLang: 'en' | 'ru') => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <div className="App">
      <div className="container">
        <Navigation lang={lang} />
        <main className="main-content">
          <Header
            lang={lang}
            onLangChange={handleLangChange}
            theme={theme}
            onToggleTheme={toggleTheme}
          />
          <About lang={lang} />
          <Skills lang={lang} />
          <Experience lang={lang} />
          <Education lang={lang} />
        </main>
      </div>
    </div>
  );
};

export default App;