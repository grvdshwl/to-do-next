import styles from "./drop-down-bg.module.scss";
const DropDownBg = ({ handleClick }) => (
  <div onClick={handleClick} className={styles.dropDownBackground}></div>
);
export default DropDownBg;
