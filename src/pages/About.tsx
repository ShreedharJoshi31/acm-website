import React from "react";
import { AboutHero } from "../components/about/AboutHero";
import { ChapterInfo } from "../components/about/ChapterInfo";
import { ACMInfo } from "../components/about/ACMInfo";
import { ACMIndiaInfo } from "../components/about/ACMIndiaInfo";
import { MissionVision } from "../components/about/MissionVision";
// import { Timeline } from "../components/about/Timeline";

export const About = () => {
  return (
    <div className="pt-16">
      <AboutHero />
      <ChapterInfo />
      <MissionVision />
      <ACMInfo />
      <ACMIndiaInfo />
      {/* <Timeline /> */}
    </div>
  );
};
