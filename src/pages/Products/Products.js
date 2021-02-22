import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjTwo, homeObjThree, homeObjFour } from "./Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
