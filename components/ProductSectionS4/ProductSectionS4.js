import React from 'react';
import Link from 'next/link';

const ProductSectionS4 = ({
    products,
    addToCartProduct,
    addToWishListProduct,
    currentPage,
    totalPages,
    setCurrentPage
}) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0)
    }

    return (
        <section className="wpo-shop-section section-padding pt-0">
            <div className="container">
                <div className="row">
                    {products.map((product, index) => (
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

                    {totalPages > 1 && (
                        <div className="pagination-wrapper pagination-wrapper-center">
                            <ul className="pg-pagination">
                                <li>
                                    <button
                                        onClick={() => setCurrentPage(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        <i className="ti-angle-left"></i>
                                    </button>
                                </li>
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <li key={i} className={currentPage === i + 1 ? "active" : ""}>
                                        <button onClick={() => setCurrentPage(i + 1)}>
                                            {i + 1}
                                        </button>
                                    </li>
                                ))}
                                <li>
                                    <button
                                        onClick={() => setCurrentPage(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        <i className="ti-angle-right"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProductSectionS4;
