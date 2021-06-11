import DropDown from "../drop-down/drop-down.component";
import styles from "./task-item.module.scss";
import { useState } from "react";
const TaskItem = ({ item, removeItem }) => {
  const [dropDownStatus, setStatus] = useState(false);

  const removeDropDown = () => {
    setStatus(false);
  };
  return (
    <>
      <div className={styles.center}>
        {" "}
        <div
          className={styles.item}
          onClick={() => {
            setStatus(true);
          }}
        >
          {item}
        </div>
      </div>
      {dropDownStatus && (
        <DropDown
          removeDropDown={removeDropDown}
          handleItem={() => {
            removeItem(item);
          }}
        />
      )}
    </>
  );
};

export default TaskItem;
