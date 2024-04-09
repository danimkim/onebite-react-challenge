import styles from "./Header.module.css";

export default function Header() {
  return (
    <h1 className={styles.Container}>
      <span className={styles.TextIndicator}>오늘은 ✨</span>
      <span className={styles.Date}>{new Date().toDateString()}</span>
    </h1>
  );
}
