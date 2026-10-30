import React, { Fragment } from 'react';
import blogs from '../../api/blogs';
import NavbarS4 from '../../components/NavbarS4/NavbarS4';
import { useRouter } from 'next/router'
import PageTitle from '../../components/pagetitle/PageTitle';
import BlogSingle from '../../components/BlogDetails/BlogSingle';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/logo.svg';

const BlogDetailsFull = (props) => {

    const router = useRouter()

    const Details = blogs.find(item => item.slug === router.query.slug)

    return (
        <Fragment>
            <NavbarS4 hclass={'wpo-site-header wpo-header-style-s11'} Logo={Logo} col1={'col-lg-3 col-md-3 col-3 d-lg-none dl-block'}
                col2={'col-lg-2 col-md-4 col-6'}
                col3={'col-lg-7 col-md-1 col-1'}
                col4={'col-lg-3 col-md-4 col-2'} />
            <PageTitle pageTitle={Details?.title} pagesub={'Blog Details'} />
             <BlogSingle styleClass={'blog-single-fullwidth'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetailsFull;
