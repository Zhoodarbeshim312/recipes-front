"use client";
import { useEffect } from "react";

const PopularPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div>PopularPage</div>;
};

export default PopularPage;
