import React from 'react';
import Link from 'next/link';
import Projects from '../../api/projects';
import Image from 'next/image';

const ProjectSectionS6 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={"" + props.hclass}>
            <div className="container-fulid">
                <div className="top-content">
                    <div className="title fade_bottom">
                        <h2>Our
                            Work</h2>
                        <p>Blaze is a trailblazing architecture agency renowned for its innovative approach to
                            design, where creativity meets functionality. From futuristic skyscrapers to timeless
                            cultural landmarks, Blaze specializes in crafting spaces that inspire and endure.</p>
                    </div>

                </div>
                <div className="row">
                    {
                        Projects.slice(15, 19).map((project, item) => (
                            <div className="col col-lg-3 col-md-6 col-12 scroll-text-animation" data-animation="fade_from_bottom" key={item}>
                                <div className="project-card-s6">
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
        </section >
    );
};

export default ProjectSectionS6;




