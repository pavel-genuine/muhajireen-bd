import React, { Fragment } from 'react';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import dynamic from 'next/dynamic';
import Hero10 from '../../components/hero10/hero10';
import CategorySection from '../../components/CategorySection/CategorySection';
import ProductCetegorySection from '../../components/ProductCetegorySection/ProductCetegorySection';
import ProductSectionS3 from '../../components/ProductSectionS3/ProductSectionS3';
import OfferSectionS2 from '../../components/OfferSectionS2/OfferSectionS2';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.svg'
import api from "../../api";
import { connect } from "react-redux";
import { addToCart, addToWishList } from "../../store/actions/action";

const ScrollTextAnimation = dynamic(
    () => import('../../components/ScrollTextAnimation/ScrollTextAnimation'),
    { ssr: false }
  );


const HomePage10 = ({ addToCart, addToWishList }) => {

    const productsArray = api();  
    const currentProducts = productsArray.slice(8, 16);


    return (
        <Fragment>
            <NavbarS2 hclass={'wpo-site-header wpo-header-style-s9 menu-left'} Logo={Logo} col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                col2={'col-lg-2 col-md-4 col-6'}
                col3={'col-lg-5 col-md-1 col-1'}
                col4={'col-lg-5 col-md-4 col-2'} />
            <Hero10 />
            <ScrollTextAnimation />
            <CategorySection hclass={'wpo-category-section-s2'} />
            <ProductCetegorySection hclass={'wpo-product-cetegory-section'} />
            <ProductSectionS3 hclass={'wpo-product-section-s2 section-padding'}
                products={currentProducts} addToCartProduct={addToCart}
                addToWishListProduct={addToWishList} />
            <OfferSectionS2 />
            <PartnerSection hclass={'wpo-partners-section fade_bottom'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

const mapDispatchToProps = {
    addToCart, addToWishList
};

export default connect(null, mapDispatchToProps)(HomePage10);