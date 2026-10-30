import React, { Fragment } from 'react';
import NavbarS4 from '../../components/NavbarS4/NavbarS4';
import dynamic from 'next/dynamic';
import Hero12 from '../../components/hero12/hero12';
import About8 from '../../components/About8/About8.js';
import ServiceSectionS9 from '../../components/ServiceSectionS9/ServiceSectionS9';
import ProjectSectionS11 from '../../components/ProjectSectionS11/ProjectSectionS11';
import TestimonialS6 from '../../components/TestimonialS6/TestimonialS6';
import TeamSectionS4 from '../../components/TeamSectionS4/TeamSectionS4';
import CtaSectionS4 from '../../components/CtaSectionS4/CtaSectionS4';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.svg'
import BlogSectionS3 from '../../components/BlogSectionS3/BlogSectionS3';

const ScrollTextAnimation = dynamic(
    () => import('../../components/ScrollTextAnimation/ScrollTextAnimation'),
    { ssr: false }
  );

const HomePage12 = () => {

    return (
        <Fragment>
            <NavbarS4 hclass={'wpo-site-header wpo-header-style-s11'} Logo={Logo} col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                col2={'col-lg-2 col-md-4 col-6'}
                col3={'col-lg-7 col-md-1 col-1'}
                col4={'col-lg-3 col-md-4 col-2'} />
            <Hero12 />
            <PartnerSection hclass={'wpo-partners-section fade_bottom bt-0'} />
            <ScrollTextAnimation />
            <About8 hclass={'wpo-service-section-s9 section-padding'} />
            <ServiceSectionS9 hclass={'wpo-service-section-s12 section-padding'} showTitle={true} />
            <ProjectSectionS11 hclass={'wpo-project-section-s9 section-padding'} />
            <TestimonialS6 hclass={'wpo-testimonial-section-s12 section-padding'} />
            <TeamSectionS4 hclass={'wpo-team-section-s12 section-padding'} />
            <CtaSectionS4 />
            <BlogSectionS3 hclass={"wpo-blog-section-s12 section-padding"} />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};


export default HomePage12;