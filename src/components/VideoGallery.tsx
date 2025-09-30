import React from 'react';

const VideoGallery = () => {
  // Videos reales del HTML original
  const videos = [
    "https://videopress.com/embed/kIzOH5WH?at&controls=1&autoPlay=0&muted=0&loop=0&playsinline=0",
    "https://videopress.com/embed/y63TnMhj?at&controls=1&autoPlay=0&muted=0&loop=0&playsinline=0",
    "https://videopress.com/embed/KFpLOCfe?at&controls=1&autoPlay=0&muted=0&loop=0&playsinline=0",
    "https://videopress.com/embed/fUlqg3YU?at&controls=1&autoPlay=0&muted=0&loop=0&playsinline=0",
    "https://videopress.com/embed/iOWJ1DEp?at&controls=1&autoPlay=0&muted=0&loop=0&playsinline=0",
    "https://videopress.com/embed/JYSEoPou?at&controls=1&autoPlay=0&muted=0&loop=0&playsinline=0"
  ];
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-6">
      {videos.map((videoSrc, index) => (
        <div key={index} className="elementor-wrapper elementor-open-inline">
          <iframe 
            className="elementor-video-iframe" 
            allowFullScreen 
            allow="clipboard-write" 
            title={`Reproductor de vídeo videopress ${index + 1}`} 
            src={videoSrc}
            style={{ width: '100%', height: '200px' }}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;