import styles from "./ListItem.module.css";
import Delete from "./../../assets/delete.svg";

export default function ListItem({ id, isDone, date, content, onUpdate }) {
  return (
    <li className={styles.Item}>
      <div>
        <input type="checkbox" checked={isDone} onChange={() => onUpdate(id)} />
        <span
          className={`${styles.Content} ${isDone ? styles.TodoComplete : ""}`}
        >
          {content}
        </span>
      </div>
      <div>
        <span className={styles.Date}>
          {new Date(date).toLocaleDateString()}
        </span>
        <button type="button" className={styles.Button}>
          <img src={Delete} alt="삭제하기" className={styles.DeleteIconImg} />
        </button>
      </div>
    </li>
  );
}
