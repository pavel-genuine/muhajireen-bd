import React from 'react';
import Link from 'next/link';
import Services from "../../api/Services";

import Servicebg from '/public/images/service/service-bg-2.jpg'
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSectionS2 = (props) => {


    return (
        <section className={"" + props.hclass}>
            <div className="container-fluid">
                <div className="service-wrap">
                    <div className="bg-image">
                        <Image src={Servicebg} alt="" />
                    </div>
                    <div className="row g-0">
                        {Services.slice(4, 10).map((service, item) => (
                            <div className="col-lg-4 col-md-6 col-12 fade_bottom" key={item}>
                                <div className="service-card-s2">
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
}

export default ServiceSectionS2;




