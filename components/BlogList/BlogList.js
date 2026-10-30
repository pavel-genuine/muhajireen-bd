import React from 'react';
import Link from 'next/link';
import BlogSidebar from '../BlogSidebar/BlogSidebar'
import blogs from '../../api/blogs'
import VideoModal from '../ModalVideo/VideoModal';
import Image from 'next/image';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogList = (props) => {
    return (
        <section className={"" + props.Qclass}>
            <div className="container-fluid">
                <div className="wpo-blog-wraper">
                    <div className="wpo-blog-content">
                            {blogs.slice(0, 3).map((blog, bitem) => (
                                <div className={`post format-standard-image  ${blog.blClass}`} key={bitem}>
                                    <div className="entry-media">
                                        <Image src={blog.screens} alt='' />
                                        <VideoModal/>
                                    </div>
                                    <div className="entry-details">
                                        <div className="entry-meta">
                                            <ul>
                                                <li>By:<Link href="/blog">admin </Link> </li>
                                                <li>Date: {blog.create_at}</li>
                                            </ul>
                                        </div>
                                        <h3><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.title}</Link>
                                        </h3>
                                        <p>{blog.description}</p>
                                        <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`} className="read-more">Read More..</Link>
                                    </div>
                                </div>
                            ))}

                            <div className="pagination-wrapper pagination-wrapper">
                                <ul className="pg-pagination">
                                    <li>
                                        <button aria-label="Previous">
                                            <i className="fi ti-arrow-left left"></i>
                                        </button>
                                    </li>
                                    <li className="active"><button>1</button></li>
                                    <li><button>2</button></li>
                                    <li><button>3</button></li>
                                    <li>
                                        <button aria-label="Next">
                                            <i className="fi ti-arrow-right"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                    </div>
                    <BlogSidebar blLeft={props.blLeft} />
                </div>
            </div>
        </section> 
    )

}

export default BlogList;

