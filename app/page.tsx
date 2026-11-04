"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  BookOpenText,
  Check,
  ChevronDown,
  Headphones,
  Menu,
  Mic2,
  Play,
  Radio,
  Sparkles,
  Volume2,
  X,
} from "lucide-react";

type Demo = {
  id: string;
  title: string;
  category: "Voiceover" | "Audiobook";
  label: string;
  shade: "peach" | "lilac" | "lime" | "dark";
};

const demos: Demo[] = [
  { id: "PnDHnWafwkM", title: "Voiceover demo 01", category: "Voiceover", label: "VOICE REEL / 01", shade: "peach" },
  { id: "rZBie2bvbJ4", title: "Voiceover demo 02", category: "Voiceover", label: "VOICE REEL / 02", shade: "lilac" },
  { id: "QtpaO7zzF6Q", title: "Voiceover demo 03", category: "Voiceover", label: "VOICE REEL / 03", shade: "lime" },
  { id: "DBdRQOlYSlg", title: "Voiceover demo 04", category: "Voiceover", label: "VOICE REEL / 04", shade: "dark" },
  { id: "T4e7Ty71GxA", title: "A Knight in Shining Armor", category: "Audiobook", label: "AUDIOBOOK / 01", shade: "lilac" },
  { id: "GpLK57jcV84", title: "Fart Proudly", category: "Audiobook", label: "AUDIOBOOK / 02", shade: "peach" },
  { id: "xq4o1VAm-vI", title: "He Came with the Couch", category: "Audiobook", label: "AUDIOBOOK / 03", shade: "lime" },
  { id: "zzQwpxHXcn4", title: "If You Give a Kitty a Cocktail", category: "Audiobook", label: "AUDIOBOOK / 04", shade: "dark" },
];

const episodes = [
  {
    number: "024",
    date: "SEP 24, 2026",
    title: "Salli Saffioti & Garrett Sander",
    context: "Voice acting, character creation & the world of Monster High",
    duration: "21 MIN",
    url: "https://dukeofarts.podbean.com/e/voiceover-artist-actress-salli-saffioti-toy-creator-creator-of-monster-high-garrett-sander-on-duke-ofarts-podcast/",
  },
  {
    number: "023",
    date: "SEP 13, 2026",
    title: "Dick Terhune & Bill Lobley",
    context: "Inside the voiceover industry with two working voice actors",
    duration: "43 MIN",
    url: "https://dukeofarts.podbean.com/e/dick-terhune-bill-lobley/",
  },
  {
    number: "022",
    date: "JUL 21, 2026",
    title: "Leon Hendrix",
    context: "Film, storytelling & the independent creative journey",
    duration: "38 MIN",
    url: "https://dukeofarts.podbean.com/e/leon-hendrix-on-duke-o-farts-podcast/",
  },
];

function SoundBars({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`sound-bars ${compact ? "sound-bars--compact" : ""}`} aria-hidden="true">
      {[12, 25, 40, 21, 35, 51, 26, 44, 18, 35, 53, 32, 16].map((height, index) => (
        <i key={index} style={{ height: `${height}%` }} />
      ))}
    </span>
  );
}

function SectionTag({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-tag">
      <span className="tag-number">{number}</span>
      <span>{children}</span>
    </div>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["The work", "#work"],
    ["Listen", "#listen"],
    ["About", "#about"],
    ["The podcast", "#podcast"],
  ];
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Duke O'FArts, back to top">
        <span className="brand-mark"><AudioLines size={24} strokeWidth={2.8} /></span>
        <span className="brand-type">DUKE<span>O&apos;</span>FARTS<span className="brand-dot">.</span></span>
      </a>
      <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`} aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
        <a className="nav-mobile-cta" href="#connect" onClick={() => setMenuOpen(false)}>Let&apos;s talk <ArrowUpRight size={16} /></a>
      </nav>
      <a className="header-cta" href="#connect">Let&apos;s talk <ArrowUpRight size={17} /></a>
      <button className="menu-button" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner page-shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-pip" /> MEET LAUREN DUKE <span className="eyebrow-rule" /> ARTIST & STORYTELLER</div>
          <h1>ONE ARTIST.<br />A WHOLE CAST<br />OF <em>CHARACTERS.</em></h1>
          <p className="hero-lede">Voiceover artist. Comedian. Audiobook narrator. Podcast host. Bringing every story a little more personality.</p>
          <div className="hero-actions">
            <a href="#listen" className="button button-dark"><Play size={17} fill="currentColor" /> Hear the work <ArrowUpRight size={18} /></a>
            <a href="#about" className="text-link">Meet Lauren <ArrowDownRight size={19} /></a>
          </div>
          <div className="hero-bottom-note"><span className="starburst">✳</span> A LITTLE UNEXPECTED. A LOT OF PERSONALITY.</div>
        </div>
        <div className="hero-art" aria-label="Abstract microphone-inspired artwork and sound wave graphic">
          <div className="hero-art-topline"><span>THE VOICE BEHIND THE FUN</span><span>EST. 2023</span></div>
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="hero-orbit hero-orbit-three" />
          <div className="hero-mic"><Mic2 size={160} strokeWidth={1.45} /></div>
          <div className="hero-label hero-label--top">VOICE<span>+</span><br />VERSATILITY</div>
          <div className="hero-label hero-label--bottom">COMEDY<br />IS IN THE MIX <span>↗</span></div>
          <div className="hero-art-footer"><SoundBars /><span>TURN UP THE PERSONALITY</span></div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const cards = [
    { num: "01", icon: <Mic2 />, title: "VOICEOVER", description: "Characters, commercials, animation and storytelling with a voice that knows how to stand out.", className: "service-peach", anchor: "#listen" },
    { num: "02", icon: <Sparkles />, title: "COMEDY", description: "Quick wit, character work, improv and a little mischief, all brought together on stage.", className: "service-lilac", anchor: "#comedy" },
    { num: "03", icon: <BookOpenText />, title: "NARRATION", description: "From playful stories to heartfelt moments, turning the written word into something you can feel.", className: "service-lime", anchor: "#listen" },
    { num: "04", icon: <Radio />, title: "PODCASTING", description: "Conversations with creative people, unexpected characters and a healthy dose of shenanigans.", className: "service-ink", anchor: "#podcast" },
  ];
  return (
    <section id="work" className="services section-pad page-shell">
      <div className="section-heading">
        <div><SectionTag number="01">THE MANY SIDES OF LAUREN</SectionTag><h2>NOT JUST<br /><em>ONE THING.</em></h2></div>
        <p>Why pick one lane when you can make a whole world of creative work? Here are the places Lauren feels right at home.</p>
      </div>
      <div className="service-grid">
        {cards.map((card) => (
          <a className={`service-card ${card.className}`} href={card.anchor} key={card.num}>
            <span className="service-card-top"><span>{card.num} / 04</span><ArrowUpRight size={23} /></span>
            <span className="service-icon">{card.icon}</span>
            <span className="service-card-bottom"><strong>{card.title}</strong><span>{card.description}</span></span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Media() {
  const [filter, setFilter] = useState<"Voiceover" | "Audiobook">("Voiceover");
  const [active, setActive] = useState<Demo | null>(null);
  const filtered = demos.filter((demo) => demo.category === filter);

  useEffect(() => {
    if (!active) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setActive(null); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [active]);

  return (
    <section id="listen" className="listen-section section-pad">
      <div className="page-shell">
        <div className="section-heading section-heading-light">
          <div><SectionTag number="02">PRESS PLAY</SectionTag><h2>LET THE<br /><em>WORK TALK.</em></h2></div>
          <p>Characters, energy and stories. The quickest way to get to know a voice? Give it a listen.</p>
        </div>
        <div className="demo-toolbar">
          <div className="demo-tabs" aria-label="Choose demo category" role="group">
            {(["Voiceover", "Audiobook"] as const).map((item) => (
              <button className={filter === item ? "tab active" : "tab"} type="button" key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item === "Voiceover" ? <AudioLines size={18} /> : <BookOpenText size={18} />}{item}</button>
            ))}
          </div>
          <span className="demo-counter">{String(filtered.length).padStart(2, "0")} DEMOS / SELECT TO PLAY</span>
        </div>
        <div className="demo-grid">
          {filtered.map((demo, index) => (
            <button key={demo.id} type="button" className={`demo-card demo-card--${demo.shade}`} onClick={() => setActive(demo)} aria-label={`Play ${demo.title}`}>
              <span className="demo-top"><span>{demo.label}</span><ArrowUpRight size={19} /></span>
              <span className="demo-visual"><SoundBars /><span className="demo-play"><Play fill="currentColor" size={23} /></span></span>
              <span className="demo-bottom"><span><small>{demo.category.toUpperCase()} · {String(index + 1).padStart(2, "0")}</small><strong>{demo.title}</strong></span><span className="demo-arrow"><ArrowUpRight size={23} /></span></span>
            </button>
          ))}
        </div>
        <p className="demo-footnote">Original demos linked from Lauren&apos;s existing Duke O&apos;FArts portfolio.</p>
      </div>
      {active && (
        <div className="video-overlay" onClick={() => setActive(null)} role="presentation">
          <div className="video-dialog" role="dialog" aria-modal="true" aria-label={`Playing ${active.title}`} onClick={(event) => event.stopPropagation()}>
            <div className="video-dialog-header"><span>{active.title}</span><button type="button" aria-label="Close video" onClick={() => setActive(null)}><X size={24} /></button></div>
            <div className="video-frame"><iframe src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0`} title={active.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /></div>
            <a href={`https://www.youtube.com/watch?v=${active.id}`} className="video-external" target="_blank" rel="noopener noreferrer">Watch on YouTube <ArrowUpRight size={17} /></a>
          </div>
        </div>
      )}
    </section>
  );
}

function Marquee() {
  const items = ["A VOICE FOR EVERY VIBE", "✳", "STORIES WORTH TELLING", "✳", "CHARACTERS WORTH MEETING", "✳"];
  return <div className="marquee" aria-label="A voice for every vibe. Stories worth telling. Characters worth meeting."><div className="marquee-track" aria-hidden="true">{[...items, ...items].map((item, index) => <span key={index}>{item}</span>)}</div></div>;
}

function About() {
  return (
    <section className="about-section section-pad page-shell" id="about">
      <div className="about-visual">
        <div className="about-visual-top"><span>INTRODUCING</span><span>THE HUMAN BEHIND THE VOICES</span></div>
        <div className="about-visual-center"><span className="about-flower">✳</span><span className="about-script">hey, I&apos;m<br />Lauren.</span></div>
        <div className="about-visual-bottom"><span>ARTIST • ENTERTAINER • CREATIVE</span><ArrowUpRight size={32} /></div>
      </div>
      <div className="about-copy">
        <SectionTag number="03">A LITTLE BACKSTORY</SectionTag>
        <h2>CREATIVE<br />TO THE <em>CORE.</em></h2>
        <p className="about-intro">Meet Lauren Duke. A performer who&apos;s never believed creativity should fit neatly into one box.</p>
        <p>From singing and piano to improv, stand-up and character voices, Lauren brings a lifetime of curiosity to every performance. She works across voiceover, comedy, storytelling, theater and the creative community.</p>
        <p>Her approach is simple: make it engaging, make it memorable and don&apos;t be afraid to have a little fun with it.</p>
        <div className="about-details"><div><span>BASED AROUND</span><strong>Greater Boston / New England</strong></div><div><span>ALSO KNOWN FOR</span><strong>Stand-up, improv & podcasting</strong></div></div>
        <a className="about-link" href="#connect">Let&apos;s collaborate <ArrowUpRight size={20} /></a>
      </div>
    </section>
  );
}

function ComedyAndStudio() {
  return (
    <section className="credentials-section section-pad" id="comedy">
      <div className="page-shell credential-grid">
        <div className="credential-card credential-card--comedy">
          <div className="credential-card-heading"><SectionTag number="04">LIVE & UNFILTERED</SectionTag><Sparkles size={33} /></div>
          <h2>SHE&apos;S GOT<br /><em>JOKES.</em></h2>
          <p>Relatable, witty, sassy. Lauren blends music, characters and improv with stand-up that keeps audiences on their toes.</p>
          <div className="credit-label">SELECTED COMEDY CREDITS</div>
          <ul className="credit-list"><li>Comedy Connection <span>Providence, RI</span></li><li>Nick&apos;s Comedy Stop <span>Boston, MA</span></li><li>Portland Maine Comedy Festival <span>Portland, ME</span></li><li>Comedy Park <span>Cranston, RI</span></li></ul>
        </div>
        <div className="credential-card credential-card--studio">
          <div className="credential-card-heading"><SectionTag number="05">BEHIND THE MIC</SectionTag><Headphones size={33} /></div>
          <h2>STUDIO<br /><em>READY.</em></h2>
          <p>Creative versatility meets a dedicated home recording setup for voiceover and narration work.</p>
          <div className="credit-label">RECORDING SETUP</div>
          <ul className="studio-list">
            <li><Check size={17} /> RØDE NT1 5th Generation microphone</li>
            <li><Check size={17} /> Focusrite Scarlett 2i2 interface</li>
            <li><Check size={17} /> REAPER digital audio workstation</li>
            <li><Check size={17} /> Punch-and-roll recording</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Podcast() {
  return (
    <section id="podcast" className="podcast-section section-pad">
      <div className="page-shell">
        <div className="podcast-hero">
          <div className="podcast-copy"><SectionTag number="06">ON AIR WITH LAUREN</SectionTag><h2>GOOD TALKS.<br /><em>GREAT COMPANY.</em><br />MILD CHAOS.</h2><p>Duke O&apos;FArts is a creative interview podcast celebrating artists, actors, comedians and makers. Come for the conversation. Stay for the shenanigans.</p><a href="https://dukeofarts.podbean.com/" className="button button-dark" target="_blank" rel="noopener noreferrer"><Headphones size={19} /> Explore the podcast <ArrowUpRight size={18} /></a></div>
          <div className="podcast-cover" aria-label="Duke O'FArts podcast graphic"><span className="cover-top">THE PODCAST / WITH LAUREN DUKE</span><span className="cover-star">✳</span><span className="cover-title">DUKE<br />O&apos;FARTS<span>!</span></span><div className="cover-bottom"><SoundBars compact /><span>REAL CREATIVES.<br />GOOD CONVERSATION.</span></div></div>
        </div>
        <div className="episode-header"><h3>THE LATEST CONVERSATIONS</h3><span>FRESH FROM THE FEED <ChevronDown size={17} /></span></div>
        <div className="episode-list">{episodes.map((episode) => <a className="episode" key={episode.number} href={episode.url} target="_blank" rel="noopener noreferrer"><span className="episode-number">EP. {episode.number}</span><span className="episode-content"><strong>{episode.title}</strong><small>{episode.context}</small></span><span className="episode-date">{episode.date}<small>{episode.duration}</small></span><span className="episode-play"><Play size={19} fill="currentColor" /></span></a>)}</div>
        <a href="https://dukeofarts.podbean.com/" className="more-episodes" target="_blank" rel="noopener noreferrer">All episodes on Podbean <ArrowUpRight size={19} /></a>
      </div>
    </section>
  );
}

function Connect() {
  const email = process.env.NEXT_PUBLIC_BOOKING_EMAIL?.trim();
  const destination = email ? `mailto:${email}?subject=${encodeURIComponent("Duke O'FArts — Booking inquiry")}` : "https://www.linkedin.com/in/lauren-duke-8898993b";
  return (
    <section className="connect-section" id="connect"><div className="page-shell connect-inner"><SectionTag number="07">OPEN TO CREATIVE COLLABORATIONS</SectionTag><h2>GOT A STORY?<br /><em>LET&apos;S MAKE</em><br />SOME NOISE.</h2><p>Need a distinctive voice, a creative collaborator or the right personality for your next project? Let&apos;s connect.</p><a href={destination} className="button button-light" target={email ? undefined : "_blank"} rel={email ? undefined : "noopener noreferrer"}>{email ? "Send a booking inquiry" : "Connect with Lauren"} <ArrowUpRight size={21} /></a><div className="connect-art" aria-hidden="true"><Volume2 size={118} strokeWidth={1.1} /><span>HELLO!</span></div></div></section>
  );
}

function Footer() {
  return (
    <footer className="footer"><div className="page-shell"><div className="footer-main"><div><a className="brand brand-footer" href="#top"><span className="brand-mark"><AudioLines size={24} /></span><span className="brand-type">DUKE<span>O&apos;</span>FARTS<span className="brand-dot">.</span></span></a><p>The creative world of Lauren Duke.<br />A little voice. A lot of personality.</p></div><div className="footer-links"><a href="#work">Work</a><a href="#listen">Demos</a><a href="#about">About</a><a href="#podcast">Podcast</a></div><div className="footer-links"><a href="https://dukeofarts.podbean.com/" target="_blank" rel="noopener noreferrer">Podbean <ArrowUpRight size={15} /></a><a href="https://www.linkedin.com/in/lauren-duke-8898993b" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15} /></a><a href="https://www.youtube.com/watch?v=PnDHnWafwkM" target="_blank" rel="noopener noreferrer">YouTube demos <ArrowUpRight size={15} /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} LAUREN DUKE — DUKE O&apos;FARTS. ALL RIGHTS RESERVED.</span><span>MADE FOR THE LOVE OF THE ARTS <span className="footer-spark">✳</span></span></div></div></footer>
  );
}

export default function Page() {
  return <><SiteHeader /><main><Hero /><Marquee /><Services /><Media /><About /><ComedyAndStudio /><Podcast /><Connect /></main><Footer /></>;
}
