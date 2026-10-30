import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import dynamic from 'next/dynamic';
import Hero5 from '../../components/hero5/hero5';
import MarquSection from '../../components/MarquSection/MarquSection';
import About5 from '../../components/about5/about5';
import ClassicInteriorDesign from '../../components/ClassicInteriorDesign/ClassicInteriorDesign';
import WorkSection from '../../components/WorkSection/WorkSection';
import ServiceSectionS5 from '../../components/ServiceSectionS5/ServiceSectionS5';
import ProjectSectionS5 from '../../components/ProjectSectionS5/ProjectSectionS5';
import TestimonialS4 from '../../components/TestimonialS4/TestimonialS4';
import BlogSectionS2 from '../../components/BlogSectionS2/BlogSectionS2';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.svg'

const ScrollTextAnimation = dynamic(
    () => import('../../components/ScrollTextAnimation/ScrollTextAnimation'),
    { ssr: false }
  );


const HomePage = () => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-header-style-s4'} Logo={Logo} col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                col2={'col-lg-2 col-md-6 col-6'}
                col3={'col-lg-7 col-md-1 col-1'}
                col4={'col-lg-3 col-md-2 col-2'} />
            <Hero5 />
            <ScrollTextAnimation/>
            <MarquSection />
            <About5 hclass={"wpo-about-section-s4"}/>
            <ClassicInteriorDesign />
            <WorkSection hclass={'wpo-work-section section-padding'} />
            <ServiceSectionS5 hclass={'wpo-service-section-s4'} />
            <ProjectSectionS5 hclass={'wpo-project-section-s4 section-padding pt-0'} />
            <TestimonialS4 hclass={'wpo-testimonial-section-s3 section-padding'} />
            <BlogSectionS2 hclass={'wpo-blog-section-s2 section-padding'} />
            <PartnerSection hclass={'wpo-partners-section fade_bottom'} />
            <Footer/>
            <Scrollbar /> 
        </Fragment>
    )
}

export default HomePage