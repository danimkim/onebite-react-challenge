import { useState } from "react";
import styles from "./OrderEditor.module.css";

export default function OrderEditor() {
  const [menu, setMenu] = useState("");
  const [address, setAddress] = useState("");
  const [request, setRequest] = useState("");

  const resetForm = () => {
    setMenu("");
    setAddress("");
    setRequest("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!menu) {
      alert("메뉴를 선택하세요");
      return;
    }
    if (!address) {
      alert("주소를 입력하세요");
      return;
    }
    alert(
      `주문이 완료되었습니다. \n 메뉴: ${menu} \n 주소: ${address} \n 요청사항: ${request}`
    );
    // 주문완료후 폼 리셋
    resetForm();
  };

  return (
    <form className={styles.Form} onSubmit={onSubmit}>
      <div>
        <label className={styles.Label}>메뉴 선택</label>
        <select
          className={styles.SelectContainer}
          onChange={(e) => setMenu(e.target.value)}
          value={menu}
        >
          <option value={""}>메뉴를 선택하세요.</option>
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
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
      </div>
      <div>
        <div className={styles.Label}>배달 요청사항</div>
        <textarea
          className={styles.TextArea}
          placeholder="배달 요청사항을 써 주세요..."
          onChange={(e) => setRequest(e.target.value)}
          value={request}
        />
      </div>
      <div>
        <button type="submit" className={styles.SubmitButton}>
          주문 완료
        </button>
      </div>
    </form>
  );
}
