import React from 'react';
import Link from 'next/link';
import Services from "../../api/Services";
import Image from 'next/image';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const ServiceSectionS4 = (props) => {
    return (
        <section className={"" + props.hclass}>
            <div className="container-fluid">
                <div className="title">
                    <h2 className="fade_bottom">My Services</h2>
                    <h3 className="fade_bottom">What I Do For You</h3>
                </div>
                <div className="service-wrap">
                    <div className="row">
                        {Services.slice(0, 4).map((service, item) => (
                            <div className="col-lg-3 col-md-6 col-12 fade_bottom" key={item}>
                                <div className="service-card">
                                    <div className="content">
                                        <div className="icon">
                                            <Image src={service.Icon} alt="icon" />
                                        </div>
                                        <h2><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.title}</Link></h2>
                                        <p>{service.description}</p>
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

export default ServiceSectionS4;