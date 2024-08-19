import "./screen.css";

const Screen = ({ count }) => {
  return (
    <div className="screen">
      <span className="count">{count}</span>
    </div>
  );
};

export default Screen;
