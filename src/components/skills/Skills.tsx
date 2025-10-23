import React from 'react';
import { getLocalizedText } from '../../utils/i18n';

const Skills: React.FC<{ lang: 'en' | 'ru' }> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="skills" className="section">
      <button className="to-top-btn" onClick={scrollToTop}>
        {getLocalizedText('to_top', lang)}
      </button>
      <h2>🛠️  {getLocalizedText('skills_title', lang)}</h2>
      <ul className="skills-list">
        <li>Professional Java: Java Core, JVM, Concurrency, Collections, Stream API</li>
        <li>Java Frameworks: Spring Boot, Spring Security, Spring WebFlux, AOP, Starters, REST</li>
        <li>DB: PostgreSQL, MySQL, H2, Redis, MongoDB + Advanced SQL + Liquibase/Flyway Db Migrations </li>
        <li>Message Brokers: Kafka, RabbitMQ</li>
        <li>Frontend: ReactJS, JavaScript, TypeScript, HTML/CSS/SCSS, JSP, Thymeleaf</li>
        <li>Methodologies: Agile, Waterfall</li>
        <li>Tests: JUnit, Mockito, SpringBootTest</li>
        <li>Conteinerzation and deploy: Linux, Docker, Kubernetes, CI/CD, CodeReview</li>
        <li>Documentation: JavaDoc, OpenAPI/Swagger</li>
      </ul>
    </section>
  );
};

export default Skills;