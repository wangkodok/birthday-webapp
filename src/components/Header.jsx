import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <ul>
        <li>
          <Link to="/">
            <div className="icon"></div>
            <p className="icon-text">생일</p>
          </Link>
        </li>
        <li>
          <Link to="/calendar">
            <div className="icon"></div>
            <p className="icon-text">달력</p>
          </Link>
        </li>
        <li>
          <Link to="/setting">
            <div className="icon"></div>
            <p className="icon-text">설정</p>
          </Link>
        </li>
      </ul>
    </header>
  );
}
