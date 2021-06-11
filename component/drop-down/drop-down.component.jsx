import DropDownBg from "../drop-down-bg/drop-down-bg.compoenent";
import InputButton from "../input-button/input-button.component";
import styles from "./drop-down.module.scss";

const DropDown = ({ removeDropDown, handleItem }) => (
  <div>
    <div className={styles.dropDown}>
      <h2>Are you sure ?</h2>
      <div className={styles.DropDownBtn}>
        <InputButton
          type="button"
          value="Cancel"
          handleClick={removeDropDown}
        />
        <InputButton type="button" value="Remove" handleClick={handleItem} />
      </div>
    </div>
    <DropDownBg handleClick={removeDropDown} />
  </div>
);

export default DropDown;
