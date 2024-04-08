import { useState } from "react";

function Welcome({ name, isMember }) {
  const WELCOME_BACK_MESSAGE = "다시 오셨군요";
  const REGISTER_MESSAGE = "가입하시겠어요?";

  return (
    <p>{`${name}님 ${isMember ? WELCOME_BACK_MESSAGE : REGISTER_MESSAGE}`}</p>
  );
}

export default function MockAuth() {
  const [hasSignedIn, setHasSignedIn] = useState(false);

  const userInfo = {
    name: "이정환",
    isMember: hasSignedIn,
  };

  const handleClick = () => setHasSignedIn((prev) => !prev);

  return (
    <>
      <Welcome {...userInfo} />
      <button type="button" onClick={handleClick}>
        {hasSignedIn ? "로그아웃" : "회원가입"}
      </button>
    </>
  );
}
