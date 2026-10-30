import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import dynamic from 'next/dynamic';
import Hero13 from '../../components/hero13/hero13';
import About9 from '../../components/About9/About9';
import ServiceSectionS9 from '../../components/ServiceSectionS9/ServiceSectionS9';
import ProjectSectionS12 from '../../components/ProjectSectionS12/ProjectSectionS12';
import TestimonialS7 from '../../components/TestimonialS7/TestimonialS7';
import TeamSectionS4 from '../../components/TeamSectionS4/TeamSectionS4';
import CtaSectionS4 from '../../components/CtaSectionS4/CtaSectionS4';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.svg'
import BlogSectionS4 from '../../components/BlogSectionS4/BlogSectionS4';
import VideoSectionS4 from '../../components/VideoSectionS4/VideoSectionS4';

const ScrollTextAnimation = dynamic(
    () => import('../../components/ScrollTextAnimation/ScrollTextAnimation'),
    { ssr: false }
  );

const HomePage13 = () => {


    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-header-style-s11'} Logo={Logo} col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                col2={'col-lg-2 col-md-4 col-6'}
                col3={'col-lg-7 col-md-1 col-1'}
                col4={'col-lg-3 col-md-4 col-2'} />
            <Hero13 />
            <ServiceSectionS9 hclass={'wpo-service-section-s13 section-padding'} showTitle={false} />
            <VideoSectionS4 hclass={'wpo-video-section-s3'} />
            <About9  />
            <PartnerSection hclass={'wpo-partners-section fade_bottom '} />
            <ScrollTextAnimation />
            <ProjectSectionS12 hclass={'wpo-project-section-s13 section-padding'} />
            <TestimonialS7 hclass={'wpo-testimonial-section-s13 section-padding'} />
            <TeamSectionS4 hclass={'wpo-team-section-s12 section-padding'} />
            <CtaSectionS4 />
            <BlogSectionS4 hclass={"wpo-blog-section-s13 section-padding"} />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};


export default HomePage13;