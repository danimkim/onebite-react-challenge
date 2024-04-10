import { useState } from "react";
import styles from "./ContactEditor.module.css";

export default function ContactEditor({ onCreate }) {
  const [contactInput, setContactInput] = useState({ name: "", email: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    if (contactInput.name && contactInput.email) {
      onCreate(contactInput);
      setContactInput({ name: "", email: "" });
    }
  };

  return (
    <div className={styles.ContactEditor}>
      <div className={styles.Title}>Add Contact</div>
      <form
        className={styles.InputWrapper}
        onSubmit={onSubmit}
        id="contact-form"
      >
        <input
          className={styles.Name}
          placeholder="이름 ..."
          value={contactInput.name}
          onChange={(e) => {
            setContactInput({ ...contactInput, name: e.target.value });
          }}
        />
        <input
          className={styles.Contact}
          placeholder="연락처(이메일) ..."
          value={contactInput.email}
          onChange={(e) =>
            setContactInput({ ...contactInput, email: e.target.value })
          }
        />
      </form>
      <button type="submit" form="contact-form">
        Add
      </button>
    </div>
  );
}
