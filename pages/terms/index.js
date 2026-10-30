import React, { Fragment } from 'react';
import NavbarS4 from '../../components/NavbarS4/NavbarS4';
import dynamic from 'next/dynamic';
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.svg'
import Privci1 from '/public/images/terms/terms2.jpg'
import Privci2 from '/public/images/terms/3.jpg'
import Privci3 from '/public/images/terms/4.jpg'
import FAQAccordion from '../../components/FaqSection/FAQAccordion';
import Image from 'next/image';

const ScrollTextAnimation = dynamic(
    () => import('../../components/ScrollTextAnimation/ScrollTextAnimation'),
    { ssr: false }
  );

const TermsPage = () => {
    return (
        <Fragment>
            <NavbarS4 hclass={'wpo-site-header wpo-header-style-s11'} Logo={Logo} col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                            col2={'col-lg-2 col-md-4 col-6'}
                            col3={'col-lg-7 col-md-1 col-1'}
                            col4={'col-lg-3 col-md-4 col-2'} />
            <PageTitle pageTitle={''} pagesub={'Terms'} />
            <ScrollTextAnimation />
            <section className="pf-terms-section section-padding pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="pf-terms-wrap">
                                <div className="pf-terms-img">
                                    <Image src={Privci1} alt="" />
                                </div>
                                <div className="pf-terms-text">
                                    <h2>Reasons for Using Website Privacy Policy</h2>
                                    <p>When you are planning to create a website, it’s very easy to overlook creating and
                                        adding a website Privacy Policy template. This is because when you are
                                        browsing through sites, you may not look at this part unless you really have to –
                                        and even then, you might not actually read all the content! However, it’s very
                                        important to have the terms page on your website, for a number of reasons. Once
                                        you’ve learned all about these reasons, you may realize that adding this part to
                                        your website is really essential.</p>
                                    <p>Even a short Privacy Policy agreement should include several key clauses to
                                        safeguard your business. For example, if you’re selling online and incorrectly price
                                        an item, your Privacy Policy are what will enable you to cancel the order.</p>

                                    <ul>
                                        <li>Acceptable use of your website and all of its content.</li>
                                        <li>Rules on uploading any content in your website.</li>
                                        <li>Any and all websites which are linked to your own.</li>
                                        <li>The availability of your website.</li>
                                        <li>Returns and Guarantees for Customers</li>
                                    </ul>
                                    <p>If any estimates of how long it will take the cleaning operatives to complete the job
                                        are being provided those are only estimates based on the average time it takes to
                                        clean a home or an office of similar size to the Client’s, it being difficult to
                                        calculate precisely how long such tasks may take and that a degree of flexibility
                                        may be required. Please note that one off cleans may take longer to complete due to
                                        longer intervals between cleaning sessions, number and type of cleaning tasks
                                        required, when compared to the regular maintenance cleaning of the same property.
                                    </p>
                                    <div className="row t-sub">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="pf-p-details-img">
                                                <Image src={Privci2} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="pf-p-details-img">
                                                <Image src={Privci3} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <p>Post Construction Cleaning (Builders Cleaning), Event Cleaning or badly neglected
                                        homes may take up to three times longer than a well maintained home requiring
                                        general cleaning. Therefore the Company advises the Client to ask f or our
                                        specialist cleaning services: Builders Cleaning or Event Cleaning.</p>

                                </div>
                                <div className="pf-faq-section">
                                    <h4>Frequently Ask Questions</h4>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <FAQAccordion/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar /> 
        </Fragment>
    )
};
export default TermsPage;