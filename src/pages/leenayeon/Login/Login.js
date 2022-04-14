import React from "react";

import "./Login.scss";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const goToMain = () => {
        navigate("/Main");
    };

    return (
    <body>
        <div className="instagram">
            <header>
                <h1 className="header_insta">Westagram</h1>
            </header>

            <main className="mainLog">
                <input className="main_id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                <input className="main_pw" type="password" placeholder="비밀번호"/>
                <button className="main_button" onClick={goToMain}>
                    로그인
                </button>
            </main>
            <footer>
                <a className="footer_insta" href="">비밀번호를 잊으셨나요?</a>
            </footer>
        </div>
    </body>
    )
}

export default Login;
