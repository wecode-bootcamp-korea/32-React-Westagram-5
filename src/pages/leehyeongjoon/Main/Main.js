import React from 'react';
import './Main.scss';
import Feed from './Feed/Feed';

const Main = () => {
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
      <Feed />;
    </>
  );
};

export default Main;
