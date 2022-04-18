import './Login.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  function goToMain() {
    navigate('/main-kia');
  }

  function handleIdInput(E) {
    let IdValue = E.target.value;
  }

  function handlePWInput(E) {
    let PWValue = E.target.value;
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
        />
        <br />
        <input
          onChange={handlePWInput}
          className="password"
          type="password"
          placeholder="비밀번호"
        />
        <br />
        <br />
        <button onClick={goToMain}>로그인</button>
        {/* <Link to="/Main">로그인</Link> */}
        <div className="forgetPW">비밀번호를 잊으셨나요?</div>
      </div>
    </div>
  );
}
export default Login;
