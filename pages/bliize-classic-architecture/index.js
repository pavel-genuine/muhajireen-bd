import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero2 from '../../components/hero2/Hero2';
import dynamic from 'next/dynamic';
import About2 from '../../components/about2/about2';
import FunFact from '../../components/FunFact/FunFact';
import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import BlogSection from '../../components/BlogSection/BlogSection';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.svg'

const ScrollTextAnimation = dynamic(
    () => import('../../components/ScrollTextAnimation/ScrollTextAnimation'),
    { ssr: false }
  );

const HomePage2 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-header-style-s2'} Logo={Logo} col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                col2={'col-lg-2 col-md-6 col-6'}
                col3={'col-lg-7 col-md-1 col-1'}
                col4={'col-lg-3 col-md-2 col-2'} />
            <Hero2 />
            <ScrollTextAnimation />
            <About2 hclass={'wpo-about-section-s2 section-padding'} />
            <FunFact hclass={'wpo-funfact-section py-0'} />
            <ProjectSectionS2 hclass={'wpo-project-section-s2 section-padding'} />
            <ServiceSectionS2 hclass={'wpo-service-section-s2'} />
            <BlogSection hclass={'wpo-blog-section section-padding'}/>
            <PartnerSection hclass={'wpo-partners-section fade_bottom'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage2;
