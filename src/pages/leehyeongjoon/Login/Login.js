import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate();
  // const onclick = () => {
  //   if (true) {
  //     navigate("/main");
  //   }
  // };
  return (
    <div className="top">
      <div className="logo">westagram</div>
      <div className="user">
        <input
          className="logId"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input className="logPw" type="password" placeholder="비밀번호" />
      </div>
      <Link to="/main">
        <button className="loginButton" onClick={onclick}>
          로그인
        </button>
      </Link>
      <div className="forget">비밀번호를 잊으셨나요?</div>
    </div>
  );
};

export default Login;
