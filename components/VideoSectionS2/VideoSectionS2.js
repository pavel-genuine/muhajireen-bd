import React from 'react';
import VideoModalS2 from '../ModalVideoS2/ModalVideoS2';

const VideoSectionS2 = (props) => {
    return (
        <section className={"" + props.hclass}>
            <h2 className="d-none">itit</h2>
            <div className="wraper" style={{ backgroundImage: `url(${'/images/wpo-video-bg-2.jpg'})` }} >
                <div className="video-wrap">
                    <div className="video-holder">
                        <VideoModalS2 />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSectionS2;
