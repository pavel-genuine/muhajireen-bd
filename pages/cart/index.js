import React, { Fragment } from "react";
import Topbar from "../../components/Topbar/Topbar";
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { Grid } from "@mui/material";
import Link from "next/link";
import { connect } from "react-redux";
import { totalPrice } from "../../utils";
import {
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
} from "../../store/actions/action";
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/logo.svg'

const CartPage = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const { carts } = props;


    const getItemTotalPrice = (item) => (Number(item.qty || 1) * Number(item.price || 0)).toFixed(0);


    const totalQuantity = carts.reduce((acc, item) => acc + Number(item.qty || 0), 0);

    const cartTotalPrice = totalPrice(carts);

    return (
        <Fragment>
            <Topbar />
            <NavbarS2 hclass={'wpo-site-header wpo-header-style-s9 menu-left'} Logo={Logo}
                col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                col2={'col-lg-2 col-md-4 col-6'}
                col3={'col-lg-5 col-md-1 col-1'}
                col4={'col-lg-5 col-md-4 col-2'}
            />
            <PageTitle pageTitle={"Interior Designer, Expert Architect"} pagesub={"Shop Cart"} />

            <div className="cart-area section-padding">
                <div className="container">
                    <div className="form">
                        <div className="cart-wrapper">
                            <div className="row">
                                <div className="col-12">
                                    <form action="cart">
                                        <table className="table-responsive cart-wrap">
                                            <thead>
                                                <tr>
                                                    <th className="images images-b">Image</th>
                                                    <th className="product-2">Product Name</th>
                                                    <th className="pr">Quantity</th>
                                                    <th className="ptice">Price</th>
                                                    <th className="stock">Total Price</th>
                                                    <th className="remove remove-b">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {carts.length > 0 ? (
                                                    carts.map((catItem, crt) => (
                                                        <tr key={crt}>
                                                            <td className="images">
                                                                <img src={catItem.proImg} alt={catItem.title} />
                                                            </td>
                                                            <td className="product">
                                                                <ul>
                                                                    <li className="first-cart">{catItem.title}</li>
                                                                    <li>Brand: {catItem.brand}</li>
                                                                    <li>Size: {catItem.size}</li>
                                                                </ul>
                                                            </td>
                                                            <td className="stock">
                                                                <div className="pro-single-btn">
                                                                    <Grid className="quantity cart-plus-minus">
                                                                        <span
                                                                            className="dec qtybutton"
                                                                            onClick={() => props.decrementQuantity(catItem.id)}
                                                                        >
                                                                            -
                                                                        </span>
                                                                        <input
                                                                            value={Number(catItem.qty || 0)}
                                                                            type="text"
                                                                            readOnly
                                                                        />
                                                                        <span
                                                                            className="inc qtybutton"
                                                                            onClick={() => props.incrementQuantity(catItem.id)}
                                                                        >
                                                                            +
                                                                        </span>
                                                                    </Grid>
                                                                </div>
                                                            </td>
                                                            <td className="ptice">${Number(catItem.price || 0).toFixed(0)}</td>
                                                            <td className="stock">${getItemTotalPrice(catItem)}</td>
                                                            <td className="action">
                                                                <ul>
                                                                    <li className="w-btn" onClick={() => props.removeFromCart(catItem.id)}>
                                                                        <i className="fi ti-trash"></i>
                                                                    </li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="6" className="text-center">
                                                            No items in the cart
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </form>
                                    <div className="submit-btn-area">
                                        <ul>
                                            <li>
                                                <Link onClick={ClickHandler} className="theme-btn" href="/shop">
                                                    Continue Shopping
                                                </Link>
                                            </li>
                                            <li>
                                                <button type="submit" className="theme-btn">Update Cart</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="cart-product-list">
                                        <ul>
                                            <li>
                                                Total Items<span>( {totalQuantity} )</span>
                                            </li>
                                            <li>
                                                Sub Price<span>${cartTotalPrice.toFixed(0)}</span>
                                            </li>
                                            <li>
                                                Vat<span>$0.00</span>
                                            </li>
                                            <li>
                                                Eco Tax<span>$0.00</span>
                                            </li>
                                            <li>
                                                Delivery Charge<span>$0.00</span>
                                            </li>
                                            <li className="cart-b">
                                                Total Price<span>${cartTotalPrice.toFixed(2)}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="submit-btn-area">
                                        <ul>
                                            <li>
                                                <Link onClick={ClickHandler} className="theme-btn" href="/checkout">
                                                    Proceed to Checkout
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};

export default connect(mapStateToProps, {
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
})(CartPage);
