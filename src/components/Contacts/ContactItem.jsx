import styles from "./ContactItem.module.css";

export default function ContactItem() {
  return (
    <div className={styles.ContactItem}>
      <div className={styles.Name}>이정환</div>
      <div className={styles.Contact}>king199777@gmail.com</div>
      <button>🗑️ Remove</button>
    </div>
  );
}
