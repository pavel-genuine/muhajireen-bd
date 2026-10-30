import React, { Fragment } from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import dynamic from 'next/dynamic';
import Hero11 from '../../components/hero11/hero11';
import ServiceSectionS8 from '../../components/ServiceSectionS8/ServiceSectionS8';
import VideoSectionS4 from '../../components/VideoSectionS4/VideoSectionS4.js';
import ProjectSectionS10 from '../../components/ProjectSectionS10/ProjectSectionS10';
import FunFact from '../../components/FunFact/FunFact';
import TestimonialS4 from '../../components/TestimonialS4/TestimonialS4';
import ConsultaFormSection from '../../components/ConsultaFormSection/ConsultaFormSection';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.svg'

const ScrollTextAnimation = dynamic(
    () => import('../../components/ScrollTextAnimation/ScrollTextAnimation'),
    { ssr: false }
  );

const HomePage11 = () => {

    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header wpo-header-style-s10 menu-left'} Logo={Logo} col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                col2={'col-lg-2 col-md-4 col-6'}
                col3={'col-lg-5 col-md-1 col-1'}
                col4={'col-lg-5 col-md-4 col-2'} />
            <Hero11 />
            <ScrollTextAnimation />
            <ServiceSectionS8 hclass={'wpo-service-section-s9 section-padding'} />
            <VideoSectionS4 hclass={'wpo-video-section-s2'} />
            <ProjectSectionS10 hclass={'wpo-project-section-s9 section-padding'} />
            <FunFact hclass={'wpo-funfact-section-s11'} />
            <TestimonialS4 hclass={'wpo-testimonial-section-s11 section-padding'} />
            <ConsultaFormSection hclass={'wpo-consultaForm-section'} />
            <PartnerSection hclass={'wpo-partners-section fade_bottom'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};


export default HomePage11;