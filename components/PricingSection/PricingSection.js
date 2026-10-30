import React from "react";
import Link from "next/link";
import { useState } from 'react';



const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const PricingSection = (props) => {
    const [plan] = useState([
        {
            id: '01',
            name: 'Basic',
            price: 125,
            features: ['Dismantling plan', 'Measurement of the room', 'Structure of a project', 'Scheme of interior finishing', '3D-Visualization of premises','Best interior design']
        },
        {
            id: '02',
            name: 'Standard',
            price: 150,
            features: ['Dismantling plan', 'Measurement of the room', 'Structure of a project', 'Scheme of interior finishing', '3D-Visualization of premises','Best interior design']
        },
        {
            id: '03',
            name: 'Platinum',
            price: 350,
            features: ['Dismantling plan', 'Measurement of the room', 'Structure of a project', 'Scheme of interior finishing', '3D-Visualization of premises','Best interior design']
        },
    
       
    ])

    return (
        <div className={"" + props.hclass}>
            <div className="container-fluid">
                <div className="section-title splittext-line">
                    <h2>Choose Your Perfect Plan</h2>
                    <p>Fermentum mus et viverra purus nibh fusce integer. Aenean cursus quis pharetra vitae vel sit ac
                        malesuada. </p>
                </div>
                <div className="row">
                    {plan.map((palns, pritem) => (
                        <div className="col-xl-4 col-lg-4 col-md-6 fade_bottom" key={pritem}>
                            <div className="pricing-card">
                                <div className="title">
                                    <h2>{palns.name}</h2>
                                </div>
                                <div className="pricing-top">
                                    <h2>${palns.price}<sub> / Per Month</sub></h2>
                                </div>
                                <ul>
                                    {palns.features.map((feature, featureitem) => (
                                        <li key={featureitem}>{feature}</li>
                                    ))}
                                </ul>
                                <Link onClick={ClickHandler} href="#" className="theme-btn">
                                    <span className="rolling-text">Choose Plan</span>
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}


export default PricingSection;





