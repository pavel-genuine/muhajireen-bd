import React from 'react';
import Link from 'next/link';

const CtaSectionS2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={"" + props.hclass} style={{ backgroundImage: `url(${'/images/wpo-cta-bg-3.jpg'})` }}>
            <div className="title">
                <h2 className="poort-text poort-in-right">Want To Renovate Your Space</h2>
                <Link onClick={ClickHandler} href="/contact"><span>Lets Start Together</span></Link>
            </div>
        </section>
    );
};

export default CtaSectionS2;