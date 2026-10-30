import React, { Fragment } from 'react';
import Topbar from '../../components/Topbar/Topbar';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from '../../components/scrollbar/scrollbar'
import CheckoutSection from '../../components/CheckoutSection';
import { connect } from "react-redux";
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/logo.svg'

const CheckoutPage = ({ cartList }) => {
    return (
        <Fragment>
            <Topbar />
            <NavbarS2 hclass={'wpo-site-header wpo-header-style-s9 menu-left'} Logo={Logo}
                col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                col2={'col-lg-2 col-md-4 col-6'}
                col3={'col-lg-5 col-md-1 col-1'}
                col4={'col-lg-5 col-md-4 col-2'}
            />
            <PageTitle pageTitle={'Interior Designer, Expert Architect'} pagesub={'Checkout'} />
            <CheckoutSection cartList={cartList} />
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar />
        </Fragment>
    )
};
const mapStateToProps = state => {
    return {
        cartList: state.cartList.cart,
        symbol: state.data.symbol
    }
};

export default connect(mapStateToProps)(CheckoutPage);
