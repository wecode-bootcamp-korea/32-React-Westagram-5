import './Login.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [IdValue, setIdvalue] = useState('');
  const [PWValue, setPWvalue] = useState('');
  const [btnValue, setbtnvalue] = useState(true);

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

  {
  }
  function handleIdInput(E) {
    setIdvalue(E.target.value);
  }

  function handlePWInput(E) {
    setPWvalue(E.target.value);
  }

  function active() {
    if (IdValue.includes('@') && PWValue.length > 5) {
      setbtnvalue(false);
    } else {
      setbtnvalue(true);
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
          className={`button ${btnValue ? '' : 'activebtn'}`}
          disabled={btnValue}
          onClick={goToMain}
          value="로그인"
        />

        {/* <Link to="/Main">로그인</Link> */}
        <div className="forgetPW">비밀번호를 잊으셨나요?</div>
      </div>
    </div>
  );
}
export default Login;

//IdValue.includes('@')&&//PWValue.length ?
