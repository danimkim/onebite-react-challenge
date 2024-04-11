import styles from "./OrderEditor.module.css";

export default function OrderEditor() {
  return (
    <form className={styles.Form}>
      <div>
        <label className={styles.Label}>메뉴 선택</label>
        <select className={styles.SelectContainer}>
          <option value={"족발"}>족발</option>
          <option value={"떡볶이"}>떡볶이</option>
          <option value={"아이스크림"}>아이스크림</option>
          <option value={"샐러드"}>샐러드</option>
        </select>
      </div>
      <div>
        <div className={styles.Label}>배달 주소</div>
        <input
          className={styles.AddressInput}
          placeholder="주소) 서울특별시 xx동 .."
        />
      </div>
      <div>
        <div className={styles.Label}>배달 요청사항</div>
        <textarea
          className={styles.TextArea}
          placeholder="배달 요청사항을 써 주세요..."
        />
      </div>
      <div>
        <button onClick={() => {}} className={styles.SubmitButton}>
          주문 완료
        </button>
      </div>
    </form>
  );
}
