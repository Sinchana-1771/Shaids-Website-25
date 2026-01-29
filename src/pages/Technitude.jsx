import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Technitude = () => {
  const reelURL =
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Technitude/Technitude%2023.mp4?updatedAt=1760882689861";

  const image1url = "https://ik.imagekit.io/igsnxowfs/events/2023-24/Technitude/img1.jpg?updatedAt=1760585740567";
  const image3url = "https://ik.imagekit.io/igsnxowfs/events/2023-24/Technitude/img3.jpg?updatedAt=1760585741816";
  const image5url = "https://ik.imagekit.io/igsnxowfs/events/2023-24/Technitude/img5.jpg?updatedAt=1760585741911";
  const image6url = "https://ik.imagekit.io/igsnxowfs/events/2023-24/Technitude/img6.jpg?updatedAt=1760585742263";
  const image7url = "https://ik.imagekit.io/igsnxowfs/events/2023-24/Technitude/img7.jpg?updatedAt=1760585741049";
  const image8url = "https://ik.imagekit.io/igsnxowfs/events/2023-24/Technitude/img8.jpg?updatedAt=1760585741730";
  const image9url = "https://ik.imagekit.io/igsnxowfs/events/2023-24/Technitude/img9.jpg?updatedAt=1760585741221";
  const image10url = "https://ik.imagekit.io/igsnxowfs/events/2023-24/Technitude/img10.jpg?updatedAt=1760585741276";

  // Opens the video directly in a new tab
  const openReelInNewTab = () => {
    window.open(reelURL, "_blank");
  };

  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Button clicked! This is a log message.");
    Navigate(-1);
  };

  return (
    <>
      <Navbar show={true} />
      {/* Back Button to Events Page */}
      <button
        onClick={() => navigate("/events")}
        className="fixed top-4 left-20 sm:left-30 z-50 flex items-center text-white hover:text-cyan-400 transition-colors"
      >
        <ArrowLeft className="w-8 h-8 mr-3" />
        <span className="hidden sm:inline font-Outfit"></span>
      </button>
      <div className="bg-bgGradient min-h-screen">
        <div className="event-detail-hero">
          <h1 className="text-cyan-400 text-3xl sm:text-5xl lg:text-8xl text-center font-NordBold mb-6 drop-shadow-[0_0_15px_rgba(79,209,255,0.4)]">
            Technitude
          </h1>
        </div>

        <p className="text-white text-center sm:text-left font-Outfit max-w-4xl lg:max-w-6xl mb-8 px-4 leading-relaxed mx-auto">
          Technitude is a high-energy, two-day technical event packed with fun,
          challenges, and exciting competitions! It’s where technology meets
          thrill, bringing together students to test their skills, compete in
          unique tech-based games, and enjoy an electrifying atmosphere.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full max-w-6xl px-4 mb-12 mx-auto">
          <img
            src={image10url}
            alt="Technitude Main Event"
            className="w-full lg:w-[76%] h-64 sm:h-80 md:h-[28rem] object-cover rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-500 border-2 border-cyan-400 drop-shadow-[0_0_10px_rgba(79,209,255,0.3)]"
          />

          <div onClick={openReelInNewTab} className="w-full lg:w-[40%] cursor-pointer">
            <video
              src={reelURL}
              loop
              muted
              autoPlay
              controls
              playsInline
              className="w-full h-80 lg:h-[28rem] object-cover rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-500 border-2 border-cyan-400 drop-shadow-[0_0_10px_rgba(79,209,255,0.3)]"
            />
          </div>
        </div>

        <div
          className="
            grid 
            grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            auto-rows-[250px]
            sm:auto-rows-[300px]
            md:auto-rows-[330px]
            lg:auto-rows-[350px]
            gap-4 
            w-full 
            max-w-7xl 
            px-4 
            mb-14
            mx-auto
          "
        >
          {/* Large Featured Image */}
          <div className="col-span-2 row-span-2 gallery-card">
            <img src={image1url} alt="Technitude Event 1" className="gallery-img" />
          </div>

          <div className="gallery-card">
            <img src={image9url} alt="Technitude Event 2" className="gallery-img" />
          </div>

          <div className="gallery-card">
            <img src={image3url} alt="Technitude Event 3" className="gallery-img" />
          </div>

          {/* Wide Image */}
          <div className="col-span-2 gallery-card">
            <img src={image5url} alt="Technitude Event 5" className="gallery-img" />
          </div>

          <div className="gallery-card">
            <img src={image6url} alt="Technitude Event 6" className="gallery-img" />
          </div>

          <div className="gallery-card">
            <img src={image8url} alt="Technitude Event 8" className="gallery-img" />
          </div>

          {/* Another Wide Image */}
          <div className="col-span-2 gallery-card">
            <img src={image7url} alt="Technitude Event 7" className="gallery-img" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Technitude;