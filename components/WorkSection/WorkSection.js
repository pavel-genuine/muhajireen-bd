import React from 'react';
import ImgAnimet from '/public/images/work-image.jpg'
import Image from 'next/image';

const WorkSection = (props) => {
    return (
        <section className={"" + props.hclass}>
            <div className="title">
                <h2 className="fade_bottom">Lets See How <br />
                    We Work</h2>
                <p className="fade_bottom">Designing innovative residential spaces, state-of-the-art
                    commercial hubs, or inspiring public structures, Blaze thrives on creating iconic designs that blend
                    art, science, and purpose seamlessly.</p>
            </div>
            <div className="row">
                <div className="col-lg-6 col-12 fade_bottom">
                    <div className="item">
                        <h3>Planning</h3>
                        <div className="text">
                            <span>Step 1</span>
                            <p>This involves determining the anticipated costs associated with the project</p>
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
                            <p>This involves determining the anticipated costs associated with the project</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="image">
                        <Image className="img-animet fade_bottom"  src={ImgAnimet} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkSection;