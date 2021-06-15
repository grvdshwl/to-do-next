import InputBar from "../component/input-bar/input-bar.component";
import InputButton from "../component/input-button/input-button.component";
import { useState } from "react";
import styles from "./index.module.scss";
import TaskList from "../component/task-list/task-list.component";

import AlertButton from "../component/alert-button/alert-button";

const HomePage = () => {
  const [toDoValue, setValue] = useState("");
  const [toDoArray, setArray] = useState([]);
  const [repeatStatus, setRepeatStatus] = useState(false);

  const insertTask = (event) => {
    event.preventDefault();
    if (toDoValue) {
      if (toDoArray.some((task) => task === toDoValue)) {
        setRepeatStatus(true);
      } else {
        setArray((oldArray) => [...oldArray, toDoValue]);
        setValue("");
      }
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
        <div style={{ margin: "25px" }}>Total Tasks :{toDoArray.length}</div>
      </form>
      <TaskList array={toDoArray} removeItem={removeItem} />
      {repeatStatus && (
        <AlertButton
          inputText={`${toDoValue}! already exists`}
          handleClick={() => {
            setRepeatStatus(false);
            setValue("");
          }}
        />
      )}
    </>
  );
};
export default HomePage;
