import styles from "./ColorModeSwitch.module.scss";

import { ThemeContext } from "../../store/ThemeContext";
import { useRef, useContext } from "react";

const ColorModeSwitch = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const ctx = useContext(ThemeContext);

  const switchHandler = () => {
    if (ctx?.theme === "dark") {
      ctx.setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      ctx?.setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className={styles.switch}>
      <span id="switch-title" className={styles.title}>
        Dark Mode
      </span>
      <input
        ref={inputRef}
        className="visibility-hidden"
        type="checkbox"
        aria-labelledby="switch-title"
        checked={ctx?.theme === "dark"}
        onClick={switchHandler}
      />
      <span
        className={styles.switchButton}
        aria-hidden="true"
        onClick={switchHandler}
      ></span>
    </div>
  );
};

export default ColorModeSwitch;
