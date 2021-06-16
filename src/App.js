import React from "react";
import Hero from "./Store/components/Hero/Hero";
import NavBar from "./Store/components/NavBar/NavBar";
import Card from "./Store/components/Card/Card";
import StoreContextProvider from "./Store/context/StoreContext";
import Store from "./Store/Store";

function App() {
  return (
    <StoreContextProvider>
      <Store />
    </StoreContextProvider>
  );
}

export default App;
