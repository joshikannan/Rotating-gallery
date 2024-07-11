import "./App.css";
import React, { useState, useEffect, useRef } from "react";

const images = [
  "https://cdn.marvel.com/content/1x/shangchi_lob_crd_07.jpg",
  "https://cdn.marvel.com/content/1x/spider-mannowayhome_lob_crd_03.jpg",
  "https://cdn.marvel.com/content/1x/blackwidow_lob_crd_06.jpg",
  "https://cdn.marvel.com/content/1x/avengersageofultron_lob_crd_03_0.jpg",
  "https://cdn.marvel.com/content/1x/thorthedarkworld_lob_crd_02.jpg",
  "https://cdn.marvel.com/content/1x/venom_lob_crd_01.jpg",
  "https://cdn.marvel.com/content/1x/deadpool2_lob_crd_02.jpg",
  "https://cdn.marvel.com/content/1x/captainmarvel_lob_crd_06.jpg",
];

const App = () => {
  const [x, setX] = useState(0);
  const timerRef = useRef(null);

  const updateGallery = () => {
    setX((prevX) => prevX - 45);
  };

  useEffect(() => {
    timerRef.current = setTimeout(updateGallery, 2000);
    return () => clearTimeout(timerRef.current);
  }, [x]);

  const handlePrevClick = () => {
    setX((prevX) => prevX + 45);
    clearTimeout(timerRef.current);
  };

  const handleNextClick = () => {
    setX((prevX) => prevX - 45);
    clearTimeout(timerRef.current);
  };

  return (
    <div className="container">
      <div
        className="image-container"
        style={{ transform: `perspective(1000px) rotateY(${x}deg)` }}
      >
        {images.map((src, index) => (
          <span key={index} style={{ "--i": index + 1 }}>
            <img src={src} alt={`Image ${index + 1}`} />
          </span>
        ))}
      </div>
      <div className="btn-container">
        <button className="btn" id="prev" onClick={handlePrevClick}>
          Prev
        </button>
        <button className="btn" id="next" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
