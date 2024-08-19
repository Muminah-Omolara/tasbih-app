import React from "react";
import IconContainer from "../iconContainer/IconContainer";
import "./control-buttons.css";

const ControlButtons = ({ onIncrease, onDecrease, onReset }) => {
  return (
    <div>
      <div className="all-btns-container">
        <div className="small-btns-container">
          <IconContainer bgColor="#59717D">
            <p onClick={onDecrease}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="black"
              >
                <path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z" />
              </svg>
            </p>
          </IconContainer>
          <IconContainer bgColor="#59717D">
            <p onClick={onReset}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="black"
              >
                <path d="M204-318q-22-38-33-78t-11-82q0-134 93-228t227-94h7l-64-64 56-56 160 160-160 160-56-56 64-64h-7q-100 0-170 70.5T240-478q0 26 6 51t18 49l-60 60ZM481-40 321-200l160-160 56 56-64 64h7q100 0 170-70.5T720-482q0-26-6-51t-18-49l60-60q22 38 33 78t11 82q0 134-93 228t-227 94h-7l64 64-56 56Z" />
              </svg>
            </p>
          </IconContainer>
        </div>
        <div>
          <div className="increase-btn" onClick={onIncrease}></div>
        </div>
      </div>
    </div>
  );
};

export default ControlButtons;
