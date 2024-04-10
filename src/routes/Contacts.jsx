import ContactEditor from "./../components/Contacts/ContactEditor";
import ContactList from "./../components/Contacts/ContactList";
import styles from "./../styles/Contacts.module.css";

export default function Contacts() {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Heading}>Contact List</h1>
      <section>
        <ContactEditor />
      </section>
      <section>
        <ContactList />
      </section>
    </div>
  );
}
