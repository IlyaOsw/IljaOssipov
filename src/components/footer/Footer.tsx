import React from "react";
import "./Footer.scss";
import Follow from "./Follow/Follow";

const Footer: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex justify-content-around fs-4 block-footer">
        <div className="footer-left">
          <p className="item-left animation_item">2023 By Ilja Ossipov. ©</p>
        </div>
        <Follow />
      </div>
    </div>
  );
};
export default Footer;
