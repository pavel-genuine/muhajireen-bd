import React, { Fragment } from "react";
import { connect } from "react-redux";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Topbar from "../../components/Topbar/Topbar";
import NavbarS2 from "../../components/NavbarS2/NavbarS2";
import { removeFromWishList, addToCart } from "../../store/actions/action";
import Footer from '../../components/footer/Footer';
import Link from "next/link";
import Logo from '/public/images/logo.svg'




const WishlistPage = (props) => {

    const { wishs } = props;


    return (
        <Fragment>

            <Topbar />
            <NavbarS2 hclass={'wpo-site-header wpo-header-style-s9 menu-left'} Logo={Logo}
                col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                col2={'col-lg-2 col-md-4 col-6'}
                col3={'col-lg-5 col-md-1 col-1'}
                col4={'col-lg-5 col-md-4 col-2'}
            />
            <PageTitle pageTitle={'Interior Designer, Expert Architect'} pagesub={'Wishlist'} />
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
                                                    <th className="ptice">Price</th>
                                                    <th className="pr">Stock Status</th>
                                                    <th className="remove remove-b">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {wishs &&
                                                    wishs.length > 0 &&
                                                    wishs.map((wish, crt) => (
                                                        <tr key={crt}>
                                                            <td className="images">
                                                                <img src={wish.proImg} alt="" />
                                                            </td>
                                                            <td className="product">
                                                                <ul>
                                                                    <li className="first-cart">{wish.title} </li>
                                                                    <li>Brand : {wish.brand}</li>
                                                                    <li>Size : {wish.size}</li>
                                                                </ul>
                                                            </td>
                                                            <td className="ptice">${wish.price}</td>
                                                            <td className="stock">{wish.stock}</td>
                                                            <td className="action">
                                                                <ul>
                                                                    <li className="c-btn">
                                                                        <Link href="/cart" className="c-btn">
                                                                            <i className="fi flaticon-shopping-cart"></i>
                                                                        </Link>
                                                                    </li>
                                                                    <li className="w-btn">
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => props.removeFromWishList(wish.id)}
                                                                        >
                                                                            <i className="fi ti-trash"></i>
                                                                        </button>{" "}
                                                                    </li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                    ))}
                                            </tbody>
                                        </table>
                                    </form>
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
        wishs: state.wishList.w_list,
    };
};
export default connect(mapStateToProps, { removeFromWishList, addToCart })(
    WishlistPage
);
