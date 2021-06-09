import React, { Fragment } from "react";
import Header from "./ui/Header";
import LandingPage from "./ui/LandingPage";
import Services from "./ui/Services";
import Features from "./ui/Features";
import Donation from "./ui/Donation";
import Statistics from "./ui/Statisitcs";
import Saving from "./ui/Saving";
import Members from "./ui/Members";
import Program from "./ui/Program";
import Footer from "./ui/Footer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <LandingPage />
      <Services />
      <Features />
      <Donation />
      <Statistics />
      <Saving />
      <Members />
      <Program />
      <Footer />
    </Fragment>
  );
};

export default App;
