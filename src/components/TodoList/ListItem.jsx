import styles from "./ListItem.module.css";
import Delete from "./../../assets/delete.svg";

export default function ListItem() {
  return (
    <li className={styles.Item}>
      <div>
        <input type="checkbox" />
        <span className={styles.Content}>아이템</span>
      </div>
      <div>
        <span className={styles.Date}>2024.01.31</span>
        <button type="button" className={styles.Button}>
          <img src={Delete} alt="삭제하기" className={styles.DeleteIconImg} />
        </button>
      </div>
    </li>
  );
}
