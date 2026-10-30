import React from 'react';
import Projects from "../../api/projects";
import Link from 'next/link';


import arrow from '/public/images/right-arrow-2.svg';
import Image from 'next/image';




const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProjectSectionS3 = (props) => {



    return (
        <section className={"" + props.hclass}>
            <div className="container-fulid">
                <div className="title">
                    <div className="project-title scroll-text-animation" data-animation="fade_from_bottom">
                        <h2>Our Feature Projects</h2>
                        <p>Leveraging advanced tools and techniques, Blaze ensures
                            precision and efficiency.</p>
                    </div>
                    <div className="project-allBtn scroll-text-animation" data-animation="fade_from_bottom">
                        <Link onClick={ClickHandler} href="/projects" className="theme-btn"><span className="rolling-text">See All Products</span>
                            <Image src={arrow} alt="" /></Link>
                    </div>
                </div>
                <div className="sortable-gallery">
                    <div className="gallery-filters"></div>
                    <div className="row gallery-container">
                        {Projects.slice(8, 12).map((project, item) => (
                            <div className="col col-lg-6 col-12 scroll-text-animation" data-animation="fade_from_bottom" key={item}>
                                <div className="project-card-s3">
                                    <div className="image">
                                        <Image src={project.pimg} alt="" />
                                        <Image src={project.pimg} alt="" />
                                    </div>
                                    <div className="content">
                                        <h2><Link onClick={ClickHandler} href={'/project-single/[slug]'} as={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                                        <span>{project.subtitle}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSectionS3;