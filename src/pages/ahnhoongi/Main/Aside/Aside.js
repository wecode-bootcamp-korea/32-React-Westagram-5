import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Friend from './Friend';
import './Friend.scss';
import './Aside.scss';

function Aside() {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    fetch('/data/friendData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFriendList(data);
      });
  }, []);

  const recommendList = [
    {
      id: 1,
      name: 'wecode6',
      content: 'wecode1님 외 2명이 팔로우 합니다.',
      isFollow: true,
    },
    {
      id: 2,
      name: 'wecode7',
      content: 'wecode2님 외 2명이 팔로우 합니다.',
      isFollow: true,
    },
    {
      id: 3,
      name: 'wecode8',
      content: 'wecode3님 외 2명이 팔로우 합니다.',
      isFollow: true,
    },
  ];

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
          {friendList.map(friend => {
            return (
              <Friend
                key={friend.id}
                name={friend.name}
                content={friend.content}
                isFollow={friend.isFollow}
              />
            );
          })}
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
          {recommendList.map(profile => {
            return (
              <Friend
                key={profile.id}
                name={profile.name}
                content={profile.content}
                isFollow={profile.isFollow}
              />
            );
          })}
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
