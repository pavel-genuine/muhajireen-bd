import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import dynamic from 'next/dynamic';
import Hero7 from '../../components/hero7/hero7';
import About7 from '../../components/about7/about7';
import ServiceSectionS7 from '../../components/ServiceSectionS7/ServiceSectionS7';
import VideoSectionS2 from '../../components/VideoSectionS2/VideoSectionS2';
import ProjectSectionS7 from '../../components/ProjectSectionS7/ProjectSectionS7';
import Testimonial from '../../components/Testimonial/Testimonial';
import FunfactSectionS6 from '../../components/FunfactSectionS6/FunfactSectionS6';
import PartnerSectionS2 from '../../components/PartnerSectionS2/PartnerSectionS2';
import CtaSectionS2 from '../../components/CtaSectionS2/CtaSectionS2.js';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-2.svg'

const ScrollTextAnimation = dynamic(
    () => import('../../components/ScrollTextAnimation/ScrollTextAnimation'),
    { ssr: false }
  );

const HomePage7 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-header-style-s14'} Logo={Logo} col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                col2={'col-lg-5 col-md-6 col-6'}
                col3={'col-lg-5 col-md-1 col-1'}
                col4={'col-lg-2 col-md-2 col-2'} />
            <Hero7 />
            <ScrollTextAnimation />
            <About7 hclass={"wpo-about-section-s7 section-padding"} />
            <ServiceSectionS7 hclass={'wpo-service-section-s7'} />
            <VideoSectionS2 hclass={'wpo-video-section'} />
            <ProjectSectionS7 hclass={'wpo-project-section-s7 section-padding'} />
            <Testimonial hclass={'wpo-testimonial-section-s5'} />
            <FunfactSectionS6 hclass={'wpo-funfact-section-s6 section-padding'} />
            <PartnerSectionS2 hclass={'wpo-partners-section-s3 fade_bottom'} />
            <CtaSectionS2 hclass={'wpo-cta-section-s2'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default HomePage7;