import React from 'react';
import Link from 'next/link';

import products1 from '/public/images/products/1.jpg'
import products2 from '/public/images/products/2.jpg'
import products3 from '/public/images/products/3.jpg'
import Image from 'next/image';

const ProductSection = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="wpo-products-section" style={{ backgroundImage: `url(${'/images/products/bg.jpg'})` }}>
            <div className="item">
                <div className="content">
                    <div className="image">
                        <Image src={products1} alt="" />
                    </div>
                    <div className="text">
                        <h2><Link onClick={ClickHandler} href="/shop">Side Table</Link></h2>
                        <span>$180</span>
                        <del>$230</del>
                    </div>
                </div>
                <span className="dot"></span>
            </div>
            <div className="item">
                <div className="content">
                    <div className="image">
                        <Image src={products2} alt="" />
                    </div>
                    <div className="text">
                        <h2><Link onClick={ClickHandler} href="/shop">stylish lamp</Link></h2>
                        <span>$100</span>
                        <del>$220</del>
                    </div>
                </div>
                <span className="dot"></span>
            </div>
            <div className="item">
                <div className="content">
                    <div className="image">
                        <Image src={products3} alt="" />
                    </div>
                    <div className="text">
                        <h2><Link onClick={ClickHandler} href="/shop">Yellow Sofa</Link></h2>
                        <span>$320</span>
                        <del>$400</del>
                    </div>
                </div>
                <span className="dot"></span>
            </div>
        </section>
    );
};

export default ProductSection;