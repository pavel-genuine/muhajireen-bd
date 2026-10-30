import React from 'react';
import righticon from '/public/images/right-arrow-2.svg'
import Projects from '../../api/projects';
import Link from 'next/link';
import Image from 'next/image';



const ProjectSectionS12 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0)
    }


    return (
        <section className={"" + props.hclass}>
            <div className="wraper">
                <div className="title">
                    <h2 className="fade_bottom">Portfolio</h2>
                    <h3 className="fade_bottom">Discover Our Recent Projects</h3>
                    <p className="fade_bottom">Cum cras ultrices netus nulla nunc. Interdum duis pulvinar est
                        potenti magna mus enim tincidunt. Erat metus vitae egestas nunc viverra.
                    </p>
                    <div className="project-allBtn fade_bottom">
                        <Link onClick={ClickHandler} href="/projects" className="theme-btn"><span className="rolling-text">See All Projects</span>
                            <Image src={righticon} alt="" /></Link>
                    </div>
                </div>
                <div className="project-content ">
                    <div className="row">
                        {
                            Projects.slice(50, 53).map((project, index) => (
                                <div className="col col-lg-4 col-md-6 col-12 fade_bottom" key={index}>
                                <div className="item" >
                                    <div className="imgWrap">
                                        <Image src={project.pimg} alt="" className="x1" />
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
            </div>

        </section>
    );
};

export default ProjectSectionS12;




