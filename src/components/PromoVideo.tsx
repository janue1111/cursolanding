import React from 'react';

const PromoVideo = () => {
  return (
    <div className="py-6">
      <div className="elementor-wrapper elementor-open-inline">
        <iframe 
          className="elementor-video-iframe" 
          allowFullScreen 
          allow="clipboard-write" 
          title="Reproductor de vídeo videopress" 
          src="https://videopress.com/embed/A1Ujuv02?at&controls=1&autoPlay=0&muted=0&loop=0&playsinline=0"
          style={{ width: '100%', height: '400px' }}
        ></iframe>
      </div>
    </div>
  );
};

export default PromoVideo;