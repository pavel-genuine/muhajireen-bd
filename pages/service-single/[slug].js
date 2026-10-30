import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic';
import NavbarS4 from '../../components/NavbarS4/NavbarS4';
import PageTitle from '../../components/pagetitle/PageTitle'
import Services from '../../api/Services';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import VideoModal from '../../components/ModalVideo/VideoModal';
import Logo from '/public/images/logo.svg'
import dream1 from '/public/images/service-single/dream/1.jpg'
import dream2 from '/public/images/service-single/dream/2.jpg'
import dream3 from '/public/images/service-single/dream/3.jpg'
import dream4 from '/public/images/service-single/dream/4.jpg'
import TestimonialS4 from '../../components/TestimonialS4/TestimonialS4';
import Image from 'next/image';

const ScrollTextAnimation = dynamic(
    () => import('../../components/ScrollTextAnimation/ScrollTextAnimation'),
    { ssr: false }
  );

const ServiceSinglePage = () => {

    const router = useRouter()

    const serviceSingle = Services.find(item => item.slug === router.query.slug)

    return (
        <Fragment>
            <NavbarS4 hclass={'wpo-site-header wpo-header-style-s11'} Logo={Logo} col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                col2={'col-lg-2 col-md-4 col-6'}
                col3={'col-lg-7 col-md-1 col-1'}
                col4={'col-lg-3 col-md-4 col-2'} />
            <PageTitle pageTitle={serviceSingle?.title} pagesub={'Service Single'} />
            <ScrollTextAnimation />
            <section className="service-single-page">
                <div className="container-fluid">
                    <div className="service-image scroll-text-animation" data-animation="fade_from_bottom">
                        <Image src={serviceSingle?.SImg} alt=""  />
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-8  col-12">
                            <div className="content">
                                <h2 className="scroll-text-animation" data-animation="fade_from_bottom">{serviceSingle?.title}</h2>
                                <p><span>M</span>odern Buildings Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has beening the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to make a good
                                    type specimen book. It has survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged. It was a popularised in the
                                    1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                                <p>Lorem ipsum dolor sit amet consectetur. Sit aliquam dignissim situt id amet cyrium. Nulla
                                    thurg varius purus bibendum pellentesque eu sit nascetur vitae. Nibh tortor etrutnibh
                                    tincidunt tempor proin. Est placerat felis pellentesque temupus condimentum consectetur.
                                    Faucibus nunc pellentesque ac mus posuere aliquam mor augue orci. Egestas donec sit
                                    pellentesque lacus.</p>
                            </div>
                        </div>
                        <div className="col-lg-4  col-12">
                            <div className="video" style={{ backgroundImage: `url(${'/images/wpo-video.jpg'})`}}>
                                <div className="video-holder">
                                    <VideoModal />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="dream-section">
                <div className="container-fluid">
                    <div className="dream-wrap">
                        <div className="title">
                            <h2>Making Your Dream True!</h2>
                            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled.Lorem ipsum dolor sit amet consectetur. Sit aliquam dignissim situt id
                                amet cyrium. Nulla thurg varius purus bibendum pellentesque eu sit nascetur vitae. Nibh
                                tortor etrutnibh tincidunt tempor proin. Est placerat felis pellentesque temupus condimentum
                                consectetur. Faucibus nunc pellentesque ac mus posuere aliquam mor augue orci. Egestas donec
                                sit pellentesque lacus.</p>
                        </div>
                        <div className="image-wrap">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12 scroll-text-animation"
                                    data-animation="fade_from_bottom">
                                    <div className="image">
                                        <Image src={dream1} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 scroll-text-animation"
                                    data-animation="fade_from_bottom">
                                    <div className="image">
                                        <Image src={dream2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="service-business section-padding">
                <div className="container-fluid">
                    <div className="project-title">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-12">
                                <h2 className="scroll-text-animation"
                                    data-animation="fade_from_bottom">Your Dream Our Endless Passion</h2>
                            </div>
                            <div className="col-lg-6 col-12">
                                <p className="scroll-text-animation"
                                    data-animation="fade_from_bottom">Simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled.</p>
                            </div>
                        </div>
                    </div>
                    <div className="image-wrap">
                        <div className="row">
                            <div className="col col-lg-6 col-md-12 col-12 scroll-text-animation"
                                data-animation="fade_from_bottom">
                                <div className="image">
                                    <Image src={dream3} alt="" />
                                </div>
                            </div>
                            <div className="col col-lg-6 col-md-12 col-12 scroll-text-animation"
                                data-animation="fade_from_bottom">
                                <div className="image">
                                    <Image src={dream4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <TestimonialS4 hclass={'wpo-testimonial-section-s3 section-padding'} />
            <PartnerSection hclass={'wpo-partners-section fade_bottom'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ServiceSinglePage;