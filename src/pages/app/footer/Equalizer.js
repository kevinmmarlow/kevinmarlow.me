import React from 'react';
import './Equalizer.css';

const Equalizer = () => {
  return (
    <i-amp-video-eq>
      <div className="-amp-video-eq-col">
        <div className="-amp-video-eq-1-1" />
        <div className="-amp-video-eq-1-2" />
      </div>
      <div className="-amp-video-eq-col">
        <div className="-amp-video-eq-2-1" />
        <div className="-amp-video-eq-2-2" />
      </div>
      <div className="-amp-video-eq-col">
        <div className="-amp-video-eq-3-1" />
        <div className="-amp-video-eq-3-2" />
      </div>
      <div className="-amp-video-eq-col">
        <div className="-amp-video-eq-4-1" />
        <div className="-amp-video-eq-4-2" />
      </div>
    </i-amp-video-eq>
  );
};

export default Equalizer;
