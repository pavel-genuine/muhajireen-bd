import React from 'react';
import Link from 'next/link';
import Projects from '../../api/projects';
import Image from 'next/image';

const ProjectSectionS8 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={"" + props.hclass}>
            <div className="container-fulid">
                <div className="title">
                    <span className="fade_bottom">Since 1994</span>
                    <h2 className="fade_bottom">Transforming Spaces,
                        Elevating Lives</h2>
                </div>
                <div className="sortable-gallery">
                    <div className="gallery-filters"></div>
                    <div className="row gallery-container">
                        {Projects.slice(32, 36).map((project, item) => (
                            <div className="col col-lg-6 col-12 scroll-text-animation" data-animation="fade_from_bottom" key={item}>
                                <div className="project-card-s7">
                                    <div className="image">
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

export default ProjectSectionS8;