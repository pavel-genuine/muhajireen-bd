import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Teams from "../../api/team";
import Image from "next/image";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSection = (props) => {
    const settings = {
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots:false,
        autoplay: true,
        speed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,  
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,  
                }
            },
        ]
    }

    return (
        <section className={"" + props.hclass}>
            <div className="container-fluid">
                <div className="title">
                    <h2 className="fade_bottom">Our Team</h2>
                </div>
                <Slider {...settings} className="team-slider">
                    {Teams.slice(0, 4).map((team, i) => (
                        <div className="col" key={i}>
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
                </Slider>
            </div>
        </section>
    )
}
export default TeamSection;


