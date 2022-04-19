import './Aside.scss';

function Aside() {
  return (
    <div className="aside">
      <div className="info">
        <div className="info-me">
          <img className="info-img" src="/images/ahnhoongi/me.jpg" alt="" />
          <div className="info-name">
            <div className="info-id1">hoongiahn</div>
            <div className="info-id2">Hoon Gi Ahn</div>
          </div>
        </div>
        <div className="blue-link">
          <a href=" ">전환</a>
        </div>
      </div>
      <div className="story">
        <div className="story-title">
          <div>스토리</div>
          <a href=" ">모두 보기</a>
        </div>
        <div className="story-friend">
          <div className="friend">
            <img className="friend-img" src="/images/ahnhoongi/me.jpg" alt="" />
            <div className="friend-name">
              <div className="friend-id">name</div>
              <div className="friend-ago">10분전</div>
            </div>
          </div>
          <div className="friend">
            <img className="friend-img" src="/images/ahnhoongi/me.jpg" alt="" />
            <div className="friend-name">
              <div className="friend-id">name</div>
              <div className="friend-ago">10분전</div>
            </div>
          </div>
          <div className="friend">
            <img className="friend-img" src="/images/ahnhoongi/me.jpg" alt="" />
            <div className="friend-name">
              <div className="friend-id">name</div>
              <div className="friend-ago">10분전</div>
            </div>
          </div>
          <div className="friend">
            <img className="friend-img" src="/images/ahnhoongi/me.jpg" alt="" />
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
              <img
                className="friend-img"
                src="/images/ahnhoongi/me.jpg"
                alt=""
              />
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
  );
}

export default Aside;
