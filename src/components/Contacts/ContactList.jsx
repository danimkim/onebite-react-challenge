import styles from "./ContactList.module.css";
import ContactItem from "./ContactItem";

export default function ContactList() {
  return (
    <div className={styles.ContactList}>
      <div className={styles.Title}>Contact List</div>
      <ContactItem />
      <ContactItem />
      <ContactItem />
    </div>
  );
}
