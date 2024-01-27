import { Link } from "react-router-dom";
import Wrapper from "./components/Wrapper";

export default function App() {
  return (
    <Wrapper>
      <main className="main-container">
        <section className="sec-birthday">
          <div className="use-area">
            <Link to="/add-birthday">추가하기</Link>
          </div>
          <h2>생일</h2>
          <ul className="birthday-list">
            <li>
              <div className="profile"></div>
              <div className="text">
                <h3>이름</h3>
                <p>생일 날짜</p>
              </div>
              <div className="d-day">
                <span className="number">0</span>
                <span>D-day</span>
              </div>
            </li>
          </ul>
        </section>
      </main>
      <footer></footer>
    </Wrapper>
  );
}
