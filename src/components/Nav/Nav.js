import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        <i className="fa-brands fa-instagram" />
        <Link className="logo-name" to="">
          Westagram
        </Link>
      </div>

      <input className="search" type="text" placeholder="검색" />

      <div className="icons">
        <i className="fa-regular fa-compass" />
        <i className="fa-regular fa-heart" />
        <i className="fa-regular fa-user" />
      </div>
    </nav>
  );
}

export default Nav;
