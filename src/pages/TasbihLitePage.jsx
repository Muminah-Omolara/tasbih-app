import { useState } from "react";
import ControlButtons from "../components/buttons/ControlButtons";
import Heading from "../components/heading/Heading";
import Screen from "../components/screen/Screen";
import "./tasbihLite.css";
import Nav from "../Navigation bars/Nav";

const TasbihLitePage = () => {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount((prev) => prev + 1);
  }

  function handleDecrease() {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div>
      <div className="tasbih-container">
        <Heading count={count} />
        <div className="counter">
          <Screen count={count} />
          <ControlButtons
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onReset={handleReset}
          />
        </div>
        <div>
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default TasbihLitePage;
