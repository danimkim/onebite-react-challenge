import { useCallback, useContext, useState } from "react";
import styles from "./List.module.css";
import ListItem from "./ListItem";
import { TodoStateContext } from "./../../context/TodoList";

export default function List() {
  const todoData = useContext(TodoStateContext);
  const [searchWord, setSearchWord] = useState("");

  const onSearchChange = (e) => {
    setSearchWord(e.target.value);
  };

  const getFilteredData = useCallback(() => {
    if (!searchWord) {
      return todoData;
    }
    return todoData.filter((todo) =>
      todo.content.toLowerCase().includes(searchWord.toLowerCase())
    );
  }, [searchWord, todoData]);

  const filteredTodos = getFilteredData();

  return (
    <section className={styles.Container}>
      <h2 className={styles.Heading}>TodoList ✅</h2>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        className={styles.SearchInput}
        onChange={onSearchChange}
      />
      <ul className={styles.ListContainer}>
        {filteredTodos.map((todo) => (
          <ListItem key={todo.id} {...todo} />
        ))}
      </ul>
    </section>
  );
}
