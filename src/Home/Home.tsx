import { useState, useEffect, useRef } from 'react';
import './Home.css';

type Prompt = {
  label: string;
  response: string;
  button?: { text: string; href: string };
};

const PROMPTS: Prompt[] = [
  {
    label: 'AI tooling?',
    response:
      "I embed AI at every layer — LLM-assisted code review, generative UI prototyping, and building AI-powered features for enterprise clients. At Deloitte I've helped teams compress weeks of analysis into hours using the right models and tooling.",
  },
  {
    label: 'Your stack?',
    response:
      "React, TypeScript, Node.js and Python form the core — but the stack follows the problem. I've worked across spacecraft telemetry systems, high-throughput news APIs, and large-scale enterprise modernisation. The right tool matters more than the favourite one.",
  },
  {
    label: 'NASA work?',
    response:
      "I built and maintained mission software where a bad deploy isn't a rollback — it's a mission failure. That standard of precision applies at every altitude, from embedded systems to cloud-scale services.",
  },
  {
    label: 'At Deloitte?',
    response:
      'I lead fast-paced modernisation engagements for Fortune 500 clients — replacing legacy systems with scalable, maintainable architecture. The pace is aggressive and the stakes are high, which is exactly how I like it.',
  },
  {
    label: 'Startup life?',
    response:
      'Early-stage is where I learned to ship. As one of a handful of engineers at a news media startup, I built systems from scratch, wore every hat, and moved at a pace most teams only talk about. That scrappiness is permanent — it just comes with better architecture now.',
  },
  {
    label: 'Résumé?',
    response:
      "Bold of you to ask. It's been known to cause hiring decisions — sometimes accidentally. Here, take a look.",
    button: { text: '↓ Download Résumé', href: '/resume.pdf' },
  },
];

const HeroChat = () => {
  const [active, setActive] = useState<number | null>(null);
  const [displayed, setDisplayed] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const select = (i: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActive(i);
    setDisplayed('');
    setIsTyping(true);
    const text = PROMPTS[i].response;
    let idx = 0;
    intervalRef.current = setInterval(() => {
      idx++;
      setDisplayed(text.slice(0, idx));
      if (idx >= text.length) {
        clearInterval(intervalRef.current!);
        setIsTyping(false);
      }
    }, 18);
  };

  useEffect(
    () => () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    },
    []
  );

  const activePrompt = active !== null ? PROMPTS[active] : null;

  return (
    <div className="hero-chat">
      <div className="hero-chat__chrome">
        <span className="hero-chat__dot" />
        <span className="hero-chat__dot" />
        <span className="hero-chat__dot" />
        <span className="hero-chat__title">AI &middot; Ask Daniel</span>
      </div>
      <div className="hero-chat__prompts">
        {PROMPTS.map((p, i) => (
          <button
            key={i}
            className={`hero-chat__chip${active === i ? ' active' : ''}`}
            onClick={() => select(i)}
          >
            {p.label}
          </button>
        ))}
      </div>
      <div className="hero-chat__response">
        {active === null ? (
          <span className="hero-chat__placeholder">
            _ select a prompt to begin
          </span>
        ) : (
          <>
            <span className="hero-chat__text">
              {displayed}
              {isTyping && <span className="hero-chat__cursor" />}
            </span>
            {!isTyping && activePrompt?.button && (
              <a
                className="hero-chat__btn"
                href={activePrompt.button.href}
                download="Daniel Porter - Resume.pdf"
              >
                {activePrompt.button.text}
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const TICKER_ITEMS = [
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'REST APIs',
  'GraphQL',
  'CI/CD',
  'AWS',
  'PostgreSQL',
  'Docker',
  'Agile',
  'Next.js',
  'Vite',
  'React Native',
  'Git',
];

// Repeat enough times so each set is always wider than any viewport
const TICKER_REPEATED = [
  ...TICKER_ITEMS,
  ...TICKER_ITEMS,
  ...TICKER_ITEMS,
  ...TICKER_ITEMS,
];

const Home = () => (
  <main className="home">
    {/* ── HERO ── */}
    <section id="hero" className="hero">
      <div className="hero__bg" aria-hidden="true">
        PORTER
      </div>
      <div className="hero__inner">
        <div className="hero__left">
          <span className="hero__eyebrow">Software Engineer</span>
          <h1 className="hero__name">
            Daniel
            <br />
            Porter
          </h1>
          <div className="hero__rule" aria-hidden="true" />
          <p className="hero__sub">
            NASA &nbsp;&middot;&nbsp; Startups &nbsp;&middot;&nbsp; Deloitte
          </p>
          <p className="hero__lead">
            I build things that matter, at a pace that surprises people. From
            mission software to enterprise overhauls &mdash; I bring deep
            technical fluency and a bias for shipping.
          </p>
        </div>
        <div className="hero__right">
          <HeroChat />
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-label">scroll</span>
      </div>
    </section>

    {/* ── TICKER ── */}
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        <div className="ticker__set">
          {TICKER_REPEATED.map((item, i) => (
            <span key={i} className="ticker__item">
              {item}
              <span className="ticker__dot">&nbsp;&middot;&nbsp;</span>
            </span>
          ))}
        </div>
        <div className="ticker__set" aria-hidden="true">
          {TICKER_REPEATED.map((item, i) => (
            <span key={i} className="ticker__item">
              {item}
              <span className="ticker__dot">&nbsp;&middot;&nbsp;</span>
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* ── ABOUT ── */}
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__label">01 &mdash; About</div>
        <div className="about__content">
          <h2 className="about__heading">
            From rocket science
            <br />
            to the Fortune 500.
          </h2>
          <div className="milestones">
            <div className="milestone">
              <span className="milestone__org">NASA</span>
              <p className="milestone__desc">
                Where the stakes demand precision and the timelines are
                unforgiving. I learned to write software that had to work
                &mdash; and work the first time.
              </p>
            </div>
            <div className="milestone">
              <span className="milestone__org">Startups</span>
              <p className="milestone__desc">
                Pivoted from precision to pace. Small teams, big ambitions, and
                a daily requirement to ship features that readers would actually
                notice.
              </p>
            </div>
            <div className="milestone">
              <span className="milestone__org">Deloitte</span>
              <p className="milestone__desc">
                Both disciplines applied to enterprise clients modernising
                mission-critical systems. Fast cycles, deep understanding,
                results that outlast the engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── CONTACT ── */}
    <section id="contact" className="contact">
      <div className="contact__inner">
        <div className="contact__left">
          <h2 className="contact__heading">
            Let&rsquo;s
            <br />
            talk.
          </h2>
          <p className="contact__sub">
            Open to interesting problems,
            <br />
            ambitious teams, and good conversations.
          </p>
        </div>
        <div className="contact__right">
          <a className="contact__link" href="mailto:hello@danielporterj.com">
            <span className="contact__link-label">Email</span>
            <span className="contact__link-value">
              hello@danielporterj.com &rarr;
            </span>
          </a>
          <a
            className="contact__link"
            href="https://www.linkedin.com/in/danielporterj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact__link-label">LinkedIn</span>
            <span className="contact__link-value">danielporterj &rarr;</span>
          </a>
          <a
            className="contact__link"
            href="https://github.com/Devportej"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact__link-label">GitHub</span>
            <span className="contact__link-value">Devportej &rarr;</span>
          </a>
          <a
            className="contact__link"
            href="/resume.pdf"
            download="Daniel Porter - Resume.pdf"
          >
            <span className="contact__link-label">Résumé</span>
            <span className="contact__link-value">Download PDF &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  </main>
);

export default Home;
