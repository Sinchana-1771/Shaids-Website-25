import React from "react";
import NewHero from "./components/Home/NewHero";
import { ReactLenis } from "lenis/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <>
      <SpeedInsights />
      <Analytics />
      <NewHero />
    </>
  );
};

export default App;
