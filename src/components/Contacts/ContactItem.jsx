import { memo, useContext } from "react";
import styles from "./ContactItem.module.css";
import { ContactDispatchContext } from "./../../context/Contacts";

function ContactItem({ id, name, email }) {
  const { onDelete } = useContext(ContactDispatchContext);

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
