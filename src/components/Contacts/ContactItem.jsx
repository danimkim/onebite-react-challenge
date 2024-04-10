import { memo } from "react";
import styles from "./ContactItem.module.css";

function ContactItem({ id, name, email, onDelete }) {
  const handleButtonClick = (targetId) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      onDelete(targetId);
    }
  };

  return (
    <div className={styles.ContactItem}>
      <div className={styles.Name}>{name}</div>
      <div className={styles.Contact}>{email}</div>
      <button type="button" onClick={() => handleButtonClick(id)}>
        🗑️ Remove
      </button>
    </div>
  );
}

export default memo(ContactItem);
