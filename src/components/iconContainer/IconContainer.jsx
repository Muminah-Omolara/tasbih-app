import React from "react";
import "./icon-prop.css";

const IconContainer = ({ children, bgColor }) => {
  return (
    <div className="icon-prop" style={{ backgroundColor: bgColor }}>
      {children}
    </div>
  );
};

export default IconContainer;
