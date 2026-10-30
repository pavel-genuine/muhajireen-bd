
import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic';
import NavbarS4 from '../../components/NavbarS4/NavbarS4';
import PageTitle from '../../components/pagetitle/PageTitle'
import Teams from '../../api/team';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import ContactSectionS4 from '../../components/ContactSectionS4/ContactSectionS4';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.svg'
import arrow from '/public/images/team-single/arrow.svg'
import Image from 'next/image';

const ScrollTextAnimation = dynamic(
    () => import('../../components/ScrollTextAnimation/ScrollTextAnimation'),
    { ssr: false }
  );


const TeamSinglePage = () => {
    const router = useRouter()

    const teamSingle = Teams.find(item => item.slug === router.query.slug)

    return (
        <Fragment>
            <NavbarS4 hclass={'wpo-site-header wpo-header-style-s11'} Logo={Logo} col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                col2={'col-lg-2 col-md-4 col-6'}
                col3={'col-lg-7 col-md-1 col-1'}
                col4={'col-lg-3 col-md-4 col-2'} />
            <PageTitle pageTitle={teamSingle?.title} pagesub={'Team Single'} />
            <ScrollTextAnimation />
            <section className="wpo-teame-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-7 col-12">
                            <div className="left-sidbar">
                                <div className="image">
                                    <Image src={teamSingle?.Sime} alt="" />
                                </div>
                                <div className="info-description">
                                    <h2 className="fade_bottom">Professional Info.</h2>
                                    <p><span>M</span>odern Buildings Ipsum is simply dummy text of the best printing and
                                        typesetting industry. Lorem Ipsum has beening the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                                        to make a good type specimen book. It has survived not only five centuries, but also
                                        the leap into electronic typesetting,</p>
                                    <p>Lorem ipsum dolor sit amet consectetur. Sit aliquam dignissim situt id amet cyrium.
                                        Nulla thurg varius purus bibendum pellentesque eu sit nascetur good vitae. Nibh
                                        tortor etrutnibh tincidunt tempor proin. Est placerat felis pellentesque temupus
                                        condimentum.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-12">
                            <div className="right-sidbar">
                                <div className="personal-info">
                                    <h3>Personal Info</h3>
                                    <ul>
                                        <li><span>Positon:</span> <span>Senior Interior Designer</span></li>
                                        <li><span>Practice Area:</span> <span>Interior & Architecture</span></li>
                                        <li><span>Experience:</span> <span>10 years, Bliize Architecture Agency.</span></li>
                                        <li><span>Address:</span> <span>6391 Elgin St. Celina, Delaware 10299</span></li>
                                        <li><span>Phone:</span> <span>(603) 555-0123</span></li>
                                        <li><span>Email:</span> <span>youremail@gmail.com.</span></li>
                                    </ul>
                                </div>
                                <div className="education-info">
                                    <h3>Education</h3>
                                    <ul>
                                        <li>
                                            <Image src={arrow} alt="" />
                                            <span>Master of Landscape Architecture</span>
                                        </li>
                                        <li>
                                            <Image src={arrow} alt="" />
                                            <span>Architecture and Sustainable Heritage MA</span>
                                        </li>
                                        <li>
                                            <Image src={arrow} alt="" />
                                            <span>Landscape architecture</span>
                                        </li>
                                        <li>
                                            <Image src={arrow} alt="" />
                                            <span>Master of Architecture (M.Arch or MArch). </span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="skill_wrap">
                                    <div className="skill">
                                        <h3>Professional Skills</h3>
                                        <div className="progress_item">
                                            <span>Construction Design</span>
                                            <div className="progres">
                                                <div className="progress-value" style={{width:'80%'}}>
                                                    <span>85%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress_item">
                                            <span>Architecture Design</span>
                                            <div className="progres">
                                                <div className="progress-value"  style={{ width: '80%' }}> 
                                                    <span>80%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress_item">
                                            <span>Interior Design</span>
                                            <div className="progres">
                                                <div className="progress-value"  style={{ width: '95%' }}>
                                                    <span>95%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress_item">
                                            <span>Furniture & Decor</span>
                                            <div className="progres">
                                                <div className="progress-value"  style={{ width: '70%' }}>
                                                    <span>70%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactSectionS4 />
            <PartnerSection hclass={'wpo-partners-section fade_bottom'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamSinglePage;