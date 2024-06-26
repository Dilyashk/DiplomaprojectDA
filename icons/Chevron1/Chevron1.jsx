
import React from "react";
import { View , TouchableOpacity } from "react-native";

export const Chevron1 = ({ className }) => {
  return (
    
    <svg
      className={`chevron-1 ${className}`}
      fill="none"
      height="17"
      viewBox="0 0 10 17"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8.02348 16.6742C8.23875 16.885 8.51272 17 8.83562 17C9.48141 17 10 16.5017 10 15.8692C10 15.553 9.86301 15.2655 9.63796 15.0451L2.78865 8.49042L9.63796 1.9549C9.86301 1.7345 10 1.43743 10 1.13078C10 0.498309 9.48141 0 8.83562 0C8.51272 0 8.23875 0.114994 8.02348 0.325817L0.410959 7.60879C0.136986 7.85795 0.00978474 8.1646 0 8.5C0 8.8354 0.136986 9.12289 0.410959 9.38162L8.02348 16.6742Z"
        fill="#1E1E1E"
      />
    </svg>


  );
};
