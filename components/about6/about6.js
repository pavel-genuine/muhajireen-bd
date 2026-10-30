import React from 'react';

const about6 = (props) => {
    return (
        <section id="about" className={"" + props.hclass}
            style={{ backgroundImage: `url(${'/images/about/about-5/bg-shape.png'})` }}>
            <div className="about-wrap">
                <div className="content">
                    <div className="title fade_bottom">
                        <h2>Welcome To Bliize</h2>
                    </div>
                    <p className="fade_bottom">We specializes in crafting spaces that inspire and endure. Blaze pushes the
                        boundaries, transforming bold concept into architectural masterpieces, ensures precision and
                        efficiency.</p>
                </div>
            </div>
        </section>
    );
};

export default about6;