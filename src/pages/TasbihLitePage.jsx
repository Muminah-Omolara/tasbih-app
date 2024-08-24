import { useEffect, useState } from "react";
import ControlButtons from "../components/buttons/ControlButtons";
import Heading from "../components/heading/Heading";
import Screen from "../components/screen/Screen";
import "./tasbihLite.css";
import Nav from "../Navigation bars/Nav";
import sound from "../components/buttons/mySound.mp3";

const TasbihLitePage = () => {
  const [count, setCount] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isVibrate, setIsVibrate] = useState(false);

  useEffect(() => {
    const persistedCount = Number(localStorage.getItem("persistedCount"));
    if (persistedCount) {
      setCount(persistedCount);
    }
  }, [count]);

  function handleIncrease() {
    setCount((prev) => prev + 1);
    localStorage.setItem("persistedCount", count + 1);
    play();
    vibrate();
  }

  function handleDecrease() {
    if (count > 0) {
      setCount((prev) => prev - 1);
      localStorage.setItem("persistedCount", count - 1);
    }
  }

  function handleReset() {
    setCount(0);
    localStorage.setItem("persistedCount", 0);
  }

  function play() {
    if (!isMuted) {
      new Audio(sound).play();
    }
  }

  const toggleSound = () => {
    setIsMuted((prevState) => !prevState);
  };

  function vibrate() {
    if (!isVibrate) {
      navigator.vibrate(300);
    } else {
      console.log("Vibration not supported");
    }
  }

  const handleClick = () => {
    setIsVibrate((prevState) => !prevState);
  };

  return (
    <div>
      <div className="tasbih-container">
        <Heading count={count} />
        <div>
          <div className="counter">
            <Screen count={count} />
            <ControlButtons
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onReset={handleReset}
            />
          </div>
        </div>
        <div>
          <Nav
            isMuted={isMuted}
            toggleSound={toggleSound}
            isVibrate={isVibrate}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default TasbihLitePage;
