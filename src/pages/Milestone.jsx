import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const Milestone = () => {
  const navigate = useNavigate();

  // CDN / URL-based images
  const images = [
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Milestone/img1.jpg?updatedAt=1760585662454",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Milestone/img2.jpg?updatedAt=1760585662485",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Milestone/img3.jpg?updatedAt=1760585669065",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Milestone/img4.jpg?updatedAt=1760585663196",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Milestone/img5.jpg?updatedAt=1760585662943",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Milestone/img6.jpg?updatedAt=1760585663304",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Milestone/img7.jpg?updatedAt=1760585667003",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Milestone/img8.jpg?updatedAt=1760585664285",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Milestone/img9.jpg?updatedAt=1760585663781",
    "https://ik.imagekit.io/igsnxowfs/events/2023-24/Milestone/img10.jpg?updatedAt=1760585663499",
  ];

  return (
    <>
      <Navbar show={true} />

      {/* Back Button */}
      {/* <button
        onClick={() => navigate("/events")}
        className="fixed top-4 left-12 sm:left-20 z-50 flex items-center text-white hover:text-cyan-400 transition-colors"
      >
        <ArrowLeft className="w-8 h-8 mr-3" />
        <span className="hidden sm:inline font-semibold"></span>
      </button> */}

      {/* Main Content */}
      <div className="bg-bgGradient min-h-screen">
        {/* Heading Section */}
        <div className="event-detail-hero">
          <h1 className="text-cyan-400 text-4xl sm:text-5xl lg:text-8xl font-NordBold mb-6 text-center drop-shadow-[0_0_15px_rgba(79,209,255,0.4)]">
            Milestone
          </h1>

          {/* Description */}
          <p className="text-white text-center font-Outfit max-w-4xl lg:max-w-5xl mb-10 leading-relaxed px-4">
            <span className="text-cyan-400 font-semibold">Milestone</span> is the
            annual event of our college, bringing together students, faculty, and
            industry professionals for a vibrant celebration of innovation, talent,
            and achievement. It features a mix of technical competitions, cultural
            performances, workshops, and guest lectures — providing a platform for
            students to showcase their skills and creativity. The event fosters
            learning, networking, and collaboration, making it a highlight of the
            academic year.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] sm:auto-rows-[300px] md:auto-rows-[350px] gap-6 max-w-7xl mx-auto px-4 pb-20">
          {images.map((src, index) => (
            <div
              key={index}
              className="gallery-card"
            >
              <img
                src={src}
                alt={`Milestone Event ${index + 1}`}
                loading="lazy"
                className="gallery-img"
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Milestone;
