import styles from "./Viewer.module.css";

export default function Viewer({ count }) {
  return (
    <div className={styles.Container}>
      <p>현재 카운트 :</p>
      <p className={styles.CountNumber}>{count}</p>
    </div>
  );
}
