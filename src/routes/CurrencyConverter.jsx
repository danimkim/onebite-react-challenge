import React from "react";
import styles from "./CurrencyConverter.module.css";

const CurrencyInput = ({ currency }) => {
  return (
    <div className={styles.InputLabel}>
      <label htmlFor="" className={styles.InputLabel}>
        {currency}
      </label>
      <input
        type="number"
        className={styles.Input}
        placeholder="숫자를 입력하세요"
      />
    </div>
  );
};

export default function CurrencyConverter() {
  return (
    <div className={styles.Container}>
      <h1>환율 변환기</h1>
      <form className={styles.Form}>
        <CurrencyInput currency="KRW" />
        <CurrencyInput currency="USD" />
      </form>
    </div>
  );
}
