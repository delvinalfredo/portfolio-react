import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaGlobe,
  FaReact, FaLaravel, FaJava, FaPython, FaDocker, FaGitAlt,
  FaDatabase, FaExternalLinkAlt
} from 'react-icons/fa';
import { 
  SiGo, SiJavascript, SiTypescript, SiMysql, SiPostgresql, 
  SiRedis, SiNginx, SiSpringboot, SiFastapi
} from 'react-icons/si';
import './App.css';

const skillsData = {
  frontend: ['React JS', 'JavaScript', 'TypeScript', 'HTML/CSS'],
  backend: ['Laravel', 'Java', 'Golang', 'Python', 'Spring Boot', 'FastAPI'],
  devops: ['Docker', 'Git', 'Nginx', 'Linux'],
  database: ['MySQL', 'PostgreSQL', 'Redis', 'MongoDB']
};

const projectImages = [
  '/project-delboyy.png',
  '/project-monitor.png',
  '/project-banking.svg',
  '/project-cif.png',
  '/project-atm.svg',
  '/project-log.svg'
];

function App() {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('about');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'id' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allSkills = [...skillsData.frontend, ...skillsData.backend, ...skillsData.devops, ...skillsData.database];

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      
      <div className="layout">
        {/* Left Sidebar - Fixed */}
        <motion.aside 
          className="sidebar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="sidebar-inner">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h1 className="sidebar-name">Delvin Alfredo<br />Binnendijk</h1>
              <h2 className="sidebar-role">{t('hero.title')}</h2>
              <p className="sidebar-tagline">{t('hero.subtitle')}</p>
            </motion.div>

            <motion.nav 
              className="sidebar-nav"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <ul>
                {['about', 'experience', 'education', 'projects', 'contact'].map(item => (
                  <li key={item}>
                    <motion.a
                      href={`#${item}`}
                      className={activeSection === item ? 'active' : ''}
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <span className="nav-line"></span>
                      <span className="nav-text">{t(`nav.${item}`)}</span>
                    </motion.a>
                  </li>
                ))}
                <li>
                  <button onClick={toggleLanguage} className="lang-toggle">
                    {i18n.language === 'en' ? '🇮🇩 Bahasa Indonesia' : '🇬🇧 English'}
                  </button>
                </li>
              </ul>
            </motion.nav>

            <motion.div 
              className="sidebar-social"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.a href="https://github.com/delvinalfredo" target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, color: '#38bdf8' }}><FaGithub /></motion.a>
              <motion.a href="https://linkedin.com/in/delvin-alfredo-binnendijk-808914113" target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, color: '#38bdf8' }}><FaLinkedin /></motion.a>
              <motion.a href="mailto:delvinalfredo@gmail.com" whileHover={{ y: -3, color: '#38bdf8' }}><FaEnvelope /></motion.a>
              <motion.a href="https://delboyy.store" target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, color: '#38bdf8' }}><FaGlobe /></motion.a>
            </motion.div>
          </div>
        </motion.aside>

        {/* Right Content - Scrollable */}
        <main className="content">
          {/* About */}
          <section id="about" className="section">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-heading">
                <span className="heading-num">01.</span> {t('about.title')}
              </h2>
              <div className="about-text">
                <p>{t('about.description')}</p>
              </div>
            </motion.div>
          </section>

          {/* Experience */}
          <section id="experience" className="section">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-heading">
                <span className="heading-num">02.</span> {t('experience.title')}
              </h2>
              
              <div className="experience-list">
                {t('experience.jobs', { returnObjects: true }).map((job, index) => (
                  <motion.div
                    key={index}
                    className="experience-item"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    whileHover={{ 
                      backgroundColor: 'rgba(56, 189, 248, 0.03)',
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="exp-date">
                      {job.period}
                    </div>
                    <div className="exp-content">
                      <h3 className="exp-title">
                        {job.position} <span className="exp-company">· {job.company}</span>
                      </h3>
                      <p className="exp-location">{job.location}</p>
                      <p className="exp-description">{job.responsibilities.join(' · ')}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Education */}
          <section id="education" className="section">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-heading">
                <span className="heading-num">03.</span> {t('education.title')}
              </h2>
              <div className="education-list">
                {t('education.items', { returnObjects: true }).map((edu, index) => (
                  <motion.div
                    key={index}
                    className="education-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.4 }}
                  >
                    <div className="edu-year">{edu.period}</div>
                    <div className="edu-content">
                      <h3 className="edu-degree">{edu.degree} · {edu.school}</h3>
                      <p className="edu-gpa">{edu.gpa}</p>
                      {edu.details && <p className="edu-details">{edu.details}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Projects */}
          <section id="projects" className="section">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-heading">
                <span className="heading-num">04.</span> {t('projects.title')}
              </h2>
              
              <div className="projects-list">
                {t('projects.items', { returnObjects: true }).map((project, index) => (
                  <motion.a
                    key={index}
                    className="project-item"
                    href={project.link || '#'}
                    target={project.link ? '_blank' : undefined}
                    rel={project.link ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                  >
                    <div className="project-thumbnail">
                      <img 
                        src={projectImages[index]} 
                        alt={project.name}
                        className="project-img"
                      />
                    </div>
                    <div className="project-content">
                      <h3 className="project-title">
                        {project.name}
                        <span className="project-ext-link"><FaExternalLinkAlt /></span>
                      </h3>
                      <p className="project-description">{project.description}</p>
                      <div className="project-tags">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Skills */}
          <section id="contact" className="section">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-heading">
                <span className="heading-num">05.</span> {t('contact.title')}
              </h2>
              
              <p className="contact-intro">{t('contact.description')}</p>
              
              <div className="contact-links">
                <motion.a 
                  href="mailto:delvinalfredo@gmail.com" 
                  className="contact-link"
                  whileHover={{ x: 4 }}
                >
                  <FaEnvelope /> delvinalfredo@gmail.com
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/delvin-alfredo-binnendijk-808914113" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-link"
                  whileHover={{ x: 4 }}
                >
                  <FaLinkedin /> LinkedIn
                </motion.a>
                <motion.a 
                  href="https://github.com/delvinalfredo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-link"
                  whileHover={{ x: 4 }}
                >
                  <FaGithub /> GitHub
                </motion.a>
                <motion.a 
                  href="https://delboyy.store" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-link"
                  whileHover={{ x: 4 }}
                >
                  <FaGlobe /> delboyy.store
                </motion.a>
              </div>

              <div className="skills-section">
                <h3 className="skills-heading">{t('skills.title')}</h3>
                <div className="skills-tags">
                  {allSkills.map((skill, i) => (
                    <motion.span 
                      key={i} 
                      className="tag"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          <footer className="footer">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Designed & Built by Delvin Alfredo Binnendijk · 2026
            </motion.p>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
