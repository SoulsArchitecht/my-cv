import React from 'react';
import { getLocalizedText } from '../../utils/i18n';

const Footer: React.FC<{ lang: 'en' | 'ru' }> = ({ lang }) => {
  return (
    <footer className="footer">
      <h3>{getLocalizedText('contact', lang)}</h3>
      <p>📞 {getLocalizedText('phone', lang)}</p>
      <p>✉️ {getLocalizedText('email', lang)}</p>
      <p>💬 {getLocalizedText('telegram', lang)}</p>
    </footer>
  );
};

export default Footer;