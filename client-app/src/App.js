import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./views/navigation/navigation";
import Home from "./views/home/home";

import { AppContainer } from "./App.styles";

const App = () => {
  return (
    <AppContainer>
      <Navigation/>
      <Home />
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </AppContainer>
  );
}

export default App;
