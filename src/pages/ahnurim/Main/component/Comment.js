import { useEffect } from 'react';
import './Comment.scss';

function Comment({ CommentInfo }) {
  return (
    <li className="comment">
      <span className="userId">{CommentInfo.userId}</span>
      <span className="text"> {CommentInfo.comment}</span>
    </li>
  );
}

export default Comment;
