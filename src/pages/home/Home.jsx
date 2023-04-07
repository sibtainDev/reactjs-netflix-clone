import React from "react";
import "./style.scss";
import HeroBanner from "../heroBanner/HeroBanner";
import Trending from "./Trending";
import SwitchTabs from "../../components/SwitchTabs";
import Popular from "./Popular";
import TopRated from "./TopRated";
TopRated;
HeroBanner;
const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
