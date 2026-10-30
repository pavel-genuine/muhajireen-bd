import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import dynamic from 'next/dynamic';
import Hero14 from '../../components/hero14/hero14';
import ServiceSectionS10 from '../../components/ServiceSectionS10/ServiceSectionS10';
import ProjectSectionS13 from '../../components/ProjectSectionS13/ProjectSectionS13';
import FunFact from '../../components/FunFact/FunFact';
import FaqSection from '../../components/FaqSection/FaqSection';
import VideoSectionS5 from '../../components/VideoSectionS5/VideoSectionS5';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-2.svg'
import PartnerSectionS2 from '../../components/PartnerSectionS2/PartnerSectionS2';
import ContactSectionS3 from '../../components/ContactSectionS3/ContactSectionS3';

const ScrollTextAnimation = dynamic(
    () => import('../../components/ScrollTextAnimation/ScrollTextAnimation'),
    { ssr: false }
  );

const HomePage14 = () => {


    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-header-style-s14 bb-1'} Logo={Logo} col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                col2={'col-lg-5 col-md-6 col-6'}
                col3={'col-lg-5 col-md-1 col-1'}
                col4={'col-lg-2 col-md-2 col-2'} />
            <Hero14 />
            <ScrollTextAnimation/>
            <PartnerSectionS2 hclass={'wpo-partners-section-s2 bt-1'} />
            <ServiceSectionS10 hclass={'wpo-service-section-s14 bt-0'}/>
            <ProjectSectionS13 hclass={'wpo-project-section-s9 section-padding'} />
            <FunFact hclass={'wpo-funfact-section-s14'} />
            <FaqSection hclass={'wpo-funfact-section-s14'} />
            <VideoSectionS5 hclass={'wpo-video-section section-padding'} />
            <ContactSectionS3 />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};


export default HomePage14;