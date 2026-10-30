import React from 'react';
import Teams from '../../api/team';
import Link from 'next/link';
import Image from 'next/image';



const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSectionS5 = (props) => {
    return (
        <section className={"" + props.hclass}>
            <div className="container-fluid">
                <div className="title">
                    <h2 className="fade_bottom">Our Team</h2>
                    <h3 className="fade_bottom">Our Expert Architect</h3>
                </div>
                <div className="team-wrap">
                    <div className="row">
                        {Teams.slice(4, 8).map((team, titem) => (
                            <div className="col-lg-3 col-md-6 col-12 fade_bottom" key={titem}>
                                <div className="team-card-s12">
                                    <div className="image">
                                        <Image src={team.timg} alt="team" />
                                        <Image src={team.timg} alt="team" />
                                    </div>
                                    <div className="text">
                                        <h2>
                                            <Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>
                                                <span>{team.title}</span>
                                            </Link>
                                        </h2>
                                        <span>{team.subtitle}</span>
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

export default TeamSectionS5;