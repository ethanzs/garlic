import React from "react";
import { hamburger } from "./js/hamburger.js";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <div className="nav-logo"></div>
        <div
          className="nav-hamburger"
          id="hamburger"
          onClick={() => {
            hamburger();
          }}
        >
          <div className="nav-hamburger-wrapper">
            <div className="nav-hamburger-line-top"></div>
            <div className="nav-hamburger-line-mid"></div>
            <div className="nav-hamburger-line-btm"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col-container">
          <h1 className="header">
            Pastel<span style={{ color: "#111116" }}>CSS</span>
          </h1>
          <h1 className="subheader">A CSS Framework</h1>
        </div>
      </div>
      <div className="row">
        <div className="seven col">
          <div className="col-container">
            <h1 className="subheader">Lipsum</h1>
            <p className="paragraph semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum Lorem ipsum dolor sit amet, consectetur
              adipiscing elit
            </p>
          </div>
        </div>
        <div className="five col">
          <form className="form">
            <h1 className="subheader">Login</h1>
            <input className="form" type="text" placeholder="Email"></input>
            <input className="form" type="text" placeholder="Username"></input>
            <input
              className="form"
              type="password"
              placeholder="Password"
            ></input>
            <textarea className="form" placeholder="Message"></textarea>
            <button className="form" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="six col">
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
      <div className="footer">
        <p className="footer">Garlic CSS Framework @ 2020-21</p>
      </div>
    </div>
  );
}

export default App;
