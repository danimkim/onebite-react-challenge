import { createContext, useReducer, useRef } from "react";
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

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
};

export const TodoContext = createContext();

export default function Todolist() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(2);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  return (
    <div className={styles.Container}>
      <Header />
      <TodoContext.Provider value={{ todos, onCreate, onUpdate, onDelete }}>
        <Editor />
        <List todoData={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </TodoContext.Provider>
    </div>
  );
}
