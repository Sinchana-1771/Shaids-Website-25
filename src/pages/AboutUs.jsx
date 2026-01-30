import React from "react";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Bot, Users, Dumbbell, Palette, ArrowLeft, ChevronLeft } from "lucide-react";
import qr from "../assets/images/qrcode.jpg";

function ExploreCard({ icon, title, description }) {
  return (
    <div className="bg-white text-black p-8 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  );
}

function AboutUs() {
  const navigate = useNavigate();

  // small helper to keep icon props consistent
  const Icon = (IconComp) => (
    <IconComp size={48} strokeWidth={1.6} className="text-[#4c2a9e] w-12 h-12" />
  );

  return (
    <>
      <Navbar />

      <button
        onClick={() => navigate(-1)}
        className="fixed top-4 left-12 sm:left-20 z-50 flex items-center text-white hover:text-[#b19eff] transition-colors"
      >
        {" "}
        <ArrowLeft className="w-8 h-8 mr-3" />{" "}
        <span className="hidden sm:inline font-semibold"></span>
      </button>

      <div className="min-h-screen bg-bgGradient text-white">
        {/* Hero */}
        <section className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h1 className="text-6xl font-bold mb-6">
              A LITTLE
              <br />
              ABOUT SHAIDS
            </h1>
            <p className="text-xl leading-relaxed">
              The Student Hive of Artificial Intelligence and Data Science, an
              exciting initiative driven by passionate students. Established in
              2023, SHAIDS is dedicated to fostering a vibrant community that
              explores the fascinating realms of AI and Data Science while
              embracing the spirit of Collaboration. At SHAIDS, our goal is to
              enrich the college experience for students by conducting a diverse
              range of events encompassing technical, cultural, and sports
              activities. We aim to provide opportunities for students to
              enhance their skills, showcase their talents, and engage in a
              holistic learning journey.
            </p>
          </div>

          <div className="hidden lg:block">
            <DotLottieReact
              src="https://lottie.host/3c5af9dd-5ed6-46b7-b58a-362963ca32c0/EtbiFCKYgr.lottie"
              loop
              autoplay
              width={400}
              height={400}
            />
          </div>
        </section>

        {/* Vision */}
        <section className="bg-[#4c2a9e] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">OUR VISION</h2>
            <p className="text-2xl max-w-3xl mx-auto">
              At SHAIDS, we enhance college life with technical, cultural, and
              sports activities, helping students develop skills, showcase
              creativity, and grow holistically.
            </p>
          </div>
        </section>

        {/* Explore */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-16">
            EXPLORE WITH US
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ExploreCard
              icon={
                <Bot
                  size={48}
                  strokeWidth={1.6}
                  className="text-[#4c2a9e] w-12 h-12"
                />
              }
              title="Technical Growth"
              description="Explore AI and Data Science with workshops, hackathons, and expert talks."
            />
            <ExploreCard
              icon={
                <Palette
                  size={48}
                  strokeWidth={1.6}
                  className="text-[#4c2a9e] w-12 h-12"
                />
              }
              title="Cultural Creativity"
              description="Showcase talents through events, exhibitions, and talent shows."
            />
            <ExploreCard
              icon={
                <Dumbbell
                  size={48}
                  strokeWidth={1.6}
                  className="text-[#4c2a9e] w-12 h-12"
                />
              }
              title="Sports & Fitness"
              description="Stay active with tournaments and fitness activities."
            />
            <ExploreCard
              icon={
                <Users
                  size={48}
                  strokeWidth={1.6}
                  className="text-[#4c2a9e] w-12 h-12"
                />
              }
              title="Community Building"
              description="Join a network of like-minded peers for collaboration and support."
            />
          </div>
        </section>

        {/* Get Involved */}
        <section className="bg-[#4c2a9e] py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="sm:w-1/2 w-full">
                <DotLottieReact
                  src="https://lottie.host/0066b891-36e4-4145-9f5e-eba692ff85a5/GyU5FJJsCk.lottie"
                  loop
                  autoplay
                />
              </div>

              <div className="lg:w-2/3 lg:pl-12 space-y-8">
                <h2 className="text-4xl font-bold">
                  GET <span className="text-[#b19eff]">INVOLVED</span> WITH US
                </h2>

                <p className="text-xl lg:text-2xl">
                  Join SHAIDS and explore endless possibilities! Whether you're
                  into AI, creativity, or sports, there's a place for you.
                </p>

                <div className="flex lg:items-center gap-4">
                  <h2 className="text-4xl font-bold">
                    SHAIDS <span className="text-[#b19eff]">MAGAZINE</span>
                  </h2>
                  <img
                    src={qr}
                    alt="Join SHAIDS QR Code"
                    className="size-24 sm:size-32"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default AboutUs;
