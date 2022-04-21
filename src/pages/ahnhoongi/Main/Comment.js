import './Comment.scss';

function Comment(props) {
  return props.comment.map((value, index) => (
    <ul key={index}>
      <li className="write">
        <div>
          <span className="name">hoongiahn</span>
          {value}
        </div>
        <div className="write-icons">
          <i className="fa-solid fa-delete-left" />
          <i className="fa-solid fa-heart" />
        </div>
      </li>
    </ul>
  ));
}

export default Comment;
