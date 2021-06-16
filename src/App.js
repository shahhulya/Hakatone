import React from "react";
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
