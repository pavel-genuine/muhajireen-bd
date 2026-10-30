import React from 'react';
import blogs from '../../api/blogs';
import { useRouter } from 'next/router'
import Link from 'next/link'

import blog1 from '/public/images/blog-details/comments-author/img-1.jpg'
import blog2 from '/public/images/blog-details/comments-author/img-2.jpg'
import blog3 from '/public/images/blog-details/comments-author/img-3.jpg'
import gl1 from '/public/images/blog-details/img-1.jpg'
import gl2 from '/public/images/blog-details/img-2.jpg'
import BlogSidebar from '../../components/BlogSidebar/BlogSidebar';
import Image from 'next/image';
import CommentForm from './CommentsFrom';

const BlogSingle = (props) => {

    const router = useRouter()

    const Details = blogs.find(item => item.slug === router.query.slug)

    return (

        <section className={`wpo-blog-single-section section-padding pt-0 ${props.styleClass}`}>
            <div className="container-fluid">
                <div className="wpo-blog-wraper">
                    <div className="wpo-blog-content">
                        <div className="post format-standard-image scroll-text-animation" data-animation="fade_from_bottom">
                            <div className="entry-media">
                                <Image src={Details?.blogSingleImg} alt='' />
                            </div>
                            <div className="entry-meta">
                                <ul>
                                    <li>By:<Link href="/blog">admin </Link> </li>
                                    <li>Date:{Details?.create_at}</li>
                                </ul>
                            </div>

                            <p><span>A</span>rchitecture dolor sit amet consectetur. Dignissim id sagittis vitae auctor.
                                Interdum
                                quam faucibus nisl enim quis. Et mattis nisl at sagittis urna vitae nec vel risus. Nisl
                                eget dictumst tincidunt elementum aliquet. Congue at cras nam habitant ac. Ac vehicula
                                tempus ante massa dictum nibh non. Ultrices urna dui dolor metus porta tellus enim odio.
                                Maecenas diam nisl mattis tincidunt consequat hac. Sed sit ipsum porta dapibus facilisis
                                et faucibus. Mauris mauris in massa consectetur. Felis cursus aliquam placerat ipsum
                                mauris consequat. Volutpat ultricies faucibus donec pellentesque eu dignissim enim.
                                <br /><br />
                                Senectus faucibus arcu pulvinar libero. At consequat sed mattis neque a volutpat ut nisl
                                nisi. Ut sit sed leo dolor in sodales. In mus nisi facilisi augue nulla maecenas. Amet a
                                sodales interdum amet purus. Accumsan cursus pulvinar neque ullamcorper dui id urna. Id
                                nisl vitae turpis varius.</p>
                            <blockquote>
                                The Role of Functionality in Contemporary Architecture Small Spaces, Big Ideas:
                                Innovative Solutions for Compact Living
                                <h4>-Cameron Williamson, <span>Senior Interior Designer</span></h4>
                            </blockquote>
                            <h2>Targeted Goal For Perfect Building</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.</p>

                            <div className="gallery scroll-text-animation" data-animation="fade_from_bottom">
                                <div>
                                    <Image src={gl1} alt='' />
                                </div>
                                <div>
                                    <Image src={gl2} alt='' />
                                </div>
                            </div>
                        </div>
                        <div className="tag-wrap scroll-text-animation" data-animation="fade_from_bottom">
                            <div className="tag-share-s2">
                                <div className="tag">
                                    <span>Share Article: </span>
                                    <ul>
                                        <li><Link href="/blog"><i className="ti-facebook"></i></Link></li>
                                        <li><Link href="/blog"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link href="/blog"><i className="ti-linkedin"></i></Link></li>
                                        <li><Link href="/blog"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="tag-share">
                                <div className="tag">
                                    <span>Tags:</span>
                                    <ul>
                                        <li><Link href="/blog">Architecture</Link></li>
                                        <li><Link href="/blog">Interior</Link></li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="more-posts scroll-text-animation" data-animation="fade_from_bottom">
                            <div className="previous-post">
                                <Link href="/blog">
                                    <span className="post-control-link">Previous Post</span>
                                    <span className="post-name">Reviving the Past: A Deep Dive into Historic Building
                                        Restoration</span>
                                </Link>
                            </div>
                            <div className="next-post">
                                <Link href="/blog-left-sidebar">
                                    <span className="post-control-link">Next Post</span>
                                    <span className="post-name">10 Iconic Buildings That Redefined Modern
                                        Architecture</span>
                                </Link>
                            </div>
                        </div>

                        <div className="comments-area scroll-text-animation" data-animation="fade_from_bottom">
                            <div className="comments-section">
                                <h3 className="comments-title">Comments:</h3>
                                <ol className="comments">
                                    <li className="comment even thread-even depth-1" id="comment-1">
                                        <div id="div-comment-1">
                                            <div className="comment-theme">
                                                <div className="comment-image"><Image
                                                    src={blog1} alt='' />
                                                </div>
                                            </div>
                                            <div className="comment-main-area">
                                                <div className="comment-wrapper">
                                                    <div className="comments-meta">
                                                        <h4>Kristin Watson</h4>
                                                        <span className="comments-date">Founder Of Megan</span>
                                                    </div>
                                                    <div className="comment-area">
                                                        <p>Turpis nulla proin donec a ridiculus. Mi suspendisse faucibus
                                                            sed lacus. Vitae risus eu nullam sed quam. Eget aenean id
                                                            augue pellentesque turpis magna egestas arcu sed. Turpis
                                                            integer aliquam aliquam aliquam.
                                                            <Link className="comment-reply-link"
                                                                href="/blog">Reply...</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="children">
                                            <li className="comment">
                                                <div>
                                                    <div className="comment-theme">
                                                        <div className="comment-image"><Image
                                                            src={blog2}
                                                            alt='' /></div>
                                                    </div>
                                                    <div className="comment-main-area">
                                                        <div className="comment-wrapper">
                                                            <div className="comments-meta">
                                                                <h4>Cody Fisher</h4>
                                                                <span className="comments-date">Interior Designer</span>
                                                            </div>
                                                            <div className="comment-area">
                                                                <p>Vitae risus eu nullam sed quam. Eget aenean id augue
                                                                    pellentesque turpis magna egestas arcu sed. Turpis
                                                                    integer aliquam aliquam aliquam.

                                                                    <Link className="comment-reply-link"
                                                                        href="/blog">Reply...</Link>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <span className="shape">
                                                <svg width="107" height="261" viewBox="0 0 107 261" fill="none">
                                                    <path d="M1 0V240C1 251.046 9.9543 260 21 260H107"
                                                        stroke="#D9D9D9" />
                                                </svg>
                                            </span>
                                        </ul>
                                    </li>
                                    <li className="comment">
                                        <div>
                                            <div className="comment-theme">
                                                <div className="comment-image"><Image
                                                    src={blog3} alt='' />
                                                </div>
                                            </div>
                                            <div className="comment-main-area">
                                                <div className="comment-wrapper">
                                                    <div className="comments-meta">
                                                        <h4>Kristin Watson</h4>
                                                        <span className="comments-date">Founder Of Megan</span>
                                                    </div>
                                                    <div className="comment-area">
                                                        <p>Turpis nulla proin donec a ridiculus. Mi suspendisse faucibus
                                                            sed lacus. Vitae risus eu nullam sed quam. Eget aenean id
                                                            augue pellentesque turpis magna egestas arcu sed. Turpis
                                                            integer aliquam aliquam aliquam.
                                                            <Link className="comment-reply-link" href="/blog">Reply...</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </div>

                            <div className="comment-respond scroll-text-animation" data-animation="fade_from_bottom">
                                <h3 className="comment-reply-title">Leave a comment:</h3>
                                <CommentForm />
                            </div>
                        </div>
                    </div>
                    <BlogSidebar />
                </div>
            </div>
        </section>
    )
};
export default BlogSingle;
