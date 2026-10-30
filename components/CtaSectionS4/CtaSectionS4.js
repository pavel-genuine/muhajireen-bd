import React from 'react';
import icon1 from '/public/images/cta/envelope.svg'
import icon2 from '/public/images/cta/phone-receiver-silhouette.svg'
import icon3 from '/public/images/cta/location-pin.svg'
import icon4 from '/public/images/cta/clock.svg'
import Image from 'next/image';

const CtaSectionS4 = () => {
    return (
        <section className="wpo-cta-section-s4" style={{ backgroundImage: `url(${'/images/wpo-cta-bg-4.jpg'})` }}>
            <div className="contact">
                <h3>Get In Touch</h3>
                <ul>
                    <li><Image src={icon1} alt="" /> <span>bliize@gmail.com</span></li>
                    <li><Image src={icon2} alt="" /> <span>+(208) 555-0112</span>
                    </li>
                    <li><Image src={icon3} alt="" /> <span>4517 Washington Ave. Manchter, <br />
                        Kentucky
                        495</span>
                    </li>
                    <li><Image src={icon4} alt="" /><span>Mon – Fri: 8am – 9pm <br /> Sat – Sun:
                        Closed</span></li>
                </ul>
            </div>
        </section>
    );
};

export default CtaSectionS4;