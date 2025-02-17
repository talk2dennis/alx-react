import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../Utils/Utils";

function Footer() {
  return (
    <div className="App-footer">
      <p>{`${getFooterCopy(true)} - ${getFullYear()}`}</p>
      </div>
  );
}

export default Footer;