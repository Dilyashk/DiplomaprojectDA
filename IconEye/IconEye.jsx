/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconEye = ({
  open,
  className,
  vectorClassName,
  vectorClassNameOverride,
  vector = "/img/vector-5.svg",
  imgClassName,
  img = "/img/vector-4.svg",
}) => {
  return (
    <div className={`icon-eye ${className}`}>
      {open && <img className={`vector ${vectorClassName}`} alt="Vector" src="/img/vector-6.svg" />}

      {!open && (
        <div className={`overlap-group ${vectorClassName}`}>
          <img className={`img ${vectorClassNameOverride}`} alt="Vector" src={vector} />
          <img className={`vector-2 ${imgClassName}`} alt="Vector" src={img} />
        </div>
      )}
    </div>
  );
};

IconEye.propTypes = {
  open: PropTypes.bool,
  vector: PropTypes.string,
  img: PropTypes.string,
};
