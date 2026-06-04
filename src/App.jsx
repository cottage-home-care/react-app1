import { useState, useEffect } from 'react'
import logo from '../assets/codeabclogo.jpg'
import './App.css'

const YOUTUBE_URL = 'https://www.youtube.com/codeabc'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Playlists', href: '#playlists' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES = [
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'Fast, responsive, and scalable web applications built with modern frameworks like React, Next.js, and Node.js.',
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile experiences for iOS and Android that your users will love.',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    desc: 'Containerized deployments, CI/CD pipelines, and cloud architecture on AWS, GCP, and Azure.',
  },
  {
    icon: '🎨',
    title: 'UI / UX Design',
    desc: 'Pixel-perfect interfaces and intuitive product design that turn visitors into loyal customers.',
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    desc: 'Smart features powered by the latest AI models — chatbots, automation, and data insights.',
  },
  {
    icon: '🛠️',
    title: 'Consulting',
    desc: 'Technical strategy, code audits, and architecture reviews to keep your product healthy and future-proof.',
  },
]

const STATS = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '80+', label: 'Happy Clients' },
  { value: '12', label: 'Team Experts' },
  { value: '5★', label: 'Average Rating' },
]

// Swap the `url` fields with your real YouTube playlist links anytime.
const PLAYLISTS = [
  {
    icon: '⚛️',
    title: 'React Mastery',
    desc: 'Build modern, production-ready UIs with React from scratch — hooks, state, routing & more.',
    videos: '24 videos',
    gradient: 'linear-gradient(135deg, #61dafb, #2563eb)',
    url: `${YOUTUBE_URL}/playlists`,
  },
  {
    icon: '🟨',
    title: 'JavaScript Fundamentals',
    desc: 'Master JavaScript in Bangla — from basics to advanced concepts every developer needs.',
    videos: '32 videos',
    gradient: 'linear-gradient(135deg, #f7df1e, #e8a400)',
    url: `${YOUTUBE_URL}/playlists`,
  },
  {
    icon: '🐳',
    title: 'DevOps & Docker',
    desc: 'Containers, CI/CD pipelines and deployment workflows explained step by step.',
    videos: '18 videos',
    gradient: 'linear-gradient(135deg, #2496ed, #1d63ed)',
    url: `${YOUTUBE_URL}/playlists`,
  },
  {
    icon: '☁️',
    title: 'Cloud Computing',
    desc: 'AWS, GCP and Azure essentials — architect and ship scalable apps on the cloud.',
    videos: '20 videos',
    gradient: 'linear-gradient(135deg, #ff9900, #ff5e3a)',
    url: `${YOUTUBE_URL}/playlists`,
  },
  {
    icon: '🐍',
    title: 'Python for Everyone',
    desc: 'Learn Python the right way — syntax, automation, and real-world project building.',
    videos: '28 videos',
    gradient: 'linear-gradient(135deg, #4584b6, #ffde57)',
    url: `${YOUTUBE_URL}/playlists`,
  },
  {
    icon: '🧩',
    title: 'System Design',
    desc: 'Design large-scale systems with confidence — databases, caching, queues and scaling.',
    videos: '15 videos',
    gradient: 'linear-gradient(135deg, #7c5cff, #4ec5ff)',
    url: `${YOUTUBE_URL}/playlists`,
  },
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="page">
      {/* ===== Header ===== */}
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__inner">
          <a href="#top" className="brand">
            <img className="brand__logo" src={logo} alt="Code ABC logo" />
            <span className="brand__name">Code&nbsp;ABC</span>
          </a>

          <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a
              className="nav__cta"
              href={YOUTUBE_URL}
              target="_blank"
              rel="noreferrer"
            >
              ▶ YouTube
            </a>
          </nav>

          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="hero" id="top">
        <div className="hero__glow" />
        <div className="container hero__inner">
          <span className="pill">🚀 Building the future, one line at a time</span>
          <h1 className="hero__title">
           <span className="grad-text">Code ABC</span> 
          </h1>
          <p className="hero__sub">
          Code ABC features the best online web development, programming, Devops and Cloud tutorials in Bangla for all of the latest technologies
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">Start a Project</a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              <span className="play-icon">▶</span> Watch on YouTube
            </a>
          </div>

          <div className="stats">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat__value">{s.value}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section className="section" id="services">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">What we do</span>
            <h2 className="section__title">Services built to ship and scale</h2>
            <p className="section__lead">
              From idea to launch, we cover every layer of the modern software
              stack so you can focus on growing your business.
            </p>
          </div>

          <div className="grid grid--3">
            {SERVICES.map((s) => (
              <article className="card" key={s.title}>
                <div className="card__icon">{s.icon}</div>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__desc">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Playlists ===== */}
      <section className="section section--alt" id="playlists">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">Watch & Learn</span>
            <h2 className="section__title">Our YouTube Playlists</h2>
            <p className="section__lead">
              Free, in-depth tutorial series in Bangla covering web development,
              programming, DevOps and the cloud. Pick a track and start learning
              today.
            </p>
          </div>

          <div className="grid grid--3">
            {PLAYLISTS.map((p) => (
              <a
                className="playlist"
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noreferrer"
              >
                <div className="playlist__thumb" style={{ background: p.gradient }}>
                  <span className="playlist__emoji">{p.icon}</span>
                  <span className="playlist__play">▶</span>
                  <span className="playlist__count">{p.videos}</span>
                </div>
                <div className="playlist__body">
                  <h3 className="playlist__title">{p.title}</h3>
                  <p className="playlist__desc">{p.desc}</p>
                  <span className="playlist__link">Watch playlist →</span>
                </div>
              </a>
            ))}
          </div>

          <div className="playlists__cta">
            <a
              href={`${YOUTUBE_URL}/playlists`}
              target="_blank"
              rel="noreferrer"
              className="btn btn--youtube"
            >
              <span className="play-icon">▶</span> View all playlists
            </a>
          </div>
        </div>
      </section>

      {/* ===== Work / Banner ===== */}
      <section className="section" id="work">
        <div className="container split">
          <div className="split__text">
            <span className="eyebrow">Why Code ABC</span>
            <h2 className="section__title">
              Engineering excellence, delivered on time.
            </h2>
            <ul className="checklist">
              <li>Clean, maintainable, well-tested code</li>
              <li>Transparent communication and weekly demos</li>
              <li>Modern stacks built for performance and security</li>
              <li>Dedicated support long after launch</li>
            </ul>
            <a href="#contact" className="btn btn--primary">Let's Talk</a>
          </div>
          <div className="split__visual">
            <div className="code-window">
              <div className="code-window__bar">
                <span /><span /><span />
              </div>
              <pre className="code-window__body">
{`const codeABC = {
  mission: "build great software",
  stack: ["React", "Node", "Cloud"],
  ship: () => "🚀 on time, every time",
};

codeABC.ship();`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section className="section" id="about">
        <div className="container section__head">
          <span className="eyebrow">About us</span>
          <h2 className="section__title">A small team with big ambitions</h2>
          <p className="section__lead">
            We're a passionate group of engineers, designers, and creators who
            believe great software should be both powerful and delightful. We
            also share what we learn — follow our journey, tutorials, and
            behind-the-scenes builds on our YouTube channel.
          </p>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noreferrer"
            className="btn btn--youtube"
          >
            <span className="play-icon">▶</span> Subscribe to Code ABC
          </a>
        </div>
      </section>

      {/* ===== CTA / Contact ===== */}
      <section className="cta" id="contact">
        <div className="container cta__inner">
          <h2 className="cta__title">Have a project in mind?</h2>
          <p className="cta__sub">
            Let's turn your idea into a product. Reach out and we'll get back to
            you within 24 hours.
          </p>
          <a href="mailto:hello@codeabc.dev" className="btn btn--primary btn--lg">
            Get in Touch
          </a>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="brand brand--footer">
            <img className="brand__logo" src={logo} alt="Code ABC logo" />
            <span className="brand__name">Code&nbsp;ABC</span>
          </div>
          <p className="footer__tag">Building beautiful software since 2024.</p>
          <div className="footer__links">
            <a href={YOUTUBE_URL} target="_blank" rel="noreferrer">YouTube</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer__bottom">
          © {new Date().getFullYear()} Code ABC. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
