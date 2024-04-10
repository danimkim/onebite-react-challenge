import styles from "./ContactItem.module.css";

export default function ContactItem({ name, email }) {
  return (
    <div className={styles.ContactItem}>
      <div className={styles.Name}>{name}</div>
      <div className={styles.Contact}>{email}</div>
      <button>🗑️ Remove</button>
    </div>
  );
}
