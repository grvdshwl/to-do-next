import styles from "./input-bar.module.scss";
import { useRef, useEffect } from "react";

const InputBar = ({ handleChange, value }) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        className={styles.inputBar}
        type="text"
        onChange={(event) => {
          handleChange(event);
        }}
        value={value}
      />
    </div>
  );
};

export default InputBar;
