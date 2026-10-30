import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import dynamic from 'next/dynamic';
import Hero6 from '../../components/hero6/hero6';
import About6 from '../../components/about6/about6';
import ProductSection from '../../components/ProductSection/ProductSection';
import ServiceSectionS6 from '../../components/ServiceSectionS6/ServiceSectionS6';
import ProjectSectionS6 from '../../components/ProjectSectionS6/ProjectSectionS6';
import WorkSectionS2 from '../../components/WorkSectionS2/WorkSectionS2';
import InstagramSection from '../../components/InstagramSection/InstagramSection';
import BlogSectionS2 from '../../components/BlogSectionS2/BlogSectionS2';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.svg'

const ScrollTextAnimation = dynamic(
    () => import('../../components/ScrollTextAnimation/ScrollTextAnimation'),
    { ssr: false }
  );

const HomePage6 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-header-style-s6'} Logo={Logo} col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                col2={'col-lg-2 col-md-6 col-6'}
                col3={'col-lg-7 col-md-1 col-1'}
                col4={'col-lg-3 col-md-2 col-2'} />
            <Hero6 />
            <ScrollTextAnimation />
            <About6 hclass={"wpo-about-section-s6 section-padding"} />
            <ProductSection />
            <ServiceSectionS6 hclass={'wpo-service-section-s6'} />
            <ProjectSectionS6 hclass={'wpo-project-section-s6 section-padding pt-0'} />
            <WorkSectionS2 hclass={'wpo-work-section-s2'} />
            <InstagramSection hclass={'wpo-work-section-s2'} />
            <BlogSectionS2 hclass={'wpo-blog-section-s3 section-padding'} />
            <PartnerSection hclass={'wpo-partners-section fade_bottom'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default HomePage6;