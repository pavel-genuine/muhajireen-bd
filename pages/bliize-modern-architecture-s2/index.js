import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import dynamic from 'next/dynamic';
import Hero3 from '../../components/hero3/hero3';
import FunFact from '../../components/FunFact/FunFact';
import About3 from '../../components/About3/About3';
import ProjectSectionS3 from '../../components/ProjectSectionS3/ProjectSectionS3';
import ServiceSectionS3 from '../../components/ServiceSectionS3/ServiceSectionS3';
import TestimonialS2 from '../../components/TestimonialS2/TestimonialS2';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import PricingSection from '../../components/PricingSection/PricingSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.svg'

const ScrollTextAnimation = dynamic(
    () => import('../../components/ScrollTextAnimation/ScrollTextAnimation'),
    { ssr: false }
  );

const HomePage3 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-header-style-s3'} Logo={Logo} col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                col2={'col-lg-2 col-md-6 col-6'}
                col3={'col-lg-7 col-md-1 col-1'}
                col4={'col-lg-3 col-md-2 col-2'} />
            <Hero3 />
            <ScrollTextAnimation />
            <FunFact hclass={'wpo-funfact-section-s3 section-padding '} />
            <About3 hclass={'wpo-about-section-s3'} />
            <ProjectSectionS3 hclass={'wpo-project-section-s3 section-padding'} />
            <ServiceSectionS3 hclass={'wpo-service-section-s3 section-padding pt-0'}/>
            <TestimonialS2 hclass={'wpo-testimonial-section-s2'} />
            <PricingSection hclass={'wpo-pricing-section section-padding'} />
            <PartnerSection hclass={'wpo-partners-section fade_bottom'}/>
            <Footer  />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage3;