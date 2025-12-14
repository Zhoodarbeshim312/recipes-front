"use client";
import { useEffect } from "react";
import Categories from "./home/Categories";
import Communications from "./home/Communications";
import Popular from "./home/Popular";
import Share from "./home/Share";
import Welcome from "./home/Welcome";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Welcome />
      <Share />
      <Categories />
      <Communications />
      <Popular />
    </>
  );
};

export default HomePage;
