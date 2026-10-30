import React from 'react';
import Projects from '../../api/projects';
import Link from 'next/link';
import Image from 'next/image';



const ProjectSectionS13 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0)
    }

    return (
        <section className="wpo-project-section-s14 section-padding pb-0">
            <div className="wraper">
                <div className="title">
                    <h2 className="fade_bottom">Lets See Our Featured Work</h2>
                    <p className="fade_bottom">Blaze is a trailblazing architecture agency renowned for its
                        innovative approach to design, where creativity meets functionality. From futuristic skyscrapers
                        to timeless cultural landmarks, Blaze specializes in crafting spaces that inspire and endure.
                    </p>

                </div>
                <div className="project-content">
                    {
                        Projects.slice(53, 57).map((project, index) => (
                            <div className="item fade_bottom" key={index}>
                                <div className="imgWrap">
                                    <Image src={project.pimg} alt="" className="x1" />
                                </div>
                                <div className="content">
                                    <div className="top">
                                        <h3>{project.num}</h3>
                                    </div>
                                    <div className="botom-content">
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

export default ProjectSectionS13;




