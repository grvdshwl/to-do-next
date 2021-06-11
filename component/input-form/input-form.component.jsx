import InputBar from "../input-bar/input-bar.component";
import InputButton from "../input-button/input-button.component";
import styles from "./input-form.module.scss";
import { useState } from "react";

const InputForm = () => {
  const [toDoArray, setArray] = useState([]);

  const insertTask = (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
    setArray(event.target.value);
  };
  return (
    <form
      onSubmit={(event) => {
        inputForm(event);
      }}
      className={styles.inputForm}
    >
      <InputBar handleChange={handleChange} />
      <InputButton />
    </form>
  );
};

export default InputForm;
