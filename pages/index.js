import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/hero/hero';

import About from '../components/about/about';

import Footer from '../components/footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.png'
import IntegratedDevelopments from '../components/IntegratedDevelopments/IntegratedDevelopments';
import MasterplanConnectivity from '../components/MasterplanConnectivity/MasterplanConnectivity';
import LifestyleFacilities from '../components/LifestyleFacilities/LifestyleFacilities';
import InvestmentOpportunities from '../components/InvestmentOpportunities/InvestmentOpportunities';
import ContactSection from '../components/ContactSection/ContactSection';
import WAIcon from '../components/WAIcon/WAIcon';




const HomePage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo}
            />
            <Hero />

            <About />
            <IntegratedDevelopments />
            <MasterplanConnectivity></MasterplanConnectivity>
            <LifestyleFacilities></LifestyleFacilities>
            <InvestmentOpportunities></InvestmentOpportunities>
            <ContactSection></ContactSection>

            <Footer />
            {/* <Scrollbar /> */}
            <WAIcon></WAIcon>
        </Fragment>
    )
}

export default HomePage