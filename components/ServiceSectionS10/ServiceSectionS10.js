import React from 'react';
import Link from 'next/link';
import Services from "../../api/Services";
import Image from 'next/image';

const ServiceSectionS10 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0)
    }
    return (
        <section className="wpo-service-section-s14">
            <div className="service-left">
                <div className="title fade_bottom">
                    <h2>What I Do</h2>
                    <p>From futuristic skyscrapers to timeless cultural landmarks, Blaze specializes in crafting spaces
                        that
                        inspire and endure.</p>
                </div>
            </div>
            <div className="service-wrap">
                {
                    Services.slice(4, 8).map((service, item) => (
                        <div className="service-card-s14 fade_bottom" key={item}>
                            <div className="item">
                                <div className="icon">
                                    <Image src={service.Icon} alt="icon" />
                                </div>
                                <div className="content">
                                    <h2><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.title}</Link></h2>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default ServiceSectionS10;


