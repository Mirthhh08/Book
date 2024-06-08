import React, { useCallback, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DisplayBooks from "../components/DisplayBooks";

const Home = () => {
  return (
    <div className="md:mx-10">
      
      <Hero />
      <DisplayBooks />
    </div>
  );
};

export default Home;
