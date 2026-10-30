import React, { Fragment } from 'react';
import NavbarS4 from '../../components/NavbarS4/NavbarS4';
import dynamic from 'next/dynamic';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import FunFact from '../../components/FunFact/FunFact';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.svg'

const ScrollTextAnimation = dynamic(
    () => import('../../components/ScrollTextAnimation/ScrollTextAnimation'),
    { ssr: false }
  );

const AboutPage = () => {
    return (
        <Fragment>
            <NavbarS4 hclass={'wpo-site-header wpo-header-style-s11'} Logo={Logo} col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                            col2={'col-lg-2 col-md-4 col-6'}
                            col3={'col-lg-7 col-md-1 col-1'}
                            col4={'col-lg-3 col-md-4 col-2'} />
            <PageTitle pageTitle={'Interior Designer, Expert Architect'} pagesub={'About Us'} />
            <ScrollTextAnimation />
            <About hclass={"wpo-about-section section-padding pb-0"} />
            <ProjectSection hclass={'wpo-project-section section-padding'} />
            <ServiceSection hclass={'wpo-service-section'} />
            <FunFact hclass={'wpo-funfact-section'} />
            <PartnerSection hclass={'wpo-partners-section fade_bottom'} />
            <Footer />
            <Scrollbar /> 
        </Fragment>
    )
};
export default AboutPage;
