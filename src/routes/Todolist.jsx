import Editor from "../components/TodoList/Editor";
import Header from "../components/TodoList/Header";
import List from "../components/TodoList/List";
import styles from "./../styles/Todolist.module.css";

export default function Todolist() {
  return (
    <div className={styles.Container}>
      <Header />
      <Editor />
      <List />
    </div>
  );
}
