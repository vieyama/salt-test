import React from "react";
import Layout from "src/components/Layout/index";
import SectionOne from "src/components/Section/SectionOne";
import SectionThree from "src/components/Section/SectionThree";
import SectionTwo from "src/components/Section/SectionTwo";

const Home = () => {
  return (
    <Layout>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </Layout>
  );
};

export default Home;
