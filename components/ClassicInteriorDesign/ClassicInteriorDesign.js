import React from 'react';


const ClassicInteriorDesign = () => {

    const sectionStyle = {
        backgroundImage: `url(${'/images/wpo-classic-interior-design.jpg'})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }
    return (
        <section className="wpo-classic-interior-design fade_bottom"
            style={sectionStyle } >
            <h3>Aesthetic Drawing Room </h3>
        </section>
    );
};

export default ClassicInteriorDesign;