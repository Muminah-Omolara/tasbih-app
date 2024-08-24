import TasbihColor from "../pages/tasbihColor";
import Colors from "./Colors";
import styles from "./nav.module.css";
import NightMode from "./NightMode";
import Sound from "./Sound";

import Vibration from "./vibration";

export default function Nav({ isMuted, toggleSound, isVibrate, handleClick }) {
  return (
    <div className={styles.navbuttons}>
      <div>
        <Sound isMuted={isMuted} toggleSound={toggleSound} />
      </div>
      <div>
        <Vibration isVibrate={isVibrate} handleClick={handleClick} />
      </div>
      <div>
        <TasbihColor />
      </div>
      <div>
        <Colors />
      </div>
      <div>
        <NightMode />
      </div>
    </div>
  );
}
