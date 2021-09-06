import React, {useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext'
import {
  toggleWrapper,
  button,
  knob,
  dark,
  green,
  themeCheckbox,
} from "../styles/ThemeToggle.module.css";


const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <div className={toggleWrapper}>
        <input
          className={themeCheckbox}
          id="theme-checkbox"
          type="checkbox"
          onClick={toggleTheme}
        />
        <label className={button} htmlFor="theme-checkbox">
          <div className={knob}></div>
          <div className={dark}>dark</div>
          <div className={green}>blue</div>
        </label>
      </div>
    </div>
  );
}

export default ThemeToggle
