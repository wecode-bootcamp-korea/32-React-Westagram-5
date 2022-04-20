/*eslint-disable*/

import React from 'react';
import Aside from './Aside/Aside';
import './Main.scss';
import { useState } from 'react';

function Main() {
  const [comment, setComment] = useState(''); // input창에 보여지는
  const [commnetArr, setCommnetArr] = useState([]); // UI에 보여지는

  const writeComment = e => {
    setComment(e.target.value);
  };

  const sendComment = () => {};

  return (
    <div>
      <nav>
        <div className="iconLeft">
          <img className="icon_insta" src="images/leenayeon/insta.png" />
          <span className="logo_insta">Instagram</span>
        </div>

        <div className="iconCenter">
          <input type="text" className="searchBar" placeholder="검색" />
          <img className="icon_magnify" src="images/leenayeon/magnify.png" />
        </div>

        <div className="iconRight">
          <img className="icon_explore" src="images/leenayeon/explore.png" />
          <img className="icon_heart" src="images/leenayeon/heart.png" />
          <img className="icon_profile" src="images/leenayeon/profile.png" />
        </div>
      </nav>

      <main>
        <div className="feeds">
          <article>
            <div className="art_head">
              <div className="head_left">
                <img className="ny_photo" src="images/leenayeon/ny_photo.jpg" />
                <span className="id_head">nyny </span>
              </div>
              <img className="icon_dot" src="images/leenayeon/dot.png" />
            </div>
            <div className="art_main">
              <img className="dog_photo" src="images/leenayeon/dog_photo.jpg" />
            </div>
            <div className="art_foot">
              <div className="art_footIcon">
                <div className="foot_left">
                  <img src="images/leenayeon/heartW.png" />
                  <img src="images/leenayeon/chat.png" />
                  <img src="images/leenayeon/upload.png" />
                </div>
                <img className="icon_save" src="images/leenayeon/saveW.png" />
              </div>
              <div className="art_footCount">
                <img className="pudog_photo" src="images/leenayeon/pudog.jpg" />
                <span className="id_count">wangaeng</span>님 외&nbsp;
                <span class="num_count">30명</span>이 좋아합니다
              </div>
              <div className="art_footChat">
                <div className="foot_chat">
                  <div className="con_chat">
                    <span className="id_chat">daengdaeng2</span>
                    <span className="com_chat">
                      누가 제 사진을 찍어놨죠 댕댕사찰 아닌가요
                    </span>
                  </div>

                  <img
                    className="heart_chat"
                    src="images/leenayeon/heartW.png"
                  />
                </div>
                <div className="foot_chat">
                  <div className="con_chat">
                    <span className="id_chat">seongown</span>
                    <span className="com_chat">왕바우~~🐶</span>
                  </div>
                  <img
                    className="heart_chat"
                    src="images/leenayeon/heartW.png"
                  />
                </div>

                <ul className="ulCom">
                  <li>
                    <span></span>
                  </li>
                </ul>

                <div className="foot_time">
                  <span>42</span>분 전
                </div>

                {/* <span>{newComment}</span> */}
              </div>
              <div className="art_footWrite">
                <input
                  className="foot_write"
                  type="text"
                  onChange={writeComment}
                  placeholder=" 댓글 달기..."
                />
                <button className="foot_butt" onClick={sendComment}>
                  게시
                </button>
              </div>
            </div>
          </article>
        </div>
        <Aside />
      </main>
    </div>
  );
}

export default Main;
