import React from "react";

const CardVideoSection = () => {
  return (
    <div className="mt-32">
      <h1 className="text-5xl font-bold my-10 text-center">
        India's most ambition car
      </h1>
      <div>
        <video
          autoPlay
          loop
          controls
          style={{ width: "100%", height: "50%" }}
          src="https://player.vimeo.com/external/455719144.sd.mp4?s=94a139f4ea60f326425d5c7b2bddccb4d0fe7958&profile_id=164&oauth2_token_id=57447761"
        ></video>
      </div>
    </div>
  );
};

export default CardVideoSection;
