import styles from "./ContactList.module.css";
import ContactItem from "./ContactItem";

export default function ContactList({ contacts, onDelete }) {
  return (
    <div className={styles.ContactList}>
      <div className={styles.Title}>Contact List</div>
      {contacts.map((contact) => (
        <ContactItem key={contact.name} {...contact} onDelete={onDelete} />
      ))}
    </div>
  );
}
