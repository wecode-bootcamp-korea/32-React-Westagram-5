import React from 'react';

import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [btn, setBtn] = useState(false);

  const goToMain = () => {
    navigate('/main-leenayeon');
  };

  const handleIdInput = e => {
    setId(e.target.value);
  };

  const handlePwInput = e => {
    setPw(e.target.value);
  };

  const isValidation = e => {
    const idValue = id.includes('@');
    const pwValue = pw.length >= 5;

    idValue && pwValue ? setBtn(true) : setBtn(false);
  };

  return (
    <div className="instagram">
      <header>
        <h1 className="header_insta">Westagram</h1>
      </header>

      <main className="mainLog">
        <input
          onChange={handleIdInput}
          onKeyUp={isValidation}
          className="mainId"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          onChange={handlePwInput}
          onKeyUp={isValidation}
          className="mainPw"
          type="password"
          placeholder="비밀번호"
        />
        <button className={btn ? 'active' : 'unactive'} onClick={goToMain}>
          로그인
        </button>
      </main>
      <footer>
        <a className="footer_insta" href="">
          비밀번호를 잊으셨나요?
        </a>
      </footer>
    </div>
  );
}

export default Login;
