import { useState } from "react";
import "./App.css";

function Welcome({ name, isMember }) {
  const WELCOME_BACK_MESSAGE = "다시 오셨군요";
  const REGISTER_MESSAGE = "가입하시겠어요?";

  return (
    <p>{`${name}님 ${isMember ? WELCOME_BACK_MESSAGE : REGISTER_MESSAGE}`}</p>
  );
}

function App() {
  const [hasSignedIn, setHasSignedIn] = useState(false);
  const handleClick = () => setHasSignedIn((prev) => !prev);

  return (
    <>
      <Welcome name="디아" isMember={hasSignedIn} />
      <button type="button" onClick={handleClick}>
        {hasSignedIn ? "로그아웃" : "로그인"}
      </button>
    </>
  );
}

export default App;

Welcome.defaultProps = {
  name: "방문자",
  isMember: false,
};