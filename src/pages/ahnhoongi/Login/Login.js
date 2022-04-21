import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';
const LoginHG = () => {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    id: '',
    pw: '',
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues(inputValues => ({ ...inputValues, [name]: value }));
  };

  const isValid = inputValues.id.includes('@') && inputValues.pw.length >= 5;

  function goToMain() {
    fetch('http://10.58.4.56:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: inputValues.id,
        password: inputValues.pw,
      }),
    })
      .then(response => response.json())
      .then(result => result);
    navigate('/main-ahnhoongi');
  }

  return (
    <main className="login-page">
      <Link to="" className="logo">
        Westagram
      </Link>

      <form className="container">
        <input
          type="text"
          name="id"
          className="id"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleInput}
        />
        <input
          type="password"
          name="pw"
          className="pw"
          placeholder="비밀번호"
          onChange={handleInput}
        />
        <button
          className={`bt ${isValid ? 'abled' : 'disabled'}`}
          disabled={!isValid}
          onClick={goToMain}
        >
          로그인
        </button>
      </form>
      <Link to=" " className="forgot">
        비밀번호를 잊으셨나요?
      </Link>
    </main>
  );
};

export default LoginHG;
