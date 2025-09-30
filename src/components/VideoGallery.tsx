import React from 'react';

const VideoGallery = () => {
  const videos = [
    'https://videopress.com/embed/kIzOH5WH?at&controls=1&autoPlay=0&muted=0&loop=0&playsinline=0',
    'https://videopress.com/embed/y63TnMhj?at&controls=1&autoPlay=0&muted=0&loop=0&playsinline=0',
    'https://videopress.com/embed/KFpLOCfe?at&controls=1&autoPlay=0&muted=0&loop=0&playsinline=0',
    'https://videopress.com/embed/fUlqg3YU?at&controls=1&autoPlay=0&muted=0&loop=0&playsinline=0',
    'https://videopress.com/embed/iOWJ1DEp?at&controls=1&autoPlay=0&muted=0&loop=0&playsinline=0',
    'https://videopress.com/embed/JYSEoPou?at&controls=1&autoPlay=0&muted=0&loop=0&playsinline=0',
  ];

  return (
    <section className="section-block section-block--panel">
      <div className="video-grid">
        {videos.map((videoSrc, index) => (
          <iframe
            key={videoSrc}
            allowFullScreen
            allow="clipboard-write"
            title={`Reproductor de vídeo videopress ${index + 1}`}
            src={videoSrc}
          ></iframe>
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;
