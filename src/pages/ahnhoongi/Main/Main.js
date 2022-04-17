import React, { useState } from 'react';
import Comment from './Comment';
import './Main.scss';

const Main = props => {
  const [inputComment, setInputComment] = useState('');

  const handleInput = event => {
    setInputComment(event.target.value);
  };

  const [isActive, setIsActive] = useState(false);

  const active = () => {
    inputComment ? setIsActive(true) : setIsActive(false);
  };

  const [commentArray, setCommentArray] = useState([]);

  const onSubmit = event => {
    event.preventDefault();
    if (inputComment === '') {
      return;
    }

    setCommentArray(commentList => [...commentList, inputComment]);
    setInputComment('');
  };

  return (
    <body className="main-page">
      <nav>
        <div className="logo">
          <i className="fa-brands fa-instagram" />
          <a href=" ">Westagram</a>
        </div>
        <div className="search">
          <input type="text" placeholder="검색" />
        </div>
        <div className="icons">
          <img
            className="bt"
            alt="나침반"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          />
          <img
            className="bt"
            alt="하트"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          />
          <img
            className="bt"
            alt="내정보"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          />
        </div>
      </nav>
      <main>
        <div className="feeds">
          <article>
            <div className="art-me">
              <span>
                <img src="/images/ahnhoongi/me.jpg" alt="me" />
              </span>
              <p>hoongiahn</p>
            </div>
            <div>
              <img
                className="travel"
                alt="여행"
                src="/images/ahnhoongi/travel.jpg"
              />
            </div>
            <div>
              <div className="likes">
                <div>
                  <i className="fa-solid fa-heart" />
                  <i className="fa-regular fa-comment" />
                  <i className="fa-solid fa-arrow-up-from-bracket" />
                </div>
                <div>
                  <i className="fa-regular fa-bookmark" />
                </div>
              </div>
              <div className="whoLikes">
                <span className="name">wecode님</span>
                <span>
                  외 <span style={{ fontWeight: 'bold' }}>1412명</span>이
                  좋아합니다
                </span>
              </div>
              <ul className="commentLists">
                <li>
                  <span className="name">wecode</span>
                  <span> 여행가고 싶다~~ </span>
                </li>
              </ul>

              <Comment comment={commentArray} />

              <form className="reply" onSubmit={onSubmit}>
                <input
                  className="reply-input"
                  type="text"
                  placeholder="댓글 달기..."
                  onChange={handleInput}
                  onKeyUp={active}
                  value={inputComment}
                />
                <button
                  type="button"
                  className={isActive ? 'abled' : 'disabled'}
                  disabled={isActive ? false : true}
                  onClick={onSubmit}
                >
                  게시
                </button>
              </form>
            </div>
          </article>
        </div>
        <div className="main-right">
          <div className="info">
            <div className="right-me">
              <div className="right-img">
                <img src="/images/ahnhoongi/me.jpg" alt="" />
              </div>
              <div className="right-name">
                <div className="right-id1">hoongiahn</div>
                <div className="right-id2">Hoon Gi Ahn</div>
              </div>
            </div>
            <div className="right-button">
              <button>전환</button>
            </div>
          </div>
          <div className="story">
            <div className="story-title">
              <div>스토리</div>
              <button>모두 보기</button>
            </div>
            <div className="story-friend">
              <div className="friend">
                <div className="friend-img">
                  <img src="/images/ahnhoongi/me.jpg" alt="" />
                </div>
                <div className="friend-name">
                  <div className="friend-id">name</div>
                  <div className="friend-ago">10분전</div>
                </div>
              </div>
              <div className="friend">
                <div className="friend-img">
                  <img src="/images/ahnhoongi/me.jpg" alt="" />
                </div>
                <div className="friend-name">
                  <div className="friend-id">name</div>
                  <div className="friend-ago">10분전</div>
                </div>
              </div>
              <div className="friend">
                <div className="friend-img">
                  <img src="/images/ahnhoongi/me.jpg" alt="" />
                </div>
                <div className="friend-name">
                  <div className="friend-id">name</div>
                  <div className="friend-ago">10분전</div>
                </div>
              </div>
              <div className="friend">
                <div className="friend-img">
                  <img src="/images/ahnhoongi/me.jpg" alt="" />
                </div>
                <div className="friend-name">
                  <div className="friend-id">name</div>
                  <div className="friend-ago">10분전</div>
                </div>
              </div>
            </div>
          </div>
          <div className="follow">
            <div className="follow-title">
              <div>회원님을 위한 추천</div>
              <button>모두 보기</button>
            </div>
            <div className="follow-friend">
              <div className="friend2">
                <div className="friend-div">
                  <div className="friend-img">
                    <img src="/images/ahnhoongi/me.jpg" alt="" />
                  </div>
                  <div className="friend-name">
                    <div className="friend-id">name</div>
                    <div className="friend-ago">10분전</div>
                  </div>
                </div>
                <button>팔로우</button>
              </div>
              <div className="friend2">
                <div className="friend-div">
                  <div className="friend-img">
                    <img src="/images/ahnhoongi/me.jpg" alt="" />
                  </div>
                  <div className="friend-name">
                    <div className="friend-id">name</div>
                    <div className="friend-ago">10분전</div>
                  </div>
                </div>
                <button>팔로우</button>
              </div>
              <div className="friend2">
                <div className="friend-div">
                  <div className="friend-img">
                    <img src="/images/ahnhoongi/me.jpg" alt="" />
                  </div>
                  <div className="friend-name">
                    <div className="friend-id">name</div>
                    <div className="friend-ago">10분전</div>
                  </div>
                </div>
                <button>팔로우</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
};

export default Main;
