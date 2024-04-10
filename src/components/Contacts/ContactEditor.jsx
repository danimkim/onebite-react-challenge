import styles from "./ContactEditor.module.css";

export default function ContactEditor() {
  return (
    <div className={styles.ContactEditor}>
      <div className={styles.Title}>Add Contact</div>
      <div className={styles.InputWrapper}>
        <input className={styles.Name} placeholder="이름 ..." />
        <input className={styles.Contact} placeholder="연락처(이메일) ..." />
      </div>
      <button>Add</button>
    </div>
  );
}
