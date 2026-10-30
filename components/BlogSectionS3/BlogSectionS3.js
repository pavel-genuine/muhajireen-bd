import React from "react";
import blogs from '../../api/blogs'
import Link from "next/link";
import Image from "next/image";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSectionS3 = (props) => {


    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="title">
                    <h2 className="fade_bottom">Our Blog</h2>
                    <h3 className="fade_bottom">Latest News Update</h3>
                </div>

                <div className="blog-wrap">
                    <div className="row">
                        <div className="col col-lg-7 col-12 fade_bottom">
                            {blogs.slice(6,7).map((blog ) => (
                                <div  className="blog-card-s12" key={blog.id}>
                                    <div className="image">
                                        <Image src={blog.screens} alt="" />
                                    </div>
                                    <div className="text">
                                        <h2><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                        <p>{blog.description}</p>
                                        <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}><span>Read More...</span></Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="col col-lg-5 col-12 fade_bottom">
                            {blogs.slice(7,9).map((blog, bitem) => (
                                <div  className="blog-card-s12" key={bitem}>
                                    <div className="image">
                                        <Image src={blog.screens} alt="" />
                                    </div>
                                    <div className="text">
                                        <h2><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                        <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}><span>Read More</span></Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogSectionS3;
