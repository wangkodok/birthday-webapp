import Wrapper from "./components/Wrapper";
import CalendarArea from "./CalendarArea";
import BirthDayList from "./components/BirthDayList";

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
            <BirthDayList />
          </div>
        </section>
      </main>
    </Wrapper>
  );
}
