import { useRef, useState } from "react";
import styles from "./OrderEditor.module.css";

export default function OrderEditor() {
  const DEFAULT_FORMDATA = {
    menu: "",
    address: "",
    request: "",
  };

  const [formData, setFormData] = useState(DEFAULT_FORMDATA);
  const selectRef = useRef();
  const inputRef = useRef();

  const onFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!formData.menu) {
      alert("메뉴를 선택하세요");
      selectRef.current.focus();
      return;
    }
    if (!formData.address) {
      alert("주소를 입력하세요");
      inputRef.current.focus();
      return;
    }
    alert(
      `주문이 완료되었습니다. \n 메뉴: ${formData.menu} \n 주소: ${formData.address} \n 요청사항: ${formData.request}`
    );
    // 주문완료후 폼 리셋
    setFormData(DEFAULT_FORMDATA);
  };

  return (
    <form className={styles.Form} onSubmit={onSubmit}>
      <div>
        <label className={styles.Label}>메뉴 선택</label>
        <select
          name="menu"
          className={styles.SelectContainer}
          onChange={onFormChange}
          value={formData.menu}
          ref={selectRef}
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
          name="address"
          className={styles.AddressInput}
          placeholder="주소) 서울특별시 xx동 .."
          onChange={onFormChange}
          value={formData.address}
          ref={inputRef}
        />
      </div>
      <div>
        <div className={styles.Label}>배달 요청사항</div>
        <textarea
          name="request"
          className={styles.TextArea}
          placeholder="배달 요청사항을 써 주세요..."
          onChange={onFormChange}
          value={formData.request}
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
