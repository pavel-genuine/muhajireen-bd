import React, { Fragment, useEffect, useState } from 'react';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/action";
import Product from './product'
import api from "../../api";
import { useRouter } from 'next/router'
import ProductTabs from './alltab';
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/logo.svg';


const ProductSinglePage = (props) => {
    const router = useRouter()

    const productsArray = api();
    const Allproduct = productsArray

    const { addToCart } = props;

    const initialProducts = Allproduct.filter(prod => prod.slug === router.query.slug);
    const [product, setProduct] = useState(initialProducts);

    useEffect(() => {
        setProduct(Allproduct.filter(prod => prod.slug === router.query.slug));
      }, [Allproduct, router.query.slug]);

    const item = product[0];



    return (
        <Fragment>
            <NavbarS2 hclass={'wpo-site-header wpo-header-style-s9 menu-left'} Logo={Logo}
                col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                col2={'col-lg-2 col-md-4 col-6'}
                col3={'col-lg-5 col-md-1 col-1'}
                col4={'col-lg-5 col-md-4 col-2'}
            />
            <PageTitle pageTitle={'Product Single'} pagesub={'Shop Single'} />
            <section className="wpo-shop-single-section section-padding">
                <div className="container">
                    {item ? <Product
                        item={item}
                        addToCart={addToCart}
                    /> : null}
                    <ProductTabs />
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        products: state.data.products,
    }
};

export default connect(mapStateToProps, { addToCart })(ProductSinglePage);