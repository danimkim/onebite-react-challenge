import { useState } from "react";
import Controller from "../components/SimpleCounter/Controller";
import Viewer from "../components/SimpleCounter/Viewer";
import styles from "./../styles/Counter.module.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleButtonClick = (value) => setCount(count + value);

  return (
    <div className={styles.Container}>
      <h1>Simple Counter</h1>
      <Viewer count={count} />
      <Controller calculate={handleButtonClick} />
    </div>
  );
}
