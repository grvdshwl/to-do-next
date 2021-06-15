import styles from "./alert-button.module.scss";
import DropDownBg from "../drop-down-bg/drop-down-bg.compoenent";
import InputButton from "../input-button/input-button.component";
const AlertButton = ({ inputText, handleClick }) => (
  <>
    <div className={styles.dropDown}>
      <h2> {inputText}.</h2>
      <div className={styles.dropDownBtn}>
        <InputButton type="button" value="ok" handleClick={handleClick} />
      </div>
    </div>
    <DropDownBg handleClick={handleClick} />
  </>
);

export default AlertButton;
