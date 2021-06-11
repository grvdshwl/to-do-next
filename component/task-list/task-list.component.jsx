import TaskItem from "../task-item/task-item.component";
import styles from "./task-list.module.scss";

const TaskList = ({ array, removeItem }) => (
  <div>
    {array.map((value) => (
      <TaskItem key={Math.random()} item={value} removeItem={removeItem} />
    ))}
  </div>
);

export default TaskList;
