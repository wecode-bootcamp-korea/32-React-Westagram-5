import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const LoginHG = () => {
  const navigate = useNavigate();

  // function goToMain() {
  //   fetch('http://10.58.4.56:8000/users/signup', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: idInput,
  //       password: pwInput,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => console.log('결과: ', result));
  //   // navigate('/main-ahnhoongi');
  // }

  function goToMain() {
    // fetch('http://10.58.4.56:8000/users/signin', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: idInput,
    //     password: pwInput,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => console.log('결과: ', result));
    navigate('/main-ahnhoongi');
  }

  const [idInput, setIdInput] = useState('');

  const handleIdInput = event => {
    setIdInput(event.target.value);
  };

  const [pwInput, setPwInput] = useState('');

  const handlePwInput = event => {
    setPwInput(event.target.value);
  };

  const [isActive, setIsActive] = useState(false);

  const active = () => {
    idInput.includes('@') && pwInput.length >= 6
      ? setIsActive(true)
      : setIsActive(false);
  };

  const enter = event => {
    if (isActive) {
      if (event.key === 'Enter') {
        goToMain();
      }
    }
  };

  return (
    <main className="login-page">
      <div className="logo">
        <Link to="">Westagram</Link>
      </div>
      <form className="container">
        <input
          type="text"
          className="id"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleIdInput}
          onKeyUp={active}
          onKeyPress={enter}
        />
        <input
          type="password"
          className="pw"
          placeholder="비밀번호"
          onChange={handlePwInput}
          onKeyUp={active}
          onKeyPress={enter}
        />
        <button
          type="button"
          className={`bt ${isActive ? 'abled' : 'disabled'}`}
          disabled={isActive ? false : true}
          onClick={goToMain}
        >
          로그인
        </button>
      </form>
      <div className="forgot">
        <a href=" ">비밀번호를 잊으셨나요?</a>
      </div>
    </main>
  );
};

export default LoginHG;
