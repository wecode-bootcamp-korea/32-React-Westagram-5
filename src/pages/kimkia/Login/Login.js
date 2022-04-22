import React, { useState } from 'react';

import './Login.scss';

function Login() {
  const [IdValue, setIdvalue] = useState('');
  const [PWValue, setPWvalue] = useState('');
  const [BtnValue, setBtnValue] = useState(true);

  function goToMain() {
    fetch('http://10.58.7.17:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: IdValue,
        password: PWValue,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  }
  function handleIdInput(E) {
    setIdvalue(E.target.value);
  }

  function handlePWInput(E) {
    setPWvalue(E.target.value);
  }

  function active() {
    if (IdValue.includes('@') && PWValue.length > 5) {
      setBtnValue(false);
    } else {
      setBtnValue(true);
    }
  }

  return (
    <div className="outsideBox">
      <div className="insideBox">
        <h1>westagram</h1>

        <input
          onChange={handleIdInput}
          className="phone"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onKeyUp={active}
        />

        <br />
        <input
          onChange={handlePWInput}
          className="password"
          type="password"
          placeholder="비밀번호"
          onKeyUp={active}
        />
        <br />
        <br />
        <input
          type="button"
          className={`button ${BtnValue ? '' : 'activebtn'}`}
          disabled={BtnValue}
          onClick={goToMain}
          value="로그인"
        />

        <div className="forgetPW">비밀번호를 잊으셨나요?</div>
      </div>
    </div>
  );
}
export default Login;
