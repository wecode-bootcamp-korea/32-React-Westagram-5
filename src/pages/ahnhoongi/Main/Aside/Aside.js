import './Aside.scss';
import './Friend.scss';
import { Link } from 'react-router-dom';

function Aside() {
  return (
    <div className="aside">
      <div className="info">
        <div className="info-me">
          <img
            className="info-img"
            src="/images/ahnhoongi/me.jpg"
            alt="프로필사진"
          />
          <div className="info-name">
            <p className="info-id1">hoongiahn</p>
            <p className="info-id2">Hoon Gi Ahn</p>
          </div>
        </div>
        <div className="info-link">
          <Link to="" className="blue-link">
            전환
          </Link>
        </div>
      </div>
      <div className="story">
        <div className="story-title">
          <p>스토리</p>
          <Link to="" className="blue-link">
            모두 보기
          </Link>
        </div>
        <div className="story-friend-wrapper">
          <div className="friend">
            <div className="friend-img-wrapper">
              <img
                className="friend-img"
                src="/images/ahnhoongi/me.jpg"
                alt="프로필사진"
              />
              <div className="friend-name">
                <p className="friend-id">wecode1</p>
                <p className="friend-ago">1분전</p>
              </div>
            </div>
            <div className="follow-link">
              <Link to="" className="blue-link" />
            </div>
          </div>
          <div className="friend">
            <div className="friend-img-wrapper">
              <img
                className="friend-img"
                src="/images/ahnhoongi/me.jpg"
                alt="프로필사진"
              />
              <div className="friend-name">
                <p className="friend-id">wecode2</p>
                <p className="friend-ago">5분전</p>
              </div>
            </div>
            <div className="follow-link">
              <Link to="" className="blue-link" />
            </div>
          </div>
          <div className="friend">
            <div className="friend-img-wrapper">
              <img
                className="friend-img"
                src="/images/ahnhoongi/me.jpg"
                alt="프로필사진"
              />
              <div className="friend-name">
                <p className="friend-id">wecode3</p>
                <p className="friend-ago">10분전</p>
              </div>
            </div>
            <div className="follow-link">
              <Link to="" className="blue-link" />
            </div>
          </div>
          <div className="friend">
            <div className="friend-img-wrapper">
              <img
                className="friend-img"
                src="/images/ahnhoongi/me.jpg"
                alt="프로필사진"
              />
              <div className="friend-name">
                <p className="friend-id">wecode4</p>
                <p className="friend-ago">15분전</p>
              </div>
            </div>
            <div className="follow-link">
              <Link to="" className="blue-link" />
            </div>
          </div>
          <div className="friend">
            <div className="friend-img-wrapper">
              <img
                className="friend-img"
                src="/images/ahnhoongi/me.jpg"
                alt="프로필사진"
              />
              <div className="friend-name">
                <p className="friend-id">wecode5</p>
                <p className="friend-ago">20분전</p>
              </div>
            </div>
            <div className="follow-link">
              <Link to="" className="blue-link" />
            </div>
          </div>
        </div>
      </div>
      <div className="follow">
        <div className="follow-title">
          <p>회원님을 위한 추천</p>
          <Link to="" className="blue-link">
            모두 보기
          </Link>
        </div>
        <div className="follow-friend-wrapper">
          <div className="friend">
            <div className="friend-img-wrapper">
              <img
                className="friend-img"
                src="/images/ahnhoongi/me.jpg"
                alt="프로필사진"
              />
              <div className="friend-name">
                <p className="friend-id">wecode6</p>
                <p className="friend-ago">wecode1님 외 2명이 팔로우 합니다.</p>
              </div>
            </div>
            <div className="follow-link">
              <Link to="" className="blue-link">
                팔로우
              </Link>
            </div>
          </div>
          <div className="friend">
            <div className="friend-img-wrapper">
              <img
                className="friend-img"
                src="/images/ahnhoongi/me.jpg"
                alt="프로필사진"
              />
              <div className="friend-name">
                <p className="friend-id">wecode7</p>
                <p className="friend-ago">wecode2님 외 3명이 팔로우 합니다.</p>
              </div>
            </div>
            <div className="follow-link">
              <Link to="" className="blue-link">
                팔로우
              </Link>
            </div>
          </div>
          <div className="friend">
            <div className="friend-img-wrapper">
              <img
                className="friend-img"
                src="/images/ahnhoongi/me.jpg"
                alt="프로필사진"
              />
              <div className="friend-name">
                <p className="friend-id">wecode8</p>
                <p className="friend-ago">wecode3님 외 4명이 팔로우 합니다.</p>
              </div>
            </div>
            <div className="follow-link">
              <Link to="" className="blue-link">
                팔로우
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="westagram-info">
        <p>
          소개 도움말 홍보 센터 API 채용 정보 개인정보처리방침 약관 위치 인기
          계정 해시태그 언어
        </p>
        <p>© 2022 WESTAGRAM FROM META</p>
      </div>
    </div>
  );
}

export default Aside;
