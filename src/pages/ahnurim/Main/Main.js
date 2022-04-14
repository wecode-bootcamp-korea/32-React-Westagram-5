/* eslint-disable */

import React from "react";
import "../Main/Main.scss";

function Main() {
  return (
    <div className="main">
      <header>
        <div className="lnb">
          <div className="lnbleft">
            <img alt="logo" src="./images/ahnurim/instagram.png" width="24px" />
            <p className="logo_01">westagram</p>
          </div>

          <div className="search">
            <img alt="serch" src="./images/ahnurim/search.svg" width="17px" />
            <input type="text" placeholder="검색" />
          </div>

          <div className="lnbright">
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

      <article className="container">
        <div className="articlebox">
          <div className="header">
            <div className="box01">
              <div className="profileimage"></div>
              <span>urim_zzang</span>
            </div>

            <img alt="more" src="./images/ahnurim/more.svg" width="25px" />
          </div>
          <img alt="svg" src="./images/ahnurim/photo.jpg" />

          <div className="icon">
            <div className="bottom">
              <img alt="heart" src="./images/ahnurim/heart.svg" width="24px" />
              <img
                alt="comment"
                src="./images/ahnurim/comment.svg"
                width="23px"
              />
              <img alt="share" src="./images/ahnurim/share.svg" width="23px" />
            </div>
            <img
              alt="bookmark"
              src="./images/ahnurim/bookmark.svg"
              width="25px"
            />
          </div>
          <div className="textboxes">
            <div className="profile02"></div>
            <div className="likes">
              <span>
                <strong>urimmm</strong>님 외 10명이 좋아합니다
              </span>
            </div>
          </div>
          <div className="commnet01">
            <p>
              <strong>mummin</strong> 리액트는 어떻게 하시려고 벌써 힘드세요
            </p>
            <p>
              <strong>gel_fos</strong> 멍멍
            </p>
            <div className="time01">30분전</div>
          </div>
          <div className="textarea">
            <input type="text" placeholder="댓글 달기..." />
            <button id="submit">게시</button>
          </div>
        </div>

        <div className="right">
          <div className="box02">
            <div className="rightprofile"></div>
            <p>
              <strong>wecode_bootcamp</strong>
            </p>
          </div>
          <div className="story">
            <div className="storybox">
              <p className="suggest">회원님을 위한 추천</p>
              <p>모두 보기</p>
            </div>
            <div className="instory">
              <div className="storysection">
                <div className="storyprofile"></div>
                <p>suggest_id_01</p>
              </div>

              <div className="followlist">
                <p className="blue">팔로우</p>
              </div>
            </div>
            <div className="instory">
              <div className="storysection">
                <div className="storyprofile"></div>
                <p>suggest_id_02</p>
              </div>
              <p className="blue">팔로우</p>
            </div>
            <div className="instory">
              <div className="storysection">
                <div className="storyprofile"></div>
                <p>suggest_id_03</p>
              </div>
              <div className="followlist">
                <p className="blue">팔로우</p>
              </div>
            </div>
          </div>

          <footer>
            <div className="footerarea">
              소개 도움말 홍보센터 API 채용정보 <br />
              개인정보처리방침 © 2022 INSTAGRAM FROM META
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}
export default Main;
