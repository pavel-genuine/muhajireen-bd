import React from "react";
import blogs from '../../api/blogs'
import Link from "next/link";
import Image from "next/image";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = (props) => {




    return (
        <section className={"" + props.hclass}>
            <div className="container-fulid">
                <div className="title">
                    <h2 className="fade_bottom">Recent articles</h2>
                    <p className="fade_bottom">Cras nisl nibh commodo ullamcorper aliquet. Gravida orci
                        laoreet eros platea curabitur scelerisque quis cras scelerisque. Fermentum mus et viverra purus
                        nibh fusce integer. Aenean cursus quis pharetra vitae vel sit ac malesuada. .</p>
                </div>
                <div className="blog-wrap">
                    <div className="row">
                        {blogs.slice(0, 3).map((blog, bitem) => (
                            <div className="col-lg-4 col-md-6 col-12 fade_bottom" key={bitem}>
                                <div className="blog-card">
                                    <div className="image">
                                        <Image src={blog.screens} alt="" />
                                    </div>
                                    <h3><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h3>
                                    <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}><span>Read More</span></Link>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogSection;

