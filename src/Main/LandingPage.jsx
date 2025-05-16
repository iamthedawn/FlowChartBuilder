import React, { useState } from "react";
import "./LandingPage.scss";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import IosShareIcon from "@mui/icons-material/IosShare";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import { useNavigate } from "react-router-dom";
import BeerGlass from "./BeerGlass";
import beerIcon from "../assets/images/beerIcon.svg"

const LandingPage = () => {
  const navigate = useNavigate();
  const [beerShow, setBeerShow] = useState(false);
  return (
    <div className="container">
      <div className="bgImg">
         <button class="beerBtn" onClick={() => setBeerShow(true)}>
           <span class="beerIcon">
            <img src={beerIcon} className="beerIconImg" />
          </span>
          <span class="beerTxt">
            Liked it?
            <br/>
            Buy Me A Beer
            </span>
        </button>
        <div className="img"></div>

        {/* Text Content */}
        <div className="text">
          Welcome to <br />
          FlowChart Builder
          <div className="text2">create your flowchart in seconds</div>
          <button className="btn" onClick={() => navigate("/flow")}>
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 74 74"
              height="34"
              width="34"
            >
              <circle strokeWidth="3" stroke="white" r="35.5" cy="37" cx="37" />
              <path
                fill="white"
                d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
              />
            </svg>
          </button>
        </div>

        {/* Wave Divider */}
        <div className="custom-shape-divider-bottom-1747234414">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
        82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
        906.67,72,985.66,92.83c70.05,18.48,
        146.53,26.09,214.34,3V0H0V27.35A600.21,
        600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            />
          </svg>
        </div>
      </div>

      <div className="features">
        <div className="featuresList">
          <div className="feature">
            <div className="iconContainer">
              <TouchAppIcon className="icon" />
            </div>

            <h2>Easy to Use</h2>
          </div>
          <div className="feature">
            <div className="iconContainer">
              <AutoFixHighIcon className="icon" />
            </div>
            <h2>Customizable</h2>
          </div>
          <div className="feature">
            <div className="iconContainer">
              <IosShareIcon className="icon" />
            </div>
            <h2>Export Options</h2>
          </div>
          <div className="feature">
            <div className="iconContainer">
              <DynamicFeedIcon className="icon" />
            </div>
            <h2>Multiple Usecase</h2>
          </div>
        </div>
        <div className="credits"> Made with 🩶 by Nishant Mourya</div>
      </div>
      {beerShow && <BeerGlass setBeerShow={setBeerShow} />}
    </div>
  );
};

export default LandingPage;
