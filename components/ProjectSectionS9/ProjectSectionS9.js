import React from 'react';
import Link from 'next/link';
import Projects from '../../api/projects';
import Image from 'next/image';

const ProjectSectionS9 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={"" + props.hclass}>
            <div className="container-fulid">
                <div className="row">
                    {
                        Projects.slice(36, 41).map((project, item) => (
                            <div className={project.class} key={item}>
                                <div className="project-card-s9 fade_bottom">
                                    <div className="content">
                                        <div>
                                            <span>{project.num}</span>
                                            <h2><Link onClick={ClickHandler} href={'/project-single/[slug]'} as={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                                        </div>
                                        <p>{project.dis}</p>
                                        <Link onClick={ClickHandler} href={'/project-single/[slug]'} as={`/project-single/${project.slug}`}>Explore...</Link>
                                    </div>
                                    <div className="image">
                                        <Image src={project.pimg} alt="project-1" />
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSectionS9;
