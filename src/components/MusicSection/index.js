import React from "react";
import Card from "../Card";
import "./styles.css";

const MusicSection = () => {
  return (
    <div className="flex music-section__container">
      <Card>
        <iframe
          src="https://open.spotify.com/embed/playlist/7uT1SBADH5s995rcAzEH1Q?utm_source=generator"
          width="100%"
          height="352"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </Card>
      <Card>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/jRxDUsGmwuc?si=_hXYYMV8u2Ll0eBh"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Card>
    </div>
  );
};

export default MusicSection;
