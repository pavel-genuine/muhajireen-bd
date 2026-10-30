import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '../../components/Navbar/Navbar';
import Hero4 from '../../components/hero4/hero4';
import ServiceSectionS4 from '../../components/ServiceSectionS4/ServiceSectionS4';
import About4 from '../../components/About4/About4';
import VideoSection from '../../components/VideoSection/VideoSection';
import ProjectSectionS4 from '../../components/ProjectSectionS4/ProjectSectionS4';
import TestimonialS3 from '../../components/TestimonialS3/TestimonialS3';
import PartnerSectionS2 from '../../components/PartnerSectionS2/PartnerSectionS2';
import CtaSection from '../../components/CtaSection/CtaSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-2.svg'

const ScrollTextAnimation = dynamic(
    () => import('../../components/ScrollTextAnimation/ScrollTextAnimation'),
    { ssr: false }
  );


const HomePage4 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-header-style-s5'} Logo={Logo} col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                col2={'col-lg-2 col-md-6 col-6'}
                col3={'col-lg-7 col-md-1 col-1'}
                col4={'col-lg-3 col-md-2 col-2'} />
            <Hero4 />
            <ScrollTextAnimation />
            <ServiceSectionS4 hclass={'wpo-service-section-s5'} />
            <About4 hclass={'wpo-about-section-s5 section-padding pt-0'} />
            <VideoSection hclass={'wpo-video-section'} />
            <ProjectSectionS4 hclass={'wpo-project-section-s5 section-padding'} />
            <TestimonialS3 hclass={'wpo-testimonial-section-s2'} />
            <CtaSection hclass={'wpo-cta-section'} />
            <PartnerSectionS2 hclass={'wpo-partners-section-s2 fade_bottom'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage4;