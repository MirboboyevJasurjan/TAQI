import React from "react";
import FooterNav from "../templates/footer/FooterNav";
import Nav from "../templates/navbar/Nav";
import "./Research.css";
import ResSid from "./ResSid/ResSid";

function Research() {
  return (
    <div>
      <Nav />
      <div className="div_img1"></div>
      <div>
        <div className="IlmiyPage">
          <div className="haqida_father">
            <ResSid />
            <div className="haqida_reight"></div>
          </div>
        </div>
      </div>
      <FooterNav />
    </div>
  );
}

export default Research;
