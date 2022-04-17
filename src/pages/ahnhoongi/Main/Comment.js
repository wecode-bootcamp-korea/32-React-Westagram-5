import './Comment.scss';

function Comment(props) {
  // return console.log(props.commentArray);

  return props.comment.map((value, index) => (
    <ul key={index}>
      <li className="name-delete">
        <div>
          <span className="name">hoongiahn</span>
          {value}
        </div>
        <div>
          <span className="delete" />
        </div>
      </li>
    </ul>
  ));
}

export default Comment;
