import React from 'react';
import ContactFormSection from '../../components/ContactFormSection/ContactFormSection'


const ConsultaFormSection = (props) => {
    return (
        <section className={"" + props.hclass}>
            <div className="wraper" style={{ backgroundImage: `url(${'/images/contact-bg.jpg'})`}}>
                <div className="contact">
                    <h2>Get A Free Consultation</h2>
                    <ContactFormSection/>
                </div>
            </div>
        </section>
    );
};

export default ConsultaFormSection;