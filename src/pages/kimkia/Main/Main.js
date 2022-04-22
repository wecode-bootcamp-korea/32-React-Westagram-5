import React, { useState, useEffect } from 'react';
import './Main.scss';

function Main() {
  const [commentValue, setCommentValue] = useState('');
  const [viewComment, setViewComment] = useState([]);
  const [key, setKey] = useState(4);

  function Profile(props) {
    return (
      <div class="profile">
        <img
          alt="profilePH"
          src="/images/kimkia/BasicAccountPhoto.png"
          id="photo"
        />
        {props.profileName}
      </div>
    );
  }

  function Comment(props) {
    console.log(props);
    let commentlist = props.comment;
    return commentlist.map(list => {
      return (
        <div>
          <span>{list.userid}</span> &nbsp;
          <span>{list.comment}</span>
          <span>{list.content}</span>
        </div>
      );
    });
  }

  function writeComment(e) {
    setCommentValue(e.target.value);
  }

  const addingComment = () => {
    const copyComment = [...viewComment];
    if (commentValue.length > 0) {
      copyComment.push({ id: key, userid: 'kia', comment: commentValue });
      setViewComment(copyComment);
      setKey(key => key + 1);
      setCommentValue('');
    }
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/commentDataKia.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setViewComment(data);
      });
  }, []);

  return (
    <div className="all">
      <nav class="navigator">
        <i class="fa-brands fa-instagram" />
        <img
          alt="logo"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        />

        <div class="searchBox"></div>
        <div class="navIcon">
          <i class="fa-solid fa-house-chimney" />
          <i class="fa-solid fa-message" />
          <i class="fa-solid fa-circle-plus" />
          <i class="fa-solid fa-compass" />
          <i class="fa-solid fa-heart" />
          <i class="fa-solid fa-id-badge" />
        </div>
      </nav>

      <div class="main">
        <div class="feeds">
          <div class="profile">
            <img
              alt="profilePh"
              src="/images/kimkia/profileph.png"
              class="ph"
            />
            <div class="profileName">daily.snap.photography</div>
          </div>

          <div class="article">
            <img alt="mainPh" src="/images/kimkia/mainph.png" />
            <div class="statusBox">hnmpot님 외 20명이 좋아합니다</div>

            <div class="commentBox">
              <Comment comment={viewComment} />
              <input onChange={writeComment} />
              <button onClick={addingComment}>게시</button>
            </div>
          </div>
        </div>

        <div class="mainRight">
          <Profile profileName="profile.spot" />

          <div class="storyBox">
            스토리
            <Profile profileName="profile.spot" />
            <Profile profileName="profile.spot" />
            <Profile profileName="profile.spot" />
            <Profile profileName="profile.spot" />
          </div>
          <div class="storyBox">
            회원님을 위한 추천
            <Profile profileName="profile.spot" />
            <Profile profileName="profile.spot" />
            <Profile profileName="profile.spot" />
            <Profile profileName="profile.spot" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
