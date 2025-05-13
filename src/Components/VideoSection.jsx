import React from "react";

const VideoSection = () => {
  return (
    <div>
      <video
        className="w-full object-cover  rounded-lg shadow-lg md:max-w-8xl h-[800px] mx-auto"
        autoPlay
        loop
        muted
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;
