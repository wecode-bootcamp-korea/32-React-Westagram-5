import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import Aside from './Aside/Aside';
import Nav from '../../../components/Nav/Nav';
//import { Link } from 'react-router-dom';
//import COMMENT_LIST from './CommentData';
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

  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

  return (
    <div className="main-page">
      <Nav />
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
                <span className="name">wecode1님</span>
                <span>
                  외 <span style={{ fontWeight: 'bold' }}>8명</span>이
                  좋아합니다
                </span>
              </div>
              <ul className="commentLists">
                {commentList.map(comment => {
                  return (
                    <li key={comment.id}>
                      <span className="name">{comment.userName}</span>
                      <span>{comment.content}</span>
                    </li>
                  );
                })}

                {/* <li>
                  <span >wecode</span>
                  <span> 여행가고 싶다~~ </span>
                </li>
                <li>
                  <span className="name">wecode2</span>
                  <span> 어디로 갈까? </span>
                </li> */}
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
