import { useEffect, useState } from 'react';
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
    idInput.includes('@') && pwInput.length >= 5
      ? setIsButtonActive(true)
      : setIsButtonActive();
    // if (idInput.includes('@') && pwInput.length >= 5) {
    //   setIsButtonActive(true);
    // } else {
    //   setIsButtonActive(false);
    // }
  };

  // const [id, setId] = useState();
  // const [pw, setpw] = useState();

  const goToMain = () => {
    fetch('http://10.58.7.44:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: idInput,
        password: pwInput,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };
  return (
    <div className="top">
      <div className="logo">westagram</div>
      <div className="user" onKeyUp={buttonColorChange}>
        <div className="resiterMember" />
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
      <button
        // className={`loginButton ${isButtonActive ? 'is-active' : ''}`}
        className={isButtonActive ? 'loginButtonActive ' : 'loginButton'}
        onClick={goToMain}
      >
        로그인
      </button>

      <div className="forget">비밀번호를 잊으셨나요?</div>
    </div>
  );
};

export default Login;
