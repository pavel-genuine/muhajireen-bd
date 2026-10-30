import React, { Fragment, useState } from 'react';
import { connect } from "react-redux";
import Topbar from '../../components/Topbar/Topbar';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import dynamic from 'next/dynamic';
import PageTitle from '../../components/pagetitle/PageTitle';
import ProductSectionS4 from '../../components/ProductSectionS4/ProductSectionS4.js';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.svg';
import api from "../../api";
import { addToCart, addToWishList } from "../../store/actions/action";

const ScrollTextAnimation = dynamic(
    () => import('../../components/ScrollTextAnimation/ScrollTextAnimation'),
    { ssr: false }
  );

const ShopPage = ({ addToCart, addToWishList }) => {
    const productsArray = api();

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;
    const totalPages = Math.ceil(productsArray.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productsArray.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <Fragment>
            <Topbar />
            <NavbarS2 hclass={'wpo-site-header wpo-header-style-s9 menu-left'} Logo={Logo}
                col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                col2={'col-lg-2 col-md-4 col-6'}
                col3={'col-lg-5 col-md-1 col-1'}
                col4={'col-lg-5 col-md-4 col-2'}
            />
            <PageTitle pageTitle={'Interior Designer, Expert Architect'} pagesub={'Shop'} />
            <ScrollTextAnimation />

            <ProductSectionS4
                products={currentProducts}
                addToCartProduct={addToCart}
                addToWishListProduct={addToWishList}
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />

            <PartnerSection hclass={'wpo-partners-section fade_bottom'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

const mapDispatchToProps = {
    addToCart,
    addToWishList
};

export default connect(null, mapDispatchToProps)(ShopPage);
