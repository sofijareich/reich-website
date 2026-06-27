import { useEffect, useRef } from "react";
import "@/App.css";

const EMAIL = "sofijareich@gmail.com";
const MAILTO =
  "mailto:sofijareich@gmail.com?subject=Erstgespr%C3%A4ch%20%E2%80%93%2020%20Minuten&body=Guten%20Tag%20Frau%20Reich%2C%0A%0Aich%20w%C3%BCrde%20gerne%20unverbindlich%20pr%C3%BCfen%2C%20ob%20eine%20Zusammenarbeit%20passt.";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal") || [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

const Nav = () => (
  <nav className="nav" data-testid="nav">
    <div className="wrap nav-inner">
      <a href="#hero" className="nav-logo" data-testid="nav-logo">
        Reich
      </a>
      <div className="nav-links">
        <a href="#leistungen" className="nav-link" data-testid="nav-leistungen">
          Leistungen
        </a>
        <a href="#referenzen" className="nav-link" data-testid="nav-referenzen">
          Referenzen
        </a>
        <a href="#ueber" className="nav-link" data-testid="nav-ueber">
          Über mich
        </a>
        <a href={MAILTO} className="nav-link" data-testid="nav-kontakt">
          Kontakt
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <header id="hero" className="hero" data-testid="hero">
    <div className="hero-glow" aria-hidden="true" />
    <div className="wrap hero-inner">
      <p className="eyebrow reveal" data-testid="hero-eyebrow">
        Digital Marketing · Schweiz
      </p>
      <h1 className="h1 hero-h1 reveal" data-testid="hero-h1">
        Ihre Expertise verdient mehr <em>Sichtbarkeit.</em>
      </h1>
      <p className="body body-lg hero-body reveal" data-testid="hero-body">
        Die meisten meiner Kunden haben mich nicht aktiv gesucht. Irgendwann
        haben sie gemerkt, dass ihre Online-Präsenz nicht mehr widerspiegelt,
        was sie wirklich leisten — und dann hat jemand meinen Namen
        weitergegeben.
      </p>
      <div className="hero-actions reveal">
        <a href={MAILTO} className="btn-gold" data-testid="hero-cta">
          Schauen wir ob es passt — 20 Minuten
        </a>
        <a href="#referenzen" className="link-silver" data-testid="hero-secondary">
          Referenzen ansehen →
        </a>
      </div>
    </div>
  </header>
);

const leistungen = [
  {
    eyebrow: "01 — Sichtbarkeit",
    title: "SEO & Sichtbarkeit",
    body: "Wer Sie sucht, soll Sie finden — und wer Sie noch nicht kennt, soll auf Sie stossen. Ich baue eine Sichtbarkeit auf, die zu Ihrem Anspruch passt: fundiert, technisch sauber und auf die Mandate ausgerichtet, die Sie wirklich gewinnen möchten.",
    span: "lcard-lg",
  },
  {
    eyebrow: "02 — Performance",
    title: "Performance Marketing",
    body: "Bezahlte Kanäle, mit Augenmass eingesetzt. Kampagnen, die qualifizierte Anfragen bringen statt Reichweite ohne Substanz — und deren Wirkung sich in Zahlen nachvollziehen lässt.",
    span: "lcard-half",
  },
  {
    eyebrow: "03 — Marke",
    title: "Brand & Social Media",
    body: "Eine Präsenz, die Vertrauen schafft, bevor das erste Gespräch stattfindet. Klare Tonalität, konsistente Auftritte und Inhalte, die Ihre Kompetenz zeigen — nicht behaupten.",
    span: "lcard-half",
  },
  {
    eyebrow: "04 — Infrastruktur",
    title: "Web & Digitale Infrastruktur",
    body: "Die Grundlage, auf der alles aufbaut. Schnelle, präzise Websites und eine Infrastruktur, die im Hintergrund funktioniert — damit Ihr Auftritt genauso souverän wirkt wie Ihre Arbeit.",
    span: "lcard-lg",
  },
];

const Leistungen = () => (
  <section id="leistungen" className="section" data-testid="leistungen">
    <div className="wrap">
      <div className="section-head">
        <p className="eyebrow reveal">Leistungen</p>
        <h2 className="h2 reveal" style={{ marginTop: "26px" }}>
          Drei Hebel, ein <em>Gesamtbild.</em>
        </h2>
        <p className="body section-intro reveal" data-testid="leistungen-intro">
          Ich arbeite an drei Stellen gleichzeitig: an dem, was man von Ihnen
          findet, an dem, was man von Ihnen sieht, und an dem, was im
          Hintergrund dafür sorgt, dass beides zusammenpasst. Selten braucht es
          alles auf einmal — aber immer ein klares Bild davon, wo der Hebel
          wirklich ansetzt.
        </p>
      </div>
      <div className="grid-leistungen reveal">
        {leistungen.map((l, i) => (
          <div
            key={i}
            className={`lcard ${l.span}`}
            data-testid={`leistung-card-${i}`}
          >
            <p className="eyebrow">{l.eyebrow}</p>
            <h3 className="lcard-title">{l.title}</h3>
            <p className="body lcard-body">{l.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const referenzen = [
  {
    name: "LUKB",
    tag: "Luzerner Kantonalbank",
    desc: "Begleitung einzelner digitaler Massnahmen im Umfeld einer etablierten Finanzinstitution — mit der nötigen Diskretion und einem Verständnis dafür, wie konservativ ein solches Haus auftreten muss.",
  },
  {
    name: "SwissUnited",
    tag: "Laufend",
    desc: "Fortlaufende Zusammenarbeit an Sichtbarkeit und digitaler Positionierung. Ein Mandat, das zeigt, wie sich kontinuierliche Arbeit über die Zeit in Substanz übersetzt.",
  },
];

const Referenzen = () => (
  <section id="referenzen" className="section" data-testid="referenzen">
    <div className="wrap">
      <div className="section-head">
        <p className="eyebrow reveal">Referenzen</p>
        <h2 className="h2 reveal" style={{ marginTop: "26px" }}>
          Wenige Mandate, <em>mit Tiefe.</em>
        </h2>
      </div>
      <div className="ref-list">
        {referenzen.map((r, i) => (
          <div key={i}>
            {i > 0 && <hr className="divider" />}
            <div className="ref-row reveal" data-testid={`referenz-${i}`}>
              <div>
                <h3 className="ref-name">{r.name}</h3>
                <p className="ref-tag">{r.tag}</p>
              </div>
              <div className="ref-vline" aria-hidden="true" />
              <p className="ref-desc">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const UeberMich = () => (
  <section id="ueber" className="section" data-testid="ueber">
    <div className="wrap">
      <div className="about-grid">
        <div className="reveal">
          <img
            src="/assets/sofija.jpg"
            alt="Sofija Reich"
            className="about-photo"
            data-testid="about-photo"
          />
        </div>
        <div className="about-right">
          <p className="eyebrow reveal">Über mich</p>
          <h2 className="h2 reveal" data-testid="about-h2">
            Die Person <em>dahinter.</em>
          </h2>
          <div className="body body-lg about-body">
            <p className="reveal">
              Ich bin keine klassische Agentur. Es gibt kein grosses Team, keine
              Pitch-Decks und keine Stunden, die irgendwo verrechnet werden,
              ohne dass jemand weiss wofür. Es gibt mich — und die Verantwortung
              dafür, dass das, was wir vereinbaren, auch tatsächlich passiert.
            </p>
            <p className="reveal">
              Ich arbeite mit Menschen, die in ihrem Fach hervorragend sind und
              schlicht nicht die Zeit haben, sich nebenbei auch noch mit ihrer
              digitalen Präsenz zu beschäftigen. Meine Aufgabe ist es, diesen
              Teil so zu übernehmen, dass er nach aussen genauso seriös wirkt
              wie ihre eigentliche Arbeit — und nach innen kaum Aufwand
              verursacht.
            </p>
            <p className="reveal">
              Weil das nur funktioniert, wenn man wirklich nah dran ist, bleibt
              die Zahl der Mandate bewusst klein.
            </p>
          </div>
          <p className="muted-note about-note reveal" data-testid="about-note">
            Aktuell nehme ich ausgewählte Mandate an.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Closing = () => (
  <section className="section closing" data-testid="closing">
    <div className="wrap closing-inner">
      <p className="eyebrow reveal">Kontakt</p>
      <h2 className="h2 reveal" data-testid="closing-h2">
        Passt <em>das?</em>
      </h2>
      <p className="body body-lg closing-body reveal" data-testid="closing-body">
        Wenn Sie das Gefühl haben, dass Ihre Online-Präsenz nicht mehr
        widerspiegelt, was Sie leisten, lohnt sich ein kurzes Gespräch. Zwanzig
        Minuten, unverbindlich — danach wissen wir beide, ob es passt. Und falls
        nicht, haben Sie zumindest eine ehrliche Einschätzung.
      </p>
      <div className="closing-actions">
        <a href={MAILTO} className="btn-gold reveal" data-testid="closing-cta">
          Schauen wir ob es passt — 20 Minuten
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="closing-email reveal"
          data-testid="closing-email"
        >
          {EMAIL}
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer" data-testid="footer">
    <div className="wrap footer-inner">
      <span className="footer-logo">Reich</span>
      <span className="footer-meta">Digitale Präzision für Professionals.</span>
      <span className="footer-meta">© {new Date().getFullYear()} · Schweiz</span>
    </div>
  </footer>
);

function App() {
  const ref = useReveal();
  return (
    <div className="reich" ref={ref}>
      <Nav />
      <Hero />
      <hr className="divider" />
      <Leistungen />
      <hr className="divider" />
      <Referenzen />
      <hr className="divider" />
      <UeberMich />
      <Closing />
      <Footer />
    </div>
  );
}

export default App;
