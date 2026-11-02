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
import Head from 'next/head';




const HomePage = () => {
    return (
        <Fragment>
            <Head>
                <title>MUHAJIREEN Consultant Ltd</title>
                <meta
                    name="description"
                    content="Thoughtful Spaces, Meaningful Lives"
                />
                <link rel="icon" type="image/png" href="/images/logo.png" />
                <link rel="apple-touch-icon" href="/images/logo.png" />
                {/* Open Graph Tags */}
                <meta property="og:title" content="MUHAJIREEN Consultant Ltd" />
                <meta property="og:description" content="Thoughtful Spaces, Meaningful Lives" />
                <meta property="og:url" content="" />
                <meta property="og:site_name" content="MUHAJIREEN Consultant Ltd" />
                <meta property="og:image" content="" />
            </Head>
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