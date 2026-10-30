import React from 'react';
import Link from 'next/link';

const CtaSectionS2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={"" + props.hclass} style={{ backgroundImage: `url(${'/images/wpo-cta-bg-2.jpg'})` }}>
            <div className="title">
                <h2 className="poort-text poort-in-right">Let’s Build Your Dream Together</h2>
                <Link onClick={ClickHandler} href="/contact"><span>Get A Quote</span> <i className="ti-arrow-right"></i></Link>
            </div>
        </section>
    );
};

export default CtaSectionS2;