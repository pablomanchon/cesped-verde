import Image from "next/image";
import ContactForm from "./components/ContactForm";
import ScrollAnimations from "./components/ScrollAnimations";

const services = [
  {
    number: "01",
    title: "Diseño, transformación y paisajismo",
    text: "Proyectamos jardines funcionales, estéticos, adaptados al clima mendocino y a tu hogar.",
    icon: "landscape",
  },
  {
    number: "02",
    title: "Mantenimiento integral personalizado",
    text: "Según tu espacio, nos encargamos de todos los detalles necesarios y cuidados periódicos, para que puedas disfrutar sin ocuparte.",
    icon: "leaf",
  },
  {
    number: "03",
    title: "Sistema de riego automatizado",
    text: "Instalamos y optimizamos sistemas eficientes para aprovechar cada gota de agua.",
    icon: "water",
  },
  {
    number: "04",
    title: "Poda y sanidad vegetal",
    text: "Cuidamos todo tu jardín, enfocándonos en árboles y arbustos para que crezcan fuertes, seguros y saludables.",
    icon: "branch",
  },
];

const monthlyPlans = [
  {
    number: "01",
    title: "Mantenimiento esencial",
    frequency: "2 visitas al mes",
    description: "El cuidado periódico que tu jardín necesita para mantenerse ordenado y saludable.",
    features: ["Corte de césped y bordes", "Limpieza general", "Control del estado de las plantas"],
  },
  {
    number: "02",
    title: "Cuidado integral",
    frequency: "4 visitas al mes",
    description: "Un seguimiento más frecuente para disfrutar un espacio verde siempre listo.",
    features: ["Todo lo incluido en el plan esencial", "Poda de arbustos y plantas", "Fertilización y control preventivo"],
    featured: true,
  },
  {
    number: "03",
    title: "Mantenimiento intensivo",
    frequency: "6 visitas al mes",
    description: "Mayor frecuencia de atención para espacios amplios o jardines de uso intensivo.",
    features: ["Cuidado frecuente del césped", "Poda y limpieza continua", "Seguimiento de riego y sanidad"],
  },
  {
    number: "04",
    title: "Jardín completo",
    frequency: "Plan personalizado",
    description: "Una propuesta a medida para jardines que requieren una atención más completa.",
    features: ["Mantenimiento integral", "Revisión del sistema de riego", "Planificación según cada estación"],
  },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 48 48" role="img">
        <path d="M24 42V19M24 30C16 30 11 25 11 17c8 0 13 5 13 13ZM24 24c8 0 13-5 13-13-8 0-13 5-13 13Z" />
      </svg>
    </span>
  );
}

function ServiceIcon({ type }: { type: string }) {
  if (type === "water") {
    return <svg viewBox="0 0 32 32"><path d="M16 3S7 14 7 20a9 9 0 0 0 18 0C25 14 16 3 16 3Z"/><path d="M12 21c.6 2 2 3 4 3"/></svg>;
  }
  if (type === "branch") {
    return <svg viewBox="0 0 32 32"><path d="M6 27c8-4 13-10 18-22"/><path d="M13 20c-4 0-7-2-8-6 5-1 8 1 8 6ZM19 13c0-4 3-7 7-8 0 5-2 8-7 8Z"/></svg>;
  }
  if (type === "landscape") {
    return <svg viewBox="0 0 32 32"><path d="M4 25h24M7 25l7-14 5 10 3-6 5 10"/><circle cx="24" cy="7" r="3"/></svg>;
  }
  return <svg viewBox="0 0 32 32"><path d="M26 6C14 6 7 12 7 22c8 2 18-5 19-16Z"/><path d="M5 27c5-7 10-10 17-16"/></svg>;
}

function ContactIcon({ type }: { type: "phone" | "whatsapp" }) {
  if (type === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.2 11.6a8.2 8.2 0 0 1-11.9 7.3L4 20l1.1-4.2a8.2 8.2 0 1 1 15.1-4.2Z" />
        <path className="contact-icon-fill" d="m8.2 7.4 1.6-.8 1.7 3-1.3 1a8.3 8.3 0 0 0 3.6 3.6l1-1.3 3 1.7-.8 1.6c-.3.6-1 .9-1.6.8a10.2 10.2 0 0 1-8.2-8.2c-.1-.6.2-1.3 1-1.4Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 16.4v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.7 19.7 0 0 1 1.1 3.7 2 2 0 0 1 3.1 1.5h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L7.1 9.5a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9Z" />
    </svg>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "Césped Verde",
  image: "https://www.cespedverde.com.ar/images/hero-jardin-mendoza.webp",
  url: "https://www.cespedverde.com.ar",
  telephone: "+54-9-263-451-7032",
  description: "Servicios de jardinería, paisajismo, mantenimiento y riego en Mendoza.",
  priceRange: "$$",
  areaServed: ["Ciudad de Mendoza", "Godoy Cruz", "Guaymallén", "Luján de Cuyo", "Maipú", "Las Heras"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mendoza",
    addressRegion: "Mendoza",
    addressCountry: "AR",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ScrollAnimations />

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Césped Verde, inicio">
          <BrandMark />
          <span><strong>CÉSPED</strong><small>VERDE</small></span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#proceso">Cómo trabajamos</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="header-cta" href="#contacto">Pedir presupuesto <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <Image
            className="hero-image"
            src="/images/hero-jardin-mendoza.webp"
            alt="Jardín residencial con césped y plantas de bajo consumo hídrico frente a la precordillera de Mendoza"
            fill
            priority
            sizes="100vw"
            quality={88}
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow light"><span /> Jardinería & paisajismo · Mendoza</p>
            <h1>Tu espacio verde,<br /><em>en buenas manos.</em></h1>
            <p className="hero-copy">Diseñamos, transformamos y cuidamos jardines pensados para disfrutar todo el año.</p>
            <div className="hero-actions">
              <a className="button button-lime" href="#contacto">Quiero mejorar mi jardín <span aria-hidden="true">↗</span></a>
              <a className="text-link light-link" href="#servicios">Conocé nuestros servicios <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero-proof">
            <div className="proof-avatars area-icon" aria-hidden="true"><span>⌖</span></div>
            <div><strong>Gran Mendoza</strong><small>Atención personalizada en tu zona</small></div>
          </div>
          <a className="hero-scroll" href="#servicios" aria-label="Ir a servicios"><span>SCROLL</span><i>↓</i></a>
        </section>

        <section className="intro section" id="servicios">
          <div className="section-heading">
            <p className="eyebrow"><span /> Lo que hacemos</p>
            <h2>Todo lo que tu jardín<br /><em>necesita para crecer.</em></h2>
          </div>
          <p className="section-lead">Nos ocupamos de cada detalle con soluciones sustentables, criterio técnico y conocimiento del clima de Mendoza.</p>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-top"><span>{service.number}</span><div className="service-icon"><ServiceIcon type={service.icon} /></div></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contacto" aria-label={`Consultar por ${service.title}`}>Consultar <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="monthly-plans section" id="planes-mensuales">
          <div className="monthly-plans-header">
            <div className="section-heading">
              <p className="eyebrow"><span /> Contrataciones mensuales</p>
              <h2>Cuidado continuo,<br /><em>todo el año.</em></h2>
            </div>
            <p>Elegí la frecuencia que mejor se adapte a tu espacio. Estos planes son ejemplos y podemos personalizarlos según las necesidades de tu jardín.</p>
          </div>
          <div className="monthly-plans-grid">
            {monthlyPlans.map((plan) => (
              <article className={`monthly-plan${plan.featured ? " monthly-plan-featured" : ""}`} key={plan.number}>
                <div className="monthly-plan-top"><span>{plan.number}</span><small>{plan.frequency}</small></div>
                <h3>{plan.title}</h3>
                <p>{plan.description}</p>
                <ul>
                  {plan.features.map((feature) => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}
                </ul>
                <a href="#contacto" aria-label={`Consultar por el plan ${plan.title}`}>Consultar este plan <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="about section" id="nosotros">
          <div className="about-image-wrap">
            <div className="about-image-frame">
              <Image
                className="about-image"
                src="/images/mantenimiento-jardin.webp"
                alt="Trabajo profesional de mantenimiento de césped y canteros en Mendoza"
                fill
                loading="eager"
                sizes="(max-width: 800px) 100vw, 50vw"
                quality={84}
              />
            </div>
          </div>
          <div className="about-copy">
            <p className="eyebrow"><span /> Nuestra forma de trabajar</p>
            <h2>Jardines lindos.<br /><em>Decisiones inteligentes.</em></h2>
            <p>En Mendoza, un buen jardín necesita mucho más que agua. Elegimos las especies correctas, planificamos un riego eficiente y cuidamos cada espacio como si fuera propio.</p>
            <ul>
              <li><i>✓</i><span><strong>Conocimiento local</strong>Soluciones pensadas para nuestro suelo y clima.</span></li>
              <li><i>✓</i><span><strong>Trabajo responsable</strong>Cumplimos con los tiempos y cuidamos tu casa.</span></li>
              <li><i>✓</i><span><strong>Seguimiento cercano</strong>Te acompañamos también después de cada trabajo.</span></li>
            </ul>
            <a className="text-link" href="#contacto">Conocenos mejor <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="process section" id="proceso">
          <div className="section-heading centered">
            <p className="eyebrow"><span /> Simple y claro</p>
            <h2>Del primer mensaje a<br /><em>tu nuevo jardín.</em></h2>
          </div>
          <div className="steps">
            <article><span>01</span><div className="step-dot" /><h3>Nos contás tu idea</h3><p>Escribinos y coordinamos una visita a tu espacio para que la visualicemos juntos.</p></article>
            <article><span>02</span><div className="step-dot" /><h3>Armamos la propuesta</h3><p>Te presentamos un diseño claro y un presupuesto detallado.</p></article>
            <article><span>03</span><div className="step-dot" /><h3>Nos ponemos a trabajar</h3><p>Ejecutamos el proyecto desde tus propuestas con cuidado, profesionalismo y atención en cada detalle.</p></article>
            <article><span>04</span><div className="step-dot" /><h3>Vos lo disfrutás</h3><p>Dejamos listo tu jardín para que puedas habitarlo y seguimos cerca cuando más nos necesites.</p></article>
          </div>
        </section>

        <section className="testimonial section">
          <div className="quote-mark">“</div>
          <blockquote>Un buen jardín no sólo se ve lindo: <em>se adapta a tu vida, al clima y al paso del tiempo.</em></blockquote>
        </section>

        <section className="areas" aria-label="Zonas de atención">
          <div className="areas-track">
            <div className="areas-group">
              <span>Ciudad de Mendoza</span><i>✦</i><span>Godoy Cruz</span><i>✦</i><span>Guaymallén</span><i>✦</i><span>Luján de Cuyo</span><i>✦</i><span>Maipú</span><i>✦</i>
            </div>
            <div className="areas-group areas-group-copy" aria-hidden="true">
              <span>Ciudad de Mendoza</span><i>✦</i><span>Godoy Cruz</span><i>✦</i><span>Guaymallén</span><i>✦</i><span>Luján de Cuyo</span><i>✦</i><span>Maipú</span><i>✦</i>
            </div>
          </div>
        </section>

        <section className="contact section" id="contacto">
          <div className="contact-copy">
            <p className="eyebrow light"><span /> Hablemos</p>
            <h2>¿Imaginamos juntos<br /><em>tu próximo jardín?</em></h2>
            <p>Contanos qué necesitás. Visitamos tu espacio y preparamos un presupuesto personalizado, sin cargo.</p>
            <div className="contact-details">
              <a href="tel:+5492634517032"><span><ContactIcon type="phone" /></span><div><small>Llamanos</small><strong>+54 9 263 451-7032</strong></div></a>
              <a href="https://wa.me/5492634517032?text=%C2%A1Hola%2C%20C%C3%A9sped%20Verde!%20Quiero%20hacer%20una%20consulta." target="_blank" rel="noopener noreferrer"><span><ContactIcon type="whatsapp" /></span><div><small>Escribinos por WhatsApp</small><strong>Respuesta personalizada</strong></div></a>
            </div>
            <p className="service-area">Atendemos Gran Mendoza y alrededores</p>
          </div>
          <ContactForm />
        </section>
      </main>

      <a
        className="whatsapp-float"
        href="https://wa.me/5492634517032?text=%C2%A1Hola%2C%20C%C3%A9sped%20Verde!%20Quiero%20solicitar%20un%20presupuesto."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Consultar a Césped Verde por WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path className="wa-bubble" d="M16 4.2A11.8 11.8 0 0 0 5.8 21.9L4.3 27.7l5.9-1.5A11.8 11.8 0 1 0 16 4.2Z" />
          <path className="wa-phone" d="m10.3 9.2 2.3-1.1 2.4 4.2-1.9 1.4a12.2 12.2 0 0 0 5.2 5.2l1.4-1.9 4.2 2.4-1.1 2.3c-.4.9-1.4 1.3-2.3 1.1A14.7 14.7 0 0 1 9.2 11.5c-.2-.9.2-1.9 1.1-2.3Z" />
        </svg>
        <span>¿Hablamos?</span>
      </a>

      <footer>
        <div className="footer-main">
          <a className="brand footer-brand" href="#inicio"><BrandMark /><span><strong>CÉSPED</strong><small>VERDE</small></span></a>
          <p>Jardines que se disfrutan.<br />Soluciones que perduran.</p>
          <div className="footer-nav"><a href="#servicios">Servicios</a><a href="#nosotros">Nosotros</a><a href="#proceso">Cómo trabajamos</a><a href="#contacto">Contacto</a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Césped Verde. Mendoza, Argentina.</span><a href="#inicio">Volver arriba ↑</a></div>
      </footer>
    </>
  );
}
