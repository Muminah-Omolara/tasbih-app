export default function Vibration({ isVibrate, handleClick }) {
  return (
    <div>
      <button onClick={handleClick} style={{ backgroundColor: isVibrate ? 'yellow' : '#819ca8'  }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="black"
        >
          <path d="M0-360v-240h80v240H0Zm120 80v-400h80v400h-80Zm760-80v-240h80v240h-80Zm-120 80v-400h80v400h-80ZM320-120q-33 0-56.5-23.5T240-200v-560q0-33 23.5-56.5T320-840h320q33 0 56.5 23.5T720-760v560q0 33-23.5 56.5T640-120H320Zm0-80h320v-560H320v560Zm0 0v-560 560Z" />
        </svg>
      </button>
    </div>
  );
}
