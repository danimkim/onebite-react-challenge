import { useCallback, useContext, useState } from "react";
import styles from "./List.module.css";
import ListItem from "./ListItem";
import { TodoContext } from "../../routes/Todolist";

export default function List() {
  const { todos: todoData, onUpdate, onDelete } = useContext(TodoContext);
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
          <ListItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </section>
  );
}
