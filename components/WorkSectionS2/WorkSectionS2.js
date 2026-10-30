import React from 'react';
import Wimg from '/public/images/work-image-s2.jpg'
import Image from 'next/image';

const WorkSectionS2 = (props) => {
    return (
        <section className={"" + props.hclass}>
            <div className="title">
                <h2 className="fade_bottom">Lets See How We Work</h2>
            </div>
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="image">
                        <Image className="img-animet fade_bottom" src={Wimg} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 col-12 fade_bottom">
                    <p>Designing innovative residential spaces, state-of-the-art commercial hubs, or inspiring public
                        structures, Blaze thrives on creating iconic designs that blend art, science, and purpose
                        seamlessly.</p>
                    <div className="item">
                        <h3>Planning</h3>
                        <div className="text">
                            <span>Step 1</span>
                            <p>This is where the designer meets with the client to discuss their needs, preferences and
                                so on</p>
                        </div>
                    </div>
                    <div className="item">
                        <h3>Estimating</h3>
                        <div className="text">
                            <span>Step 2</span>
                            <p>This involves determining the anticipated costs associated with the project</p>
                        </div>
                    </div>
                    <div className="item">
                        <h3>Building</h3>
                        <div className="text">
                            <span>Step 3</span>
                            <p>Designer begins to procure all the necessary materials, furnishings, fixtures</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkSectionS2;