import styles from "./input-button.module.scss";

const InputButton = ({ value, type, handleClick }) => (
  <input
    className={styles.inputBtn}
    type={type}
    value={value}
    onClick={handleClick}
  />
);

export default InputButton;
