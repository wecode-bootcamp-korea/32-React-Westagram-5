import React, { useState } from 'react';
import './Feed.scss';
import Comment from '../Comment/Comment';
// import Aside from '../Aside/Aside';

const Feed = ({ feedData }) => {
  const [commentList, setComment] = useState([]);
  // console.log(feedData); //
  const commentInput = event => {
    setinputComment(event.target.value);
  };
  const [inputComment, setinputComment] = useState('');
  return (
    <div className="titleSeparate">
      <div className="main-title-wrapper">
        <div className="leftTitle">
          <img
            className="titletopprofile"
            src="/images/leehyeongjoon/titletopprofile.JPG"
            alt=""
          />
          <div>{feedData.userName}</div>
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
          <div className="reply-info">{feedData.content}</div>
          <div className="see">더보기</div>
        </div>
        <Comment commentList={commentList} />
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
              const CommentCopy = [...commentList];
              CommentCopy.push({ userId: '_lhj', comment: inputComment });
              setComment(CommentCopy);
              setinputComment('');
            }
          }}
        >
          제출
        </button>
      </div>
      {/* <Aside /> */}
    </div>
  );
};

export default Feed;
