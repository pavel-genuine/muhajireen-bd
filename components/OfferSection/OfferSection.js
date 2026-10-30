import React from 'react';
import Link from 'next/link';

const OfferSection = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0)
    }
    return (
        <section className="wpo-offer-section" style={{ backgroundImage: `url(${'/images/offer-bg.jpg'})` }}>
            <div className="offer-wraper">
                <h2>Discount for All Products</h2>
                <p>Our bracelets, necklaces, and rings feature a unique screw motif, symbolizing the idea of locking
                    love in place.</p>
                <h3>50%<span>off</span></h3>
                <Link onClick={ClickHandler} href="/shop" className="shop-btn">Shop Now</Link>
            </div>
        </section>
    );
};

export default OfferSection;