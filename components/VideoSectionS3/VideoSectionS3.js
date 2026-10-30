import React from 'react';
import Videobg from '/public/images/wpo-video-bg-3.jpg'
import VideoModalS2 from '../ModalVideoS2/ModalVideoS2';
const VideoSectionS3 = (props) => {
    return (
        <section className={"" + props.hclass}>
            <h2 className="d-none">itit</h2>
            <div className="wraper" style={{ backgroundImage:`url(${Videobg})`}}>
                <div className="video-wrap">
                    <div className="video-holder">
                        <VideoModalS2/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSectionS3;