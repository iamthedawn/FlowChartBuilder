import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./main/LandingPage";
import Flow from "./main/Flow";



const Main = () => {
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
    });
  }, [window.innerHeight]);

  return (
    <div style={{ height: height, width: "100vw" }}>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/flow" element={<Flow />} />
      </Routes>
    </div>
  );
};

export default Main;
