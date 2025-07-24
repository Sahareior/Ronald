import React from 'react';

const SellerVideo = () => {
  return (
    <div className="w-full h-[700px] overflow-hidden rounded-2xl shadow-lg">
      <video
        className="w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/4231455/4231455-hd_1920_1080_25fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default SellerVideo;
