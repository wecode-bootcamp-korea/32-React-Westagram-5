import { useEffect } from 'react';
import Comment from './Comment';
import './Comment.scss';

function FeedData({
  feedInfo,
  commentList,
  commentArray,
  onSubmitComment,
  comment,
  handleReviewInput,
}) {
  return (
    <article className="container">
      <div className="articlebox">
        <div className="container_Header">
          <div className="containerHeaderText">
            <div className="profileimage" />
            <span>{feedInfo.userId}</span>
          </div>

          <img alt="more" src="./images/ahnurim/more.svg" width="25px" />
        </div>
        <img alt="svg" src="./images/ahnurim/photo.jpg" />

        <div className="icon">
          <div className="bottom">
            <img alt="heart" src="./images/ahnurim/heart.svg" width="24px" />
            <img
              alt="comment"
              src="./images/ahnurim/comment.svg"
              width="23px"
            />
            <img alt="share" src="./images/ahnurim/share.svg" width="23px" />
          </div>
          <img
            alt="bookmark"
            src="./images/ahnurim/bookmark.svg"
            width="25px"
          />
        </div>
        <div className="textboxes">
          <div className="profile02" />
          <div className="likes">
            <span>
              <strong>urimmm</strong>님 외 10명이 좋아합니다
            </span>
          </div>
        </div>
        <div className="commnet01">
          <p>
            <strong>mummin</strong> 리액트는 어떻게 하시려고 벌써 힘드세요
          </p>
          <p>
            <strong>gel_fos</strong> 멍멍
          </p>
          {commentList.map(list => {
            return <Comment key={list.userId} CommentInfo={list} />;
          })}
          {commentArray.map((value, i) => (
            <Comment key={i} CommentInfo={value} />
          ))}

          <div className="time01">30분전</div>
        </div>
        <div className="textarea">
          <form onSubmit={onSubmitComment}>
            <input
              className="clickComment"
              type="text"
              placeholder="댓글 달기..."
              value={comment}
              onChange={e => {
                handleReviewInput(e);

                // 댓글 내용을 받아서 review를 갱신 , 댓글 내용을 끝까지 인식해주는 이벤트 메소드
              }}
            />
            <button className="submit">게시</button>
          </form>
        </div>
      </div>
    </article>
  );
}

export default FeedData;
