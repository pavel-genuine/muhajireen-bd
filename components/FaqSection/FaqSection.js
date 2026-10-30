import React from 'react';
import Link from 'next/link';
import FAQAccordion from './FAQAccordion';

const FaqSection = () => {
    return (
        <section className="wpo-faq-section">
            <div className="title">
                <div className="content">
                    <h2 className="fade_bottom">Frequently Asked
                        Questions</h2>
                    <p className="fade_bottom">If you don't have any questions, please let us know.</p>
                    <Link href="/contact" className="theme-btn">
                        Contact Us
                    </Link>
                </div>
            </div>
            <FAQAccordion />
        </section>
    );
};

export default FaqSection;