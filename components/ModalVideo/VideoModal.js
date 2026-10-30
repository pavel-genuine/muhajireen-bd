
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const VideoModal = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="uySn1BZiWWs"
        onClose={() => setOpen(false)}
      />

      <button
        type="button"
        className="video-btn"
        onClick={() => setOpen(true)}
        aria-label="Watch our story"
      >
        <svg
          className="video-play-icon"
          viewBox="0 0 56 56"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="28"
            cy="28"
            r="27.5"
            fill="white"
            fillOpacity="0.88"
            stroke="rgba(91,29,45,0.22)"
          />

          <path
            d="M23 18.5C23 17.35 24.3 16.65 25.3 17.3L39 25.8C40 26.4 40 27.9 39 28.6L25.3 37.1C24.3 37.75 23 37.05 23 35.9V18.5Z"
            fill="#9c7941"
          />
        </svg>
      </button>

      <style jsx>{`
  .video - btn {
  display: flex;
  align - items: center;
  justify - content: center;
  width: 56px;
  height: 56px;
  min - width: 56px;
  padding: 0;
  border: 0;
  border - radius: 50 %;
  background: transparent;
  cursor: pointer;
  transition: transform 0.35s ease;
}

                .video - play - icon {
  display: block;
  width: 56px;
  height: 56px;
  flex - shrink: 0;
  transition: filter 0.35s ease;
}

                .video - btn:hover {
  transform: scale(1.08);
}

                .video - btn: hover.video - play - icon {
  filter: drop - shadow(0 5px 12px rgba(91, 29, 45, 0.18));
}

                .video - btn: focus - visible {
  outline: 2px solid #5b1d2d;
  outline - offset: 4px;
}
`}</style>
    </>
  );
};

export default VideoModal;
