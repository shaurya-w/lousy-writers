import React, { useEffect } from 'react';
import Intro from '../components/Intro';

const Home = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen inset-0 bg-bgd"> 
      <div className="flex flex-col gap-8 sm:flex-row items-center p-17 pt-25 sm:pt-0">
        <model-viewer
          className="sm:mt-[150px] mt-5"
          src="https://models.readyplayer.me/692892e1786317131c782cae.glb"
          auto-rotate
          camera-controls
          style={{ width: "350px", height: "350px" }}
        ></model-viewer>
        <Intro />
      </div>
    </div>
  );
};

export default Home;
