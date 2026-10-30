import React, { Fragment } from 'react';
import Topbar from '../../components/Topbar/Topbar';
import dynamic from 'next/dynamic';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import Hero9 from '../../components/hero9/hero9';
import CategorySection from '../../components/CategorySection/CategorySection';
import ProjectSectionS9 from '../../components/ProjectSectionS9/ProjectSectionS9';
import ProductSectionS2 from '../../components/ProductSectionS2/ProductSectionS2';
import OfferSection from '../../components/OfferSection/OfferSection';
import BlogSectionS2 from '../../components/BlogSectionS2/BlogSectionS2';
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

const HomePage9 = ({ addToCart,addToWishList }) => {

    const productsArray = api();  
    const currentProducts = productsArray.slice(0, 8);
    
    return (
        <Fragment>
            <Topbar />
            <NavbarS2 hclass={'wpo-site-header wpo-header-style-s9 menu-left'} Logo={Logo} col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                col2={'col-lg-2 col-md-4 col-6'}
                col3={'col-lg-5 col-md-1 col-1'}
                col4={'col-lg-5 col-md-4 col-2'} />
            <Hero9 />
            <ScrollTextAnimation />
            <CategorySection hclass={'wpo-category-section'} />
            <ProjectSectionS9 hclass={'wpo-project-section-s9 section-padding'} />
            <ProductSectionS2 hclass={'wpo-product-section section-padding pt-0'} 
                products={currentProducts}  addToCartProduct={addToCart}
                addToWishListProduct={addToWishList} />
            <OfferSection />
            <BlogSectionS2 hclass={'wpo-blog-section-s3 section-padding'} />
            <PartnerSection hclass={'wpo-partners-section fade_bottom'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

const mapDispatchToProps = {
    addToCart, addToWishList
};

export default connect(null, mapDispatchToProps)(HomePage9);