import React from 'react';
import { getLocalizedText } from '../../utils/i18n';

interface NavigationProps {
  lang: 'en' | 'ru';
}

const Navigation: React.FC<NavigationProps> = ({ lang }) => {
  return (
    <nav className="navigation">
      <ul>
        <li><a href="#about">👤 {getLocalizedText('about_title', lang)}</a></li>
        <li><a href="#skills">🛠️ {getLocalizedText('skills_title', lang)}</a></li>
        <li><a href="#experience">💼 {getLocalizedText('experience_title', lang)}</a></li>
        <li><a href="#education">🎓 {getLocalizedText('education_title', lang)}</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;