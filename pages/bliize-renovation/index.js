import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import dynamic from 'next/dynamic';
import Hero8 from '../../components/hero8/hero8';
import ServiceSectionS5 from '../../components/ServiceSectionS5/ServiceSectionS5';
import ProjectSectionS8 from '../../components/ProjectSectionS8/ProjectSectionS8';
import WorkSectionS3 from '../../components/WorkSectionS3/WorkSectionS3';
import TestimonialS5 from '../../components/TestimonialS5/TestimonialS5';
import TeamSectionS2 from '../../components/TeamSectionS2/TeamSectionS2';
import CtaSectionS3 from '../../components/CtaSectionS3/CtaSectionS3';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.svg'

const ScrollTextAnimation = dynamic(
    () => import('../../components/ScrollTextAnimation/ScrollTextAnimation'),
    { ssr: false }
  );

const HomePage8 = () => {
    return (
       <Fragment>
            <Navbar hclass={'wpo-site-header wpo-header-style-s3'} Logo={Logo} col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                            col2={'col-lg-2 col-md-6 col-6'}
                            col3={'col-lg-7 col-md-1 col-1'}
                            col4={'col-lg-3 col-md-2 col-2'} />
            <Hero8 />
            <ScrollTextAnimation />
            <ServiceSectionS5 hclass={'wpo-service-section-s8'} />
            <ProjectSectionS8 hclass={'wpo-project-section-s8 section-padding pt-0'} />
            <WorkSectionS3 hclass={'wpo-work-section-s3'} />
            <TestimonialS5 hclass={'wpo-testimonial-section-s6 section-padding pb-0'} />
            <TeamSectionS2 hclass={'wpo-team-section-s2 section-padding'} />
            <CtaSectionS3 hclass={'wpo-cta-section-s3'} />
            <Footer />
            <Scrollbar />
       </Fragment>
    );
};

export default HomePage8;