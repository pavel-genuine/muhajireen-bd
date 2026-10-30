import React from 'react';
import Link from 'next/link';
import Services from "../../api/Services";

import slider1 from '/public/images/service/icon-3/1.jpg'
import Image from 'next/image';



const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const ServiceSectionS3 = (props) => {

    return (
        <section className={"" + props.hclass}>
            <div className="container-fluid p-0">
                <div className="service-wrap">
                    <div className="service-slider">
                        <div className="service-slider scroll-text-animation" data-animation="fade_from_left">
                            <div className="item">
                                <Image src={slider1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="service-left scroll-text-animation" data-animation="fade_from_right">
                        {Services.slice(0, 3).map((service, item) => (
                            <div className="content " key={item}>
                                <div className="icon">
                                    <Image src={service.Icon} alt="icon" />
                                </div>
                                <h2><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.title}</Link></h2>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSectionS3;