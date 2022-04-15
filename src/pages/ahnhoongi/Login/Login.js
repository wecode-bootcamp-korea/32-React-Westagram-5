import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [IdInput, setIdInput] = useState('');

  function handleIdInput(event) {
    setIdInput(event.target.value);
  }

  const [Pwinput, setPwInput] = useState('');

  function handlePwInput(event) {
    setPwInput(event.target.value);
  }

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-ahnhoongi');
  };

  return (
    <body className="login-page">
      <main>
        <div className="logo">
          <h1 className="title">Westagram</h1>
        </div>
        <form className="container">
          <input
            type="text"
            className="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInput}
          />
          <input
            type="password"
            className="pw"
            placeholder="비밀번호"
            onChange={handlePwInput}
          />
          <button type="button" className="bt" onClick={goToMain} /*disabled*/>
            로그인
          </button>
        </form>
        <div className="forgot">
          <a href=" ">비밀번호를 잊으셨나요?</a>
        </div>
      </main>
    </body>
  );
}

export default Login;
