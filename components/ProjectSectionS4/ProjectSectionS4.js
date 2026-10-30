import React from 'react';
import Link from 'next/link';
import Projects from '../../api/projects';

import arrow from '/public/images/right-arrow-white-2.svg'
import Image from 'next/image';

const ProjectSectionS4 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={"" + props.hclass}>
            <div className="container-fulid">
                <div className="top-content">
                    <div className="title fade_bottom">
                        <h2>
                            <span className="bg-text">p</span>
                            <span>Featured</span> <br />
                            Projects
                        </h2>
                    </div>
                    <div className="project-allBtn fade_bottom">
                        <Link onClick={ClickHandler} href="/projects" className="theme-btn"><span className="rolling-text">See All Projects</span>
                            <Image src={arrow} alt="" /></Link>
                    </div>
                </div>
                <div className="row">
                    {Projects.slice(12, 15).map((project, item) => (
                        <div className="col-lg-4 col-md-6 col-12 scroll-text-animation" data-animation="fade_from_bottom" key={item}>
                            <div className="project-card-s5">
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
        </section>
    );
};

export default ProjectSectionS4;