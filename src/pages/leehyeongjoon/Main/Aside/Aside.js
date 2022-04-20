import React from 'react';
import './Aside.scss';

const Aside = () => {
  return (
    <div className="side-wrapper">
      <div className="side-nickname">
        <img
          className="sideprofile"
          src="/images/leehyeongjoon/profile.jpg"
          alt=""
        />
        <div className="leftinformation">
          <div className="side-id">_lhj</div>
          <div className="threetwo">32기 이형준</div>
        </div>
      </div>

      <div className="side-story">
        <div className="story-text-wrapper">
          <div className="story-name">스토리</div>
          <div className="story-all">모두 보기</div>
        </div>
        <div className="story-info-wrapper">
          <img
            className="story-img"
            src="/images/leehyeongjoon/profile.jpg"
            alt=""
          />
          <div className="story-profile">
            <div className="story-id">_lhj</div>
            <div className="story-info">16분전</div>
          </div>
        </div>
        <div className="story-info-wrapper">
          <img
            className="story-img"
            src="/images/leehyeongjoon/profile.jpg"
            alt=""
          />
          <div className="story-profile">
            <div className="story-id">_lhj</div>
            <div className="story-info">16분전</div>
          </div>
        </div>
        <div className="story-info-wrapper">
          <img
            className="story-img"
            src="/images/leehyeongjoon/profile.jpg"
            alt=""
          />
          <div className="story-profile">
            <div className="story-id">_lhj</div>
            <div className="story-info">16분전</div>
          </div>
        </div>
      </div>
      <div className="side-story">
        <div className="story-text-wrapper">
          <div className="story-name">회원님을 위한 추천</div>
          <div className="story-all">모두 보기</div>
        </div>
        <div className="story-info-wrapper">
          <img
            className="story-img"
            src="/images/leehyeongjoon/profile.jpg"
            alt=""
          />
          <div className="story-profile">
            <div className="story-id">_lhj</div>
            <div className="story-info">16분전</div>
          </div>
        </div>
        <div className="story-info-wrapper">
          <img
            className="story-img"
            src="/images/leehyeongjoon/profile.jpg"
            alt=""
          />
          <div className="story-profile">
            <div className="story-id">_lhj</div>
            <div className="story-info">16분전</div>
          </div>
        </div>
        <div className="story-info-wrapper">
          <img
            className="story-img"
            src="/images/leehyeongjoon/profile.jpg"
            alt=""
          />
          <div className="story-profile">
            <div className="story-id">_lhj</div>
            <div className="story-info">16분전</div>
          </div>
        </div>
      </div>

      <div className="graymal">
        <div>instagram﹒정보﹒지원﹒홍보 센터﹒API</div>
        <div>채용 정보 ﹒ 개인정보처리방침 ﹒약관 ﹒</div>
        <div>디렉터리﹒프로필﹒해시태그﹒언어</div>
      </div>
      <div className="twojero">© 2019 INSTAGRAM</div>
    </div>
  );
};

export default Aside;
