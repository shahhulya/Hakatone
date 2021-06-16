import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import ProductsList from "./components/ProductsList/ProductsList";

export default function Store() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ProductsList />
    </div>
  );
}
