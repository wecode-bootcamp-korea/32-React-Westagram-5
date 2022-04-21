import React from 'react';
import { Link } from 'react-router-dom';

function Friend({ name, content, isFollow }) {
  return (
    <div className="friend">
      <div className="friend-img-wrapper">
        <img
          className="friend-img"
          src="/images/ahnhoongi/me.jpg"
          alt="프로필사진"
        />
        <div className="friend-name">
          <p className="friend-id">{name}</p>
          <p className="friend-ago">{content}</p>
        </div>
      </div>
      <div className="follow-link">
        <Link to="" className="blue-link">
          {isFollow ? '팔로우' : ''}
        </Link>
      </div>
    </div>
  );
}

export default Friend;
