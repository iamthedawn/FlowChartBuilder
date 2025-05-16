import React, { useEffect, useRef, useState } from "react";
import "./BeerGlass.scss";
import Beer from "../assets/images/beer.svg";
import Foam from "../assets/images/foam.png";
import Fifty from "../assets/images/50rs.png";
import Hundred from "../assets/images/100rs.png";
import OneFifty from "../assets/images/150rs.png";

const MAX_ML = 300;

const BeerGlass = ({ setBeerShow }) => {
  const [beerAmount, setBeerAmount] = useState(100);
  const [qrShow, setQrShow] = useState(false);
  const [qrLoader, setQrLoader] = useState(true);

  const priceRef = useRef(50);
  const containerRef = useRef(null);

  const handleChange = (e) => {
    setBeerAmount(Number(e.target.value));
    if (e.target.value === "200") {
      priceRef.current = 100;
    } else if (e.target.value === "300") {
      priceRef.current = 150;
    } else {
      priceRef.current = 50;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setBeerShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => (
      document.removeEventListener("mousedown", handleClickOutside),
      clearTimeout(timeOut)
    );
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setQrLoader(false);
    }, 4000);
    return () => clearTimeout(timeOut);
  }, [qrShow]);

  const fillPercentage = (beerAmount / MAX_ML) * 35;

  return qrShow ? (
    <div className="mainContainer">
      <div
        className="container2"
        style={{ backgroundColor: "#202327" }}
        ref={containerRef}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {qrLoader ? (
            <div className="loader">
              <p>Generating QR</p>
              <div class="spinner2 center">
                <div class="spinner2-blade"></div>
                <div class="spinner2-blade"></div>
                <div class="spinner2-blade"></div>
                <div class="spinner2-blade"></div>
                <div class="spinner2-blade"></div>
                <div class="spinner2-blade"></div>
                <div class="spinner2-blade"></div>
                <div class="spinner2-blade"></div>
                <div class="spinner2-blade"></div>
                <div class="spinner2-blade"></div>
                <div class="spinner2-blade"></div>
                <div class="spinner2-blade"></div>
              </div>
            </div>
          ) : (
            <img
              src={
                priceRef.current == 100
                  ? Hundred
                  : priceRef.current == 150
                  ? OneFifty
                  : Fifty
              }
            />
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="mainContainer">
      <div className="container2" ref={containerRef}>
        <div className="mobileHeader">Liked It?<br/> Buy me a Beer</div>
        <div className="glassContainer">
          <div className="glass">
            <div
              className="beer-fill"
              style={{ height: `${fillPercentage}%` }}
            />
            <img src={Beer} className="beerGlassImg" />
            <img src={Foam} className="FoamImg" />
          </div>
        </div>

        <div className="beerText">
          <div className="invoiceHeader">INVOICE</div>
          <div className="slider">
            <input
              type="range"
              min="100"
              max={MAX_ML}
              value={beerAmount}
              onChange={handleChange}
              step="100"
              list="stoppers"
            />
            <datalist id="stoppers">
              <option value="100" />
              <option value="200" />
              <option value="300" />
            </datalist>
          </div>

          <div className="quantText">
            Quantity {beerAmount}ml : Price ₹{priceRef.current}
          </div>

          <button onClick={() => setQrShow(true)} class="payBtn">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeerGlass;
