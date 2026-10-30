import React from "react";
import blogs from '../../api/blogs'
import Link from "next/link";
import Image from "next/image";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSectionS4 = (props) => {


    return (
        <section className={"" + props.hclass}>
            <div className="container-fluid p-0">
                <div className="title">
                    <h2 className="fade_bottom">Our Blog</h2>
                    <h3 className="fade_bottom">Latest News Update</h3>
                </div>

                <div className="blog-wrap">
                    <div className="row">
                        {blogs.slice(9, 11).map((blog, bitem) => (
                            <div className="col col-lg-6 col-md-6  col-12 fade_bottom" key={bitem}>
                                <div className="blog-card-s12">
                                    <div className="image">
                                        <Image src={blog.screens} alt="" />
                                    </div>
                                    <div className="text">
                                        <h2><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                        <p>{blog.description}</p>
                                        <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}><span>Read More...</span></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogSectionS4;
