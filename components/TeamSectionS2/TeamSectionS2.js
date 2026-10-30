import React from "react";
import Link from "next/link";
import Teams from "../../api/team";
import Image from "next/image";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSectionS2 = (props) => {


    return (

        <section className={"" + props.hclass}>
            <div className="container-fluid p-0">
                <div className="title">
                    <h2 className="fade_bottom">Meet Our Renovation
                        Expert Team</h2>
                    <p className="fade_bottom">Leveraging advanced tools and techniques, Blaze ensures
                        precision and efficiency.</p>
                </div>
                <div className="team-wrap">
                    <div className="row">
                        {Teams.slice(0, 4).map((team, titem) => (
                            <div className="col-lg-3 col-md-6 col-12 fade_bottom" key={titem}>
                                <div className="team-card">
                                    <div className="image">
                                        <Image src={team.timg} alt="team" />
                                        <Image src={team.timg} alt="team" />
                                    </div>
                                    <h2>
                                        <Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>
                                            <span>{team.title}</span>
                                        </Link>
                                    </h2>
                                    <span>{team.subtitle}</span>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TeamSectionS2;

