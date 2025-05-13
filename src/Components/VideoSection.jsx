import React from "react";

const VideoSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto rounded-lg overflow-hidden shadow-xl">
        <div className="relative">
          <video
            className="w-full h-[500px] md:h-[600px] lg:h-[800px] object-cover rounded-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Optional Overlay for text or effect */}
          <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
            {/* You can add overlay content here */}
            {/* <h2 className="text-white text-3xl md:text-5xl font-bold text-center">Experience the Power of Astrology</h2> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
