import React, { Fragment } from 'react';
import NavbarS4 from '../../components/NavbarS4/NavbarS4';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogList from '../../components/BlogList/BlogList'
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.svg';

const BlogPageLeft = () => {
    return (
        <Fragment>
            <NavbarS4 hclass={'wpo-site-header wpo-header-style-s11'} Logo={Logo} col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                col2={'col-lg-2 col-md-4 col-6'}
                col3={'col-lg-7 col-md-1 col-1'}
                col4={'col-lg-3 col-md-4 col-2'} />
            <PageTitle pageTitle={'Latest News Update'} pagesub={'Blog'} />
            <BlogList Qclass={'wpo-blog-pg-section blog-pg-left-sidebar section-padding pt-0'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogPageLeft;
