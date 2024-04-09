import { useRef, useState } from "react";
import Editor from "../components/TodoList/Editor";
import Header from "../components/TodoList/Header";
import List from "../components/TodoList/List";
import styles from "./../styles/Todolist.module.css";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "react 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "여행갈 짐 싸기",
    date: new Date().getTime(),
  },
];

export default function Todolist() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(2);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  return (
    <div className={styles.Container}>
      <Header />
      <Editor onCreate={onCreate} />
      <List todoData={todos} />
    </div>
  );
}
