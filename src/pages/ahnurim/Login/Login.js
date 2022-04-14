/* eslint-disable */

import React from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main");
  };

  return (
    // HTML 코드 삽입
    <main className="signUp">
      <div className="login">
        <div className="boxlayout">
          <h1>Westagram</h1>
          <div className="outline" />
          <div className="box">
            <input type="text" placeholder="전화번호,사용자 이름 또는 이메일" />
            <input type="text" placeholder="비밀번호" />
            <div>
              <button className="loginBtn" onClick={goToMain}>
                로그인
              </button>
            </div>
          </div>
          <a href="https://www.instagram.com/?hl=ko">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </main>
  );
}

export default Login;
