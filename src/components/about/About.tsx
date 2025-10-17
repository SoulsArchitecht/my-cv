import React from 'react';
import { getLocalizedText } from '../../utils/i18n';

interface AboutProps {
  lang: 'en' | 'ru';
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="about" className="section">
      <button className="to-top-btn" onClick={scrollToTop}>
        {getLocalizedText('to_top', lang)}
      </button>
      <h2>👤  {getLocalizedText('about_title', lang)}</h2>
      <p>{getLocalizedText('about_text', lang)}</p>
    </section>
  );
};

export default About;