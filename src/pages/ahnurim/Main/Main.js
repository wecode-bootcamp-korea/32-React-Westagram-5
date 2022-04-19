/* eslint-disable */
import React, { useEffect } from 'react';
import { useState } from 'react';
import '../Main/Main.scss';
import Comment from './component/Comment';
import FeedData from './component/feed';
// import Component from "./Component/Comment"
function Main() {
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json')
      .then(res => res.json())
      .then(data => setCommentList(data));
  }, []); // [] 의존성배열

  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json')
      .then(res => res.json())
      .then(data => setFeedList(data));
  }, []); // [] 의존성배열

  console.log('코멘트>>>>>', commentList);

  const handleReviewInput = e => {
    setComment(e.target.value);
  };

  console.log(handleReviewInput);
  const onSubmitComment = e => {
    e.preventDefault();
    if (comment !== '') {
      // console.log(e.target);
      const newArray = {
        userId: 'user1',
        comment: comment,
      };
      setCommentArray([...commentArray, newArray]);
    }
    setComment('');
    // console.log(handleEnter);
  };

  const firstData = [
    {
      userId: 'urim',
      comment: '댓글추가',
    },
  ];

  useEffect(() => {
    setCommentArray(firstData);
  }, []);

  const ParentComponent = () => {};

  return (
    <div className="main">
      <header>
        <div className="Gnb">
          <div className="Gnbleft">
            <img alt="logo" src="./images/ahnurim/instagram.png" width="24px" />
            <p className="MainLogo">westagram</p>
          </div>

          <div className="GnbSearch">
            <img alt="serch" src="./images/ahnurim/search.svg" width="17px" />
            <input type="text" placeholder="검색" />
          </div>

          <div className="GnbRight">
            <img
              alt="explore"
              src="./images/ahnurim/explore.png"
              width="24px"
            />
            <img alt="heart" src="./images/ahnurim/heart.png" width="24px" />
            <img
              alt="profile"
              src="./images/ahnurim/profile.png"
              width="24px"
            />
          </div>
        </div>
      </header>

      {feedList.map(list => {
        return (
          <FeedData
            key={list.id}
            feedInfo={list}
            commentList={commentList}
            commentArray={commentArray}
            onSubmitComment={onSubmitComment}
            comment={comment}
            handleReviewInput={handleReviewInput}
          />
        );
      })}
    </div>
  );
}
export default Main;
