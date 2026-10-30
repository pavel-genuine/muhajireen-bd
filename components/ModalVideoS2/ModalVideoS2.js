
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'


const VideoModalS2 = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <React.Fragment>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="uySn1BZiWWs?si=XcM3FYqzlXkJaB0v" onClose={() => setOpen(false)} />
            <button className="video-btn" onClick={() => setOpen(true)}>
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="35" fill="white" />
                    <path
                        d="M48.5 32.9019C50.5 34.0566 50.5 36.9434 48.5 38.0981L31.25 48.0574C29.25 49.2121 26.75 47.7687 26.75 45.4593L26.75 25.5407C26.75 23.2313 29.25 21.7879 31.25 22.9426L48.5 32.9019Z"
                        fill="black" />
                </svg>
            </button>
        </React.Fragment>
    )
}

export default VideoModalS2;


