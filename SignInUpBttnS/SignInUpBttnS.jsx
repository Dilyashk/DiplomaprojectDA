/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SignInUpBttnS = ({
  property1,
  className,
  btnLanguageClassName,
  btnLanguage = "../../static/img/btn-language-4.png",
  text = "Есептік жазбаңыз жоқ па?",
  text1 = "Тіркелу",
}) => {
  return (
    <div className={`sign-in-up-bttn-s ${className}`}>
      {["one", "two"].includes(property1) && (
        <>
          <img
            className={`btn-language ${btnLanguageClassName}`}
            alt="Btn language"
            src={property1 === "two" ? "../../../static/img/btn-language-3.png" : btnLanguage}
          />
          <div className="frame">
            <div className="don-t-have-an-accoun">
              {property1 === "oneу" && <>{text}</>}

              {property1 === "two" && <>Есептік жазбаңыз бар ма?</>}
            </div>
            <div className="sign-up">
              {property1 === "one" && <>{text1}</>}

              {property1 === "two" && <>Кіру</>}
            </div>
          </div>
        </>
      )}

      {["four", "three"].includes(property1) && (
        <img
          className="btn-language-2"
          alt="Btn language"
          src={property1 === "four" ? "../../../static/img/btn-language-1.png" : "../../../static/img/btn-language-2.png"}
        />
      )}
    </div>
  );
};

SignInUpBttnS.propTypes = {
  property1: PropTypes.oneOf(["two", "four", "three", "one"]),
  btnLanguage: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
};
