import { useEffect, useState } from "react";
import "./heading.css";
const Heading = ({ count }) => {
  const [reminderCount, setReminderCount] = useState("33");

  const handleUpdateCount = () => {
    const newReminderCount = prompt("Enter your new reminder count below");
    if (newReminderCount) {
      setReminderCount(newReminderCount);
    }
  };

  useEffect(() => {
    if (count == reminderCount) {
      alert(
        "Assalmualyk Brother! you are now at your reminder count. Please focus",
      );
    }
  }, [count]);

  return (
    <div className="heading-container">
      <h3 className="heading-text">Tasbih Lite</h3>
      <p className="reminder-text">
        Reminder:{" "}
        <span className="reminder-count" onClick={handleUpdateCount}>
          {reminderCount}
        </span>
      </p>
    </div>
  );
};

export default Heading;
