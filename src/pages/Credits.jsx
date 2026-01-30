import React from "react";
import Footer from "../components/Common/Footer";
import { Navbar } from "../components/Navbar";
import MemberCard from "../components/Teams/MemberCard";
import developers from "../data/developers";

const Credits = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B1220] ">
      <Navbar show={true} />

      {/* HERO */}
      <section className="relative overflow-hidden mt-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1A2C46_0%,transparent_55%)]" />

        <div className="relative max-w-[1280px] mx-auto px-6 pt-16 pb-20 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white font-NordMedium">
              MEET THE <br className="hidden lg:block" />
              <span className="text-[#4CC3E6]">DEVELOPERS!</span>
            </h1>
            <p className="mt-4 text-lg lg:text-xl text-[#9FB1C8] font-Outfit max-w-xl">
              The creative minds behind SHAIDS
            </p>
          </div>
        </div>
      </section>

      {/* DEVELOPERS GRID */}
      <section className="relative flex-grow mt-8 mb-6 ">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1A2C46_0%,transparent_60%)]" />

        <div className="relative max-w-[1280px] mx-auto px-6">
          <div className="bg-[#0F1A2E]/80 backdrop-blur-xl border border-white/[0.08] rounded-3xl px-6 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {developers.map((developer, index) => (
                <MemberCard
                  key={index}
                  name={developer.name}
                  designation={developer.designation}
                  avatar={developer.avatar}
                  githubUrl={developer.githubUrl}
                  linkedinUrl={developer.linkedinUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Credits;
