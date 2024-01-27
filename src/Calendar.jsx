import Wrapper from "./components/Wrapper";
import CalendarArea from "./CalendarArea";

export default function Calendar() {
  return (
    <Wrapper>
      <main className="main-container">
        <section className="sec-calendar">
          <div className="calendar-area">
            <CalendarArea />
          </div>
          <div className="calendar-list">
            <p>2024년 12월 31일</p>
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
          </div>
        </section>
      </main>
    </Wrapper>
  );
}
