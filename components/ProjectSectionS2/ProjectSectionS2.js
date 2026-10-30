import React from 'react';
import Link from "next/link";
import Projects from "../../api/projects";
import arrow from '/public/images/right-arrow-2.svg';
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProjectSectionS2 = (props) => {



    return (
        <section className={"" + props.hclass}>
            <div className="container-fulid">
                <div className="title">
                    <h2 className="fade_bottom">Our Creative Works</h2>
                    <p className="fade_bottom">Blaze is a trailblazing architecture agency renowned for its
                        innovative approach to design, where creativity meets functionality. Blaze believes architecture
                        is personal. Each design tells the unique story of its clients.</p>
                </div>
                <div className="project-wrap">
                    {Projects.slice(4, 8).map((project, item) => (
                        <div className="project-card-s2 fade_bottom" key={item}>
                            <Image src={project.pimg} alt="project-1" />
                            <Image src={project.pimg} alt="project-1" />
                            <div className="content">
                                <h2><Link onClick={ClickHandler} href={'/project-single/[slug]'} as={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                                <span>{project.subtitle}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="project-allBtn fade_bottom">
                    <Link onClick={ClickHandler} href="/projects" className="theme-btn">
                        <span>See All Projects</span>
                        <Image src={arrow} alt="" /></Link>
                </div>
            </div>
        </section>
    )
}

export default ProjectSectionS2;





