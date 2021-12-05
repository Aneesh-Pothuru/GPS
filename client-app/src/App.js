import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./views/navigation/navigation";
import Home from "./views/home/home";
import Deliver from "./views/deliver/deliver";
import Log from "./views/logs/logs";
import Inventory from "./views/inventory/inventory";

import { AppContainer } from "./App.styles";

const App = () => {
  return (
    <AppContainer>
      <Navigation/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/deliver" element={<Deliver/>} />
        <Route exact path="/log" element={<Log/>} />
        <Route exact path="/inventory" element={<Inventory/>} />
      </Routes>
    </AppContainer>
  );
}

export default App;
