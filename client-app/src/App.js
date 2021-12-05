import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./views/navigation/navigation";

import { AppContainer } from "./App.styles";

const App = () => {
  return (
    <AppContainer>
      <Navigation/>
      <Routes>
        <Route exact={false} path="/" component={Navigation} />
      </Routes>
    </AppContainer>
  );
}

export default App;
