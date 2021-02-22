import React from "react";
import { InfoSection } from "../../components";
import { homeObjThree } from "./Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
