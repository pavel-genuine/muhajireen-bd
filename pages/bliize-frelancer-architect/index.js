import React, { Fragment } from 'react';
import NavbarS4 from '../../components/NavbarS4/NavbarS4';
import dynamic from 'next/dynamic';
import Hero15 from '../../components/hero15/hero15';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import ServiceSectionS11 from '../../components/ServiceSectionS11/ServiceSectionS11';
import About10 from '../../components/About10/About10';
import ProjectSectionS12 from '../../components/ProjectSectionS12/ProjectSectionS12';
import TestimonialS4 from '../../components/TestimonialS4/TestimonialS4';
import TeamSectionS5 from '../../components/TeamSectionS5/TeamSectionS5';
import ContactSectionS4 from '../../components/ContactSectionS4/ContactSectionS4';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.svg'

const ScrollTextAnimation = dynamic(
    () => import('../../components/ScrollTextAnimation/ScrollTextAnimation'),
    { ssr: false }
  );

const HomePage15 = () => {

    return (
        <Fragment>
            <NavbarS4 hclass={'wpo-site-header wpo-header-style-s11'} Logo={Logo} col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                col2={'col-lg-2 col-md-4 col-6'}
                col3={'col-lg-7 col-md-1 col-1'}
                col4={'col-lg-3 col-md-4 col-2'} />
            <Hero15 />
            <PartnerSection hclass={'wpo-partners-section fade_bottom'} />
            <About10 hclass={'wpo-partners-section fade_bottom'} />
            <ScrollTextAnimation />
            <ServiceSectionS11 hclass={'wpo-service-section-s15 section-padding'} />
            <ProjectSectionS12 hclass={'wpo-project-section-s15 section-padding'} />
            <TestimonialS4 hclass={'wpo-testimonial-section-s3 section-padding'} />
            <TeamSectionS5 hclass={'wpo-team-section-s15 section-padding'} />
            <ContactSectionS4 />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};


export default HomePage15;