import './Comment.scss';

function Comment({ commentList }) {
  const a = commentList.map((comment, index) => {
    return (
      <div className="reply" key={index}>
        <div className="reply-id">{comment.userId}</div>
        <div className="reply-info">{comment.comment}</div>
        <div className="see">더보기</div>
      </div>
    );
  });
  return a;
}

export default Comment;
