import styles from "./List.module.css";
import ListItem from "./ListItem";

export default function List() {
  return (
    <section className={styles.Container}>
      <h2 className={styles.Heading}>TodoList ✅</h2>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        className={styles.SearchInput}
      />
      <ul className={styles.ListContainer}>
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </section>
  );
}
