import React, { useState } from "react";
import styles from "./CurrencyConverter.module.css";
import { CURRENCY } from "../constants/constant";

const CurrencyInput = ({ currencyCode, InputChangeHandler, inputValue }) => {
  return (
    <div className={styles.InputLabel}>
      <label htmlFor="" className={styles.InputLabel}>
        {currencyCode}
      </label>
      <input
        type="number"
        className={styles.Input}
        placeholder="숫자를 입력하세요"
        min="0"
        onChange={(e) => InputChangeHandler(e.target.value, currencyCode)}
        value={inputValue}
      />
    </div>
  );
};

export default function CurrencyConverter() {
  const [currencyValue, setCurrencyValue] = useState();

  const handleInputChange = (value, currencyCode) => {
    if (currencyCode === CURRENCY.SOUTH_KOREA.CURRENCY_CODE) {
      setCurrencyValue({
        krw: value,
        usd: value / CURRENCY.SOUTH_KOREA.CURRENCY_RATE,
      });
    } else {
      setCurrencyValue({
        krw: value * CURRENCY.SOUTH_KOREA.CURRENCY_RATE,
        usd: value,
      });
    }
  };

  return (
    <div className={styles.Container}>
      <h1>환율 변환기</h1>
      <form className={styles.Form}>
        <CurrencyInput
          currencyCode={CURRENCY.SOUTH_KOREA.CURRENCY_CODE}
          InputChangeHandler={handleInputChange}
          inputValue={currencyValue?.krw ?? ""}
        />
        <CurrencyInput
          currencyCode={CURRENCY.UNITED_STATES.CURRENCY_CODE}
          InputChangeHandler={handleInputChange}
          inputValue={currencyValue?.usd ?? ""}
        />
      </form>
    </div>
  );
}
