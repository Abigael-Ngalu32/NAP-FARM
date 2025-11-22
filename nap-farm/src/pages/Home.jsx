import React from "react";

// Components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryTabs from "../components/CategoryTabs";
import PromoBanner from "../components/PromoBanner";
import BreedGrid from "../components/BreedGrid";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryTabs />
      <PromoBanner />
      <BreedGrid />
      <Footer />
    </>
  );
}

export default Home;