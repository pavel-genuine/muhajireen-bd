import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const BASE = "/images/slider/hero-slide";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../public/images/logo.png";
import Footer from "../../components/footer/Footer";
import WAIcon from "../../components/WAIcon/WAIcon";

const facilities = {
    residences: {
        number: "01",
        title: "Premium Residences",
        category: "RESIDENTIAL LIVING",
        subtitle: "A place to feel at home.",
        description:
            "Thoughtfully planned residential spaces designed around comfort, privacy and a sense of belonging. Premium Residences bring everyday living into a calm and welcoming environment.",
        image: `${BASE}/newfolder/img-9.jpg`,
        gallery: [
            `${BASE}/newfolder/img-9.jpg`,
            `${BASE}/img-3.1-main.png`,
            `${BASE}/newfolder/img-9.jpg`,
        ],
        features: [
            ["01", "Comfortable Living", "Spaces designed around everyday comfort."],
            ["02", "Community", "A welcoming environment for families."],
            ["03", "Thoughtful Planning", "A considered approach to residential living."],
        ],
    },
    mall: {
        number: "02",
        title: "Shopping Mall",
        category: "SHOPPING & RETAIL",
        subtitle: "A destination for everyday discovery.",
        description:
            "A planned shopping destination bringing retail experiences, convenient shopping and social encounters together within the wider MUHAJIREEN community.",
        image: `${BASE}/newfolder/img-11.jpg`,
        gallery: [
            `${BASE}/newfolder/img-11.jpg`,
            `${BASE}/newfolder/img-10.jpg`,
            `${BASE}/newfolder/img-12.jpg`,
        ],
        features: [
            ["01", "Retail Experiences", "A destination for a variety of shopping needs."],
            ["02", "Everyday Convenience", "Shopping opportunities within the community."],
            ["03", "Social Destination", "A place to meet, explore and spend time."],
        ],
    },
    foodcourt: {
        number: "03",
        title: "Food Court",
        category: "DINING & SOCIAL LIFE",
        subtitle: "Good food brings people together.",
        description:
            "A planned dining destination for food, casual gatherings and shared moments, adding convenience and variety to everyday community life.",
        image: `${BASE}/newfolder/img-10.jpg`,
        gallery: [
            `${BASE}/newfolder/img-10.jpg`,
            `${BASE}/newfolder/img-11.jpg`,
            `${BASE}/newfolder/img-12.jpg`,
        ],
        features: [
            ["01", "Dining", "A destination for everyday food experiences."],
            ["02", "Gatherings", "Space for casual meals and social moments."],
            ["03", "Convenience", "Dining within the wider development."],
        ],
    },
    commercialspaces: {
        number: "04",
        title: "Commercial Spaces",
        category: "BUSINESS & COMMERCE",
        subtitle: "Room for ideas to grow.",
        description:
            "Commercial spaces envisioned to support business activity, professional services and opportunities within an integrated development.",
        image: `${BASE}/newfolder/img-12.jpg`,
        gallery: [
            `${BASE}/newfolder/img-12.jpg`,
            `${BASE}/newfolder/img-11.jpg`,
            `${BASE}/newfolder/img-10.jpg`,
        ],
        features: [
            ["01", "Business Environment", "Spaces planned for commercial activity."],
            ["02", "Accessibility", "Part of a connected community setting."],
            ["03", "Opportunity", "An environment for businesses to develop."],
        ],
    },
    pool: {
        number: "05",
        title: "Swimming Pools",
        category: "RECREATION & WELLNESS",
        subtitle: "Make room for a refreshing pause.",
        description:
            "Swimming facilities envisioned for recreation, relaxation and a more active lifestyle, offering residents another way to enjoy their time.",
        image: `${BASE}/newfolder/img-8.jpeg`,
        gallery: [
            `${BASE}/newfolder/img-8.jpeg`,
            `${BASE}/newfolder/img-9.jpg`,
            `${BASE}/newfolder/img-10.jpg`,
        ],
        features: [
            ["01", "Recreation", "A setting for leisure and enjoyment."],
            ["02", "Active Living", "An opportunity to include swimming in daily life."],
            ["03", "Relaxation", "A place to take a break from routine."],
        ],
    },
    gym: {
        number: "06",
        title: "Fitness & Gym",
        category: "WELLNESS",
        subtitle: "Make wellbeing part of your routine.",
        description:
            "Planned fitness facilities with dedicated spaces for men and women, designed to support regular exercise and an active lifestyle.",
        image: `${BASE}/newfolder/img(2).jpeg`,
        gallery: [
            `${BASE}/newfolder/img(2).jpeg`,
            `${BASE}/newfolder/img-8.jpeg`,
            `${BASE}/newfolder/img(3).jpeg`,
        ],
        features: [
            ["01", "Fitness", "Spaces planned for exercise and movement."],
            ["02", "Dedicated Spaces", "Facilities envisioned for men and women."],
            ["03", "Wellbeing", "Supporting a more active daily routine."],
        ],
    },
    park: {
        number: "07",
        title: "Central Park",
        category: "NATURE & OUTDOORS",
        subtitle: "A refreshing connection between nature and community life.",
        description:
            "Expansive green landscapes featuring tree-lined avenues, dedicated walking trails, and open spaces designed to bring balance and calm to neighbourhood living.",
        image: `${BASE}/img-9.1-main.png`,
        gallery: [
            `${BASE}/img-9.1-main.png`,
            `${BASE}/newfolder/img(7).jpeg`,
            `${BASE}/newfolder/img(3).jpeg`,
        ],
        features: [
            ["01", "Open Space", "Expansive natural greenery for relaxation."],
            ["02", "Walking Trails", "Dedicated paths for outdoor strolls and fresh air."],
            ["03", "Community Life", "A shared space to gather and enjoy nature."],
        ],
    },
    kids: {
        number: "08",
        title: "Kids' Play Zone",
        category: "FAMILY LIVING",
        subtitle: "A little more room to play.",
        description:
            "A dedicated play area envisioned for children's outdoor activities, imaginative play and quality family time.",
        image: `${BASE}/newfolder/img(5).jpeg`,
        gallery: [
            `${BASE}/newfolder/img(5).jpeg`,
            `${BASE}/newfolder/img(7).jpeg`,
            `${BASE}/newfolder/img(3).jpeg`,
        ],
        features: [
            ["01", "Play", "A dedicated setting for children's activities."],
            ["02", "Outdoor Time", "Encouraging time outside and active play."],
            ["03", "Family Moments", "Supporting shared experiences for families."],
        ],
    },
    green: {
        number: "09",
        title: "Green Spaces",
        category: "NATURE & OUTDOORS",
        subtitle: "A closer connection to nature.",
        description:
            "Landscaped green areas planned to bring nature, open space and moments of calm into everyday community living.",
        image: `${BASE}/newfolder/img(7).jpeg`,
        gallery: [
            `${BASE}/newfolder/img(7).jpeg`,
            `${BASE}/newfolder/img(3).jpeg`,
            `${BASE}/newfolder/img(5).jpeg`,
        ],
        features: [
            ["01", "Greenery", "Landscaped areas within the community."],
            ["02", "Open Space", "Places to pause and enjoy the outdoors."],
            ["03", "Everyday Nature", "Bringing natural surroundings closer to home."],
        ],
    },
    walkway: {
        number: "10",
        title: "Walking & Jogging",
        category: "ACTIVE LIVING",
        subtitle: "Find your own everyday rhythm.",
        description:
            "Dedicated walkways envisioned for daily walks, light exercise and outdoor relaxation within the community.",
        image: `${BASE}/newfolder/img(3).jpeg`,
        gallery: [
            `${BASE}/newfolder/img(3).jpeg`,
            `${BASE}/newfolder/img(7).jpeg`,
            `${BASE}/newfolder/img(1).jpeg`,
        ],
        features: [
            ["01", "Daily Walks", "Space for a regular walking routine."],
            ["02", "Outdoor Exercise", "Encouraging movement in the open air."],
            ["03", "Relaxation", "A way to enjoy the outdoors at your pace."],
        ],
    },
    bicycle: {
        number: "11",
        title: "Bicycle Zone",
        category: "ACTIVE LIVING",
        subtitle: "A different way to get moving.",
        description:
            "A planned bicycle-friendly zone intended to encourage active movement and outdoor enjoyment within the community.",
        image: `${BASE}/newfolder/img(1).jpeg`,
        gallery: [
            `${BASE}/newfolder/img(1).jpeg`,
            `${BASE}/newfolder/img(3).jpeg`,
            `${BASE}/newfolder/img(7).jpeg`,
        ],
        features: [
            ["01", "Cycling", "A bicycle-friendly environment is envisioned."],
            ["02", "Active Movement", "Encouraging an active daily lifestyle."],
            ["03", "Outdoor Enjoyment", "Another way to experience the community."],
        ],
    },
    medical: {
        number: "12",
        title: "Emergency Medical Support",
        category: "CARE & WELLBEING",
        subtitle: "Care within the wider community.",
        description:
            "Emergency medical support is included among the project's stated lifestyle facilities. Contact the project team for confirmed service availability and operating arrangements.",
        image: `${BASE}/img-4.1-main.png`,
        gallery: [
            `${BASE}/img-4.1-main.png`,
            `${BASE}/img-5.1-main.png`,
            `${BASE}/img-6.1-main1.png`,
        ],
        features: [
            ["01", "Medical Support", "Emergency support is part of the stated facilities."],
            ["02", "Healthcare Access", "Healthcare infrastructure within the development vision."],
            ["03", "Service Information", "Confirm availability directly with the project team."],
        ],
    },
    school: {
        number: "13",
        title: "School",
        category: "EDUCATION",
        subtitle: "An environment for brighter futures.",
        description:
            "A planned educational destination intended to support students, families and the next generation within the wider community.",
        image: `${BASE}/img-8-main.png`,
        gallery: [
            `${BASE}/img-8-main.png`,
            `${BASE}/img-7-main.png`,
            `${BASE}/img-3.1-main.png`,
        ],
        features: [
            ["01", "Learning", "An educational environment is envisioned."],
            ["02", "Community", "Planned to serve families and students."],
            ["03", "Future Focus", "Supporting the aspirations of the next generation."],
        ],
    },
    community: {
        number: "14",
        title: "Mosque & Madrasha",
        category: "FAITH & COMMUNITY",
        subtitle: "A place for faith and learning.",
        description:
            "A planned spiritual and educational destination intended to support worship, learning and meaningful connections within the community.",
        image: `${BASE}/img-7-main.png`,
        gallery: [
            `${BASE}/img-7-main.png`,
            `${BASE}/img-8-main.png`,
            `${BASE}/img-3.1-main.png`,
        ],
        features: [
            ["01", "Worship", "A dedicated place for community worship is envisioned."],
            ["02", "Learning", "An educational dimension through the madrasha."],
            ["03", "Community", "Supporting shared values and connections."],
        ],
    },
};

export default function LifestyleDetailPage({ facility, id }) {
    const router = useRouter();

    if (router.isFallback) return <main className="life-loading">Loading…</main>;
    if (!facility) return null;

    const ids = Object.keys(facilities);
    const index = ids.indexOf(id);
    const previousId = ids[(index - 1 + ids.length) % ids.length];
    const nextId = ids[(index + 1) % ids.length];

    return (
        <>
            <Head>
                <title>{facility.title} | MUHAJIREEN Lifestyle</title>
                <meta name="description" content={facility.description} />
            </Head>

            <main className="life-detail">
                <Navbar Logo={Logo} />

                <section className="life-hero">
                    <img className="life-hero-image" src={facility.image} alt={facility.title} />
                    <div className="life-hero-shade" />

                    <div className="life-hero-content">
                        <nav className="life-breadcrumb" aria-label="Breadcrumb">
                            <Link href="/">Home</Link>
                            <span>/</span>
                            <Link href="/#lifestyle-facilities">Lifestyle</Link>
                            <span>/</span>
                            <span>{facility.title}</span>
                        </nav>

                        <div className="life-eyebrow">
                            <span />
                            {facility.category} · MUHAJIREEN
                        </div>

                        <h1>{facility.title}</h1>
                        <p className="life-hero-subtitle">{facility.subtitle}</p>
                        <p className="life-hero-description">{facility.description}</p>

                        <a className="life-hero-link" href="#facility-details">
                            Discover the facility <span>↓</span>
                        </a>
                    </div>

                    <div className="life-hero-index">
                        <strong>{facility.number}</strong>
                        <span> / 13</span>
                    </div>
                </section>

                <section className="life-content" id="facility-details">
                    <div className="life-intro">
                        <div>
                            <div className="life-eyebrow life-eyebrow-dark">
                                <span />
                                THE EXPERIENCE
                            </div>
                            <h2>
                                Designed around
                                <br />
                                <em>everyday living.</em>
                            </h2>

                        </div>

                    </div>
                    <p>{facility.description}</p>
                    <div className="life-gallery">
                        {facility.gallery.map((image, i) => (
                            <div className={`life-gallery-item life-gallery-${i + 1}`} key={`${image}-${i}`}>
                                <img src={image} alt={`${facility.title} view ${i + 1}`} loading="lazy" />
                                <span>0{i + 1} / {facility.category}</span>
                            </div>
                        ))}
                    </div>

                    <div className="life-features-heading">
                        <div>
                            <div className="life-eyebrow life-eyebrow-dark">
                                <span />
                                KEY HIGHLIGHTS
                            </div>
                            <h2>The details <em>that matter.</em></h2>
                        </div>
                        <p>A considered approach to comfort, convenience and community.</p>
                    </div>

                    <div className="life-features">
                        {facility.features.map(([number, title, description]) => (
                            <article className="life-feature" key={number}>
                                <span className="life-feature-number">{number}</span>
                                <div className="life-feature-mark">↗</div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </article>
                        ))}
                    </div>

                    <section className="life-contact">
                        <div>
                            <span>MUHAJIREEN · LIFESTYLE</span>
                            <h2>Explore a life thoughtfully planned.</h2>
                            <p>Discover more facilities across the community.</p>
                        </div>
                        <Link href="/project-overview#lifestyle-facilities">
                            Explore all lifestyle facilities <span>↗</span>
                        </Link>
                    </section>

                    <nav className="life-pagination" aria-label="Other lifestyle facilities">
                        <Link href={`/lifestyle-facilities/${previousId}`}>
                            <span>← PREVIOUS FACILITY</span>
                            <strong>{facilities[previousId].title}</strong>
                        </Link>
                        <Link href={`/lifestyle-facilities/${nextId}`} className="life-next">
                            <span>NEXT FACILITY →</span>
                            <strong>{facilities[nextId].title}</strong>
                        </Link>
                    </nav>
                </section>
                <Footer />
                <WAIcon />
            </main>

            <style jsx global>{`
        .life-detail {
          --life-gold: #b99762;
          --life-ink: #40382f;
          --life-muted: #81776c;
          background: #f8f5ef;
          color: var(--life-ink);
          font-family: Arial, Helvetica, sans-serif;
        }
        .life-detail * { box-sizing: border-box; }
        .life-hero {
          position: relative;
          display: flex;
          align-items: flex-end;
          min-height: 670px;
          height: min(86vh, 760px);
          overflow: hidden;
          background: #b8ad9a;
          color: #fffdf8;
        }
        .life-hero-image, .life-hero-shade {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .life-hero-image { object-fit: cover; object-position: center; }
        .life-hero-shade {
          background: linear-gradient(90deg, rgba(30,26,21,.58), rgba(30,26,21,.2) 65%, rgba(30,26,21,.08));
        }
        .life-hero-content {
          position: relative;
          z-index: 1;
          width: min(1200px, calc(100% - 64px));
          margin: 0 auto;
          padding: 36px 0 82px;
        }
        .life-breadcrumb {
          position: absolute;
          top: -460px;
          left: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          color: rgba(255,255,255,.9);
          font-size: 12px;
        }
        .life-breadcrumb a { color: inherit; text-decoration: none; }
        .life-breadcrumb a:hover { color: #e6c28a; }
        .life-eyebrow {
          display: flex;
          align-items: center;
          gap: 11px;
          color: #e4c99c;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .19em;
        }
        .life-eyebrow > span {
          display: inline-block;
          width: 32px;
          height: 1px;
          background: currentColor;
        }
        .life-hero h1 {
          max-width: 850px;
          margin: 22px 0 12px;
          color: #fffdf8;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(46px, 7vw, 88px);
          font-weight: 400;
          letter-spacing: -.055em;
          line-height: .98;
        }
        .life-hero-subtitle {
          margin: 0 0 12px;
          color: #f0dfc2;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(19px, 2.5vw, 27px);
          font-style: italic;
        }
        .life-hero-description {
          max-width: 590px;
          margin: 0;
          color: rgba(255,253,248,.9);
          font-size: 14px;
          line-height: 1.8;
        }
        .life-hero-link {
          display: inline-flex;
          align-items: center;
          gap: 34px;
          margin-top: 25px;
          padding: 13px 17px;
          border: 1px solid rgba(255,255,255,.58);
          color: white;
          font-size: 11px;
          text-decoration: none;
          transition: background .2s ease;
        }
        .life-hero-link:hover { background: rgba(255,255,255,.14); }
        .life-hero-index {
          position: absolute;
          right: max(32px, calc((100% - 1200px)/2));
          bottom: 35px;
          z-index: 1;
          color: white;
          font-family: Georgia, "Times New Roman", serif;
        }
        .life-hero-index strong { font-size: 29px; font-weight: 400; }
        .life-hero-index span { color: #ead9bb; font-size: 13px; }
        .life-content {
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
          padding: 86px 0 54px;
        }
        .life-intro, .life-features-heading {
          display: grid;
          grid-template-columns: 1fr minmax(260px, .65fr);
          align-items: end;
          gap: 50px;
          margin-bottom: 36px;
        }
        .life-eyebrow-dark { color: #9e7e4e; }
        .life-intro h2, .life-features-heading h2 {
          margin: 15px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(32px, 4vw, 49px);
          font-weight: 400;
          letter-spacing: -.045em;
          line-height: 1.08;
        }
        .life-intro h2 em, .life-features-heading h2 em {
          color: #a88961;
          font-weight: 400;
        }
        .life-intro > p, .life-features-heading > p {
          margin: 0 0 3px;
          color: var(--life-muted);
          font-size: 14px;
          line-height: 1.9;
        }
        .life-gallery {
          display: grid;
          grid-template-columns: minmax(0, 1.3fr) minmax(0, .85fr);
          grid-template-rows: repeat(2, 220px);
          gap: 14px;
          margin-bottom: 86px;
        }
        .life-gallery-item {
          position: relative;
          min-width: 0;
          overflow: hidden;
          background: #e5ded2;
        }
        .life-gallery-1 { grid-column: 1; grid-row: 1 / span 2; }
        .life-gallery-2 { grid-column: 2; grid-row: 1; }
        .life-gallery-3 { grid-column: 2; grid-row: 2; }
        .life-gallery-item img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform .6s ease;
        }
        .life-gallery-item:hover img { transform: scale(1.035); }
        .life-gallery-item::after {
          content: "";
          position: absolute;
          inset: 45% 0 0;
          background: linear-gradient(transparent, rgba(30,26,21,.42));
          pointer-events: none;
        }
        .life-gallery-item > span {
          position: absolute;
          z-index: 1;
          bottom: 15px;
          left: 17px;
          color: white;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .15em;
        }
        .life-features-heading { margin-bottom: 28px; }
        .life-features {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid #e2d9cc;
          border-bottom: 1px solid #e2d9cc;
        }
        .life-feature {
          min-height: 190px;
          padding: 24px;
          border-right: 1px solid #e2d9cc;
        }
        .life-feature:first-child { padding-left: 0; }
        .life-feature:last-child { border-right: 0; }
        .life-feature-number {
          color: #a88961;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 20px;
        }
        .life-feature-mark {
          float: right;
          color: #b99762;
          font-size: 17px;
        }
        .life-feature h3 {
          margin: 26px 0 8px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 23px;
          font-weight: 400;
        }
        .life-feature p {
          margin: 0;
          color: var(--life-muted);
          font-size: 12px;
          line-height: 1.8;
        }
        .life-contact {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          margin-top: 76px;
          padding: 32px 36px;
          background: #eee6d9;
        }
        .life-contact > div > span {
          color: #9e7e4e;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .18em;
        }
        .life-contact h2 {
          margin: 10px 0 6px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(24px, 3vw, 35px);
          font-weight: 400;
        }
        .life-contact p { margin: 0; color: var(--life-muted); font-size: 12px; }
        .life-contact > a {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          flex: 0 0 auto;
          padding: 14px 17px;
          background: #a88961;
          color: white;
          font-size: 11px;
          text-decoration: none;
        }
        .life-pagination {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin-top: 32px;
          padding-top: 23px;
          border-top: 1px solid #e2d9cc;
        }
        .life-pagination a {
          display: grid;
          gap: 8px;
          color: var(--life-ink);
          text-decoration: none;
        }
        .life-pagination a span {
          color: #9e7e4e;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .12em;
        }
        .life-pagination a strong {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 18px;
          font-weight: 400;
        }
        .life-next { text-align: right; }
        .life-loading { min-height: 50vh; display: grid; place-items: center; }
        @media (max-width: 700px) {
          .life-hero { min-height: 590px; height: 78vh; }
          .life-hero-content { width: calc(100% - 36px); padding-bottom: 75px; }
          .life-breadcrumb { top: -500px; gap: 8px; font-size: 10px; }
          .life-hero h1 { font-size: clamp(43px, 12vw, 65px); }
          .life-hero-description { font-size: 13px; }
          .life-content { width: calc(100% - 36px); padding-top: 54px; }
          .life-intro, .life-features-heading { grid-template-columns: 1fr; gap: 16px; margin-bottom: 26px; }
          .life-gallery { grid-template-columns: 1fr 1fr; grid-template-rows: 230px 140px; gap: 9px; margin-bottom: 56px; }
          .life-gallery-1 { grid-column: 1 / -1; grid-row: 1; }
          .life-gallery-2 { grid-column: 1; grid-row: 2; }
          .life-gallery-3 { grid-column: 2; grid-row: 2; }
          .life-features { grid-template-columns: 1fr; }
          .life-feature, .life-feature:first-child { min-height: 0; padding: 20px 0; border-right: 0; border-bottom: 1px solid #e2d9cc; }
          .life-feature:last-child { border-bottom: 0; }
          .life-feature h3 { margin-top: 15px; }
          .life-contact { align-items: flex-start; flex-direction: column; margin-top: 50px; padding: 25px 20px; }
          .life-pagination a strong { max-width: 150px; font-size: 15px; }
        }
      `}</style>
        </>
    );
}

export async function getStaticPaths() {
    return {
        paths: Object.keys(facilities).map((id) => ({ params: { id } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const facility = facilities[params.id];

    if (!facility) return { notFound: true };

    return {
        props: {
            id: params.id,
            facility,
        },
    };
}