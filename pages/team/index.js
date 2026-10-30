import React, { Fragment } from 'react';
import NavbarS4 from '../../components/NavbarS4/NavbarS4';
import dynamic from 'next/dynamic';
import PageTitle from '../../components/pagetitle/PageTitle'
import TeamSectionS2 from '../../components/TeamSectionS2/TeamSectionS2';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.svg'

const ScrollTextAnimation = dynamic(
    () => import('../../components/ScrollTextAnimation/ScrollTextAnimation'),
    { ssr: false }
  );

const TeamPage = () => {
    return (
        <Fragment>
            <NavbarS4 hclass={'wpo-site-header wpo-header-style-s11'} Logo={Logo} col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                            col2={'col-lg-2 col-md-4 col-6'}
                            col3={'col-lg-7 col-md-1 col-1'}
                            col4={'col-lg-3 col-md-4 col-2'} />
            <PageTitle pageTitle={'Interior Designer, Expert Architect'} pagesub={'Team'} />
            <ScrollTextAnimation />
            <TeamSectionS2 hclass={'wpo-team-section-s2 d-title section-padding'}  />
            <PartnerSection hclass={'wpo-partners-section fade_bottom'} />
            <Footer />
            <Scrollbar /> 
        </Fragment>
    )
};
export default TeamPage;



