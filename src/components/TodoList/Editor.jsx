import styles from "./Editor.module.css";

export default function Editor() {
  return (
    <section className={styles.Container}>
      <input type="text" className={styles.Input} />
      <button type="button" className={styles.Button}>
        추가
      </button>
    </section>
  );
}
