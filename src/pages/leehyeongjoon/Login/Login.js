import { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  const [idInput, setIdInput] = useState('');
  const handleIdInput = event => {
    setIdInput(event.target.value);
  };

  const [pwInput, setPwInput] = useState('');
  const handlePwInput = event => {
    setPwInput(event.target.value);
  };

  const [isButtonActive, setIsButtonActive] = useState(false);
  const buttonColorChange = () => {
    if (idInput.includes('@') && pwInput.length >= 5) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  return (
    <div className="top">
      <div className="logo">westagram</div>
      <div className="user" onKeyUp={buttonColorChange}>
        <input
          className="logId"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleIdInput}
        />
        <input
          className="logPw"
          type="password"
          placeholder="비밀번호"
          onChange={handlePwInput}
        />
      </div>
      <Link to="/main-leehyeongjoon">
        <button
          className={`loginButton ${isButtonActive ? 'is-active' : ''}`}
          onClick={onclick}
        >
          로그인
        </button>
      </Link>
      <div className="forget">비밀번호를 잊으셨나요?</div>
    </div>
  );
};

export default Login;
