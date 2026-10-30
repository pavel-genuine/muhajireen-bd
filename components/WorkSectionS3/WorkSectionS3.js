import React from 'react';
import Wimage from '/public/images/work-image-s3.jpg'
import Link from 'next/link';
import Image from 'next/image';

const WorkSectionS3 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10,0)
    }
    return (
        <section className={"" +props.hclass}>
            <div className="container-fluid p-0">
                <div className="wraper">
                    <div className="left-content">
                        <h2 className="scroll-text-animation" data-animation="fade_from_right">How We Manage Renovations</h2>
                        <ul className="scroll-text-animation" data-animation="fade_from_right">
                            <li><Link onClick={ClickHandler} href="#">1. Consultation & Deal</Link></li>
                            <li><Link onClick={ClickHandler} href="#">2. Design & Planning</Link></li>
                            <li><Link onClick={ClickHandler} href="#">3. Start Working</Link></li>
                            <li><Link onClick={ClickHandler} href="#">4. Renovation</Link></li>
                            <li><Link onClick={ClickHandler} href="#">5. Completion</Link></li>
                        </ul>
                    </div>
                    <div className="right-image">
                        <Image src={Wimage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkSectionS3;