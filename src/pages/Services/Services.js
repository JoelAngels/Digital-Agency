import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjFour } from "./Data";

const Home = () => {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
