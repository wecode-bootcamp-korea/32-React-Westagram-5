import React from 'react';

const Aside = () => {
  return (
    <div className="main-right">
      <div className="rightHead">
        <img className="profilePhoto" src="images/leenayeon/arrDog.jpg" />
        <div className="profileMain">
          <span className="profileId">w-concept </span>
          <span className="profileDetail">WeCode | 위코드</span>
        </div>
      </div>

      <article>
        <div className="rightStory">
          <div className="storyHead">
            <span className="storyName">스토리</span>
            <button className="storyBtn">모두 보기</button>
          </div>

          <div className="storyList">
            <div className="storyMain">
              <img className="otherPhoto" src="images/leenayeon/arrDog.jpg" />

              <div className="otherPerson">
                <span className="otherId">baemin_official</span>
                <span className="otherTime">1시간 전</span>
              </div>
            </div>

            <div className="storyMain">
              <img className="otherPhoto" src="images/leenayeon/arrDog.jpg" />

              <div className="otherPerson">
                <span className="otherId">baemin_official</span>
                <span className="otherTime">1시간 전</span>
              </div>
            </div>

            <div className="storyMain">
              <img className="otherPhoto" src="images/leenayeon/arrDog.jpg" />

              <div className="otherPerson">
                <span className="otherId">baemin_official</span>
                <span className="otherTime">1시간 전</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rightRecom">
          <div className="recomHead">
            <span className="recomName">회원님을 위한 추천</span>
            <button className="recomBtn">모두 보기</button>
          </div>
          <div className="recomList">
            <div className="recomMain">
              <img className="recomPhoto" src="images/leenayeon/arrDog.jpg" />
              <div className="recomPerson">
                <span className="recomId">joa</span>
                <span className="recomCount">joa님 외 56명이 좋아합니다.</span>
              </div>
            </div>

            <div className="recomMain">
              <img className="recomPhoto" src="images/leenayeon/arrDog.jpg" />
              <div className="recomPerson">
                <span className="recomId">joa</span>
                <span className="recomCount">joa님 외 56명이 좋아합니다.</span>
              </div>
            </div>

            <div className="recomMain">
              <img className="recomPhoto" src="images/leenayeon/arrDog.jpg" />
              <div className="recomPerson">
                <span className="recomId">joa</span>
                <span className="recomCount">joa님 외 56명이 좋아합니다.</span>
              </div>
            </div>
          </div>
        </div>
      </article>
      <footer>
        Instagram 정보・지원・홍보
        센터・API・채용정보・개인정보처리방침・약관・디렉터리・프로필・해시태그・언어
        <br></br>
        <br></br>© 2019 INSTAGRAM
      </footer>
    </div>
  );
};

export default Aside;
