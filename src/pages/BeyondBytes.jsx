import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Zap } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const BeyondBytes = () => {
    const navigate = useNavigate();

    // Using existing Beyond Bytes images
    const images = [
        "https://ik.imagekit.io/igsnxowfs/events/2024-25/Beyond%20Bytes/img2.jpg?updatedAt=1761279848759",
        "https://ik.imagekit.io/igsnxowfs/events/2024-25/Beyond%20Bytes/img3.jpg?updatedAt=1761279848759",
        "https://ik.imagekit.io/igsnxowfs/events/2024-25/Beyond%20Bytes/img4.jpg?updatedAt=1761279849208",
        "https://ik.imagekit.io/igsnxowfs/events/2024-25/Beyond%20Bytes/img5.jpg?updatedAt=1761279849052",
        "https://ik.imagekit.io/igsnxowfs/events/2024-25/Beyond%20Bytes/img6.jpg?updatedAt=1761279849266",
        "https://ik.imagekit.io/igsnxowfs/events/2024-25/Beyond%20Bytes/img7.jpg?updatedAt=1761279849366",
        "https://ik.imagekit.io/igsnxowfs/events/2024-25/Beyond%20Bytes/img8.jpg?updatedAt=1761279849196",
        "https://ik.imagekit.io/igsnxowfs/events/2024-25/Beyond%20Bytes/img9.jpg?updatedAt=1761279849035",
        "https://ik.imagekit.io/igsnxowfs/events/2024-25/Beyond%20Bytes/img10.jpg?updatedAt=1761279848506",
    ];

    return (
        <>
            <Navbar show={true} />

            {/* Back Button */}
            <button
                onClick={() => navigate("/events")}
                className="fixed top-4 left-6 sm:left-20 z-50 flex items-center gap-2 text-white hover:text-cyan-400 transition-colors group"
            >
                <div className="p-2 rounded-full bg-white/10 group-hover:bg-cyan-500/20 backdrop-blur-md transition-all border border-cyan-500/30">
                    <ArrowLeft className="w-5 h-5" />
                </div>
                <span className="hidden sm:inline font-semibold">Back to Events</span>
            </button>

            <div className="min-h-screen bg-gradient-to-b from-[#000000] via-[#0a0a1a] to-[#0d1a2a]">
                {/* Hero Section */}
                <div className="event-detail-hero">
                    {/* Glowing Icon */}
                    <div className="relative mb-6">
                        <div className="absolute inset-0 blur-2xl bg-cyan-500/30 rounded-full" />
                        <Zap className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 text-cyan-400 drop-shadow-[0_0_30px_rgba(79,209,255,0.5)]" />
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-8xl font-NordBold text-cyan-400 mb-6 tracking-tight drop-shadow-[0_0_20px_rgba(79,209,255,0.4)]">
                        BEYOND BYTES
                    </h1>

                    {/* Description */}
                    <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed px-4">
                        A community-driven workshop designed to bridge the gap between imagination and innovation.
                        Hands-on sessions diving into cutting-edge technology, equipping participants with practical skills.
                    </p>
                </div>

                {/* Gallery Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] sm:auto-rows-[300px] md:auto-rows-[350px] gap-6 max-w-7xl mx-auto px-4 pb-20">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="gallery-card group"
                        >
                            <img
                                src={src}
                                alt={`Beyond Bytes Event ${index + 1}`}
                                loading="lazy"
                                className="gallery-img"
                                onError={(e) => {
                                    e.target.src = `https://via.placeholder.com/400x300/0d1a2a/4fd1ff?text=Beyond+Bytes+${index + 1}`;
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default BeyondBytes;
