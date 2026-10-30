import React from 'react';
import Link from 'next/link';
import Services from "../../api/Services";
import Image from 'next/image';

const ServiceSectionS9 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0)
    }
    return (
        <section className={"" + props.hclass}>
            <div className="container-fluid p-0">
                {props.showTitle && (
                    <div className="title">
                        <h2 className="fade_bottom">Our Services</h2>
                        <h3 className="fade_bottom">Service We Provide</h3>
                    </div>
                )}
                <div className="service-wrap">
                    <div className="row">
                        {Services.slice(14, 18).map((service, item) => (
                            <div className="col-lg-3 col-md-6 col-12 fade_bottom" key={item}>
                                <div className="service-card-s12">
                                    <div className="top">
                                        <div className="icon">
                                            <Image src={service.Icon} alt="icon" />
                                        </div>
                                        <h2><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.title}</Link></h2>
                                        <p>{service.description}</p>
                                    </div>
                                    <div className="buttom">
                                        <Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>Discover More...</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSectionS9;