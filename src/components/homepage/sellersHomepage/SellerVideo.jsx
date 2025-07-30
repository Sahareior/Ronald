import React from 'react';

const SellerVideo = () => {
  return (
    <div className="w-full h-[700px] overflow-hidden rounded-2xl shadow-lg relative">
      <video
        className="w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/4231455/4231455-hd_1920_1080_25fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
<div className="absolute inset-0 flex items-center justify-center">
  <div className="bg-white/1 backdrop-blur-sm rounded-xl px-9 py-6">
    <h2 className="text-[#F8FAFA] text-3xl md:text-5xl popmed font-bold text-center drop-shadow-xs">
      85% of Fortune 350 <br /> companies choose Wiroko
    </h2>
  </div>
</div>

    </div>
  );
};

export default SellerVideo;
