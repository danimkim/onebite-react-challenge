import styles from "./Controller.module.css";

export default function Controller({ calculate }) {
  const calcAmount = [-1, -10, -100, 100, 10, 1];
  return (
    <div className={styles.Container}>
      {calcAmount.map((num) => (
        <button
          key={num}
          className={styles.Button}
          onClick={() => calculate(num)}
        >
          {num > 0 ? `+${num}` : num}
        </button>
      ))}
    </div>
  );
}
