import InputBar from "../component/input-bar/input-bar.component";
import InputButton from "../component/input-button/input-button.component";
import { useState } from "react";
import styles from "./index.module.scss";
import TaskList from "../component/task-list/task-list.component";
import DropDown from "../component/drop-down/drop-down.component";

const HomePage = () => {
  const [toDoValue, setValue] = useState("");
  const [toDoArray, setArray] = useState([]);

  const insertTask = (event) => {
    event.preventDefault();
    if (toDoValue) {
      setArray((oldArray) => [...oldArray, toDoValue]);
      setValue("");
    }
  };

  const removeItem = (item) => {
    let filteredArray = toDoArray.filter((value) => value !== item);
    setArray(filteredArray);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <h1 className={styles.title}>To Do List</h1>
      <form
        onSubmit={(event) => {
          insertTask(event);
        }}
        className={styles.title}
      >
        <InputBar handleChange={handleChange} value={toDoValue} />
        <InputButton type="submit" value="Add" />
      </form>
      <TaskList array={toDoArray} removeItem={removeItem} />
    </>
  );
};
export default HomePage;
