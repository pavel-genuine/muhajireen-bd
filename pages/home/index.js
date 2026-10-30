import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import dynamic from 'next/dynamic';
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import FunFact from '../../components/FunFact/FunFact';
import Testimonial from '../../components/Testimonial/Testimonial';
import TeamSection from '../../components/TeamSection/TeamSection';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-2.svg'

const ScrollTextAnimation = dynamic(
    () => import('../../components/ScrollTextAnimation/ScrollTextAnimation'),
    { ssr: false }
);

const HomePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-header-style'} Logo={Logo} col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                col2={'col-lg-5 col-md-6 col-6'}
                col3={'col-lg-5 col-md-1 col-1'}
                col4={'col-lg-2 col-md-2 col-2'} />
            <Hero />
            <ScrollTextAnimation />
            <About hclass={"wpo-about-section section-padding pb-0"} />
            <ProjectSection hclass={'wpo-project-section section-padding'} />
            <ServiceSection hclass={'wpo-service-section'} />
            <FunFact hclass={'wpo-funfact-section'} />
            <Testimonial hclass={'wpo-testimonial-section'} />
            <TeamSection hclass={'wpo-team-section'} />
            <PartnerSection hclass={'wpo-partners-section fade_bottom'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
}

export default HomePage