"use client";
import { useEffect } from "react";
import Add from "./add/Add";

const AddPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Add />
    </>
  );
};

export default AddPage;
