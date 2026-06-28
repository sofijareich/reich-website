import { useEffect, useRef } from "react";
import "@/App.css";

const EMAIL = "contact@reichstudio.ch";
const MAILTO =
  "mailto:contact@reichstudio.ch?subject=Erstgespr%C3%A4ch%20%E2%80%93%2020%20Minuten&body=Guten%20Tag%20Frau%20Reich%2C%0A%0Aich%20w%C3%BCrde%20gerne%20unverbindlich%20pr%C3%BCfen%2C%20ob%20eine%20Zusammenarbeit%20passt.";

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
        <a href="#leistungen" className="nav-link" data-testid="nav-leistungen">Leistungen</a>
        <a href="#prozess" className="nav-link" data-testid="nav-prozess">Prozess</a>
        <a href="#ai" className="nav-link" data-testid="nav-ai">AI</a>
        <a href="#referenzen" className="nav-link" data-testid="nav-referenzen">Referenzen</a>
        <a href="#ueber" className="nav-link" data-testid="nav-ueber">Über mich</a>
        <a href={MAILTO} className="nav-link" data-testid="nav-kontakt">Kontakt</a>
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
        Meine ersten Kunden habe ich nicht durch Empfehlungen gewonnen. Ich habe
        einfach angerufen, eine ehrliche Einschätzung gegeben — und angefangen.
        Genau diese Direktheit bringe ich in jedes Projekt.
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
    body: "Wer Sie sucht, soll Sie finden. Ich baue eine Sichtbarkeit auf, die zu Ihrem Anspruch passt: fundiert, technisch sauber und auf die Kunden ausgerichtet, die Sie wirklich gewinnen möchten.",
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
    name: "Hotel Sempachersee",
    tag: "Event Content · Kanton Luzern",
    desc: "Foto- und Videoaufnahmen für einen Hospitality-Event. Professionelle Bar-Shots und kurze Videosequenzen, die zeigen wie ein Anlass wirkt wenn er gut festgehalten wird.",
  },
  {
    name: "All In One Bar",
    tag: "Foto & Video · Gastro",
    desc: "Professionelle Bar-Shots und ein Testvideo für Social Media. Visuelles Material das den Charakter des Ortes zeigt und für die digitale Kommunikation eingesetzt werden kann.",
  },
  {
    name: "Finanzberatung · Deutschschweiz",
    tag: "Laufend · Digitale Positionierung",
    desc: "Fortlaufende Zusammenarbeit mit einem unabhängigen Finanzberater in der Deutschschweiz. Aufbau der digitalen Sichtbarkeit und schrittweise Optimierung über mehrere Monate.",
  },
];

const Referenzen = () => (
  <section id="referenzen" className="section" data-testid="referenzen">
    <div className="wrap">
      <div className="section-head">
        <p className="eyebrow reveal">Referenzen</p>
        <h2 className="h2 reveal" style={{ marginTop: "26px" }}>
          Wenige Projekte, <em>mit Tiefe.</em>
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

const prozessSchritte = [
  {
    num: "01",
    title: "Analyse & Gespräch",
    body: "Ich schaue mir an wo Sie stehen, online und im Markt. Dann reden wir. Zwanzig Minuten reichen meistens, um zu verstehen worum es wirklich geht.",
  },
  {
    num: "02",
    title: "Strategie & Plan",
    body: "Ich erarbeite einen konkreten Plan mit klaren Prioritäten. Was zuerst, warum und bis wann. Das passt auf eine Seite und nicht in eine Präsentation.",
  },
  {
    num: "03",
    title: "Umsetzung & Reporting",
    body: "Ich liefere und halte Sie auf dem Laufenden. Kurze Updates wenn etwas passiert, monatlich ein Überblick mit echten Zahlen. Sie müssen nicht nachfragen.",
  },
  {
    num: "04",
    title: "Optimierung",
    body: "Was funktioniert, bauen wir aus. Was nicht funktioniert, ändern wir. Das ist keine grosse Sache, das ist einfach wie gute Zusammenarbeit aussieht.",
  },
];

const Prozess = () => (
  <section id="prozess" className="section" data-testid="prozess">
    <div className="wrap">
      <div className="section-head">
        <p className="eyebrow reveal">Zusammenarbeit</p>
        <h2 className="h2 reveal" style={{ marginTop: "26px" }}>
          Wie ich <em>arbeite.</em>
        </h2>
        <p className="body section-intro reveal">
          Ich brauche kein grosses Onboarding. Ein Gespräch reicht, um zu
          verstehen was Sie brauchen. Danach fange ich an.
        </p>
      </div>
      <div className="grid-prozess reveal">
        {prozessSchritte.map((s, i) => (
          <div key={i} className="pcard" data-testid={`prozess-${i}`}>
            <div className="pcard-num">{s.num}</div>
            <h3 className="pcard-title">{s.title}</h3>
            <p className="body pcard-body">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const aiLeistungen = [
  {
    icon: "✦",
    label: "Kommunikation",
    title: "Anfragen automatisch bearbeiten",
    body: "Neue Anfragen werden automatisch beantwortet, kategorisiert und weitergeleitet. Sie müssen sich nicht mehr durch jede eingehende E-Mail arbeiten.",
    tools: ["Claude", "Make.com", "E-Mail"],
  },
  {
    icon: "✦",
    label: "Content",
    title: "Texte & Exposés generieren",
    body: "Für Makler, Anwälte und Ärzte: Beschreibungen, Anschreiben und Social Posts entstehen in Minuten statt Stunden, in Ihrer eigenen Sprache und Ihrem eigenen Stil.",
    tools: ["Claude", "ChatGPT", "Notion"],
  },
  {
    icon: "✦",
    label: "Workflow",
    title: "Arbeitsabläufe übergeben",
    body: "Terminplanung, Dokumentenablage, Reporting. Alles was sich wiederholt, lässt sich automatisieren. Sie konzentrieren sich auf Ihre Kunden, der Rest läuft im Hintergrund.",
    tools: ["Make.com", "Zapier", "Claude"],
  },
];

const AI = () => (
  <section id="ai" className="section" data-testid="ai">
    <div className="wrap">
      <div className="section-head">
        <p className="eyebrow reveal">AI & Automatisierung</p>
        <h2 className="h2 reveal" style={{ marginTop: "26px" }}>
          Mehr Zeit für das, <em>was zählt.</em>
        </h2>
        <p className="body section-intro reveal">
          Ich helfe Professionals dabei, AI-Tools sinnvoll in ihren Alltag zu
          integrieren — nicht als Spielerei, sondern als echte
          Arbeitsentlastung. Das kann ein einmaliges Coaching sein oder ein
          vollständig aufgesetzter Workflow, der im Hintergrund läuft.
        </p>
      </div>
      <div className="grid-ai reveal">
        {aiLeistungen.map((a, i) => (
          <div key={i} className="aicard" data-testid={`ai-card-${i}`}>
            <div className="aicard-head">
              <span className="aicard-icon">{a.icon}</span>
              <span className="eyebrow">{a.label}</span>
            </div>
            <h3 className="aicard-title">{a.title}</h3>
            <p className="body aicard-body">{a.body}</p>
            <div className="aicard-tools">
              {a.tools.map((t, j) => (
                <span key={j} className="tool-tag">{t}</span>
              ))}
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
              die Zahl der Projekte bewusst klein.
            </p>
          </div>
          <p className="muted-note about-note reveal" data-testid="about-note">
            Aktuell nehme ich neue Kunden an.
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
      <Prozess />
      <hr className="divider" />
      <AI />
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
