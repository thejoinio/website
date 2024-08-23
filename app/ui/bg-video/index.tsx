import React from "react";

interface VideoBackgroundProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  children,
  as: Component = "div",
}) => {
  return (
    <Component
      className={`relative w-full h-full min-h-fit justify-center items-center`}
    >
      <video
        id="bgVideo"
        className={`absolute top-0 left-0 w-full h-full object-cover`}
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        controls={false}
        preload="auto"
        poster="https://res.cloudinary.com/dh4rm7b7b/image/upload/v1723467984/Join/poster_bhcudc.png"
      >
        <source
          src="https://res.cloudinary.com/dh4rm7b7b/video/upload/v1723467970/Join/bg-video_hfdxfu.mp4"
          type="video/mp4"
        />
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the background video.
      </video>
      <div
        className={`relative flex flex-col items-center justify-center w-full h-full`}
      >
        {children}
      </div>
    </Component>
  );
};
