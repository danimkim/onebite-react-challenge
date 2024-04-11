import { useContext, useRef, useState } from "react";
import styles from "./Editor.module.css";
import { TodoDispatchContext } from "./../../context/TodoList";

export default function Editor() {
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      setContent("");
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <section className={styles.Container}>
      <input
        type="text"
        className={styles.Input}
        placeholder="Todo를 입력하세요"
        onChange={(e) => setContent(e.target.value)}
        ref={inputRef}
        onKeyDown={onKeydown}
        value={content}
      />
      <button type="button" className={styles.Button} onClick={onSubmit}>
        추가
      </button>
    </section>
  );
}
