import React from 'react';
import { getLocalizedText } from '../../utils/i18n';

interface HeaderProps {
  lang: 'en' | 'ru';
  onLangChange: (lang: 'en' | 'ru') => void;
  theme: 'light' | 'dark';
  onToggleTheme?: () => void;
}

const Header: React.FC<HeaderProps> = ({ lang, onLangChange, theme, onToggleTheme }) => {
  return (
    <header className="header">
      <div className="header-content">
        {/* Левая колонка: фото + имя + должность */}
        <div className="header-left">
          <div className="avatar-container">
            <img
              src="/avatar.jpg"
              alt="Serge Shibko"
              className="avatar"
            />
          </div>
          <h1 className="name" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {getLocalizedText('name', lang)}
          </h1>
          <h2 className="title">{getLocalizedText('title', lang)}</h2>
        </div>

        {/* Правая колонка: контакты + переключатель языков + ссылка на PDF */}
        <div className="header-right">
          <div className="contacts">
            <h3>{getLocalizedText('contact', lang)}</h3>
            <div className="contact-item">
              <span className="icon">📞</span>
              <a href={`tel:${getLocalizedText('phone', lang)}`} className="text">
                {getLocalizedText('phone', lang)}
              </a>
            </div>
            <div className="contact-item">
              <span className="icon">✉️</span>
              <a href={`mailto:${getLocalizedText('email', lang)}`} className="text">
                {getLocalizedText('email', lang)}
              </a>
            </div>
            <div className="contact-item">
              <span className="icon">💬</span>
              <a href={`https://t.me/${getLocalizedText('telegram', lang).replace('@', '')}`} className="text">
                {getLocalizedText('telegram', lang)}
              </a>
            </div>
            <div className="contact-item">
              <span className="icon">📄</span>
              <a href="/ResumeSShibko.pdf" className="text" target="_blank" rel="noopener noreferrer">
                {getLocalizedText('resume_pdf', lang)}
              </a>
            </div>
          </div>

          {/* Кнопка темы + переключатель языка */}
          <div className="header-controls">
            <button
              className="theme-toggle"
              onClick={() => onToggleTheme?.()}
              aria-label={theme === 'light' ? 'Переключить на тёмную тему' : 'Переключить на светлую тему'}
              title={theme === 'light' ? 'Переключить на тёмную тему' : 'Переключить на светлую тему'}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <div className="lang-switcher">
              <button
                onClick={() => onLangChange('en')}
                aria-label="Переключить на английский язык"
                title="Переключить на английский язык"
              >
                🇬🇧 EN
              </button>
              <button
                onClick={() => onLangChange('ru')}
                aria-label="Переключить на русский язык"
                title="Переключить на русский язык"
              >
                🇷🇺 RU
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;