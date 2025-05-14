import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Main/LandingPage";
import Flow from "./Main/Flow";

const Main = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/flow" element={<Flow />} />
      </Routes>
    </div>
  );
};

export default Main;
