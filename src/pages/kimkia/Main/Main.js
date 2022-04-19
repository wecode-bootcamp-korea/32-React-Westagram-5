import './Main.scss';
import React, { useState } from 'react';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";

function Main() {
  const [commentValue, setCommentValue] = useState('');
  const [viewComment, setViewComment] = useState([]);
  function Profile(props) {
    return (
      <>
        <div class="profile">
          <img src="/images/kimkia/BasicAccountPhoto.png" class="ph" />
          {props.profileName}
        </div>
      </>
    );
  }

  function writeComment(e) {
    setCommentValue(e.target.value);
  }

  const addingComment = () => {
    var copyComment = [...viewComment];
    if (commentValue.length > 0) {
      copyComment.push({ userid: 'wecode_bootcamp', comment: commentValue });
      setViewComment(copyComment);
      setCommentValue('');
    }
  };

  console.log(viewComment);

  return (
    <div>
      <nav class="navigator">
        <i class="fa-brands fa-instagram"></i>
        <img
          alt="logo"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        />

        <div class="searchBox"></div>
        <div class="navIcon">
          <i class="fa-solid fa-house-chimney"></i>
          <i class="fa-solid fa-message"></i>
          <i class="fa-solid fa-circle-plus"></i>
          <i class="fa-solid fa-compass"></i>
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-id-badge"></i>
        </div>
      </nav>

      <div class="main">
        <div class="feeds">
          <div class="profile" id="snap">
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
              {viewComment.map(list => {
                return (
                  <div>
                    <span>{list.userid}</span>
                    <span>{list.comment}</span>
                  </div>
                );
              })}
              <input onChange={writeComment} />
              <button onClick={addingComment}>게시</button>
            </div>
          </div>
        </div>

        <div class="main-right">
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
