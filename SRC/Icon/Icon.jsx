/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconEye } from "../IconEye";
import "./style.css";

export const Icon = ({
  property1,
  className,
  iconEyeVector = "/img/vector-7.svg",
  iconEyeImg = "/img/vector-8.svg",
}) => {
  return (
    <div className={`icon ${property1} ${className}`}>
      {property1 === "open" && <img className="vector-3" alt="Vector" src="/img/vector-9.svg" />}

      {property1 === "close" && (
        <IconEye
          className="icon-px-eye"
          img={iconEyeVector}
          imgClassName="icon-px-eye-instance"
          open={false}
          vector={iconEyeImg}
          vectorClassName="icon-24px-eye"
          vectorClassNameOverride="icon-eye-instance"
        />
      )}
    </div>
  );
};

Icon.propTypes = {
  property1: PropTypes.oneOf(["close", "open"]),
  iconEyeVector: PropTypes.string,
  iconEyeImg: PropTypes.string,
};
