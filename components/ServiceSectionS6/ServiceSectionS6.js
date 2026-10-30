import React from 'react';
import Link from 'next/link';
import Services from "../../api/Services";
import Image from 'next/image';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const ServiceSectionS6 = (props) => {
    return (
        <section className={"" + props.hclass}>
            <div className="container-fluid">
                <div className="service-wrap">
                    <div className="title fade_bottom">
                        <h2>Our Services
                            For You</h2>
                        <p>Blaze is a trailblazing architecture agency renowned for its innovative approach to design,
                            where creativity meets functionality. From futuristic skyscrapers to timeless cultural
                            landmarks, Blaze specializes in crafting spaces that inspire and endure.</p>
                    </div>
                    <div className="row">
                        {
                            Services.slice(0, 4).map((service, item) => (
                                <div className="col-md-6 col-12 fade_bottom" key={item}>
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
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSectionS6;

