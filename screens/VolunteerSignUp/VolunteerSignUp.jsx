import React from "react";
import { Icon } from "../../components/Icon";
import { SignInUpBttnS } from "../../components/SignInUpBttnS";
import { Chevron1 } from "../../icons/Chevron1";

import "./style.css";
import imgSrc192 from '../../../static/img/image-192.png';
import imgSrcCombinedShape from '../../../static/img/combined-shape.svg';
import imgSrcTail from '../../../static/img/tail.svg';
import imgSrcBtnLanguage from '../../../static/img/btn-language.png';
import imgSrcVector1 from '../../../static/img/vector-1.svg';
import imgSrcVector from '../../../static/img/vector.svg';




export const VolunteerSignUp = () => {
  return (
    <div className="volunteer-sign-up">
      <div className="div">
        <div className="overlap">
          <img className="image" alt="Image" src={imgSrc192} />
          <div className="message">
            <div className="overlap-2">
              <div className="bubble">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <img className="combined-shape" alt="Combined shape" src={imgSrcCombinedShape} />
                    <div className="tail">
                      <img className="tail-2" alt="Tail" src={imgSrcTail} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper">
                Сәлем, <br />
                Қош келдіңіз!👋🏼
              </div>
            </div>
          </div>
        </div>
        <div className="frame-2">
          <div className="frame-3">
            <div className="frame-3">
              <div className="frame-4">
                <div className="text-wrapper-2">Атыы-жөні</div>
                <div className="div-wrapper">
                  <div className="text-wrapper-3">Аты-жөні</div>
                </div>
              </div>
              <div className="frame-4">
                <div className="text-wrapper-2">Телефон нөмірі</div>
                <div className="div-wrapper">
                  <p className="text-wrapper-3">+7 (700) 777 77 77</p>
                </div>
              </div>
              <div className="frame-4">
                <div className="frame-4">
                  <div className="text-wrapper-2">Құпия сөз</div>
                  <div className="frame-wrapper">
                    <div className="frame-5">
                      <div className="text-wrapper-3">Құпия сөз</div>
                      <Icon
                        className="icon-instance"
                        iconEyeImg={imgSrcVector1}
                        iconEyeVector={imgSrcVector}
                        property1="close"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-4">
                <div className="frame-4">
                  <div className="text-wrapper-2">Құпия сөзді бекіту</div>
                  <div className="frame-wrapper">
                    <div className="frame-5">
                      <div className="text-wrapper-3">Құпия сөзді бекіту</div>
                      <Icon
                        className="icon-instance"
                        iconEyeImg={imgSrcVector1}
                        iconEyeVector={imgSrcVector}
                        property1="close"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SignInUpBttnS
            btnLanguage={imgSrcBtnLanguage}
            btnLanguageClassName="design-component-instance-node"
            className="sign-in-up-bttn-s-instance"
            property1="one"
            text="Есептік жазбаңыз бар ма?"
            text1="Кіру"
          />
        </div>
        <Chevron1 className="chevron-1" />
      </div>
    </div>
  );
};
