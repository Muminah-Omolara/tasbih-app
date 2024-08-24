import { useState, useEffect } from "react";
import image from "../assets/tasbihImage.png";

export default function TasbihColor() {
  const [tasbihColor, setTasbihColor] = useState("#1b2429");

  const getRandomColors = () => {
    const rgb = "0123456789ABCDEF";
    let tasbihColor = "#";
    for (let i = 0; i < 6; i++) {
      tasbihColor += rgb[Math.floor(Math.random() * 16)];
    }
    return tasbihColor;
  };
  const handleClick = () => {
    setTasbihColor(getRandomColors());
  };
  useEffect(() => {
    const counter = document.querySelector(".counter");
    if (counter) {
      counter.style.backgroundColor = tasbihColor;
    }
  }, [tasbihColor]);

  return (
    <div>
      <div>
        <button onClick={handleClick}>
          <img
            style={{
              width: "25px",
              height: "25px",
              filter: "invert(100%) brightness(0) contrast(100%)",
            }}
            src={image}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
