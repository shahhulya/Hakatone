import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";

export default function Store() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Card />
    </div>
  );
}
