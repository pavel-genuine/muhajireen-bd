import React from 'react';
import Link from 'next/link';
import Shop1 from '/public/images/product-cetegory/1.png'
import Shop2 from '/public/images/product-cetegory/2.png'
import Shop3 from '/public/images/product-cetegory/3.png'
import Image from 'next/image';


const ProductCetegorySection = (props) => {
    return (
        <section className={"" + props.hclass}>
            <div className="row g-0">
                <div className="col col-lg-4 col-md-6 col-12 fade_bottom">
                    <div className="product-card">
                        <h2><Link href="/shop">Spring Collection</Link></h2>
                        <span><Link href="/shop">Shop Now</Link></span>
                        <Image src={Shop1} alt="" />
                    </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-12 fade_bottom">
                    <div className="product-card">
                        <h2><Link href="/shop">Special Offer</Link></h2>
                        <span><Link href="/shop">Shop Now</Link></span>
                        <Image src={Shop2} alt="" />
                    </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-12 fade_bottom">
                    <div className="product-card">
                        <h2><Link href="/shop">Delivered To You </Link></h2>
                        <span><Link href="/shop">Shop Now</Link></span>
                        <Image src={Shop3} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductCetegorySection;