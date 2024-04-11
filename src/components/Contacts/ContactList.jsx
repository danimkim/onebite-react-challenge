import styles from "./ContactList.module.css";
import ContactItem from "./ContactItem";
import { useContext } from "react";
import { ContactStateContext } from "./../../context/Contacts";

export default function ContactList() {
  const contacts = useContext(ContactStateContext);

  return (
    <div className={styles.ContactList}>
      <div className={styles.Title}>Contact List</div>
      {contacts.map((contact) => (
        <ContactItem key={contact.name} {...contact} />
      ))}
    </div>
  );
}
