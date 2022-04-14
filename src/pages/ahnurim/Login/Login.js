import React from "react";
import "./Login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [id, setId] = useState("");
  // [너무 중요한값(변수), 중요한값을 바꿀 수 있는 함수]
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const handleIdInput = e => {
    setId(e.target.value);
    console.log(e.target.value);
  };
  const handlePwInput = e => {
    setPw(e.target.value);
  };
  //handleIdInput 함수를 선언하고 , 이벤트 값을 받을거야 ,setId(값을 state에 넘길거야)

  const goToMain = () => {
    navigate("/main-ahnurim");
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (id.includes("@") && pw.length >= 5) {
      goToMain();
    }
  };

  return (
    // HTML 코드 삽입
    <main className="signUp">
      <div className="login">
        <div className="boxlayout">
          <h1>Westagram</h1>
          <div className="outline" />
          <div className="box">
            {/* <input type="text" placeholder="전화번호,사용자 이름 또는 이메일" /> */}

            <form onSubmit={handleSubmit}>
              <input
                className="LoginId"
                type="text"
                placeholder="전화번호,사용자 이름 또는 이메일"
                // value={value}
                onChange={handleIdInput}
              />

              {/* <input type="text" placeholder="비밀번호" /> */}
              <input
                className="PassWord"
                type="text"
                placeholder="비밀번호"
                onChange={handlePwInput}
              />

              <div>
                <button className="loginBtn">로그인</button>
              </div>
            </form>
          </div>
          <a href="https://www.instagram.com/?hl=ko">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </main>
  );
}

export default Login;
