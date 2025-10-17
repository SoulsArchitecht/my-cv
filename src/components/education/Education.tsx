import React from 'react';
import { getLocalizedText } from '../../utils/i18n';

const Education: React.FC<{ lang: 'en' | 'ru' }> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="education" className="section">
      <button className="to-top-btn" onClick={scrollToTop}>
        {getLocalizedText('to_top', lang)}
      </button>
      <h2>🎓  {getLocalizedText('education_title', lang)}</h2>
      <p><strong>{getLocalizedText('bachelor', lang)}</strong></p>
      <p>{getLocalizedText('university', lang)}</p>
      <p>{getLocalizedText('education_desc', lang)}</p>
    </section>
  );
};

export default Education;