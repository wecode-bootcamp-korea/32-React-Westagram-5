import { useState } from 'react';
import './Main.scss';

const Main = () => {
  const [Comment, setComment] = useState([]);
  const commentInput = event => {
    setinputComment(event.target.value);
  };
  const [inputComment, setinputComment] = useState('');

  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <div className="title-wrapper">
            <img
              className="insta-icon"
              src="/images/leehyeongjoon/1384031.png"
              alt=""
            />
            <div className="title-line" />
            <div className="title">westagram</div>
          </div>
          <div className="input-wrapper">
            <input className="input-box" type="text" />
          </div>
          <div className="icon-wrapper">
            <img
              className="nav-icon"
              src="/images/leehyeongjoon/explore.png"
              alt=""
            />
            <img
              className="nav-icon"
              src="/images/leehyeongjoon/heart.png"
              alt=""
            />
            <img
              className="nav-icon"
              src="/images/leehyeongjoon/profile.png"
              alt=""
            />
          </div>
        </div>
      </nav>
      <main>
        <div className="totalmain">
          <div className="main-wrapper">
            <div className="main-title-wrapper">
              <div className="leftTitle">
                <img
                  className="titletopprofile"
                  src="/images/leehyeongjoon/titletopprofile.JPG"
                  alt=""
                />
                <div>_lhj</div>
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
                <div className="reply-info">주인놈아 집 좀 와라...</div>
                <div className="see">더보기</div>
              </div>
              {Comment.map(a => {
                return <span>{a}</span>;
              })}
            </div>

            <div className="main-reply-box">
              <input
                className="name"
                type="text"
                placeholder="댓글 달기 ..."
                onChange={commentInput}
              />
              <button
                className="reply-button"
                onClick={() => {
                  const CommentCopy = [...Comment];
                  CommentCopy.push(inputComment);
                  setComment(CommentCopy);
                }}
              >
                제출
              </button>
            </div>
          </div>
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
        </div>
      </main>
    </>
  );
};

export default Main;
