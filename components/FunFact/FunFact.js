import React from 'react';
import CountUp from 'react-countup';

const FunFact = (props) => {


    

    return (
        <section className={"" + props.hclass}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12 fade_bottom">
                        <div className="item">
                            <h2><span><CountUp end={215} enableScrollSpy /></span> <span className="icon">+</span></h2>
                            <h3>CURRENT CLIENTS</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 fade_bottom">
                        <div className="item">
                            <h2><span><CountUp end={550} enableScrollSpy /></span> <span className="icon">+</span></h2>
                            <h3>PROJECTS COMPLETE</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 fade_bottom">
                        <div className="item">
                            <h2><span><CountUp end={21} enableScrollSpy /></span> <span className="icon">+</span></h2>
                            <h3>YEARS OF EXPERIENCE</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 fade_bottom">
                        <div className="item">
                            <h2><span><CountUp end={25} enableScrollSpy /></span> <span className="icon">+</span></h2>
                            <h3>OFFICES WORLDWIDE</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default FunFact;
