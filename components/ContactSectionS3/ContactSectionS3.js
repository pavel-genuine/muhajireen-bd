import React from 'react';
import ContactForm from '../ContactFormSection/ContactFormSection';

const ContactSectionS3 = () => {
    return (
        <section className="wpo-consultaForm-section-s2 section-padding pt-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="title">
                            <h2>Let’s Build Your Dream Together</h2>
                            <p>Blaze is a trailblazing architecture agency renowned for its innovative approach to
                                design, where creativity meets functionality. From futuristic skyscrapers to timeless
                                cultural landmarks, Blaze specializes in crafting spaces that inspire and endure.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="contact">
                            <h2>Get A Free Consultation</h2>
                          <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSectionS3;