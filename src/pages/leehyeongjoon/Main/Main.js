import React, { useState } from 'react';
import './Main.scss';
import Aside from './Aside/Aside';

const Main = () => {
  const [Comment, setComment] = useState([]);

  const commentInput = event => {
    setinputComment(event.target.value);
  };
  const [inputComment, setinputComment] = useState('');

  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <div className="title-wrapper">
            <img
              className="insta-icon"
              src="/images/leehyeongjoon/1384031.png"
              alt=""
            />
            <div className="title-line" />
            <div className="title">westagram</div>
          </div>
          <div className="input-wrapper">
            <input className="input-box" type="text" />
          </div>
          <div className="icon-wrapper">
            <img
              className="nav-icon"
              src="/images/leehyeongjoon/explore.png"
              alt=""
            />
            <img
              className="nav-icon"
              src="/images/leehyeongjoon/heart.png"
              alt=""
            />
            <img
              className="nav-icon"
              src="/images/leehyeongjoon/profile.png"
              alt=""
            />
          </div>
        </div>
      </nav>
      <main>
        <div className="totalmain">
          <div className="main-wrapper">
            <div className="main-title-wrapper">
              <div className="leftTitle">
                <img
                  className="titletopprofile"
                  src="/images/leehyeongjoon/titletopprofile.JPG"
                  alt=""
                />
                <div>_lhj</div>
              </div>
              <i className="fa-solid fa-ellipsis menu-icon" />
            </div>
            <div className="main-img">
              <img
                className="mainphoto"
                src="/images/leehyeongjoon/dog1.jpeg"
                alt=""
              />
            </div>
            <div className="main-icon">
              <div className="lefticon">
                <i className="fa-regular fa-heart" />
                <i className="fa-regular fa-comment" />
                <i className="fa-solid fa-download" />
              </div>
              <div className="bookmark-wrapper">
                <i className="fa-regular fa-bookmark" />
              </div>
            </div>
            <div className="main-like">
              <img
                className="wecode"
                src="/images/leehyeongjoon/wecode.jpeg"
                alt=""
              />
              <strong className="wecode-padding">wecode님</strong>
              &nbsp;외&nbsp;
              <strong>100명</strong>이 좋아합니다
            </div>
            <div className="main-reply">
              <div className="reply">
                <div className="reply-id">_lhj</div>
                <div className="reply-info">주인놈아 집 좀 와라...</div>
                <div className="see">더보기</div>
              </div>
              {Comment.map((comment, index) => {
                return (
                  <div className="reply" key={index}>
                    <div className="reply-id">{comment.userId}</div>
                    <div className="reply-info">{comment.comment}</div>
                    <div className="see">더보기</div>
                  </div>
                );
              })}
            </div>

            <div className="main-reply-box">
              <input
                className="name"
                type="text"
                placeholder="댓글 달기 ..."
                value={inputComment}
                onChange={commentInput}
              />
              <button
                className="reply-button"
                onClick={e => {
                  if (inputComment.length > 0) {
                    const CommentCopy = [...Comment];
                    CommentCopy.push({ userId: '_lhj', comment: inputComment });
                    setComment(CommentCopy);
                    setinputComment('');
                  }
                }}
              >
                제출
              </button>
            </div>
          </div>
          <Aside />
        </div>
      </main>
    </>
  );
};

export default Main;
