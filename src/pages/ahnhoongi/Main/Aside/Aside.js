import './Aside.scss';
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
                <p className="friend-id">name</p>
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
                <p className="friend-id">name</p>
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
                <p className="friend-id">name</p>
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
                <p className="friend-id">name</p>
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
                <p className="friend-id">name</p>
                <p className="friend-ago">10분전</p>
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
                <p className="friend-id">name</p>
                <p className="friend-ago">10분전</p>
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
                <p className="friend-id">name</p>
                <p className="friend-ago">10분전</p>
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
                <p className="friend-id">name</p>
                <p className="friend-ago">10분전</p>
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
    </div>
  );
}

export default Aside;
