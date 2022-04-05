import { LoginScreen } from "./LoginScreen";
import { SignUpScreen } from "./SignUpScreen";
import { MainView } from "./MainView";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from "react";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element = { <MainView />} />
        <Route path="/sign-up" element = {<SignUpScreen />} />
        <Route path="/login" element = {<LoginScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
