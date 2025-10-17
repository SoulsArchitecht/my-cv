import React from 'react';
import { getLocalizedText } from '../../utils/i18n';

const Experience: React.FC<{ lang: 'en' | 'ru' }> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="experience" className="section">
      <button className="to-top-btn" onClick={scrollToTop}>
        {getLocalizedText('to_top', lang)}
      </button>
      <h2>💼  {getLocalizedText('experience_title', lang)}</h2>

      <div className="job">
        <h3>{getLocalizedText('freelance', lang)}</h3>
        <p><em>{getLocalizedText('date_1', lang)}</em></p>
        {getLocalizedText('freelance.desc_1', lang)}
        <ul>
          <li>{getLocalizedText('freelance.desc_2', lang)}</li>
          <li>{getLocalizedText('freelance.desc_3', lang)}</li>
        </ul>
      </div>

      <div className="job">
        <h3>{getLocalizedText('web_dynamics', lang)}</h3>
        <p><em>{getLocalizedText('date_2', lang)}</em></p>
        <ul>
          <li>{getLocalizedText('web_dynamics.desc1', lang)}</li>
          <li>{getLocalizedText('web_dynamics.desc2', lang)}</li>
          <li>{getLocalizedText('web_dynamics.desc3', lang)}</li>
          <li>{getLocalizedText('web_dynamics.desc4', lang)}</li>
          <li>{getLocalizedText('web_dynamics.desc5', lang)}</li>
          <li>{getLocalizedText('web_dynamics.desc6', lang)}</li>
          <li>{getLocalizedText('web_dynamics.desc7', lang)}</li>
          <li>{getLocalizedText('web_dynamics.desc8', lang)}</li>     
          <li>{getLocalizedText('web_dynamics.desc9', lang)}</li>      
        </ul>
        <p>
          {getLocalizedText('web_dynamics.key_p', lang)}
        </p>
        <ul>
           <li>{getLocalizedText('web_dynamics.key_p.desc1', lang)}</li>
           <li>{getLocalizedText('web_dynamics.key_p.desc2', lang)}</li>
           <li>{getLocalizedText('web_dynamics.key_p.desc3', lang)}</li>
           <li>{getLocalizedText('web_dynamics.key_p.desc4', lang)}</li>
           <li>{getLocalizedText('web_dynamics.key_p.desc5', lang)}</li>
           <li>{getLocalizedText('web_dynamics.key_p.desc6', lang)}</li>
        </ul>
      </div>

      <div className="job">
        <h3>{getLocalizedText('open_source', lang)}</h3>
        <p><em>{getLocalizedText('date_3', lang)}</em></p>
        <ul>
          <li>{getLocalizedText('open_source.desc', lang)}</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;