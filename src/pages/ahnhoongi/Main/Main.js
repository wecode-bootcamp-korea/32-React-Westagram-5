import React, { useState } from 'react';
import Comment from './Comment';
import Aside from './Aside/Aside';
import { Link } from 'react-router-dom';
import COMMENT_LIST from './CommentData';
import './Main.scss';

const MainHG = props => {
  const [inputComment, setInputComment] = useState('');

  const handleInput = event => {
    setInputComment(event.target.value);
  };

  const [isActive, setIsActive] = useState(false);

  const active = () => {
    inputComment ? setIsActive(true) : setIsActive(false);
  };

  const [commentArray, setCommentArray] = useState([]);

  const onSubmit = event => {
    event.preventDefault();
    if (inputComment === '') {
      return;
    }

    setCommentArray(commentList => [...commentList, inputComment]);
    setInputComment('');
  };

  return (
    <div className="main-page">
      <nav>
        <div className="logo">
          <i className="fa-brands fa-instagram" />
          <Link to="/">Westagram</Link>
        </div>
        <div className="search">
          <input type="text" placeholder="검색" />
        </div>
        <div className="icons">
          <img
            className="bt"
            alt="나침반"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          />
          <img
            className="bt"
            alt="하트"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          />
          <img
            className="bt"
            alt="내정보"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          />
        </div>
      </nav>
      <main>
        <div className="feeds">
          <article>
            <div className="art-me">
              <span>
                <img src="/images/ahnhoongi/me.jpg" alt="me" />
              </span>
              <p>hoongiahn</p>
            </div>
            <div>
              <img
                className="travel"
                alt="여행"
                src="/images/ahnhoongi/travel.jpg"
              />
            </div>
            <div>
              <div className="likes">
                <div>
                  <i className="fa-solid fa-heart" />
                  <i className="fa-regular fa-comment" />
                  <i className="fa-solid fa-arrow-up-from-bracket" />
                </div>
                <div>
                  <i className="fa-regular fa-bookmark" />
                </div>
              </div>
              <div className="whoLikes">
                <span className="name">wecode님</span>
                <span>
                  외 <span style={{ fontWeight: 'bold' }}>1412명</span>이
                  좋아합니다
                </span>
              </div>
              <ul className="commentLists">
                {/* {COMMENT_LIST.map( comment = > {
                  return (
                    <li
                    key = {comment.id}
                    name = >


                  )

                })} */}
                <li>
                  <span className="name">wecode</span>
                  <span> 여행가고 싶다~~ </span>
                </li>
                <li>
                  <span className="name">wecode2</span>
                  <span> 어디로 갈까? </span>
                </li>
              </ul>

              <Comment comment={commentArray} />

              <form className="reply" onSubmit={onSubmit}>
                <input
                  className="reply-input"
                  type="text"
                  placeholder="댓글 달기..."
                  onChange={handleInput}
                  onKeyUp={active}
                  value={inputComment}
                />
                <button
                  type="button"
                  className={isActive ? 'abled' : 'disabled'}
                  disabled={isActive ? false : true}
                  onClick={onSubmit}
                >
                  게시
                </button>
              </form>
            </div>
          </article>
        </div>
        <Aside />
      </main>
    </div>
  );
};

export default MainHG;
