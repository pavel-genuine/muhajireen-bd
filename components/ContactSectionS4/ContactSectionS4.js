import React from 'react';
import ContactForm from '../ContactFormSection/ContactFormSection';

const ContactSectionS4 = () => {
    return (
        <section className="wpo-consultaForm-section-s3">
            <div className="wraper" style={{ backgroundImage: `url(${'/images/contact-bg-2.jpg'})` }}>
                <div className="contact">
                    <h2>Get A Free Consultation</h2>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactSectionS4;