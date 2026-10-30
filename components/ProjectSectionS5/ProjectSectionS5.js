import React from 'react';
import Link from 'next/link';
import Projects from '../../api/projects';
import Image from 'next/image';

const ProjectSectionS5 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={"" + props.hclass}>
            <div className="container-fulid p-0">
                <div className="row g-0">
                    {
                        Projects.slice(15, 19).map((project, item) => (
                            <div className="col-lg-3 col-md-6 col-12 scroll-text-animation" data-animation="fade_from_bottom" key={item}>
                                <div className="project-card-s4">
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
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default ProjectSectionS5;