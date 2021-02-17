import React from "react";
import { InfoSection } from "../../components";
import { homeObjOne } from "./Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
    </>
  );
};

export default Home;
