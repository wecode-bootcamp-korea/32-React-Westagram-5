import './Main.scss';
import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";

function Main() {
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
            <img alt="profilePh" src="/Image/accountPhoto.png" class="ph" />
            <div class="profileName">daily.snap.photography</div>
          </div>
          <div class="article">
            <img alt="mainPh" src="/Image/mainph.png" />
            <div class="statusBox">hnmpot님 외 20명이 좋아합니다</div>
            <div class="commentBox"></div>
          </div>
        </div>

        <div class="main-right">
          <div class="profile">
            <img src="/Image/accountPhoto.png" class="ph" />
            <div class="profileName">profile spot</div>
          </div>
          <div class="storyBox">
            스토리
            <div class="profile">
              <img src="/Image/accountPhoto.png" class="ph" />
              <div class="profileName">profile spot</div>
            </div>
            <div class="profile">
              <img src="/Image/accountPhoto.png" class="ph" />
              <div class="profileName">profile spot</div>
            </div>
            <div class="profile">
              <img src="/Image/accountPhoto.png" class="ph" />
              <div class="profileName">profile spot</div>
            </div>
          </div>
          <div class="storyBox">
            회원님을 위한 추천
            <div class="profile">
              <img src="/Image/accountPhoto.png" class="ph" />
              <div class="profileName">profile spot</div>
            </div>
            <div class="profile">
              <img src="/Image/accountPhoto.png" class="ph" />
              <div class="profileName">profile spot</div>
            </div>
            <div class="profile">
              <img src="/Image/accountPhoto.png" class="ph" />
              <div class="profileName">profile spot</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
