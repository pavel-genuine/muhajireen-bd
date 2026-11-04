
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../public/images/logo.png";
import Footer from "../../components/footer/Footer";
import WAIcon from "../../components/WAIcon/WAIcon";

const BASE = "/images/slider/hero-slide";

const items = {
    "commercial-retail": {
        number: "01",
        category: "COMMERCIAL",
        title: "Spaces That Inspire",
        subtitle: "A new destination for business, retail and everyday experiences.",
        intro:
            "A thoughtfully planned commercial destination where business, shopping and community life come together.",
        description: [
            "MUHAJIREEN brings together a modern commercial environment designed to support business growth, convenient shopping and vibrant social interaction. Carefully considered spaces create opportunities for retailers, entrepreneurs and visitors to connect in an accessible and welcoming setting.",
            "From everyday essentials to memorable shopping experiences, the commercial destination is envisioned as an integral part of the wider community. Its relationship with surrounding residential, healthcare and lifestyle facilities helps create a more connected and convenient urban experience.",
            "The planning philosophy focuses on accessibility, a clear sense of place and an environment that can evolve with the needs of the community."
        ],
        hero: `${BASE}/img-2.1-main.png`,
        gallery: [
            `${BASE}/img-2.1-main.png`,
            `${BASE}/img-2.1-fg.png`,
            `${BASE}/img-2.2-main.png`
        ],
        video: "YOUR_YOUTUBE_VIDEO_ID",
        features: ["Retail and commercial spaces", "Business-friendly environment", "Convenient access", "Connected community facilities"],
        stats: [
            { value: "01", label: "Commercial destination" },
            { value: "24/7", label: "Community convenience vision" },
            { value: "360°", label: "Connected lifestyle" }
        ],
        highlights: ["Business opportunities", "Retail convenience", "Community connection"],
        related: ["residential-living", "central-park", "healthcare"]
    },
    "residential-living": {
        number: "02",
        category: "RESIDENTIAL",
        title: "Elevated Lifestyle",
        subtitle: "A more considered approach to modern community living.",
        intro:
            "Residential spaces designed around comfort, connection and the rhythm of everyday life.",
        description: [
            "A great residential environment is about more than a home. It is about the experience of returning to a welcoming neighbourhood, finding essential services nearby and enjoying spaces that make everyday life feel more balanced.",
            "The residential vision at MUHAJIREEN brings homes into a broader community setting. Access to commercial facilities, healthcare, education and green spaces helps create a connected environment for different stages of life.",
            "With a focus on the overall neighbourhood experience, residential living is planned as part of a wider lifestyle destination rather than an isolated development."
        ],
        hero: `${BASE}/img-3.1-main.png`,
        gallery: [
            `${BASE}/img-3.1-main.png`,
            `${BASE}/img-3.1-fg.png`,
            `${BASE}/img-2.1-main.png`
        ],
        video: "YOUR_YOUTUBE_VIDEO_ID",
        features: ["Contemporary residential vision", "Connected neighbourhood", "Access to daily essentials", "Community-focused planning"],
        stats: [
            { value: "01", label: "Residential destination" },
            { value: "360°", label: "Lifestyle connection" },
            { value: "∞", label: "Everyday possibilities" }
        ],
        highlights: ["Comfortable living", "Neighbourhood connection", "Everyday convenience"],
        related: ["commercial-retail", "central-park", "education"]
    },
    "central-park": {
        number: "03",
        category: "GREEN SPACE",
        title: "Room to Breathe",
        subtitle: "A refreshing connection between nature and community life.",
        intro:
            "Green space that brings a sense of openness, balance and calm to the neighbourhood.",
        description: [
            "Green spaces offer an important counterpoint to the pace of urban life. They provide room to pause, enjoy the outdoors and experience the neighbourhood from a different perspective.",
            "The central park concept at MUHAJIREEN is envisioned as a shared community destination where landscape and everyday life can come together. Open areas can support relaxation, informal gatherings and outdoor activities, subject to the final landscape plan.",
            "Integrated green space can also help give a development a stronger identity, creating visual breathing room and a more inviting environment for residents and visitors."
        ],
        hero: `${BASE}/img-9.1-main.png`,
        gallery: [
            `${BASE}/img-9.1-main.png`,
            `${BASE}/img-3.1-main.png`,
            `${BASE}/img-2.1-main.png`
        ],
        video: "YOUR_YOUTUBE_VIDEO_ID",
        features: ["Landscape-led environment", "Outdoor relaxation", "Community gathering potential", "A greener neighbourhood vision"],
        stats: [
            { value: "01", label: "Central green destination" },
            { value: "OPEN", label: "Outdoor experiences" },
            { value: "NATURE", label: "A more balanced setting" }
        ],
        highlights: ["Open-air experiences", "Relaxation", "Community life"],
        related: ["residential-living", "commercial-retail", "education"]
    },
    healthcare: {
        number: "04",
        category: "HEALTHCARE",
        title: "Care Within Reach",
        subtitle: "A healthcare destination planned around community wellbeing.",
        intro:
            "Healthcare access is an essential part of a connected and liveable community.",
        description: [
            "Access to healthcare is an important consideration when choosing where to live, work and build a future. A well-connected healthcare destination can help make essential services more accessible to the surrounding community.",
            "The healthcare vision at MUHAJIREEN is intended to form part of the wider development, connecting medical facilities with residential areas and other essential destinations.",
            "Specific medical services, departments, operating arrangements and facility specifications should be confirmed against the project's approved plans and official healthcare information."
        ],
        hero: `${BASE}/img-4.1-main.png`,
        gallery: [
            `${BASE}/img-4.1-main.png`,
            `${BASE}/img-5.1-main.png`,
            `${BASE}/img-6.1-main1.png`
        ],
        video: "YOUR_YOUTUBE_VIDEO_ID",
        features: ["Healthcare destination", "Community-focused planning", "Connection to surrounding facilities", "Integrated development setting"],
        stats: [
            { value: "01", label: "Healthcare destination" },
            { value: "CARE", label: "Community wellbeing" },
            { value: "ACCESS", label: "Connected planning" }
        ],
        highlights: ["Healthcare access", "Community wellbeing", "Integrated facilities"],
        related: ["dental-hospital", "nursing-institute", "residential-living"]
    },
    "dental-hospital": {
        number: "05",
        category: "DENTAL CARE",
        title: "A Brighter Standard of Care",
        subtitle: "A dedicated destination for dental healthcare.",
        intro:
            "A specialist dental-care concept within the wider community infrastructure.",
        description: [
            "Oral health is an essential part of overall wellbeing. A dedicated dental-care destination can help bring specialist services closer to the people who need them.",
            "Within MUHAJIREEN, the dental hospital is presented as part of the broader healthcare ecosystem, supporting a more connected approach to essential community services.",
            "The final clinical services, equipment, specialists and operational details should be added from the project's verified information before publication."
        ],
        hero: `${BASE}/img-5.1-main.png`,
        gallery: [
            `${BASE}/img-5.1-main.png`,
            `${BASE}/img-4.1-main.png`,
            `${BASE}/img-6.1-main1.png`
        ],
        video: "YOUR_YOUTUBE_VIDEO_ID",
        features: ["Dedicated dental-care destination", "Part of the healthcare ecosystem", "Community accessibility", "Specialist-care concept"],
        stats: [
            { value: "01", label: "Dental-care destination" },
            { value: "CARE", label: "Oral health focus" },
            { value: "ACCESS", label: "Community connection" }
        ],
        highlights: ["Oral health", "Specialist care", "Convenient access"],
        related: ["healthcare", "nursing-institute", "residential-living"]
    },
    "nursing-institute": {
        number: "06",
        category: "EDUCATION & HEALTH",
        title: "Shaping the Caregivers of Tomorrow",
        subtitle: "A learning environment connected to the future of healthcare.",
        intro:
            "A nursing education concept focused on learning, professional development and care.",
        description: [
            "Quality healthcare depends not only on facilities but also on the people who provide care. Nursing education plays an important role in developing knowledge, practical skills and professional responsibility.",
            "The nursing institute concept at MUHAJIREEN brings education into the wider healthcare vision. Its position alongside other community infrastructure creates an opportunity to present learning and healthcare as complementary parts of a connected destination.",
            "Accreditation, programmes, admissions, clinical training arrangements and institutional details should be published only after confirmation from official project sources."
        ],
        hero: `${BASE}/img-6.1-main1.png`,
        gallery: [
            `${BASE}/img-6.1-main1.png`,
            `${BASE}/img-4.1-main.png`,
            `${BASE}/img-5.1-main.png`
        ],
        video: "YOUR_YOUTUBE_VIDEO_ID",
        features: ["Nursing education concept", "Healthcare learning environment", "Professional development vision", "Connection to healthcare facilities"],
        stats: [
            { value: "01", label: "Education destination" },
            { value: "LEARN", label: "Professional development" },
            { value: "CARE", label: "People-centred purpose" }
        ],
        highlights: ["Learning", "Professional growth", "Healthcare connection"],
        related: ["healthcare", "dental-hospital", "education"]
    },
    education: {
        number: "07",
        category: "EDUCATION",
        title: "Inspiring the Future",
        subtitle: "A learning destination designed to be part of a connected community.",
        intro:
            "Education is a foundation for individual opportunity and long-term community growth.",
        description: [
            "A strong community makes room for learning and personal development. Educational facilities close to residential areas can contribute to a more convenient everyday routine for families.",
            "The education vision at MUHAJIREEN forms part of the wider infrastructure plan, connecting learning with residential life, healthcare and other community destinations.",
            "School curriculum, grade levels, admissions, facilities and accreditation should be detailed using verified information from the institution or project team."
        ],
        hero: `${BASE}/img-8-main.png`,
        gallery: [
            `${BASE}/img-8-main.png`,
            `${BASE}/img-3.1-main.png`,
            `${BASE}/img-7-main.png`
        ],
        video: "YOUR_YOUTUBE_VIDEO_ID",
        features: ["Education destination", "Family-oriented planning", "Connected community", "Learning-focused environment"],
        stats: [
            { value: "01", label: "Education destination" },
            { value: "GROW", label: "Learning and development" },
            { value: "FUTURE", label: "Long-term opportunity" }
        ],
        highlights: ["Learning opportunities", "Family convenience", "Future development"],
        related: ["residential-living", "central-park", "nursing-institute"]
    },
    "faith-community": {
        number: "08",
        category: "FAITH & COMMUNITY",
        title: "A Place to Find Serenity",
        subtitle: "A welcoming space for reflection, faith and community connection.",
        intro:
            "A dedicated place of worship that forms part of the wider neighbourhood vision.",
        description: [
            "Places of worship can provide more than a physical destination. They can offer space for reflection, shared values and meaningful connections between people in the community.",
            "The faith and community facilities at MUHAJIREEN are envisioned as part of a wider neighbourhood where daily life, essential services and community connections can exist in harmony.",
            "Specific facilities, capacity and operational arrangements should be described according to the approved plans and official project details."
        ],
        hero: `${BASE}/img-7-main.png`,
        gallery: [
            `${BASE}/img-7-main.png`,
            `${BASE}/img-8-main.png`,
            `${BASE}/img-3.1-main.png`
        ],
        video: "YOUR_YOUTUBE_VIDEO_ID",
        features: ["Place of worship", "Community connection", "Space for reflection", "Neighbourhood integration"],
        stats: [
            { value: "01", label: "Faith destination" },
            { value: "UNITY", label: "Community connection" },
            { value: "PEACE", label: "Space for reflection" }
        ],
        highlights: ["Faith", "Reflection", "Community"],
        related: ["education", "central-park", "residential-living"]
    }
};

const labels = {
    "commercial-retail": "Commercial & Retail",
    "residential-living": "Residential Living",
    "central-park": "Central Park",
    healthcare: "Healthcare",
    "dental-hospital": "Dental Hospital",
    "nursing-institute": "Nursing Institute",
    education: "Education",
    "faith-community": "Faith & Community"
};

function getYouTubeEmbed(video) {
    if (!video || video === "YOUR_YOUTUBE_VIDEO_ID") return null;

    const match = video.match(
        /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );

    return match ? match[1] : video;
}

export default function InfrastructureDetail({ id }) {
    const item = items[id];

    if (!item) {
        return (
            <main className="not-found">
                <h1>Infrastructure not found</h1>
                <p>The infrastructure page you requested could not be found.</p>
                <Link href="/">Return to homepage ↗</Link>
                <style jsx>{`
          .not-found {
            min-height: 70vh;
            display: grid;
            align-content: center;
            justify-items: center;
            padding: 40px 20px;
            background: #f7f4ee;
            color: #272720;
            text-align: center;
          }
          a {
            color: #9b7843;
          }
        `}</style>
            </main>
        );
    }

    const videoId = getYouTubeEmbed(item.video);
    const related = item.related
        .filter((relatedId) => items[relatedId])
        .map((relatedId) => ({
            id: relatedId,
            ...items[relatedId]
        }));

    return (
        <>
            <Head>
                <title>{item.title} | MUHAJIREEN</title>
                <meta name="description" content={item.intro} />
                <meta name="theme-color" content="#f7f4ee" />
            </Head>

            <main className="infrastructure-page">
                <Navbar Logo={Logo} />
                {/* HERO */}
                <section className="hero">
                    <div className="hero-image">
                        <Image
                            src={item.hero}
                            alt={item.title}
                            fill
                            priority
                            sizes="100vw"
                            style={{ objectFit: "cover" }}
                        />
                    </div>

                    <div className="hero-wash" />

                    <div style={{ marginTop: '60px' }} className="hero-inner">
                        <div className="breadcrumbs">
                            <Link href="/">Home</Link>
                            <span>/</span>
                            <Link href="/#infrastructure">Infrastructure</Link>
                            <span>/</span>
                            <span>{labels[id]}</span>
                        </div>

                        <div className="hero-copy">
                            <div className="eyebrow">
                                <span className="eyebrow-line" />
                                {item.category} · MUHAJIREEN
                            </div>

                            <h1>{item.title}</h1>
                            <p>{item.subtitle}</p>

                            <a href="#project-video" className="hero-cta">
                                Explore the vision <span>↘</span>
                            </a>
                        </div>

                        <div className="hero-index">
                            <span>{item.number}</span>
                            <i />
                            <span>INFRASTRUCTURE</span>
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="intro-section section-wrap">
                    <div className="intro-label">
                        <span className="small-number">{item.number}</span>
                        <span>THE VISION</span>
                    </div>

                    <div className="intro-copy">
                        <p className="intro-lead">{item.intro}</p>
                        <p className="intro-support">
                            Thoughtfully connected spaces. A more considered community
                            experience. A destination designed around the things that matter.
                        </p>
                    </div>
                </section>

                {/* VIDEO — MOVED UP */}
                <section className="video-section section-wrap" id="project-video">
                    <div className="section-heading">
                        <div>
                            <span className="eyebrow dark-eyebrow">SEE THE BIGGER PICTURE</span>
                            <h2>Experience the vision<span>.</span></h2>
                        </div>
                        <p>
                            Discover how this destination fits into the wider MUHAJIREEN
                            community.
                        </p>
                    </div>

                    <div className="video-frame">
                        {videoId ? (
                            <iframe
                                src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
                                title={`${item.title} — MUHAJIREEN`}
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        ) : (
                            <iframe
                                src={`https://www.youtube-nocookie.com/embed/fMiA6cikPS4?rel=0`}
                                title={`${item.title} — MUHAJIREEN`}
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        )}
                    </div>

                    <div className="video-caption">
                        <span>MUHAJIREEN</span>
                        <span>{item.category}</span>
                    </div>
                </section>

                {/* HIGHLIGHTS */}
                <section className="highlights-section">
                    <div className="section-wrap">
                        <div className="highlights-top">
                            <div>
                                <span className="eyebrow dark-eyebrow">AT A GLANCE</span>
                                <h2>Designed around <em>what matters.</em></h2>
                            </div>
                            <p>
                                A closer look at the role this destination plays in the
                                community vision.
                            </p>
                        </div>

                        <div className="stats-grid">
                            {item.stats.map((stat, index) => (
                                <article className="stat" key={stat.label}>
                                    <span className="stat-index">0{index + 1}</span>
                                    <strong>{stat.value}</strong>
                                    <span>{stat.label}</span>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* EDITORIAL GALLERY */}
                <section className="gallery-section section-wrap">
                    <div className="section-heading gallery-heading">
                        <div>
                            <span className="eyebrow dark-eyebrow">VISUAL JOURNAL</span>
                            <h2>A closer <em>look.</em></h2>
                        </div>
                        <p>
                            Explore the design, spaces and architectural character of this
                            infrastructure destination.
                        </p>
                    </div>

                    <div className="gallery-grid">
                        {item.gallery.map((src, index) => (
                            <figure className={`gallery-card gallery-card-${index + 1}`} key={`${src}-${index}`}>
                                <div className="gallery-image">
                                    <Image
                                        src={src}
                                        alt={`${item.title} — visual ${index + 1}`}
                                        fill
                                        sizes={
                                            index === 0
                                                ? "(max-width: 700px) 100vw, 60vw"
                                                : "(max-width: 700px) 100vw, 38vw"
                                        }
                                        style={{ objectFit: "cover" }}
                                    />
                                    <span className="gallery-number">
                                        0{index + 1} <i /> 03
                                    </span>
                                </div>
                                <figcaption>
                                    <span>
                                        {index === 0
                                            ? "THE BIG PICTURE"
                                            : index === 1
                                                ? "DESIGN DETAILS"
                                                : "THE EXPERIENCE"}
                                    </span>
                                    <span>↗</span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </section>

                {/* DETAILS + SIDEBAR */}
                <section className="details-section">
                    <div className="section-wrap details-layout">
                        <article className="long-content">
                            <div className="article-heading">
                                <span className="eyebrow dark-eyebrow">BEHIND THE VISION</span>
                                <h2>
                                    More than a space.
                                    <br />
                                    <em>A way of living.</em>
                                </h2>
                            </div>

                            {item.description.map((paragraph, index) => (
                                <div className="description-block" key={paragraph}>
                                    {index === 0 && (
                                        <span className="drop-number">{item.number}</span>
                                    )}
                                    <p>{paragraph}</p>
                                </div>
                            ))}

                            <div className="editorial-quote">
                                <span>“</span>
                                <p>
                                    Thoughtful planning creates places that feel connected,
                                    purposeful and part of something bigger.
                                </p>
                                <small>THE MUHAJIREEN VISION</small>
                            </div>

                            <div className="detail-highlights">
                                <span className="eyebrow dark-eyebrow">WHAT DEFINES THIS SPACE</span>
                                <h3>Key highlights</h3>

                                {item.highlights.map((highlight, index) => (
                                    <div className="highlight-row" key={highlight}>
                                        <span>0{index + 1}</span>
                                        <p>{highlight}</p>
                                        <span className="highlight-arrow">↗</span>
                                    </div>
                                ))}
                            </div>
                        </article>

                        <aside className="feature-sidebar">
                            <div className="sidebar-top">
                                <span className="eyebrow">QUICK OVERVIEW</span>
                                <span className="sidebar-mark">{item.number}</span>
                            </div>

                            <h3>Key features<span>.</span></h3>
                            <p className="sidebar-intro">
                                A snapshot of the destination's planned role within MUHAJIREEN.
                            </p>

                            <div className="feature-list">
                                {item.features.map((feature, index) => (
                                    <div className="feature-item" key={feature}>
                                        <span className="feature-check">✓</span>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="sidebar-note">
                                <span className="note-icon">✳</span>
                                <p>
                                    Explore how this destination connects with the wider
                                    community.
                                </p>
                            </div>

                            <a href="#related-infrastructure" className="sidebar-link">
                                Explore related spaces <span>↗</span>
                            </a>
                        </aside>
                    </div>
                </section>

                {/* RELATED INFRASTRUCTURE */}
                <section className="related-section section-wrap" id="related-infrastructure">
                    <div className="related-heading">
                        <div>
                            <span className="eyebrow dark-eyebrow">EXPLORE MORE</span>
                            <h2>Part of something <em>bigger.</em></h2>
                        </div>
                        <Link href="/project-overview#integrated-development" className="all-link">
                            All infrastructure <span>↗</span>
                        </Link>
                    </div>

                    <div className="related-grid">
                        {related.map((relatedItem, index) => (
                            <Link
                                href={`/infrastructure-detail/${relatedItem.id}`}
                                className="related-card"
                                key={relatedItem.id}
                            >
                                <div className="related-image">
                                    <Image
                                        src={relatedItem.hero}
                                        alt={relatedItem.title}
                                        fill
                                        sizes="(max-width: 700px) 100vw, 33vw"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <span className="related-number">
                                        0{index + 1}
                                    </span>
                                    <span className="related-open">↗</span>
                                </div>

                                <div className="related-info">
                                    <span>{relatedItem.category}</span>
                                    <h3>{relatedItem.title}</h3>
                                    <p>{relatedItem.subtitle}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="closing-section">
                    <div className="closing-inner">
                        <span className="eyebrow">THE MUHAJIREEN EXPERIENCE</span>
                        <h2>
                            Discover a place
                            <br />
                            <em>with a bigger vision.</em>
                        </h2>
                        <p>
                            Explore the destinations, spaces and possibilities that come
                            together at MUHAJIREEN.
                        </p>
                        <Link href="/#infrastructure" className="closing-button">
                            Explore MUHAJIREEN <span>↗</span>
                        </Link>
                    </div>
                    <span className="closing-watermark">M</span>
                </section>
                <Footer />
                <WAIcon />
            </main>

            <style jsx global>{`
        :root {
          --ivory: #f7f4ee;
          --paper: #fffdf9;
          --ink: #292a24;
          --muted: #77766d;
          --gold: #b4945d;
          --gold-light: #dfcba4;
          --line: #e5dfd3;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 30px;
        }

        body {
          margin: 0;
          background: var(--paper);
          color: var(--ink);
          font-family: Arial, Helvetica, sans-serif;
        }

        .infrastructure-page {
          overflow: clip;
          background: var(--paper);
          color: var(--ink);
        }

        .infrastructure-page a {
          text-decoration: none;
        }

        .section-wrap {
          width: min(1320px, calc(100% - 100px));
          margin-inline: auto;
        }

        .hero {
          min-height: 650px;
          height: min(82svh, 850px);
          position: relative;
          isolation: isolate;
          background: #d4c6af;
          color: white;
          overflow: hidden;
        }

        .hero-image,
        .hero-wash {
          position: absolute;
          inset: 0;
        }

        .hero-image {
          z-index: -2;
        }

        .hero-wash {
          z-index: -1;
          background:
            linear-gradient(
              90deg,
              rgba(25, 25, 20, 0.58) 0%,
              rgba(25, 25, 20, 0.26) 46%,
              rgba(25, 25, 20, 0.03) 100%
            ),
            linear-gradient(
              0deg,
              rgba(25, 25, 20, 0.3) 0%,
              transparent 40%
            );
        }

        .hero-inner {
          width: min(1320px, calc(100% - 100px));
          height: 100%;
          min-height: inherit;
          margin: auto;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 34px 0 32px;
        }

        .breadcrumbs {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 11px;
          letter-spacing: 0.04em;
        }

        .breadcrumbs a {
          color: white;
        }

        .breadcrumbs span:last-child {
          color: var(--gold-light);
        }

        .hero-copy {
          max-width: 850px;
          padding: 75px 0 55px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--gold-light);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          line-height: 1.7;
        }

        .eyebrow-line {
          display: inline-block;
          width: 34px;
          height: 1px;
          background: var(--gold-light);
        }

        .hero h1 {
          max-width: 850px;
          margin: 22px 0 20px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(48px, 7.5vw, 100px);
          font-weight: 400;
          line-height: 0.99;
          letter-spacing: -0.055em;
          text-wrap: balance;
        }

        .hero-copy > p {
          max-width: 570px;
          margin: 0;
          color: rgba(255, 255, 255, 0.91);
          font-size: clamp(14px, 1.5vw, 18px);
          line-height: 1.85;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 32px;
          margin-top: 30px;
          padding: 15px 19px;
          border: 1px solid rgba(255, 255, 255, 0.55);
          color: white;
          font-size: 12px;
          transition: background 0.25s, color 0.25s;
        }

        .hero-cta:hover {
          background: white;
          color: var(--ink);
        }

        .hero-cta span {
          font-size: 18px;
        }

        .hero-index {
          display: flex;
          align-items: center;
          gap: 14px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 9px;
          letter-spacing: 0.2em;
        }

        .hero-index > span:first-child {
          color: var(--gold-light);
          font-family: Georgia, serif;
          font-size: 25px;
        }

        .hero-index i {
          width: 45px;
          height: 1px;
          background: var(--gold-light);
        }

        .intro-section {
          display: grid;
          grid-template-columns: 0.7fr 2fr;
          gap: 50px;
          padding-top: 95px;
          padding-bottom: 90px;
        }

        .intro-label {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 15px;
          color: var(--muted);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.19em;
        }

        .small-number {
          color: var(--gold);
          font-family: Georgia, serif;
          font-size: 36px;
          font-weight: 400;
          letter-spacing: -0.04em;
        }

        .intro-copy {
          max-width: 850px;
        }

        .intro-lead {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(28px, 4vw, 47px);
          line-height: 1.3;
          letter-spacing: -0.035em;
        }

        .intro-support {
          max-width: 680px;
          margin: 22px 0 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .video-section {
          padding-bottom: 105px;
        }

        .section-heading,
        .highlights-top,
        .related-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 35px;
          margin-bottom: 32px;
        }

        .dark-eyebrow {
          color: var(--gold);
        }

        .section-heading h2,
        .highlights-top h2,
        .related-heading h2 {
          margin: 10px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 4.5vw, 55px);
          font-weight: 400;
          line-height: 1.13;
          letter-spacing: -0.04em;
        }

        .section-heading h2 > span {
          color: var(--gold);
        }

        .section-heading h2 em,
        .highlights-top h2 em,
        .related-heading h2 em {
          color: var(--gold);
          font-weight: 400;
        }

        .section-heading > p,
        .highlights-top > p {
          max-width: 365px;
          margin: 0 0 5px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.9;
        }

        .video-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 8.1;
          min-height: 300px;
          overflow: hidden;
          background: #e5dfd3;
        }

        .video-frame iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .video-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 25px;
          background:
            linear-gradient(rgba(37, 35, 28, 0.25), rgba(37, 35, 28, 0.48)),
            #c7b89e;
          color: white;
          text-align: center;
        }

        .play-symbol {
          display: grid;
          width: 68px;
          height: 68px;
          place-items: center;
          padding-left: 4px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          font-size: 19px;
        }

        .placeholder-label {
          margin-top: 24px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.22em;
        }

        .video-placeholder h3 {
          margin: 12px 0 6px;
          font-family: Georgia, serif;
          font-size: clamp(24px, 3.3vw, 38px);
          font-weight: 400;
        }

        .video-placeholder p {
          max-width: 440px;
          margin: 0;
          color: rgba(255, 255, 255, 0.85);
          font-size: 12px;
          line-height: 1.8;
        }

        .video-caption {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding-top: 14px;
          color: var(--muted);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.17em;
        }

        .highlights-section {
          padding: 85px 0 90px;
          background: var(--ivory);
        }

        .highlights-top {
          margin-bottom: 42px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid #dcd4c6;
          border-bottom: 1px solid #dcd4c6;
        }

        .stat {
          display: flex;
          min-height: 190px;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 26px 35px;
          border-right: 1px solid #dcd4c6;
        }

        .stat:first-child {
          padding-left: 0;
        }

        .stat:last-child {
          border-right: 0;
        }

        .stat-index {
          color: var(--gold);
          font-size: 9px;
          letter-spacing: 0.16em;
        }

        .stat strong {
          margin: 15px 0 10px;
          font-family: Georgia, serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 400;
          letter-spacing: -0.04em;
        }

        .stat > span:last-child {
          color: var(--muted);
          font-size: 12px;
          line-height: 1.7;
        }

        .gallery-section {
          padding-top: 105px;
          padding-bottom: 110px;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(0, 0.85fr);
          grid-template-rows: repeat(2, clamp(180px, 20vw, 270px));
          gap: 18px;
        }

        .gallery-card {
          min-width: 0;
          min-height: 0;
          margin: 0;
          overflow: hidden;
        }

        .gallery-card-1 {
          grid-column: 1;
          grid-row: 1 / 3;
        }

        .gallery-card-2 {
          grid-column: 2;
          grid-row: 1;
        }

        .gallery-card-3 {
          grid-column: 2;
          grid-row: 2;
        }

        .gallery-image {
          position: relative;
          height: calc(100% - 43px);
          min-height: 0;
          overflow: hidden;
          background: #e7dfd1;
        }

        .gallery-image :global(img) {
          transition: transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .gallery-card:hover .gallery-image :global(img) {
          transform: scale(1.045);
        }

        .gallery-number {
          position: absolute;
          right: 13px;
          bottom: 13px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 11px;
          background: rgba(255, 253, 249, 0.93);
          color: var(--ink);
          font-size: 9px;
          letter-spacing: 0.1em;
        }

        .gallery-number i {
          width: 18px;
          height: 1px;
          background: var(--gold);
        }

        .gallery-card figcaption {
          display: flex;
          height: 43px;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          color: var(--muted);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.14em;
        }

        .gallery-card figcaption > span:last-child {
          color: var(--gold);
          font-size: 15px;
        }

        .details-section {
          padding: 100px 0 110px;
          background: var(--ivory);
        }

        .details-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 345px;
          align-items: start;
          gap: clamp(45px, 7vw, 105px);
        }

        .long-content {
          min-width: 0;
        }

        .article-heading {
          margin-bottom: 38px;
        }

        .article-heading h2 {
          margin: 15px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(36px, 5vw, 62px);
          font-weight: 400;
          line-height: 1.12;
          letter-spacing: -0.045em;
        }

        .article-heading h2 em {
          color: var(--gold);
          font-weight: 400;
        }

        .description-block {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin: 0 0 25px;
        }

        .description-block p {
          margin: 0;
          color: #66645d;
          font-size: 14px;
          line-height: 2.05;
        }

        .drop-number {
          flex: 0 0 auto;
          color: var(--gold);
          font-family: Georgia, serif;
          font-size: 18px;
        }

        .editorial-quote {
          position: relative;
          margin: 50px 0 58px;
          padding: 30px 30px 30px 36px;
          border-left: 2px solid var(--gold);
          background: rgba(255, 253, 249, 0.7);
        }

        .editorial-quote > span {
          display: block;
          height: 32px;
          color: var(--gold);
          font-family: Georgia, serif;
          font-size: 48px;
          line-height: 1;
        }

        .editorial-quote p {
          margin: 10px 0 18px;
          font-family: Georgia, serif;
          font-size: clamp(21px, 2.5vw, 29px);
          line-height: 1.5;
        }

        .editorial-quote small {
          color: var(--muted);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
        }

        .detail-highlights h3 {
          margin: 13px 0 22px;
          font-family: Georgia, serif;
          font-size: 32px;
          font-weight: 400;
        }

        .highlight-row {
          display: grid;
          grid-template-columns: 45px minmax(0, 1fr) 20px;
          align-items: center;
          gap: 15px;
          padding: 19px 0;
          border-top: 1px solid #ddd5c8;
        }

        .highlight-row > span:first-child {
          color: var(--gold);
          font-size: 10px;
          letter-spacing: 0.12em;
        }

        .highlight-row p {
          margin: 0;
          font-size: 14px;
        }

        .highlight-arrow {
          color: var(--gold);
          font-size: 16px;
        }

        .feature-sidebar {
          position: sticky;
          top: 25px;
          padding: 30px;
          border: 1px solid #e2d8c7;
          background: var(--paper);
        }

        .sidebar-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .sidebar-top .eyebrow {
          color: var(--gold);
          font-size: 9px;
        }

        .sidebar-mark {
          display: grid;
          width: 38px;
          height: 38px;
          place-items: center;
          border: 1px solid #e5d7be;
          border-radius: 50%;
          color: var(--gold);
          font-family: Georgia, serif;
          font-size: 14px;
        }

        .feature-sidebar h3 {
          margin: 25px 0 12px;
          font-family: Georgia, serif;
          font-size: 35px;
          font-weight: 400;
          letter-spacing: -0.04em;
        }

        .feature-sidebar h3 span {
          color: var(--gold);
        }

        .sidebar-intro {
          margin: 0;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.9;
        }

        .feature-list {
          margin-top: 25px;
          border-top: 1px solid var(--line);
        }

        .feature-item {
          display: grid;
          grid-template-columns: 22px minmax(0, 1fr);
          gap: 10px;
          align-items: start;
          padding: 15px 0;
          border-bottom: 1px solid var(--line);
          font-size: 12px;
          line-height: 1.7;
        }

        .feature-check {
          display: grid;
          width: 19px;
          height: 19px;
          place-items: center;
          border-radius: 50%;
          background: #f0e8d9;
          color: #947443;
          font-size: 11px;
        }

        .sidebar-note {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-top: 25px;
          padding: 17px;
          background: var(--ivory);
        }

        .note-icon {
          color: var(--gold);
          font-size: 18px;
        }

        .sidebar-note p {
          margin: 0;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.8;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: 25px;
          padding-bottom: 13px;
          border-bottom: 1px solid var(--gold);
          color: var(--ink);
          font-size: 12px;
        }

        .sidebar-link span {
          color: var(--gold);
          font-size: 17px;
        }

        .related-section {
          padding-top: 105px;
          padding-bottom: 110px;
        }

        .all-link {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--gold);
          color: var(--ink);
          font-size: 12px;
          white-space: nowrap;
        }

        .all-link span {
          color: var(--gold);
          font-size: 16px;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .related-card {
          display: block;
          min-width: 0;
          color: var(--ink);
        }

        .related-image {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #e7dfd1;
        }

        .related-image :global(img) {
          transition: transform 0.6s ease;
        }

        .related-card:hover .related-image :global(img) {
          transform: scale(1.05);
        }

        .related-number,
        .related-open {
          position: absolute;
          z-index: 1;
          display: grid;
          width: 36px;
          height: 36px;
          place-items: center;
          background: rgba(255, 253, 249, 0.95);
          color: var(--ink);
          font-size: 11px;
        }

        .related-number {
          top: 12px;
          left: 12px;
        }

        .related-open {
          right: 12px;
          bottom: 12px;
          color: var(--gold);
          font-size: 17px;
          transition: background 0.2s, color 0.2s;
        }

        .related-card:hover .related-open {
          background: var(--gold);
          color: white;
        }

        .related-info {
          padding: 20px 0 0;
        }

        .related-info > span {
          color: var(--gold);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.16em;
        }

        .related-info h3 {
          margin: 9px 0;
          font-family: Georgia, serif;
          font-size: clamp(21px, 2.3vw, 28px);
          font-weight: 400;
          letter-spacing: -0.025em;
        }

        .related-info p {
          margin: 0;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.8;
        }

        .closing-section {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 95px 25px 100px;
          background: #e9e1d3;
          text-align: center;
        }

        .closing-inner {
          position: relative;
          z-index: 1;
          max-width: 760px;
          margin: auto;
        }

        .closing-section .eyebrow {
          color: #957544;
        }

        .closing-section h2 {
          margin: 22px 0 18px;
          font-family: Georgia, serif;
          font-size: clamp(42px, 6vw, 76px);
          font-weight: 400;
          line-height: 1.07;
          letter-spacing: -0.045em;
        }

        .closing-section h2 em {
          color: #987b4c;
          font-weight: 400;
        }

        .closing-section p {
          max-width: 540px;
          margin: 0 auto;
          color: #6f6a60;
          font-size: 13px;
          line-height: 1.9;
        }

        .closing-button {
          display: inline-flex;
          align-items: center;
          gap: 35px;
          margin-top: 28px;
          padding: 16px 20px;
          background: var(--ink);
          color: white;
          font-size: 12px;
          transition: background 0.25s;
        }

        .closing-button:hover {
          background: #8e7143;
        }

        .closing-button span {
          font-size: 17px;
        }

        .closing-watermark {
          position: absolute;
          z-index: 0;
          right: -25px;
          bottom: -170px;
          color: rgba(255, 255, 255, 0.28);
          font-family: Georgia, serif;
          font-size: clamp(260px, 42vw, 550px);
          line-height: 1;
          pointer-events: none;
        }

        @media (min-width: 1500px) {
          .hero {
            height: 850px;
          }
        }

        @media (max-width: 900px) {
          .section-wrap,
          .hero-inner {
            width: calc(100% - 56px);
          }

          .hero {
            min-height: 590px;
            height: 75svh;
          }

          .intro-section {
            grid-template-columns: 0.45fr 1.5fr;
            gap: 30px;
            padding-top: 70px;
            padding-bottom: 70px;
          }

          .details-layout {
            grid-template-columns: minmax(0, 1fr) 290px;
            gap: 30px;
          }

          .feature-sidebar {
            padding: 23px;
          }

          .gallery-grid {
            grid-template-rows: repeat(2, clamp(170px, 25vw, 230px));
            gap: 13px;
          }

          .related-grid {
            gap: 15px;
          }

          .related-info h3 {
            font-size: 22px;
          }
        }

        @media (max-width: 700px) {
          .section-wrap,
          .hero-inner {
            width: calc(100% - 36px);
          }

          .hero {
            height: 74svh;
            min-height: 570px;
            max-height: 780px;
          }

          .hero-inner {
            padding: 23px 0;
          }

          .breadcrumbs {
            gap: 8px;
            font-size: 9px;
          }

          .hero-copy {
            padding: 50px 0 45px;
          }

          .hero h1 {
            font-size: clamp(47px, 12vw, 72px);
          }

          .hero-copy > p {
            max-width: 420px;
            font-size: 14px;
          }

          .intro-section {
            grid-template-columns: 1fr;
            gap: 22px;
            padding-top: 58px;
            padding-bottom: 60px;
          }

          .intro-label {
            flex-direction: row;
            align-items: center;
          }

          .small-number {
            font-size: 25px;
          }

          .intro-lead {
            font-size: 32px;
          }

          .intro-support {
            font-size: 13px;
          }

          .video-section {
            padding-bottom: 65px;
          }

          .section-heading,
          .highlights-top,
          .related-heading {
            align-items: flex-start;
            flex-direction: column;
            gap: 15px;
            margin-bottom: 24px;
          }

          .section-heading h2,
          .highlights-top h2,
          .related-heading h2 {
            font-size: 37px;
          }

          .section-heading > p,
          .highlights-top > p {
            font-size: 12px;
          }

          .video-frame {
            aspect-ratio: 16 / 10;
            min-height: 230px;
          }

          .video-placeholder h3 {
            font-size: 25px;
          }

          .highlights-section {
            padding: 60px 0;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat,
          .stat:first-child {
            min-height: 130px;
            padding: 23px 5px;
            border-right: 0;
            border-bottom: 1px solid #dcd4c6;
          }

          .stat:last-child {
            border-bottom: 0;
          }

          .stat strong {
            margin: 8px 0 5px;
            font-size: 37px;
          }

          .gallery-section {
            padding-top: 65px;
            padding-bottom: 70px;
          }

          .gallery-grid {
            grid-template-columns: minmax(0, 1fr);
            grid-template-rows: none;
            gap: 18px;
          }

          .gallery-card-1,
          .gallery-card-2,
          .gallery-card-3 {
            grid-column: 1;
            grid-row: auto;
          }

          .gallery-card-1 .gallery-image {
            height: auto;
            aspect-ratio: 4 / 3;
          }

          .gallery-card-2 .gallery-image,
          .gallery-card-3 .gallery-image {
            height: auto;
            aspect-ratio: 16 / 10;
          }

          .details-section {
            padding: 65px 0;
          }

          .details-layout {
            grid-template-columns: minmax(0, 1fr);
            gap: 45px;
          }

          .article-heading h2 {
            font-size: 43px;
          }

          .description-block {
            gap: 12px;
          }

          .description-block p {
            font-size: 13px;
            line-height: 1.95;
          }

          .editorial-quote {
            margin: 35px 0 45px;
            padding: 23px;
          }

          .feature-sidebar {
            position: static;
            padding: 25px;
          }

          .related-section {
            padding-top: 65px;
            padding-bottom: 70px;
          }

          .related-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 35px;
          }

          .related-image {
            aspect-ratio: 16 / 10;
          }

          .related-info h3 {
            font-size: 27px;
          }

          .closing-section {
            padding: 70px 22px;
          }

          .closing-section h2 {
            font-size: 44px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
     /* HERO IMAGE — FULL WIDTH FIX */
.infrastructure-page .hero {
  position: relative !important;
  width: 100% !important;
  max-width: none !important;
  overflow: hidden !important;
  isolation: isolate;
}

.infrastructure-page .hero-image {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  max-width: none !important;
  z-index: -2;
}

.infrastructure-page .hero-image img {
  object-fit: cover !important;
  object-position: center center !important;
}

.infrastructure-page .hero-wash {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  z-index: -1;
  background: linear-gradient(
    90deg,
    rgba(35, 31, 24, 0.42) 0%,
    rgba(35, 31, 24, 0.16) 55%,
    rgba(35, 31, 24, 0.03) 100%
  ) !important;
}

/* HEADING COLOR AND LAYOUT */
.infrastructure-page .hero h1 {
  max-width: 850px;
  color: #fffdf8 !important;
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 400;
  line-height: 1.02;
  text-wrap: balance;
}

.infrastructure-page .hero-copy {
  position: relative;
  z-index: 2;
}

.infrastructure-page .hero-inner {
  position: relative;
  z-index: 1;
  width: min(1320px, calc(100% - 100px));
  margin-inline: auto;
}

@media (max-width: 700px) {
  .infrastructure-page .hero-inner {
    width: calc(100% - 36px);
  }
} /* FIX: HERO IMAGE VISIBILITY ON MOBILE */
.infrastructure-page .hero {
  position: relative !important;
  isolation: isolate !important;
  overflow: hidden !important;
  background: #d4c6af !important;
}

.infrastructure-page .hero-image {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  z-index: 0 !important;
  overflow: hidden !important;
}

.infrastructure-page .hero-image :global(img) {
  object-fit: cover !important;
  object-position: center center !important;
}

.infrastructure-page .hero-wash {
  position: absolute !important;
  inset: 0 !important;
  z-index: 1 !important;
  pointer-events: none !important;
  background: linear-gradient(
    90deg,
    rgba(25, 25, 20, 0.5) 0%,
    rgba(25, 25, 20, 0.24) 55%,
    rgba(25, 25, 20, 0.08) 100%
  ) !important;
}

.infrastructure-page .hero-inner {
  position: relative !important;
  z-index: 2 !important;
}

@media (max-width: 700px) {
  .infrastructure-page .hero {
    width: 100% !important;
    min-height: 620px !important;
    height: 82svh !important;
    max-height: 850px !important;
  }

  .infrastructure-page .hero-image,
  .infrastructure-page .hero-wash {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
  }

  .infrastructure-page .hero-image :global(img) {
    object-fit: cover !important;
    object-position: center center !important;
  }

  .infrastructure-page .hero-inner {
    width: calc(100% - 36px) !important;
    min-height: inherit !important;
  }

  .infrastructure-page .hero-copy {
    position: relative !important;
    z-index: 2 !important;
  }
}`}</style>
        </>
    );
}

export async function getStaticPaths() {
    return {
        paths: Object.keys(items).map((id) => ({
            params: { id }
        })),
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    if (!items[params.id]) {
        return { notFound: true };
    }

    return {
        props: {
            id: params.id
        }
    };
}
