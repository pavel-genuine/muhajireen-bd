import React from 'react';
import Link from 'next/link';
import arrow from '/public/images/right-arrow-2.svg';

const ProductSectionS3 = ({ hclass, products, addToCartProduct, addToWishListProduct }) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0)
    }
    return (
        <section className={hclass}>
            <div className="container-fluid">
                <div className="title">
                    <h2>Trending Product For You</h2>
                    <p>Leveraging advanced tools and techniques, Blaze ensures precision and efficiency.</p>
                </div>

                <div className="row">
                    {products.length > 0 &&
                        products.map((product, index) => (
                            <div className="col col-lg-4 col-md-6 col-12 fade_bottom" key={index}>
                                <div className="shop-card">
                                    <div className="image">
                                        <img src={product.proImg} alt="" />
                                        <button>
                                            <i className="ti-heart" onClick={() => addToWishListProduct(product)}></i>
                                            <span onClick={() => addToCartProduct(product)}>Add to cart</span>
                                        </button>
                                    </div>
                                    <div className="content">
                                        <h2>
                                            <Link onClick={ClickHandler} href={'/shop-single/[slug]'} as={`/shop-single/${product.slug}`}>
                                                {product.title}
                                            </Link>
                                        </h2>
                                        <del>${product.delPrice}</del>
                                        <span>${product.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="project-allBtn">
                    <Link onClick={ClickHandler} href="/shop" className="theme-btn">
                        <span>See All Products</span>
                        <img src={arrow} alt="" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductSectionS3;



